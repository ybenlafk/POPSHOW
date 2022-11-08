import React from "react";

const MovieCard=({mv1})=>{
  return(
    <div className="movie">
            <div>
            <p>{mv1.Year}</p>
            </div>
            <div>
              <img src={mv1.Poster !== 'N/A' ? mv1.Poster :"https://via.placeholder.com/400"} alt={mv1.Title}/>
            </div>
            <div>
              <span>{mv1.Type}</span>
              <h3>{mv1.Title}</h3>
            </div>
          </div>
  );
}
export default MovieCard;