import Movie from './Movie';
import axios from 'axios';
import { useState, useEffect } from 'react';

const apiKey = '4b09546b';
const apiUri = `http://www.omdbapi.com/?apikey=${apiKey}&s='Star Wars'&type=movie&page=1`;

// const moviesList = [
//   {
//     id: 1,
//     title: 'Cars',
//     url: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg',
//     year: '2006',
//     imdbRating: '7.2',
//   },
//   {
//     id: 2,
//     title: 'Cars 2',
//     url: 'https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_SX300.jpg',
//     year: '2011',
//     imdbRating: '6.2',
//   },
//   {
//     id: 3,
//     title: 'Cars 3',
//     url: 'https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@._V1_SX300.jpg',
//     year: '2017',
//     imdbRating: '6.7',
//   },
// ];

const MoviesList = () => {
  const [moviesList, setmoviesList] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(apiUri);
        const { data } = response;
        const movies = data.Search;
        // console.log(movies);
        setmoviesList(movies);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);
  // console.log(moviesList);
  return (
    <div className='movies-list'>
      {moviesList.map((movie) => {
        return (
          <div key={movie.imdbID} className='movie-wrapper'>
            <Movie movieID={movie.imdbID} />
          </div>
        );
      })}
    </div>
  );
};
export default MoviesList;
