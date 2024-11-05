import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
    const navigate = useNavigate();

    const data = useLoaderData();
    const { category } = useParams();

    const [coffees, setCoffees] = useState([]);
    // useEffect for filtering data based on category
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(
                (coffee) => coffee.category === category
            );
            setCoffees(filteredByCategory);
        } else {
            setCoffees(data.slice(0, 6));
        }
    }, [category, data]);
    // console.log(category);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-1">
                {coffees.map((coffee) => (
                    <Card key={coffee.id} coffee={coffee}></Card>
                ))}
            </div>
            <button
                onClick={() => navigate("/coffees")}
                className="btn btn-warning font-semibold mt-2"
            >
                View All
            </button>
        </div>
    );
};

export default CoffeeCards;
