import React from "react";
import FloatingIcon from "../_components/_animations/FloatingIcon";
import TimelineComponent from "./TimelineComponent";

const AboutSection = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-primary-text">
        About Tim {<FloatingIcon duration={2}>✌</FloatingIcon>}
      </h2>
      <TimelineComponent />
    </>
  );
};

export default AboutSection;
