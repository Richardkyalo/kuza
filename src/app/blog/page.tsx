'use client' 
import Breadcrumb from "@/components/Common/Breadcrumb";
import LiveScoreCard from "@/components/LiveScore/LIveScoreCard"// Custom component to show live match scores
import { useEffect, useState } from "react";
// import io from "socket.io-client"; // Assuming WebSocket for live scores

// export const metadata = {
//   title: "Live Football Scores | Tournament Tracker",
//   description: "Track live football scores in real-time during the tournament",
// };

const LiveScores = () => {
  const [scores, setScores] = useState([]);

  // useEffect(() => {
  //   // Set up WebSocket connection for real-time scores
  //   const socket = io("https://your-socket-server.com");

  //   socket.on("scoreUpdate", (updatedScores) => {
  //     setScores(updatedScores);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <>
      <Breadcrumb
        pageName="Live Scores"
        description="Follow live updates of ongoing matches in the tournament."
      />

      <section className="pb-[120px] pt-[120px] bg-green-100">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {scores.length > 0 ? (
              scores.map((match) => (
                <div
                  key={match.id}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-6"
                >
                  <LiveScoreCard match={match} />
                </div>
              ))
            ) : (
              <p>No live matches at the moment.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LiveScores;
