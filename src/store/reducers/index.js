/* eslint-disable no-case-declarations */
import { ADD_FAV, REMOVE_FAV } from "../actions/favActions";

const localStorageKey = "favs";

function addToStorage(data) {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
}

function getFromStorage() {
  return JSON.parse(localStorage.getItem(localStorageKey)) ?? { favs: [] };
}

const initialState = getFromStorage();

let newState;

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      const favItem = state.favs.find((item) => item.id === action.payload.id);
      if (!favItem) {
        newState = { ...state, favs: [...state.favs, action.payload] };
        addToStorage(newState);
      } else {
        newState = state;
      }
      return newState;
    case REMOVE_FAV:
      newState = {
        ...state,
        favs: state.favs.filter((comment) => comment.id !== action.payload),
      };
      addToStorage(newState);
      return newState;
    default:
      return state;
  }
}
