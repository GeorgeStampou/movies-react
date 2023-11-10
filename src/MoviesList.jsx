import Movie from './Movie';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchedMovie from './SearchedMovie';
import APIdata from '../../apiData';

const apiKey = APIdata.apiKey;

const MoviesList = ({ titleInput }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [posterClicked, setPosterClicked] = useState(false);
  const [movieID, setMovieID] = useState(null);
  const apiUri = `http://www.omdbapi.com/?apikey=${apiKey}&s=${titleInput}&type=movie&page=1`;

  useEffect(() => {
    setPosterClicked(false);
    const getMovies = async () => {
      try {
        const response = await axios.get(apiUri);
        const { data } = response;
        const movies = data.Search;
        setMoviesList(movies);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, [titleInput]);

  const handleClick = (e) => {
    console.log(e.currentTarget.id);
    setMovieID(e.currentTarget.id);
    setPosterClicked(true);
  };

  return (
    <>
      {posterClicked ? (
        <SearchedMovie movieID={movieID} />
      ) : (
        <div className='movies-list'>
          {moviesList.map((movie) => {
            return (
              <div
                key={movie.imdbID}
                className='movie-wrapper'
                id={movie.imdbID}
                onClick={handleClick}
              >
                <Movie movieID={movie.imdbID} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default MoviesList;
