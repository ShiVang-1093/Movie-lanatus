import { useState } from "react";
import { Box, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    editable: true,
  },
  {
    field: "director",
    headerName: "Director",
    width: 200,
    editable: true,
  },
  {
    field: "producer",
    headerName: "Producer",
    width: 200,
    editable: true,
  },
  {
    field: "vote_count",
    headerName: "Vote Count",
    type: "number",
    width: 150,
    editable: true,
  },
];

const EditMovies = ({ allmovies, updateFunction, theme }) => {

  const movieData = allmovies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    director: movie.director,
    producer: movie.producer,
    vote_count: movie.vote_count,
  }));

  const [rows, setRows] = useState(movieData);

  const processRowUpdate = (newRow, oldRow) => {
    const updatedRows = rows.map((row) => (row.id === oldRow.id ? newRow : row));

    const newMovieData = allmovies.map((movie) => {
      if (movie.id === oldRow.id) {
        return {
          ...movie,
          title: newRow.title,
          director: newRow.director,
          producer: newRow.producer,
          vote_count: newRow.vote_count,
        };
      }
      return movie;
    });

    setRows(updatedRows);
    updateFunction(newMovieData);
    return newRow;
  };

  return (
    <Box
        sx={{
            minHeight: `calc(100vh - 64px)`,
            backgroundColor: theme === 'dark' ? 'black' : 'white',
            width: "100%",
        }}
    >

      <Container sx={{ pt: 3, pb: 3 }}>
        <DataGrid
          sx={
            { background: "white",
            border: theme === 'light' ? '5px solid #000' : 'none',  // Border for light mode
            borderRadius: 1,
            }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          processRowUpdate={processRowUpdate}
        />
      </Container>
    </Box>
  );
};

EditMovies.propTypes = {
  allmovies: PropTypes.array.isRequired, 
  updateFunction: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
};

export default EditMovies;
