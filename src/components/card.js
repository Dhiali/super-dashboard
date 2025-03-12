export default function Card({ hero }) {
    return (
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-bold">{hero.name}</h3>
        <p>Power: {hero.power}</p>
        <p>Speed: {hero.speed}</p>
        <p>Intelligence: {hero.intelligence}</p>
      </div>
    );
  }
  