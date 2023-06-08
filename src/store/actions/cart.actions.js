export const setAddToCart = (img) => {
  return (dispatch) => {
    dispatch({
      type: "SET_ADD_TO_CART",
      payload: img,
    });
  };
};
