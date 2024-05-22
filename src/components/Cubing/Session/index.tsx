import React from "react";

const TESTING_TIMES = ["12.34", "15.23", "10.45", "11.23", "13.23", "14.23"];

interface SessionProps {
  times?: string[];
}

const Session: React.FC<SessionProps> = ({ times = TESTING_TIMES }) => {
  return (
    <div>
      {times.map((time, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b border-gray-200 p-3"
        >
          <div className="text-lg font-semibold">{time}</div>
          <div className="text-sm text-gray-500">Scramble</div>
        </div>
      ))}
    </div>
  );
};

export default Session;
