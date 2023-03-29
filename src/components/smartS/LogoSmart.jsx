import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function LogoSmart() {
  return (
    <div>
           <Grid className="ff"         container
             direction="row"
             justifyContent="left">
              <button class="btn" href="">Get Started
</button>
                  <Link href="#features" className="me-au">Become Instructor</Link>
              </Grid>

    </div>
  );
}

export default LogoSmart;
