import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircularProgressProps {
  value: number;
  size?: number;
  color?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 100,
  color = "#A855F7", // Purple
}) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <CircularProgressbar
        value={value}
        text={`+${value}%`}
        strokeWidth={15}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: color,
          trailColor: "#fff2",
          textSize: "10px",
        })}
      />
    </div>
  );
};

export default CircularProgress;
