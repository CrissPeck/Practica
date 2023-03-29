import React from 'react'
import { Grid } from "@mui/material";
import img from "./../img/7.png"

function footer2() {
  return (
<Grid container
                direction="column"
                justifyContent='center'>
                <div className="highlight">
                    <Grid item container xs={12}
                        justify="center"
                        alignItems="center">
                        <Grid item
                            container
                            direction="column"
                            justify="center"
                            alignItems="center">
                                <img src={img} alt="" />
                        </Grid>
                    </Grid>
                </div>
            </Grid>
  )
}

export default footer2
