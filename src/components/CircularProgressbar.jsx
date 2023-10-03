"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ value, pathColor, percentage }) => {
  return (
    <div className="w-[60px] h-[60px]">
      <CircularProgressbar
        value={value}
        strokeWidth={20}
        styles={buildStyles({
          strokeHeight: "60px",
          pathColor: `${pathColor}`,
          strokeLinecap: "200px",
          trailColor: "#E4E8EF",
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
