import { useState,useEffect } from "react";

const useListOfRestaurants = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
      },[]);
  
      const fetchData = async () => {
        const data = await fetch(REST_CDN);
          
  
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