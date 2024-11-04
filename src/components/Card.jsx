const Card = ({ coffee }) => {
    const { name, image, category, origin, type, rating, popularity } =
        coffee || {};

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="">Category: {category}</p>
                <p className="text-gray-700 text-base">Origin: {origin}</p>
                <p className="text-gray-700 text-base">Type: {type}</p>
                <p className="text-gray-700 text-base">Rating: {rating}</p>
                <p className="text-gray-700 text-base">
                    Popularity: {popularity}
                </p>
            </div>
        </div>
    );
};

export default Card;
