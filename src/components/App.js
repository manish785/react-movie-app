import {data} from "../data";
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import { useStore } from "react-redux"; 
import {addMovies} from '../actions/index'


class App extends React.Component {
  componentDidMount (){
    // make api call
    // dispatch action
    const {store} = this.props;

    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    })

    store.dispatch(addMovies(data));
    console.log('STATE', this.props.store.getState());

  }

  isMovieFavourite = (movie) =>{
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if(index !== -1){
      // found the movie
      return true;
    }else{
      return false;
    }
 }

  render(){ 
      const { list } = this.props.store.getState(); // {list: [], favourites: []}
      console.log('RENDER', this.props.store.getState());

      return (
        <div className="App">
          <Navbar/>
          <div className="main">
            <div className="tabs">
              <div className="tab">Movie</div>
              <div className="tab">Favourite</div>
            </div>

            <div className="list">
              {list.map((movie, index) => (
                <MovieCard 
                  movie={movie} 
                  key={`movies-${index}`} 
                  dispatch={this.props.store.dispatch} 
                  isFavourite={this.isMovieFavourite(movie)}
                />
              ))}
            </div>
          </div>
        </div>
  
  );
  }
}

export default App;
