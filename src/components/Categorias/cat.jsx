import React from "react";
import { Link } from "@mui/material";
import c1 from "./../img/c1.png";
import c2 from "./../img/c2.png";
import c3 from "./../img/c3.png";
import c4 from "./../img/c4.png";

function cat() {
  return (
    <div className="contenedor">
      <div className="dentro">
      <div className="circulo">
        <img src={c1} alt="" className="imm" />
        </div>
        <h6 className="texto">Certificate</h6>
      </div>
      <div className="dentro">
      <div className="circulo">
        <img src={c2} alt="" className="im" />
        </div>
        <h6 className="texto">Active learning</h6>
      </div>
      <div className="dentro">
      <div className="circulo">
        <img src={c3} alt="" className="imm" />
        </div>
        <h6 className="texto">Lifetime Access</h6>
      </div>
      <div className="dentro">
      <div className="circulo">
        <img src={c4} alt="" className="im" />
        </div>
        <h6 className="texto">10K+ Course</h6>
      </div>
      <div className="dentro">
      <Link href="#home" className="me-aa" >Get Started</ Link>
      </div>
    </div>
  );
}

export default cat;
