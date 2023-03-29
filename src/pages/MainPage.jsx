import React from "react";
import ImgGrid from "./../../src/components/imgdegrid/AppBar";
import Cat from "../components/Categorias/cat";
import Equipo from "../components/equipo";
import Equipocard from "../components/equipo copy/equipocard";
import Equipoo from "../components/equipo copy 2/equipo";
import Learn from "../components/Learn";
import Learn1 from "../components/Learn 11/Learn";
import TopicsRecomended from "../components/topics recomended";
import Topics from "../components/topics";
import TopCourse from "../components/top course/topicsrecomended";
import TopCourse2 from "../components/top course 2/topicsrecomended";
import Mostpopular from "../components/most popular/mostpopular";
import Mostpopular2 from "../components/most popular 2/mostpopular2";
import Mostpopular3 from "../components/most popular 3/mostpopular3";
import Topcourse3 from "../components/top course 3/topicsrecomended";
import Footer from "../components/footer/footer";
import Footer2 from "../components/footer2";

function MainPage() {
  return (
    <div>
      <ImgGrid/>
      <Cat/>
      <Equipo/>
      <Equipocard/>
      <Equipoo/>
      <Learn/>
      <Learn1/>
      <TopicsRecomended/>
      <Topics/>
      <TopCourse/>
      <Topcourse3/>
      <TopCourse2/>
      <Mostpopular/>
      <Mostpopular3/>
      <Mostpopular2/>
      <Footer/>
      <Footer2/>



    </div>
  );
}

export default MainPage;
