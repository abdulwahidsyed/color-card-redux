import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducers/auth.reducer";
import itemsReducer from "./reducers/items.reducer";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cart.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemsReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
