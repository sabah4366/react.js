import RestaurantCard  from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState(resObj)
    

    return (
        <div className="body">
            <div className="filter">
              <button 
              className="filter-btn"
              onClick={
                () => {
                 const filteredRestaurants = listOfRestaurants.filter(
                  (rest) => rest.info.avgRating > 4
                )
                setListOfRestaurants(filteredRestaurants);
                console.log('rest',filteredRestaurants)
                }
              }
              >
              Top Rated Restaurants
              </button>
            </div>
            <div className="res-container">
              {listOfRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
              ))}
               
            </div>
        </div>
    )
}

export default Body;