import React from "react";
import E1 from "./../img/e1.png";
import {AiFillStar} from "react-icons/ai";
import { Grid } from "@mui/material";
import { BsChevronRight } from "react-icons/bs";

function Learn1() {
  return (
    <div>
      <div>
        <div>
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <section class="section-products">
              <div class="container">
                <div class="row justify-content-center text-center"></div>
                <div class="row">
                  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div id="per-1" class="single-product">
                      <div class="part-1">
                        <span class="new">new</span>
                        <ul>
                          <li>
                            <a href="tel:+50581619050 ">
                              <i class="fas fa-shopping-cart">
                                {" "}
                                <BsChevronRight></BsChevronRight>
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 class="product-title">
                        Illustrator 2021 MasterClass
                      </h3>
                      <div class="part-2">
                        <img src={E1} alt="" className="imgsss" />
                        <h4 class="product-price">By Col: Steele</h4>
                        <h4 class="product-precio">$123.80</h4>
                      </div>
                      <div className="product-tittle">
                        <h4 class="product-price">4.5</h4>
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <h4 class="product-pricee">(3,559) </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div id="per-2" class="single-product">
                      <div class="part-1">
                        <span class="new">Trending</span>
                        <ul>
                          <li>
                            <a href="tel:+50581619050 ">
                              <i class="fas fa-shopping-cart">
                                {" "}
                                <BsChevronRight></BsChevronRight>
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 class="product-title"> Graphic Desing Bootca... </h3>
                      <div class="part-2">
                        <AiFillStar className="imgsss" />
                        <h4 class="product-price">By Derrick Mit...</h4>
                        <h4 class="product-precio">$79.80</h4>
                      </div>
                      <div className="product-tittle">
                        <h4 class="product-price">4.5</h4>
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <h4 class="product-pricee">(3,559) </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div id="per-3" class="single-product">
                      <div class="part-1">
                        <span class="new">Trending</span>
                        <ul>
                          <li>
                            <a href="tel:+50581619050 ">
                              <i class="fas fa-shopping-cart">
                                {" "}
                                <BsChevronRight></BsChevronRight>
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 class="product-title">User Experience (UX): T...</h3>
                      <div class="part-2">
                        <AiFillStar className="imgsss" />
                        <h4 class="product-price">By David Travis</h4>
                        <h4 class="product-precio">$87.80</h4>
                      </div>
                      <div className="product-tittle">
                        <h4 class="product-price">4.5</h4>
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <h4 class="product-pricee">(3,559) </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div id="per-4" class="single-product">
                      <div class="part-1">
                        <span class="new">Trending</span>
                        <ul>
                          <li>
                            <a href="tel:+50581619050 ">
                              <i class="fas fa-shopping-cart">
                                {" "}
                                <BsChevronRight></BsChevronRight>
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 class="product-title">
                        Gamification: Motivation P...
                      </h3>
                      <div class="part-2">
                        <AiFillStar className="imgsss" />
                        <h4 class="product-price">By Rob Sutcliffe</h4>
                        <h4 class="product-precio">$89.80</h4>
                      </div>
                      <div className="product-tittle">
                        <h4 class="product-price">4.5</h4>
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <AiFillStar className="estrellas" />
                        <h4 class="product-pricee">(3,559) </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Learn1;
