import { Link } from "react-router-dom";
import { CDN_URL, SWIGGY_RX_IMG_URL } from "./utils/constants";
import "./RestaurantCard.css";

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
    imageUrl = SWIGGY_RX_IMG_URL + cloudinaryImageId;
  } else if (cloudinaryImageId) {
    imageUrl = CDN_URL + cloudinaryImageId;
  } else {
    imageUrl = DEFAULT_IMG;
  }

  return (
    <Link
      className="restaurant-link"
      to={`/restaurant/${resData.info.id}`}
      state={{ name: resData.info.name }}
    >
      <div className="res-card">
        <img
          className="res-logo"
          src={imageUrl}
          alt={name}
          onError={(e) => {
            e.target.src = DEFAULT_IMG;
          }}
        />

        <div className="card-content">
          <h3>{name}</h3>

          <p className="cuisine-text">
            {Array.isArray(cuisines)
              ? cuisines.slice(0, 3).join(", ")
              : "Cuisine not available"}
          </p>

          <div className="card-rating">
            ⭐ {avgRating || "N/A"}
          </div>

          <div className="card-bottom">
            <div>🕒 {sla?.deliveryTime || "N/A"} mins</div>
            <div>{costForTwo || "N/A"}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;