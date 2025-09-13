import React, { useEffect, useState } from "react";

type LightState = "red" | "yellow" | "green";

const lights = [
  {
    onColor: "red-500",
    offColor: "red-800",
    lightState: "red",
  },
  {
    onColor: "yellow-300",
    offColor: "yellow-800",
    lightState: "yellow",
  },
  {
    onColor: "green-500",
    offColor: "green-800",
    lightState: "green",
  },
];

const Stoplight = () => {
  const [currentLight, setCurrentLight] = useState<LightState>("red");

  useEffect(() => {
    const lightSequence: LightState[] = ["red", "yellow", "green"];
    const durations = { red: 3000, yellow: 1000, green: 2000 }; // milliseconds

    const timeout = setTimeout(() => {
      const currentIndex = lightSequence.indexOf(currentLight);
      const nextIndex = (currentIndex + 1) % lightSequence.length;
      setCurrentLight(lightSequence[nextIndex]);
    }, durations[currentLight]);

    return () => clearTimeout(timeout);
  }, [currentLight]); // Re-run when currentLight changes

  return (
    <div className="max-w-fit border border-secondary-border rounded-sm bg bg-primary-bg">
      <div className="grid grid-cols-1 justify-center items-center">
        {lights.map((light) => (
          <Light
            key={light.lightState}
            onColor={light.onColor}
            offColor={light.offColor}
            active={currentLight === light.lightState}
          />
        ))}
      </div>
    </div>
  );
};

function Light({
  offColor,
  onColor,
  active,
}: {
  offColor: string;
  onColor: string;
  active: boolean;
}) {
  return (
    <div
      className={`w-15 h-15 m-1 border border-secondary-border rounded-full bg bg-${active ? onColor : offColor}`}
    ></div>
  );
}

export default Stoplight;
