import './App.css';
import MoviesList from './MoviesList';
import { useState } from 'react';
import SearchedMovie from './SearchedMovie';

function App() {
  const [movieSearch, setmovieSearch] = useState('');
  const [isSearching, setisSearcing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const inputs = Object.fromEntries(form);

    setmovieSearch(inputs.title);
    setisSearcing(false);
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
      {isSearching ? (
        <MoviesList />
      ) : (
        <SearchedMovie movieTitle={movieSearch} />
      )}
    </main>
  );
}

export default App;
