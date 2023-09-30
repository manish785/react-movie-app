import {data} from "../data";
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import { useStore } from "react-redux"; 


class App extends React.Component {
  componentDidMount (){
    // make api call
    // dispatch action
    const {store} = this.props;

    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    })

    store.dispatch({
      type : 'ADD_MOVIES',
      movies : data
    })
  }

  render(){ 
      const movies = this.props.store.getState();
      return (
        <div className="App">
          <Navbar/>
          <div className="main">
            <div className="tabs">
              <div className="tab">Movie</div>
              <div className="tab">Favourite</div>
            </div>

            <div className="list">
              {movies.map((movie, index) => (
                <MovieCard movie={movie} key={`movies-${index}`}/>
              ))}
            </div>
          </div>
        </div>
  
  );
  }
}

export default App;
