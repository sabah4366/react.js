import { useDispatch } from "react-redux";
import { CDN_URL  } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const ItemList = ({items}) => {

    const dispatch = useDispatch();


    const handleAddItem = (item) => {
        dispatch(addItem(item))
         
      }
    return (
        <div>
            {
                items.map((item) =>
                <div 
                    className="border-gray-300 p-2 shadow-xl  border-b-2 text-left mx-3 flex justify-between"
                    key={item.card.info.id}>
                        
                    <div className="w-9/12 ">
                        <h3 className="text-m font-medium ">{item.card.info.name} - ₹{item.card.info.price/100}</h3>
                        <p className="text-xs font-medium mb-2">{item.card.info.description}</p>                        
                    </div>
                    <div className="3/12 w-32">
                        <div className="">
                            <img src={CDN_URL + item.card.info.imageId} />
                            <button className="px-12 rounded-b-md border-black border " onClick={() => handleAddItem(item)}>
                            Add
                        </button>
                        </div>
                        
                    </div>
                    
                    
                </div>)
            }
        </div>
    )
}

export default ItemList;