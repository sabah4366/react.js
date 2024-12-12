import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams()
    const [showIndex,setShowIndex] = useState(0)

    
    const restaurantMenus = useRestaurantMenu(resId)
    if (restaurantMenus === null) return <Shimmer />;
    
    
    const {
        name,
        cuisines,
        costForTwoMessage,
        cloudinaryImageId,
    } = restaurantMenus?.cards[2]?.card?.card?.info

    const categories = restaurantMenus?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (cat) => cat.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    const itemCards = restaurantMenus?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    

    return (
        <div className="text-center ">
            <div className="flex w-6/12 m-auto text-left mb-4 justify-center mt-4 shadow-2xl ">
                <div>
                    <h1 className="font-bold text-2xl my-6">{name}</h1>
                    <p className="font-bold text-l mb-4">{cuisines.join(',')} - {costForTwoMessage}</p>
                </div>
                <div className="w-36 text-right ms-6  my-4 rounded-md">
                    <img src={CDN_URL + cloudinaryImageId} />
                </div>
                
            </div>
            {
                
                categories.map((category,index) => (
                   <RestaurantCategory 
                     key={category.card.card.title}
                     data={category?.card}
                     showItems={ index === showIndex ? true : false }
                     setShowIndex={() => setShowIndex(index)}
                     />
                ))
            }
        </div>
    )
}

export default RestaurantMenu;