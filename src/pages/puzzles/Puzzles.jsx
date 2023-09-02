import React, { useState, useEffect } from "react";
import axios from "axios";

const Puzzles = () => {
  const [puzzleData, setPuzzleData] = useState(null);
  const [activePuzzle, setActivePuzzle] = useState(0); // Initialize as 0
  const [apiURL, setApiURL] = useState("");
  console.log(typeof apiURL);

  useEffect(() => {
    const fetchPuzzle = async () => {
      try {
        const response = await axios.get(apiURL);
        setPuzzleData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPuzzle();
  }, [apiURL]);

  const puzzleOptions = [
    {
      name: "Daily puzzles",
      url: "https://api.chess.com/pub/puzzle",
    },
    {
      name: "Random puzzles",
      url: "https://api.chess.com/pub/puzzle/random",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-[.7] -z-10"></div>
      <div className="flex gap-5">
        {puzzleOptions.map((option, index) => (
          <React.Fragment key={index}>
            <button
              className={`px-5 py-3 border rounded-md ${
                activePuzzle === index ? "bg-[#81B64C]" : ""
              }`}
              onClick={() => {
                setActivePuzzle(index);
                setApiURL(option.url);
              }}
            >
              <p>{option.name}</p>
            </button>
          </React.Fragment>
        ))}
      </div>
      {puzzleData ? (
        <div className="flex flex-col items-center space-y-5">
          <h4>{puzzleData.title}</h4>
          <img src={puzzleData.image} alt="Puzzle" />
        </div>
      ) : (
        <p>Loading puzzle...</p>
      )}
    </div>
  );
};

export default Puzzles;
