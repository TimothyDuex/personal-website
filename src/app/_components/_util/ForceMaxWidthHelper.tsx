import React from "react";

function ForceMaxWidthHelper() {
  return (
    <div className="invisible h-0 overflow-hidden">
      This is a very very very long line of text that sets the width of the
      container so that it takes up the full width, just a tad bigger needed
    </div>
  );
}

export default ForceMaxWidthHelper;
