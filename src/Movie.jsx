import { useState, useEffect } from 'react';
import axios from 'axios';
import APIdata from '../../apiData';

const apiKey = APIdata.apiKey;

const Movie = ({ movieID }) => {
  const apiUri = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieID}`;

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(apiUri);
        const { data } = response;
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getMovie();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const {
    Title: title,
    Poster: poster,
    Year: year,
    Plot: plot,
    imdbRating,
    Actors: actors,
  } = movie;

  return (
    <>
      <div className='poster'>
        <img src={poster} alt={title} />
        <div className='movie-info'>
          <p>{plot}</p>
          <p>
            Starring: {actors}
            <br />
            IMDB rating: {imdbRating}
          </p>
        </div>
      </div>
      <div className='movie-title'>
        <h2>
          {title} ({year})
        </h2>
      </div>
    </>
  );
};
export default Movie;
