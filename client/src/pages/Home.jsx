import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GameCard from "../components/GameCard";

function Home() {
  const featuredGames = [
    {
      title: "Red Dead Redemption 2",
      image:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20"
    },
    {
      title: "The Witcher 3",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420"
    },
    {
      title: "Cyberpunk 2077",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8"
    }
  ];

  return (
    <div>
      <Navbar />

      <HeroSection />

      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Featured Games
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredGames.map((game) => (
            <GameCard
              key={game.title}
              title={game.title}
              image={game.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;