import React from "react";

import Health from "./images/health.svg";
import Common from "./Common";

function Home() {
  return (
    <>
      <Common
        name="Grow your bussiness with"
        imgsrc={Health}
        btnname="Get Started"
        visit="/Product"
        brand=" GetFIT "
        text="We are team of Well-trained trainers"
      />
    </>
  );
}

export default Home;
