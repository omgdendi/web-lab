import {DoteAPI} from "../../api/DoteAPI";
import {setLoading} from "./authReducer";

const SET_DOTS = "SET_DOTS";
const ADD_DOTE = "ADD_DOTE";
const REMOVE_DOTE = "REMOVE_DOTE";

const initialState = {
    dots: []
};

const tableReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_DOTS:
            return {
                ...state,
                dots: action.dots
            };
        case ADD_DOTE:
            return {
              ...state,
              dots: [...state.dots, action.dote]
            };
        case REMOVE_DOTE:
            return {
                ...state,
                dots: state.dots.filter(d => d.id !== action.id)
            }
        default:
            return state;
    }
}

export const setDots = (dots) => {
    return {
        type: SET_DOTS,
        dots
    }
}

export const addDote = (dote) => {
    return {
        type: ADD_DOTE,
        dote
    }
}

export const removeDote = (id) => {
    return {
        type: REMOVE_DOTE,
        id
    }
}

export const getDots = () => (dispatch) => {
    DoteAPI.getDots()
        .then(response => {
            if (response.status === 200) {
                dispatch(setDots(response.data));
            } else {
                alert(`Непредвиденный ответ ${response.status} от сервера!`);
            }
        })
        .catch(error => {
            alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
        })
}

export const deleteDote = (id) => (dispatch) => {
    DoteAPI.deleteDote(id)
        .then(response => {
            if (response.status === 200) {
                dispatch(removeDote(id));
            } else {
                alert(`Непредвиденный ответ ${response.status} от сервера!`);
            }
        })
        .catch(error => {
            alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
        })
}

export default tableReducer;