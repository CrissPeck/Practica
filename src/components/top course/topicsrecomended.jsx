import React from "react";
import D1 from "./../img/d1.png";
import D2 from "./../img/d2.png";

import { Button } from "@mui/material";
import  {Accordion} from '@mui/material';
import { AccordionSummary} from '@mui/material';
import { AccordionDetails } from '@mui/material';
import  { Typography} from '@mui/material';
import { BsChevronDown}   from 'react-icons/bs';





function topcourse() {
  return (
    <div className="topcourse1">
      <div className="topcourse2">
        <h6 className="topcourse3">Top courses in</h6>
      </div>
      <h6 className="topcourse4">Condega</h6>
      <div class="accordion accordion-flush" id="accordionFlushExample">
</div>


<Accordion className="acordion">
        <AccordionSummary
          expandIcon={<BsChevronDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="acordion1"
        >
          <Typography color="blue">Programming</Typography>
        </AccordionSummary>
        <AccordionDetails className="acordion1">
          <Typography>
            Ejemplo 1
          </Typography>
          <Typography>
            Ejemplo 2
          </Typography>
          <Typography>
            Ejemplo 3
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      <div>
        <Button className="But1" color="inherit">
          {" "}
          <img src={D1} alt="" width={45} />
        </Button>
        </div>
        <div>
        <Button className="But">
          {" "}
          <img src={D2} alt="" width={45}/>{" "}
        </Button>
        </div>
    </div>

    
  );
}

export default topcourse;
