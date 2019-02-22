import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import general from "./general";


let state = combineReducers({
    general
});

const store = createStore(
    state,
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )
);

export default store;