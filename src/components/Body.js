import RestaurantCard  from "./RestaurantCard";
import { useState,useEffect } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");



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


    return ( listOfRestaurants.length === 0 ? <Shimmer /> :
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="searchText" value={searchText}
                 onChange={(e) => {
                  setSearchText(e.target.value)
                 }}/>
                <button className="search-btn" onClick={() => {
                  const filteredData = listOfRestaurants.filter((rest) => rest.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurants(filteredData);
                }}>Search</button>
              </div>
              <button 
              className="filter-btn"
              onClick={
                () => {
                 const filteredRestaurants = listOfRestaurants.filter(
                  (rest) => rest.info.avgRating > 4
                )
                setFilteredRestaurants(filteredRestaurants);
                }
              }
              >
              Top Rated Restaurants
              </button>
            </div>
            <div className="res-container">
              {filteredRestaurants.map((restaurant) => (
                <Link key={restaurant.info.id} to={'/restaurants/'+ restaurant.info.id}>
                  <RestaurantCard  resData={restaurant}/>
                </Link>
              ))}
               
            </div>
        </div>
    )
}

export default Body;