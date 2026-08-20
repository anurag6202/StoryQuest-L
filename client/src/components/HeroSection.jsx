function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold max-w-4xl">
        Discover Your Next
        <span className="text-blue-500">
          {" "}Story Adventure
        </span>
      </h1>

      <p className="text-gray-400 mt-6 max-w-2xl text-lg">
        Explore thousands of story-driven games,
        discover hidden gems, and build your
        personal gaming wishlist.
      </p>

      <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold">
        Explore Games
      </button>
    </section>
  );
}

export default HeroSection;