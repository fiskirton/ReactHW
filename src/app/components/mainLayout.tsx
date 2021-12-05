import { CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";
import NewTaskForm from "./newTaskForm";
import { TodoList } from "./todoList";

export default function MainLayout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        alignContent="center"
      >
        <Grid item>
          <Grid item>
            <Typography variant="h6">TODO List</Typography>
          </Grid>
          <Grid item>
            <NewTaskForm></NewTaskForm>
          </Grid>
          <Grid item>
            <TodoList></TodoList>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
