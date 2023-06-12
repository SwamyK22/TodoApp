import { combineReducers } from 'redux';
import ErrorReducer from './ErrorReducer';
import ProductReducer from './ProductReducer';
import SetProductReducer from './SetProductReducer';
import cartReducer from './CartReducer';
import userReducer from './userReducer';

const combineReducer = combineReducers({
    Error: ErrorReducer,
    Products: ProductReducer,
    Product: SetProductReducer,
    Cart: cartReducer,
    User: userReducer
});

export default combineReducer;