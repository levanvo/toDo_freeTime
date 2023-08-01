import { legacy_createStore as createStore, combineReducers } from "redux";
import call_products from "../Redux/call_products";

const root = combineReducers({
    getDataPr: call_products,
});

const store = createStore(root);

export default store;