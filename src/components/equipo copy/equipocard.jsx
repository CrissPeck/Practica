import React from "react";
import c1 from "./../img/c1.png";
import E1 from "./../img/e1.png";
import E2 from "./../img/e2.png";
import E3 from "./../img/e3.png";
import E11 from "./../img/e1.1.png";
import E12 from "./../img/star-rating.png";
import E13 from "./../img/e1.2.png";
import E14 from "./../img/c4.png";

function equipocard() {
  return (
    <div className="equipo13">
      <div class="cardmb-3">
        <div class="row g-0">
          <div class="col-md-4">
          <img class="new" src={E1} alt="" />
            <img src={c1} class="img-fluidrounded-start" alt="" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Dr. Angela Yu</h5>
              <p class="card-text"><img src={E11} alt="" className="Todose" /> Data Science, Flask</p>
              <p class="card-text"><img src={E12} alt="" className="Todose" /> 4.5 Instructor Rating </p>
              <p class="card-text"><img src={E13} alt=""  className="Todose"/> 883,134 Studens</p>
              <p class="card-text"><img src={E14} alt=""  className="Todose"/> 8 Courses</p>
            </div>
          </div>
        </div>
      </div>


      <div class="cardmb-3">
        <div class="row g-0">
          <div class="col-md-4">
          <img class="new" src={E2} alt="" />
            <img src={c1} class="img-fluidrounded-start" alt="" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"> Jose Portilla</h5>
              <p class="card-text"> <img src={E11} alt=""  className="Todose"/>Python, Machine Learning</p>
              <p class="card-text"> <img src={E12} alt=""  className="Todose"/>4.5 Instructor Rating</p>
              <p class="card-text"> <img src={E13} alt=""  className="Todose"/>2,361,646 Studens</p>
              <p class="card-text"> <img src={E14} alt=""  className="Todose"/>32 Courses</p>
            </div>
          </div>
        </div>
      </div>




      <div class="cardmb-3">
        <div class="row g-0">
          <div class="col-md-4">
          <img class="new" src={E3} alt="" />
            <img src={c1} class="img-fluidrounded-start" alt="" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Jonas schart</h5>
              <p class="card-text"><img src={E11} alt=""  className="Todose" />JavaScript, Css </p>
              <p class="card-text"><img src={E12} alt=""  className="Todose"/>4.5 Instructor Rating</p>
              <p class="card-text"><img src={E13} alt=""  className="Todose"/>1,078,939 Studens</p>
              <p class="card-text"><img src={E14} alt=""  className="Todose"/>5 Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default equipocard;
