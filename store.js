import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

export const store = createStore(reducer, applyMiddleware(thunk, logger));
