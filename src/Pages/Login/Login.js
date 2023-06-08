import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([
    {
      name: "username",
      placeholder: "User Name",
      id: 1,
      value: "",
    },
    {
      name: "password",
      placeholder: "Password",
      id: 2,
      value: "",
    },
  ]);

  const onChange = (e) => {
    const newUpdatedInputs = inputs.map((el) => {
      if (el.name === e.target.name) {
        return { ...el, value: e.target.value };
      }
      return el;
    });
    setInputs(newUpdatedInputs);
  };

  const onClick = () => {
    navigate("./home");
  };

  return (
    <div className="login-page">
      {inputs.map((el) => {
        return (
          <input
            name={el.name}
            placeholder={el.placeholder}
            key={el.id}
            value={el.value}
            onChange={onChange}
          />
        );
      })}
      <button onClick={onClick}>Login</button>
    </div>
  );
};
