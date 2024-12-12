import RestaurantCard, {promotedRestaurant}  from "./RestaurantCard";
import { useState,useEffect, useContext } from "react";
import { REST_CDN } from "../utils/constants";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    const {loggedInUser,setUserName} = useContext(UserContext)


    const RestaurantCardPromoted = promotedRestaurant(RestaurantCard);

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


    const isOnlineStatus = useOnlineStatus()

    if (isOnlineStatus === false) {
      return (
        <h1>No internet connections!!!!!!</h1>
      )
    } 

    return ( listOfRestaurants.length === 0 ? <Shimmer /> :
        <div className="body ">
          <div className="filter flex flex-wrap items-center justify-between  p-4 rounded-lg ">
            {/* Search Section */}
            <div className="search flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              {/* Search Input */}
              <input
                type="text"
                className="border border-black rounded p-2 w-full sm:w-auto"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                placeholder="Search Restaurants"
              />

              {/* Search Button */}
              <button
                className="bg-green-100 px-4 py-2 rounded-lg font-semibold w-full sm:w-auto"
                onClick={() => {
                  const filteredData = listOfRestaurants.filter((rest) =>
                    rest.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(filteredData);
                }}
              >
                Search
              </button>

              {/* Top Rated Button */}
              <button
                className="bg-green-100 px-4 py-2 rounded-lg font-semibold w-full sm:w-auto"
                onClick={() => {
                  const filteredRestaurants = listOfRestaurants.filter(
                    (rest) => rest.info.avgRating > 4
                  );
                  setFilteredRestaurants(filteredRestaurants);
                }}
              >
                Top Rated Restaurants
              </button>
              <span>
                Username : <input className="border p-2 rounded-xl border-black"
                 placeholder="Username" type="text"
                 value={loggedInUser}
                  onChange={(e) => {
                    setUserName(e.target.value);
                    }} />
              </span>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {filteredRestaurants.map((restaurant) => (
                  
                  <Link key={restaurant.info.id} to={'/restaurants/'+ restaurant.info.id}>
                  { restaurant.info.avgRating > 4.5 ?
                   (<RestaurantCardPromoted resData={restaurant}/>) :
                   ( <RestaurantCard  resData={restaurant}/>)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
    )
}

export default Body;