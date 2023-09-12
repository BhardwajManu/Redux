import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,

    }

})
export default store;

// git add , git commit -m " ...... " , git push , status