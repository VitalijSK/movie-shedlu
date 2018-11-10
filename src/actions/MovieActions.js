import * as types from '../constants/ActionTypesMovie';

export function addMovie(id) {
    return {
      type: types.ADD_MOVIE,
      id
    };
  }
export function listsMovie(movies) {
    return {
      type: types.LISTS_MOVIE,
      movies
    };
  }
  
export function deleteMovie(id) {
    return {
        type: types.DELETE_MOVIE,
        id
    };
}
  
export function openMovie(id) {
    return {
        type: types.OPEM_MOVIE,
        id
    };
}
