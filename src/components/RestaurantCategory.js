import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({ data,showItems,setShowIndex}) => {

    const hideItemList = () => {
       
        setShowIndex();
        
    }
    return (
        <div className="m-2 ">
              <div className="w-6/12 m-auto
               p-4 bg-slate-50 shadow-lg ">
                <div className=" flex justify-between mb-8 cursor-pointer" onClick={hideItemList}>
                    <span  className="font-bold">{data.card.title} ({data.card.itemCards.length})</span>
                    <span className="font-bold">⋁</span>
                </div>
                {
                showItems && <ItemList items={data.card.itemCards}/>
                }
                
               </div>
        </div>
    )
}

export default RestaurantCategory;