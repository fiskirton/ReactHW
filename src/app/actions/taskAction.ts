import { ADD_TASK, COMPLETE_TASK } from "../actionTypes";
import { ITask } from "../reducers/tasksReducer";

export type TaskAction = {
  type: string;
  payload: ITask;
};

export function addTask(task: ITask) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export function completeTask(task: ITask) {
  return {
    type: COMPLETE_TASK,
    payload: task,
  };
}
