import RestaurantCard  from "./RestaurantCard";
import { useState,useEffect } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurants from "../utils/useListOfRestaurants";
const Body = () => {

    const {listOfRestaurants,filteredRestaurants} = useListOfRestaurants()
    const [searchText,setSearchText] = useState("");


    const isOnlineStatus = useOnlineStatus()

    if (isOnlineStatus === false) {
      return (
        <h1>No internet connections!!!!!!</h1>
      )
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