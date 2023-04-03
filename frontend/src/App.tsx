import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './blah';
import MovieList from './Movies';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopBanner saying="Joel's Movie Website" />
      <TopBanner des="This is a website where you can find the database of Joel Hilton's Movie Collection.  You can also find sick podcast here." />
      <MovieList />
    </div>
  );
}

export default App;
