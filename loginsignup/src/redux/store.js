import {StoreCreator, applyMiddleware} from "redux";
import logger from "redux-logger";
import {thunk} from "redux-thunk";
import rootReducer from "./rootReducer";
import { createStore } from "redux";

const middleware = [thunk];

if(process.env.MODE_ENV === "development") {
    middleware.push(logger)
}

export const store = createStore(rootReducer,applyMiddleware(...middleware));