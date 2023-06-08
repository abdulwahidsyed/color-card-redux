import "./Card.css";

export const Card = ({ src, name, onClick, onClickAddToCart }) => {
  return (
    <div className="img-container">
      <img className="background-image" src={src} />
      <div>
        <img src={src} className="main-image" onClick={onClick} />
      </div>
      <div className="card-con">
        <h3>{name}</h3>
        <button className="add-to-cart-btn" onClick={onClickAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
