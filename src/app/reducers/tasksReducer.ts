import { COMPLETE_TASK } from './../actionTypes';
import { ADD_TASK } from "../actionTypes";
import { TaskAction } from "../actions/taskAction";

export interface ITask {
  id: string;
  description: string;
  completed: boolean;
}

export type TaskState = {
  tasks: ITask[];
};

const initialState = {
  tasks: [],
};

export const tasksReducer = (
  state: TaskState = initialState,
  action: TaskAction
) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case COMPLETE_TASK:
      return {...state, tasks: state.tasks.filter((task) => task.id !== action.payload.id)}
    default:
      return state;
  }
};
