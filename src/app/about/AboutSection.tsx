import React from "react";
import FloatingIcon from "../_components/_animations/FloatingIcon";
import TimelineComponent from "./TimelineComponent";
import AboutSummary from "./AboutSummary";
import Stoplight from "../_junk/Stoplight";

const AboutSection = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-primary-text mb-6">
        About Tim {<FloatingIcon duration={2}>✌</FloatingIcon>}
      </h2>
      <Stoplight />
      <AboutSummary />
      <TimelineComponent />
    </>
  );
};

export default AboutSection;
