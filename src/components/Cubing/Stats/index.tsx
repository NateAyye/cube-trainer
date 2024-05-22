import React from "react";

interface StatsProps {
  sessionTimes: string[];
}

const Stats: React.FC<StatsProps> = ({ sessionTimes }) => {
  const pb = sessionTimes.reduce((acc, time) => {
    return Math.min(acc, parseFloat(time));
  }, Infinity);
  const ao5 =
    sessionTimes.slice(-5).reduce((acc, time) => {
      return acc + parseFloat(time);
    }, 0) / 5;
  const ao12 =
    sessionTimes.slice(-12).reduce((acc, time) => {
      return acc + parseFloat(time);
    }, 0) / 12;
  const worst = sessionTimes.reduce((acc, time) => {
    return Math.max(acc, parseFloat(time));
  }, 0);
  const average =
    sessionTimes.reduce((acc, time) => {
      return acc + parseFloat(time);
    }, 0) / sessionTimes.length;
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <span className="absolute left-1 top-1">pb</span>
        <span>{pb.toFixed(2)}</span>
      </div>
      <div className="relative flex items-center justify-center">
        <span className="absolute left-1 top-1">ao5</span>
        <span>{ao5.toFixed(2)}</span>
      </div>
      <div className="relative flex items-center justify-center">
        <span className="absolute left-1 top-1">ao12</span>
        <span>{ao12.toFixed(2)}</span>
      </div>
      <div className="relative flex items-center justify-center">
        <span className="absolute left-1 top-1">worst</span>
        <span>{worst.toFixed(2)}</span>
      </div>
      <div className="relative flex items-center justify-center">
        <span className="absolute left-1 top-1">average</span>
        <span>{average.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Stats;
