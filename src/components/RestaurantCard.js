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
        <div className="res-card">
          <img 
          alt='card-logo' className="card-logo" 
          src={CDN_URL + cloudinaryImageId}/>

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime}Minutes</h4>
        </div>
    )
}

export default RestaurantCard;
