import {DoteAPI} from "../../api/DoteAPI";
import {addDote} from "./tableReducer";

const SET_X = "SET_X";
const SET_Y = "SET_Y";
const SET_R = "SET_R";
const CLEAR_VALUES = "CLEAR_VALUES";

const initialState = {
    x_current: null,
    y_current: null,
    r_current: 1,
    r_values: [1, 2, 3, 4, 5],
    x_min: -5,
    x_max: 5,
    y_min: -5,
    y_max: 5,
    maxLength: 6
};

const valuesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_X:
            return {
                ...state,
                x_current: action.value
            };
        case SET_Y:
            return {
                ...state,
                y_current: action.value
            };
        case SET_R:
            return {
                ...state,
                r_current: action.value
            };
        case CLEAR_VALUES:
            return {
                ...state,
                x_current: null,
                y_current: null,
                r_current: 1
            }
        default:
            return state;
    }
}

export const setX = (value) => {
    return {
        type: SET_X,
        value
    };
};

export const setY = (value) => {
    return {
        type: SET_Y,
        value
    };
};

export const setR = (value) => {
    return {
        type: SET_R,
        value
    };
};

export const clearValues = () => {
    return {
        type: CLEAR_VALUES
    };
};

export const checkDote = () => (dispatch, getState) => {
    DoteAPI.checkDote(
        getState().values.x_current,
        getState().values.y_current,
        getState().values.r_current
    )
        .then (response => {
            if (response.status === 200) {
                dispatch(addDote(response.data))
                dispatch(clearValues())
            } else {
                alert(`Непредвиденный ответ ${response.status} от сервера!`);
            }
        })
        .catch(error => {
            alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
        })
}

export default valuesReducer;