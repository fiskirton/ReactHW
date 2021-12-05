import { Grid, List } from "@mui/material";
import { shallowEqual } from "react-redux";
import { useAppSelector } from "../hooks";
import { ITask } from "../reducers/tasksReducer";
import { Task } from "./task";

export const TodoList = () => {
  const tasks: ITask[] = useAppSelector(
    (state) => state.tasks.tasks,
    shallowEqual
  );

  console.log(tasks);
  return (
    <Grid container direction="column">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {tasks.map((task: ITask, index) => {
          return <Task id={index} task={task} key={index}></Task>;
        })}
      </List>
    </Grid>
  );
};
