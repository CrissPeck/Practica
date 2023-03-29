import React from "react";
import f1 from "./../img/f1.png";
import f2 from "./../img/f2.png";
import f3 from "./../img/f3.png";
import f4 from "./../img/f4.png";
import f5 from "./../img/f5.png";
import f6 from "./../img/f6.png";
import { Link } from "@mui/material";

function Learn() {
  return (
    <div className="Learn">
      <div className="Learn1">
        <Link href="#home" className="me-aa">
          <img src={f1} alt="" className="im" /> Ilistration
        </Link>
      </div>
      <div className="Learn1">
        <Link href="#home" className="me-aaa">
          <img src={f2} alt="" className="im" /> Photography
        </Link>
      </div>
      <div className="Learn1">
        <Link href="#home" className="me-aaa">
          <img src={f3} alt="" className="im" /> Typography
        </Link>
      </div>
      <div className="Learn1">
        <Link href="#home" className="me-aaa">
          <img src={f4} alt="" className="im" /> 3D Desing
        </Link>
      </div>

      <div className="Learn1">
        <Link href="#home" className="me-aaa">
          <img src={f5} alt="" className="im" /> Painting
        </Link>
      </div>
      <div className="Learn1">
        <Link href="#home" className="me-aaa">
          {" "}
          <img src={f6} alt="" className="im" /> Filming, video
        </Link>
      </div>
    </div>
  );
}

export default Learn;
