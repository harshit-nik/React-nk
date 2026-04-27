import { useParams, useLocation } from "react-router-dom";
import resList from "./utils/mockData";
import { useContext } from "react";
import { CartContext } from "./utils/CartContext";

const RestaurantMenu = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useContext(CartContext);

  // 🔥 SAFE FIX
  const selectedResName =
    location.state?.name || localStorage.getItem("resName");

  let restaurant = resList.data.find(
    (res) =>
      res.info.name.toLowerCase() === selectedResName?.toLowerCase()
  );

  if (!restaurant) {
    restaurant = resList.data[0];
  }

  return (
    <div>
      <h1>{restaurant.info.name}</h1>
      <h3>{restaurant.info.cuisines.join(", ")}</h3>

      <h2>Menu</h2>

      {restaurant.menu.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ₹{item.price}
          </p>
          <button onClick={() => addToCart(item)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;