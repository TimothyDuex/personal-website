import React, { useEffect, useState } from "react";

type LightState = "red" | "yellow" | "green";

const lights = [
  {
    onColor: "#ef4444", // red-500
    offColor: "#991b1b", // red-800
    lightState: "red",
  },
  {
    onColor: "#fde047", // yellow-300
    offColor: "#92400e", // yellow-800
    lightState: "yellow",
  },
  {
    onColor: "#22c55e", // green-500
    offColor: "#166534", // green-800
    lightState: "green",
  },
];

const StoplightPureCSS = () => {
  const [currentLight, setCurrentLight] = useState<LightState>("red");

  useEffect(() => {
    const lightSequence: LightState[] = ["red", "green", "yellow"];
    const durations = { red: 3000, yellow: 1000, green: 2000 }; // milliseconds

    const timeout = setTimeout(() => {
      const currentIndex = lightSequence.indexOf(currentLight);
      const nextIndex = (currentIndex + 1) % lightSequence.length;
      setCurrentLight(lightSequence[nextIndex]);
    }, durations[currentLight]);

    return () => clearTimeout(timeout);
  }, [currentLight]); // Re-run when currentLight changes

  return (
    <div style={styles.container}>
      <div style={styles.lightGrid}>
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
      style={{
        ...styles.light,
        backgroundColor: active ? onColor : offColor,
      }}
    />
  );
}

const styles = {
  container: {
    maxWidth: "fit-content",
    border: "1px solid #374151", // secondary-border equivalent
    borderRadius: "2px",
    backgroundColor: "#111827", // primary-bg equivalent (dark)
    padding: "4px",
  },
  lightGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
  },
  light: {
    width: "60px", // w-15 equivalent (15 * 0.25rem * 16 = 60px)
    height: "60px", // h-15 equivalent
    margin: "4px",
    border: "1px solid #374151", // secondary-border equivalent
    borderRadius: "50%",
    transition: "background-color 0.3s ease",
  },
};

export default StoplightPureCSS;
