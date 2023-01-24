import {} from "redux";
import { ACTIONS } from "./action";

const defaultState = {
  names: [],
  number: 0,
  newsList: [],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NAME:
      return {
        ...state,
        names: state.names.concat([action.name]),
      };
    case ACTIONS.DELETE_NAME:
      return {
        ...state,
        names: state.names.filter((name) => name !== action.name),
      };
    case ACTIONS.PLUS_NUMBER:
      return {
        ...state,
        number: state.number + 1,
      };
    case ACTIONS.MINUS_NUMBER:
      return {
        ...state,
        number: state.number - 1,
      };
    case ACTIONS.FETCH_NEWS_LIST_REQUEST:
      return {
        ...state,
      };
    case ACTIONS.FETCH_NEWS_LIST_SUCCESS:
      return {
        ...state,
        newsList: action.result.items,
      };
    default:
      return {
        ...state,
      };
  }
};
