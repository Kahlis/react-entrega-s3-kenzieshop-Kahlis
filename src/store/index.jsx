import { legacy_createStore as createStore, combineReducers } from "redux";

import cartReducer from "./modules/cart/reducer";
import notebooksReducer from "./modules/notebooks/reducer";

const reducers = combineReducers({
    notebooks: notebooksReducer,
    cart: cartReducer,
});
const store = createStore(reducers);
export default store;
