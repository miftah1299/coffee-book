import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
    const categories = useLoaderData();
    // console.log(categories);

    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading */}
            <Heading
                title={"Categories"}
                subtitle={"Choose your favorite coffee"}
            ></Heading>

            {/* Categories tab section */}
            <Categories categories={categories}></Categories>

            {/* Dynamic Nested componemt */}
            <Outlet />
        </div>
    );
};

export default Home;
