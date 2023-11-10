import { useState, useEffect } from 'react';
import axios from 'axios';
import APIdata from '../../apiData';

const apiKey = APIdata.apiKey;

const SearchedMovie = ({ movieID }) => {
  const apiUri = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieID}&plot=full`;

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(apiUri);
        const { data } = response;
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getMovie();
  }, [movieID]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const {
    Title: title,
    Released: released,
    Runtime: time,
    Plot: plot,
    Writer: writer,
    Director: director,
    Genre: genre,
    Actors: actors,
    Poster: poster,
    imdbRating,
    imdbVotes,
  } = movie;

  return (
    <div className='search-movie'>
      <div className='full-info'>
        <div className='search-head'>
          <div className='head-left'>
            <h1>{title}</h1>
            <h3>
              {released}, Runtime: {time}
            </h3>
            <h3>
              <span>Writen by:</span> {writer}
            </h3>
            <h3>
              <span>Directed by:</span> {director}
            </h3>
          </div>
          <div className='head-right'>
            <h3>
              <span>IMDB Rating:</span> {imdbRating}
            </h3>
            <h3>
              <span>Number of IMDB votes:</span> {imdbVotes}
            </h3>
          </div>
        </div>
        <div className='search-body'>
          <div className='search-img'>
            <img src={poster} alt={title} />
          </div>
          <div className='search-info'>
            <div className='overview'>
              <h2>Overview</h2>
              <p>{plot}</p>
            </div>
            <div className='more-info'>
              <h2>Starring</h2>
              <p>{actors}</p>
              <h2>Genre</h2>
              <p>{genre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchedMovie;
