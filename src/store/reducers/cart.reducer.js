const initialState = {
  addedItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADD_TO_CART":
      const existingItem = state.addedItems.find(
        (el) => el.name === action.payload.name
      );
      console.log("my existing item", existingItem);
      return { ...state, addedItems: [...state.addedItems, action.payload] };

    default:
      return state;
  }
};

export default cartReducer;
