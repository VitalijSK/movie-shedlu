import * as types from '../constants/ActionTypesMovie';
import {mapValues, assign} from 'lodash';

const initialState = {
    movies: [1, 2, 3],
    moviesById: {
      1: {
        id: 1,
        title: 'Джони Инглиш 1',
        img: 'img/1.jpg',
        raiting: '7.1',
        description: 'Theodore Roosevelt Theodore RooseveltTheodore Roosevelt',
        trailer: '1',
        date: '1',
      },
      2: {
        id: 2,
        title: 'Джони Инглиш 2',
        img: 'img/1.jpg',
        raiting: '7.2',
        description: 'Theodore Roosevelt Theodore RooseveltTheodore Roosevelt',
        trailer: '1',
        date: '1',
      },
      3: {
        id: 3,
        title: 'Джони Инглиш 3',
        img: 'img/1.jpg',
        raiting: '7.3',
        description: 'Theodore Roosevelt Theodore RooseveltTheodore Roosevelt',
        trailer: '1',
        date: '1',
      }
    }
  };

  export default function movies(state = initialState, action) {
    switch (action.type) {
  
      case types.OPEM_MOVIE:
        return {
            ...state,
            moviesById: mapValues(state.moviesById, (movie) => {
                return movie.id === action.id ?
                  assign({}, movie, { starred: !movie.starred }) :
                  movie
            })
        }
      case types.LISTS_MOVIE:
        return {
            ...state,
           movies: action.movies
        }
  
      default:
        return state;
    }
  }