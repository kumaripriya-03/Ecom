import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../reducers/product.reducer';
import cartReducer2 from '../reducers/cart2.reducer';

const store = configureStore({
    reducer: {
        products: productReducer,
        cart2: cartReducer2
    }
})

export default store