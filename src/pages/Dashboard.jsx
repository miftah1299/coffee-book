import { useState, useEffect } from "react";
import Heading from "../components/Heading";
import { getAllFavorites } from "../utilities";
import Card from "../components/Card";

const Dashboard = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        const favorites = getAllFavorites();
        setCoffees(favorites);
    }, []);

    return (
        <div>
            <Heading
                title="Welcome to Dashboard"
                subtitle="Manage coffee that you love"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coffees.map((coffee) => (
                    <Card key={coffee.id} coffee={coffee}></Card>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
