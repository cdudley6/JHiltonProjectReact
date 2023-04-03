import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './blah';
import MovieList from './Movies';

function App() {
  return (
    <div className="App">
      <TopBanner saying="Joel's Movie Website" />
      <MovieList />
    </div>
  );
}

export default App;
