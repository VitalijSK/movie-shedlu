import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/header';
import Main from '../components/main';
import { combineReducers } from 'redux';


import { openMovie } from '../actions/MovieActions';
import { connect } from 'react-redux';


import {getMovieSelector} from '../selectors/movies';
import {listsMovie} from '../actions/MovieActions';


class App extends Component {
    componentDidMount() {
        //fetch().then().then(data=> {
        // return this.props.movies(data);   
        //})
        const data = [
             {
              id: 1,
              title: 'Джони Инглиш 1',
              img: 'img/1.jpg',
              raiting: '7.1',
              description: 'Theodore Roosevelt Theodore RooseveltTheodore Roosevelt',
              trailer: '1',
              date: '1',
            },
            {
              id: 2,
              title: 'Джони Инглиш 2',
              img: 'img/1.jpg',
              raiting: '7.2',
              description: 'Theodore Roosevelt Theodore RooseveltTheodore Roosevelt',
              trailer: '1',
              date: '1',
            },
            {
              id: 3,
              title: 'Джони Инглиш 3',
              img: 'img/1.jpg',
              raiting: '7.3',
              description: 'Theodore Roosevelt Theodore RooseveltTheodore Roosevelt',
              trailer: '1',
              date: '1',
            }
        ]
        return this.props.getMovie(data);
    }
  render() {
    return (
        <div>
            <Header />
            <Main 
                moviesCameOut = {
                    this.props.movies
                }
                moviesSoon = {
                    this.props.movies
                }
            />
        </div>
    )
  }
}

export default connect(state => (
    {
        movies: getMovieSelector(state)
    }
),  dispatch => ({
        getMovie: data => dispatch(listsMovie(data))
}))(App)
