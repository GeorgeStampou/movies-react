import './App.css';
import MoviesList from './MoviesList';
import { useState } from 'react';

function App() {
  const [movieSearch, setMovieSearch] = useState('Star Wars');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const inputs = Object.fromEntries(form);

    setMovieSearch(inputs.title);
  };

  return (
    <main>
      <div className='search'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Search movie'
          />
          <button type='submit'>Search</button>
        </form>
      </div>
      <MoviesList titleInput={movieSearch} />
    </main>
  );
}

export default App;
