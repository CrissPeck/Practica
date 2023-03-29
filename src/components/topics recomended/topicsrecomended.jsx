import React from "react";
import { Link } from "@mui/material";

import { BsChevronRight } from "react-icons/bs";


function topicsrecomended() {
  return (
    <div className="topics1">
    <div className="topics2">
      <h6 className="topics3">Topics Recommended For You</h6>
    </div >
    <div className="topics5">
    <Link className="topics4">View All<BsChevronRight/></Link>
      </div>
  </div>


  );
}

export default topicsrecomended;
