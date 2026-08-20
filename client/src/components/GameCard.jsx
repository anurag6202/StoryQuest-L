function GameCard({ title, image }) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        <button className="mt-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm">
          View Details
        </button>
      </div>
    </div>
  );
}

export default GameCard;