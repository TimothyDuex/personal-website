import React from "react";
import FloatingIcon from "../_components/_animations/FloatingIcon";
import TimelineComponent from "./TimelineComponent";
import AboutSummary from "./AboutSummary";

const AboutSection = () => {
  return (
    <>
      <h2 className="adaptive-text-heading adaptive-margin-bottom-general">
        About Tim {<FloatingIcon duration={2}>✌</FloatingIcon>}
      </h2>
      <AboutSummary />
      <TimelineComponent />
    </>
  );
};

export default AboutSection;
