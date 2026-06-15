import { useLocation } from "react-router-dom";
import resList from "./utils/mockData";
import { useContext, useState } from "react";
import { CartContext } from "./utils/CartContext";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const location = useLocation();

  const { addToCart, cartItems, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const [openCategory, setOpenCategory] = useState("recommended");

  const selectedResName = location.state?.name;

  let restaurant = resList.data.find(
    (res) => res.info.name.toLowerCase() === selectedResName?.toLowerCase(),
  );

  if (!restaurant) restaurant = resList.data[0];

  return (
    <div className="menu">
      <h1>{restaurant.info.name}</h1>
      <h3>{restaurant.info.cuisines.join(", ")}</h3>

      {Array.isArray(restaurant.menu)
        ? restaurant.menu.map((item) => {
            const cartItem = cartItems.find((i) => i.id === item.id);

            return (
              <div key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-img" />

                <div className="menu-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>

                {cartItem ? (
                  <div className="qty-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      ➖
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>
                      ➕
                    </button>
                  </div>
                ) : (
                  <button onClick={() => addToCart(item)}>Add</button>
                )}
              </div>
            );
          })
        : Object.entries(restaurant.menu).map(([categoryName, items]) => (
            <div key={categoryName}>
              <h2
                style={{
                  marginTop: "25px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  background: "#fff",
                  borderRadius: "8px",
                }}
                onClick={() =>
                  setOpenCategory(
                    openCategory === categoryName ? "" : categoryName,
                  )
                }
              >
                <span>
                  {categoryName
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}{" "}
                  ({items.length})
                </span>

                <span>{openCategory === categoryName ? "▲" : "▼"}</span>
              </h2>

              {openCategory === categoryName &&
                items.map((item) => {
                  const cartItem = cartItems.find((i) => i.id === item.id);

                  return (
                    <div key={item.id} className="menu-item">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="menu-img"
                      />

                      <div className="menu-info">
                        <h4>{item.name}</h4>
                        <p>₹{item.price}</p>
                      </div>

                      {cartItem ? (
                        <div className="qty-controls">
                          <button onClick={() => decreaseQuantity(item.id)}>
                            ➖
                          </button>

                          <span>{cartItem.quantity}</span>

                          <button onClick={() => increaseQuantity(item.id)}>
                            ➕
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => addToCart(item)}>Add</button>
                      )}
                    </div>
                  );
                })}
            </div>
          ))}
    </div>
  );
};

export default RestaurantMenu;
