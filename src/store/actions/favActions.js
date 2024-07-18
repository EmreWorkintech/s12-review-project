export const ADD_FAV = "Favorilere ekle";
export const REMOVE_FAV = "Favorilerden çıkar";

export function addFav(comment) {
  return {
    type: ADD_FAV,
    payload: comment,
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}
