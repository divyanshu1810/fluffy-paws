import React from "react";
import Screenone from "./screen/screenone";
import Screentwo from "./screen/screentwo";
import Services from "./screen/services";
import Screenfour from "./screen/screenfour";
import Featured from "./screen/featured";
import Header from "../shared/header";
import Footer from "../shared/footer";

function Home() {
  return (
    <div>
      <Screenone />
      <Screentwo />
      <Services />
      <Screenfour />
      <Featured />
      <Footer />
    </div>
  );
}

export default Home;
