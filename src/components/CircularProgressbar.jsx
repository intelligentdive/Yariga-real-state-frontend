"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ value, pathColor }) => {
  return (
    <div className="w-[60px] h-[60px]">
      <CircularProgressbar
        value={value}
        strokeWidth={20}
        styles={buildStyles({
          pathColor: `${pathColor}`,

          trailColor: "#E4E8EF",
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
