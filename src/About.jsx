import React from "react";

import Activity from "./images/Activity.svg";
import Common from "./Common";

function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={Activity}
        btnname="Contact now"
        visit="/Contact"
        brand=""
        text="Get to know us better"
      />
    </>
  );
}

export default About;
