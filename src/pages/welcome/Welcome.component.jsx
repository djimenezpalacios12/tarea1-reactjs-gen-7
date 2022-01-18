import React from "react";
import { Paper, Grid } from "@material-ui/core";
import Intro from "../../components/intro/Intro.component";

const Welcome = () => (
  <div className="row align-items-center vh-100">
    <Grid container direction="row" justifyContent="center">
      <Grid item xs={6}>
        <Paper elevation={1} className="border rounded text-center">
          <Intro />
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default Welcome;
