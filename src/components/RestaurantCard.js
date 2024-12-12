import { CDN_URL  } from "../utils/constants";

const RestaurantCard = (props) => {
    const {
      name,
      cloudinaryImageId,
      cuisines,
      costForTwo,
      avgRating,
      sla
    } = props.resData?.info


    
    return (
      <div className="group bg-slate-100 rounded-lg">
              <img
                alt="card-logo"
                src={CDN_URL + cloudinaryImageId}
                className="aspect-square w-full rounded-t-lg  bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h4 className="mt-4 text-lg text font-medium ps-1">{name}</h4>
              <p className="mt-1 text-sm font-medium text-gray-900 ps-1">{cuisines.join(", ")}</p>
              <div className="flex justify-between items-center mt-2 px-1">
                {/* Avg Rating with Badge */}
                <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-lg font-semibold text-sm">
                  <span>{avgRating} Stars</span>
                </div>
                <p className="text-sm  font-medium text-gray-700">{costForTwo}</p>
                <p className="text-sm pr-1 font-medium text-gray-700">{sla.deliveryTime} Minutes</p>
              </div>
            </div>
    )
}

export const promotedRestaurant = (RestaurantCard) => {

  return (props) => {
    return (
      <div>
        <div className="absolute">
          <div className="flex items-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-semibold text-sm px-3 py-1 rounded-tl-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-4 h-4 mr-1"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            Top Rated
          </div>
        </div>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
 
export default RestaurantCard;
