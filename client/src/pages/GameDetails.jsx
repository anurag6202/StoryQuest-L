import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getGameDetails }
from "../services/rawgApi";

function GameDetails() {
  const { id } = useParams();

  const [game, setGame] = useState(null);

  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = async () => {
    const data = await getGameDetails(id);

    setGame(data);
  };

  if (!game) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <img
        src={game.background_image}
        alt={game.name}
        className="rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {game.name}
      </h1>

      <p className="mt-4 text-gray-400">
        Rating: {game.rating}
      </p>

      <p className="mt-4">
        {game.description_raw}
      </p>
    </div>
  );
}

export default GameDetails;