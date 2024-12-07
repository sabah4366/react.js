import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import {MENU_CDN} from "../utils/constants"

const RestaurantMenu = () => {
    const { resId } = useParams()
    const [restaurantMenus,setRestaurantMenus] = useState(null)
    

    useEffect(() => {
        fetchRestaurantMenus()
    },[])

    const fetchRestaurantMenus = async () => {
        const data = await fetch(
            MENU_CDN+resId
        )
        const json = await data.json()
        setRestaurantMenus(json.data)
    
    };

    if (restaurantMenus === null) return <Shimmer />;
    
    
    const {
        name,
        cuisines,
        avgRating,
        costForTwoMessage,
        cloudinaryImageId,
        city,
        areaName
    } = restaurantMenus?.cards[2]?.card?.card?.info

    const itemCards = restaurantMenus?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    

    return (
        <div className="restaurant-menu">
             <h1>{name}</h1>
            <p>{cuisines.join(',')}</p>
            <p>{avgRating} - {costForTwoMessage}</p>
            <p>Outlet:{areaName}</p>
            <div>
                <h3>Menu</h3>
                <ul>
                    {
                        itemCards.map( item => <li key={item.card.info.id}>{item.card.info.name}</li>)
                    }
                
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;