import React from "react";
import D1 from "./../img/d1.png";
import D2 from "./../img/d2.png";
import { Button } from "@mui/material";


function equipo() {
  return (
    <div className="equipo1">
      <div className="equipo2">
        <h6 className="equipo3">Popular Instructors in</h6>
      </div>
      <h6 className="equipo4">Condega</h6>
      <div>
        <Button className="Bute1" color="inherit">
          {" "}
          <img src={D1} alt="" width={45} />
        </Button>
        </div>
        <div>
        <Button className="Bute">
          {" "}
          <img src={D2} alt="" width={45}/>{" "}
        </Button>
        </div>
    </div>


  );
}

export default equipo;
