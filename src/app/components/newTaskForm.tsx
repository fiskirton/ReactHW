import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { addTask } from "../actions/taskAction";
import { useAppDispatch } from "../hooks";
import { ITask } from "../reducers/tasksReducer";

export default function NewTaskForm() {
  const [task, setTask] = useState<ITask>({
    id: "",
    description: "",
    completed: false,
  });
  const dispatch = useAppDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.description) {
      dispatch(addTask({ ...task, id: Date.now().toString() }));
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, description: event.currentTarget.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={1} direction="row" alignItems="center">
        <Grid item>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={task.description}
            onChange={onChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit" size="large">
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
