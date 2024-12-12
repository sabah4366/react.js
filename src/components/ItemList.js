import { CDN_URL  } from "../utils/constants";

const ItemList = ({items}) => {
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
                        <img src={CDN_URL + item.card.info.imageId} />
                    </div>
                    <button className="border-1 absolute">
                        Add
                    </button>
                </div>)
            }
        </div>
    )
}

export default ItemList;