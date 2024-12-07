import {useState,useEffect} from "react";

const useListOfRestaurants = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
      },[]);
  
      const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          
  
        const json = await data.json()
        // ?  is optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

      }

    return {
        listOfRestaurants,
        filteredRestaurants
    };
};

export default useListOfRestaurants;