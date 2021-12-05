import CheckIcon from "@mui/icons-material/Check";
import {
  Divider,
  IconButton,
  ListItem, ListItemText
} from "@mui/material";
import React from "react";
import { completeTask } from "../actions/taskAction";
import { useAppDispatch } from "../hooks";
import { ITask } from "../reducers/tasksReducer";


type ITaskProps = {
  id: number;
  task: ITask;
};

export const Task: React.FC<ITaskProps> = ({ id, task }) => {
  const dispatch = useAppDispatch()

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(completeTask(task))
  }

  return (
    <>
      <ListItem
        key={id}
        disableGutters
        secondaryAction={
          <IconButton onClick={onClick}>
            <CheckIcon />
          </IconButton>
        }
      >
        <ListItemText primary={`${task.description}`} />
      </ListItem>
      <Divider/>
    </>
  );
};
