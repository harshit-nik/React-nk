// import { CDN_URL } from './utils/constants';
// const RestaurantCard = (props) => {
//   const { resData } = props;
//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     avgRating,
//     costForTwo,
//     sla,
//   } = resData?.info;
//   return (
//     <div
//       className="res-card"
//       style={{
//         backgroundColor: '#f0f0f0',
//       }}
//     >
//       <img
//   className="res-logo"
//   src={
//     resData?.info?.cloudinaryImageId
//       ? CDN_URL + resData.info.cloudinaryImageId
//       : "https://via.placeholder.com/300x200?text=No+Image"
//   }
//   alt={resData?.info?.name}
//   onError={(e) => {
//     e.target.src =
//       "https://via.placeholder.com/300x200?text=No+Image";
//   }}
// />
//       <div className="res-card-content">
//         <h3>{name}</h3>
//         <hr />
//         <em>{cuisines?.join(', ')}</em>
//         <h4>{avgRating} stars</h4>
//         <h4>{costForTwo}</h4>
//         <h4>{sla?.deliveryTime} minutes</h4>
//       </div>
//     </div>
//   );
// };
// export default RestaurantCard;
import {
  CDN_URL,
  SWIGGY_RX_IMG_URL
} from "./utils/constants";

const DEFAULT_IMG =
  "https://media.istockphoto.com/id/177043240/vi/anh/c%C3%A0-ri-g%C3%A0-b%C6%A1-%E1%BA%A5n-%C4%91%E1%BB%99.jpg?s=1024x1024&w=is&k=20&c=_IxKKJLkAciZoOGwgo16QNIz1C3XsIoMUVa2c6tHrKI=";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData.info;

  let imageUrl;

  if (cloudinaryImageId?.startsWith("RX_THUMBNAIL")) {
    // ✅ Swiggy Media CDN
    imageUrl = SWIGGY_RX_IMG_URL + cloudinaryImageId;
  } else if (cloudinaryImageId) {
    // ✅ Cloudinary CDN
    imageUrl = CDN_URL + cloudinaryImageId;
  } else {
    // ✅ Default image
    imageUrl = DEFAULT_IMG;
  }

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={imageUrl}
        alt={name || "Restaurant"}
        loading="lazy"
        onError={(e) => {
          e.target.src = DEFAULT_IMG;
        }}
      />

      <h3>{name}</h3>

      <em>
        {Array.isArray(cuisines)
          ? cuisines.join(", ")
          : "Cuisine not available"}
      </em>

   <div className="card-meta">
  <span>{avgRating ? `${avgRating} ⭐` : "No rating"}</span>
  <span>{sla?.deliveryTime ? `${sla.deliveryTime} mins` : "N/A"}</span>
  <span>{costForTwo || "N/A"}</span>
</div>

    </div>
  );
};

export default RestaurantCard;
