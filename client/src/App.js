import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Links, useNavigate } from 'react-router-dom';

import { AppContext } from './AppContext';

import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';

function App() {

  let [ movies, setMovies ] = useState([]);

  useEffect(() => {
    
    // fetch('http://localhost:3001/')
    // .then(response => response.json())
    // .then(data => {
    //   setMovies(data);
    // })
    // .catch(error => {
    //   console.log("error: ", error);
    // });

    const hardcodedMovies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'}
    ]
  
    setMovies(hardcodedMovies);
  }, [])



  const gettersSetters = {
    movies,
    setMovies
  }

  return (
    <>
      <AppContext.Provider value={ gettersSetters }>
        <Router>
          <Navbar/>
          <h1 className="text-center m-8 text-6xl font-extrabold">The Movie List</h1>
          { console.log(movies) }
          <Search/>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
