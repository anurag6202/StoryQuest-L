import { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import GameCard from "../components/GameCard";
import Loader from "../components/Loader";

import {
  getPopularGames,
  searchGames
} from "../services/rawgApi";

function Explore() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    const data = await getPopularGames();

    setGames(data);
    setLoading(false);
  };

  const handleSearch = async (e) => {
    const value = e.target.value;

    setSearch(value);

    if (!value) {
      loadGames();
      return;
    }

    const data = await searchGames(value);

    setGames(data);
  };

  if (loading) return <Loader />;

  return (
    <div className="p-8">
      <SearchBar
        value={search}
        onChange={handleSearch}
      />

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.name}
            image={game.background_image}
          />
        ))}
      </div>
    </div>
  );
}

export default Explore;