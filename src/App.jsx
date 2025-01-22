import { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import MovieDetails from './Components/MovieDetails';
import data from './Data.jsx';
import Edit from './Components/Edit.jsx';
import Box from '@mui/material/Box';

function App() {

  //uplifted the movie state and passed it to all components to maintain the state
  const [filteredMovies, setFilteredMovies] = useState(data);
  const [movies, setMovies] = useState(data); //new state to store the original data and update it
  const [theme, setTheme] = useState('dark');

  //search 
  const handleSearchChange = (searchTerm) => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  //sort
  const handleSortChange = (sortOrder) => {
    const sortedMovies = [...filteredMovies].sort((a, b) =>
      sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
    setFilteredMovies(sortedMovies);
  };

  //theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const update = (updatedMovies) => {
    setFilteredMovies(updatedMovies);
    setMovies(updatedMovies);
  }

  return (
      <div style={{ backgroundColor: theme === 'dark' ? '#000' : '#fff', color: theme === 'dark' ? '#fff' : '#000', minHeight: '100vh', transition: 'all 0.3s ease' }}>
        <Router>
          <Navbar
            onSearchChange={handleSearchChange}
            onSortChange={handleSortChange}
            changetheme = {toggleTheme}
            theme={theme}
          />
          <Box sx={{ mt: '64px' }}>
            <Routes>
              <Route path="/" element={<Movies theme={theme} allmovies={filteredMovies} />} />
              <Route path="/movie/:id" element={<MovieDetails allmovies={filteredMovies} />} />
              <Route path="/edit" element={<Edit theme={theme} allmovies={filteredMovies} updateFunction={update} />} />
            </Routes>
          </Box>
        </Router>
      </div>
  );
}

export default App;
