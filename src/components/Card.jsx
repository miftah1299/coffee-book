import PropTypes from "prop-types";

const Card = ({ coffee }) => {
    const { name, image, category, origin, type, rating, popularity } =
        coffee || {};

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105">
            <img className="w-full h-48 object-cover" src={image} alt={name} />
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

Card.propTypes = {
    coffee: PropTypes.object.isRequired,
};

export default Card;
