import { AppBar, Toolbar, TextField, IconButton, Box } from '@mui/material';
import { Sort as SortIcon, LightMode as LightModeIcon, DarkMode as DarkModeIcon } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ onSearchChange, onSortChange, changetheme, theme }) {
  const [sortOrder, setSortOrder] = useState('asc');

  //pass the search term to the parent component
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value.toLowerCase());
  };

  //pass the sort order to the parent component
  const handleSort = () => {
    setSortOrder((prevOrder) => prevOrder === 'asc' ? 'desc' : 'asc');
    onSortChange(sortOrder);
  };

  return (
    <AppBar position="fixed" sx={{ width: '100%', zIndex: 1100 }}>
      <Toolbar sx={{ gap: 2, px: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Movies</Link>
          <Link to="/edit" style={{ color: 'white', textDecoration: 'none' }}>Edit</Link>
        </Box>

        <TextField
          size="small"
          variant="outlined"
          placeholder="Search movies..."
          onChange={handleSearchChange}
          sx={{
            backgroundColor: 'white',
            borderRadius: 1,
            width: '250px'
          }}
        />

        <IconButton 
          color="inherit" 
          onClick={handleSort}
          sx={{ 
            ml: 'auto',
            transform: sortOrder === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s'
          }}
        >
          <SortIcon />
        </IconButton>

        <IconButton 
          color="inherit" 
          onClick={changetheme}
          sx={{ ml: 1 }}
        >
          {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  changetheme: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
};
