import { useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("./");
  };

  const onClickCart = () => {
    navigate("./cart");
  };
  return (
    <div className="header">
      <h3>Syed Abdul Wahid</h3>
      <div className="header-items">
        <h4 className="logout" onClick={() => navigate("./home")}>
          Home
        </h4>
        <h4 className="logout" onClick={onClickCart}>
          Cart
        </h4>
        <h4 className="logout" onClick={onClick}>
          Logout
        </h4>
      </div>
    </div>
  );
};
