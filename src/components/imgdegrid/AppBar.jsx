import React from "react";
import AppBar from "./../AppBarcopy/AppBar";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import LogoSmart from "./../smartS/LogoSmart";

function grid1() {
  return (
    <div>
      <Grid
        containe
        className="imgs"
      >
        <AppBar></AppBar>
        <Grid
        container
        direction="column"
        justifyContent="center"
        className="full"
      >
        <div className="highlight">
          <Grid item container xs={12} justify="center" alignItems="center">
            <Grid item></Grid>
            <Grid item container direction="column" justify="center">
              <h2 className="ty">Invest In</h2>
              <h2 className="ty">Knowledge</h2>
              <h2 className="ty">And Your Future</h2>

              <Typography variant="h6" color="White">
                Anytime, Anywhere to do discover yourelf!
              </Typography>
            </Grid>
            <LogoSmart></LogoSmart>
          </Grid>
        </div>
      </Grid>
      </Grid>
    </div>
  );
}

export default grid1;
