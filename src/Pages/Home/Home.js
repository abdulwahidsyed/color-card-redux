import "./Home.css";

import { useNavigate } from "react-router-dom";
import { Card } from "../../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedImage } from "../../store/actions/items.actions";
import { setAddToCart } from "../../store/actions/cart.actions";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const images = useSelector((state) => state.items.images);

  const onClick = (img) => {
    dispatch(setSelectedImage(img));
    navigate("/more-details");
  };

  const onClickAddToCart = (img) => {
    dispatch(setAddToCart(img));
  };

  return (
    <div className="home-page">
      <h1 className="home-heading">Home Page</h1>
      <div className="image-box">
        {images.map((img) => {
          return (
            <Card
              src={img.src}
              name={img.name}
              onClick={() => onClick(img)}
              onClickAddToCart={() => onClickAddToCart(img)}
            />
          );
        })}
      </div>
    </div>
  );
};
