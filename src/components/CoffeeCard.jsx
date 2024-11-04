import { useParams } from "react-router-dom";

const CoffeeCard = () => {
    const {category} = useParams()
    console.log(category);

    return (
        <div>
            Coffee Cards......{category}
        </div>
    );
};

export default CoffeeCard;