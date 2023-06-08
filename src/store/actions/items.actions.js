export const setSelectedImage = (img) => {
  return async (dispatch) => {
    dispatch({ type: "SET_SELECTED_IMAGE", payload: img });
  };
};
