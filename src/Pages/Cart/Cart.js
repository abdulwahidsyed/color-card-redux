import { useSelector } from "react-redux";
import "./Cart.css";

export const Cart = () => {
  const items = useSelector((state) => state.cart.addedItems);
  console.log("my items", items);
  return (
    <div className="cart-con">
      {items.map((el) => {
        return (
          <div className="cart-card">
            <img src={el.src} />
            <div className="itm-details-con">
              <p>Name: {el.name}</p>
              <p>Quantity: NA </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
