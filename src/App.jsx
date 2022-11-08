import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

import "./App.css";

const API_URL='http://www.omdbapi.com?apikey=b6003d8a'

const App =()=>{

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies= async (title)=>{
     const response = await fetch(`${API_URL}&s=${title}`);
     const data = await response.json();
     setMovies(data.Search);
  }

  useEffect(()=>{
searchMovies('fury')
  },[])
  return(
    <div className="app">
        <h1>SHOWIDE</h1>
        <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
        </div>
        {
          movies.length > 0
          ? (
            <div className="container">
              {movies.map((movie)=>(
                  <MovieCard mv1={movie}/>
              ))}
            </div>
          ):(
            <div className="empty">
              <h1>No movies found</h1>
            </div>
          )
        }
        
    </div>
  );
}

export default App;