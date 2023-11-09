import './App.css';
import MoviesList from './MoviesList';

function App() {
  return (
    <main>
      <div className='search'>
        <input type='text' name='title' id='title' placeholder='Search movie' />
        <button type='button'>Search</button>
      </div>
      <MoviesList />
    </main>
  );
}

export default App;
