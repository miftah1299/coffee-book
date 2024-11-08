import toast from "react-hot-toast";

// get all coffees from local storage
const getAllFavorites = () => {
    // get all coffees from local storage
    const allFavorates = JSON.parse(localStorage.getItem("favorites")) || [];
    return allFavorates;
};

/*

*/
// add a coffee to local storage
const addFavorite = (coffee) => {
    // get all coffees from local storage
    const favorites = getAllFavorites();
    const isExist = favorites.find((item) => item.id === coffee.id);
    if (isExist) {
        return toast.error("Already Added to Favorites");
    }

    // add the new coffee to the array
    favorites.push(coffee);
    // stringify the array and store it in local storage
    localStorage.setItem("favorites", JSON.stringify(favorites));
    toast.success("Added to Favorites");
};

/*


*/
// remove a coffee from local storage

export { addFavorite, getAllFavorites };
