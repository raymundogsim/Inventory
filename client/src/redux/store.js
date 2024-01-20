import {createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

const finalReducer = combineReducers({
    rootReducer
})

const initialState = {
    rootReducer : {
        cartItems : localStorage.getItems("cartItems") ? JSON.parse(localStorage.getItems("cartItems"))
        : [],
    },
};

const middleware = {thunk}

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware))
);

export default store;