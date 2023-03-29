import React from "react";
import { Grid } from "@mui/material";

function footer() {
  return (
          <Grid className="footer1" >
            <Grid item container xs={12} justify="center" alignItems="center">
              <Grid item container direction="column" justify="center" className="footertres">
                <h2 className="footer2">Are You to Start</h2>
                <h2 className="footer22">Your Course Now!</h2>
                <Grid className="buttonfooter">
                  <button className="footerbtn">Lest Get Started</button>
                  <button className="footerbtn2">Contactt Us</button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>



  );
}

export default footer;
