import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import authReducer from "./reducers/authReducer";
import tableReducer from "./reducers/tableReducer";
import valuesReducer from "./reducers/valuesReducer";

const reducers = combineReducers({
    auth: authReducer,
    table: tableReducer,
    values: valuesReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;