import { CDN_URL } from './utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: '#f0f0f0',
      }}
    >
      <img
  className="res-logo"
  src={
    resData?.info?.cloudinaryImageId
      ? CDN_URL + resData.info.cloudinaryImageId
      : "https://via.placeholder.com/300x200?text=No+Image"
  }
  alt={resData?.info?.name}
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/300x200?text=No+Image";
  }}
/>

      <div className="res-card-content">
        <h3>{name}</h3>
        <hr />
        <em>{cuisines?.join(', ')}</em>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};


export default RestaurantCard;
