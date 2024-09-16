import React from "react";

const LiveScoreCard = ({ match }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition hover:scale-105 duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        {/* Team 1 */}
        <div className="text-center">
          <img
            src={match.team1.logo}
            alt={match.team1.name}
            className="w-16 h-16 object-contain mx-auto mb-2"
          />
          <h3 className="text-lg font-bold">{match.team1.name}</h3>
        </div>

        {/* Score */}
        <div className="text-center">
          <span className="text-3xl font-bold text-blue-600">
            {match.score.team1} - {match.score.team2}
          </span>
          <p className="text-sm text-gray-600">Live at {match.time}</p>
        </div>

        {/* Team 2 */}
        <div className="text-center">
          <img
            src={match.team2.logo}
            alt={match.team2.name}
            className="w-16 h-16 object-contain mx-auto mb-2"
          />
          <h3 className="text-lg font-bold">{match.team2.name}</h3>
        </div>
      </div>

      {/* Match Status */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          {match.status === "live" ? (
            <span className="text-green-500 font-bold">Live</span>
          ) : (
            <span className="text-red-500">Finished</span>
          )}
        </p>
        {match.status === "live" && (
          <p className="text-sm text-orange-500">Time Remaining: {match.remainingTime}</p>
        )}
      </div>

      {/* Progress bar */}
      {match.status === "live" && (
        <div className="relative pt-1 mt-4">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
            <div
              style={{ width: `${match.progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveScoreCard;
