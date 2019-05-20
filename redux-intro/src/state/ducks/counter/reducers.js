import { combineReducers } from "redux";
import types from "./types";

const initialState = {
    count: 0
}

const counterReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case types.increment:
            return {
                count: state.count + 1
            };
        case types.decrement:
            return {
                count: state.count - 1
            };
        case types.reset:
            return {
                count: 0
            };
        default:
            return state;
    }
}

const reducer = combineReducers( {
    counting: counterReducer
} );

export default reducer;