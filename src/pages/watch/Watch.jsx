import React, { useEffect, useState } from "react";
import axios from "axios";

const Watch = () => {
  const [watchData, setWatchData] = useState([]);
  const [activeOption, setActiveOption] = useState(0); 
  const [apiURL, setApiURL] = useState("");
const stream = [
   { "streamers": [
        {
            "username": "HunterWhiz",
            "avatar": "https://images.chesscomfiles.com/uploads/v1/user/162313815.8734aafa.50x50o.709e5205a588.jpeg",
            "twitch_url": "https://twitch.tv/hunterwhiz",
            "url": "https://www.chess.com/member/HunterWhiz",
            "is_live": true,
            "is_community_streamer": false
        },
        {
            "username": "TheMagician",
            "avatar": "https://images.chesscomfiles.com/uploads/v1/user/1762234.e9232887.50x50o.bd8ae2ae8eb1.jpeg",
            "twitch_url": "https://twitch.tv/fmjohncurtischess",
            "url": "https://www.chess.com/member/TheMagician",
            "is_live": true,
            "is_community_streamer": false
        },
        {
            "username": "KingsBishop",
            "avatar": "https://images.chesscomfiles.com/uploads/v1/user/17669546.18317e7e.50x50o.cee23d3e3050.jpeg",
            "twitch_url": "https://twitch.tv/kingsbischop",
            "url": "https://www.chess.com/member/KingsBishop",
            "is_live": true,
            "is_community_streamer": false
        },
    ]
    }
]
console.log(watchData)
  useEffect(() => {
    const fetchPuzzle = async () => {
      try {
        const response = await axios.get(apiURL);
        setWatchData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPuzzle();
  }, [apiURL]);

  const watchOptions = [
    {
      name: "Streamers",
      url: "https://api.chess.com/pub/streamers",
    },
    {
      name: "Playing Now",
      url: "https://api.chess.com/pub/puzzle/random",
    },
    {
      name: "Events",
      url: "https://api.chess.com/pub/puzzle/random",
    },
  ];

  return (
    <div>
      {stream.streamers && (stream.streamers.map((item, index) => (
        <div key={index} className="flex">
          <div key={index}>
            {item.username}
            {item.status}
          </div>
          <img src={item.image} alt="" />
          <div>{item.gender}</div>
        </div>
      )))}
      <>
        <div className="flex gap-5">
          {watchOptions.map((option, index) => (
            <React.Fragment key={index}>
              <button
                className={`px-5 py-3 border rounded-md ${
                  activeOption === index ? "bg-[#81B64C]" : ""
                }`}
                onClick={() => {
                  setActiveOption(index);
                  setApiURL(option.url);
                }}
              >
                <p>{option.name}</p>
              </button>
            </React.Fragment>
          ))}
        </div>
      </>
    </div>
  );
};

export default Watch;