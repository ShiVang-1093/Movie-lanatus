import { useParams } from "react-router-dom";
import { Typography, Box, Grid2, Divider, Button } from "@mui/material";
import PropTypes from "prop-types";

export default function MovieDetails({ allmovies }) {
  const { id } = useParams();

  // Find the movie directly from the props using the id
  const movie = allmovies.find((movie) => movie.id === parseInt(id));

  if (!movie) return <Typography>Loading movie details...</Typography>;

  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid2
        container
        spacing={4}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Grid2
          item
          xs={12}
          sm={6}
          md={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={movie.poster_path}
            alt={movie.title}
            style={{
              width: "100%",
              maxHeight: "300px",
              borderRadius: "8px",
              boxShadow: 3,
            }}
          />
        </Grid2>

        <Grid2 item xs={12} sm={6} md={8}>
          <Typography variant="h3" gutterBottom align="center" color="primary.main">
            {movie.title}
          </Typography>

          <Typography variant="body1" paragraph>
            {movie.overview}
          </Typography>

          <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
            <strong>Release Date:</strong> {movie.release_date}
          </Typography>

          <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
            <strong>Average Rating:</strong> {movie.vote_average} ({movie.vote_count} votes)
          </Typography>

          <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
            <strong>Duration:</strong> {movie.duration ? `${movie.duration} minutes` : "N/A"}
          </Typography>

          <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
            <strong>Cast:</strong> {movie.cast ? movie.cast.join(", ") : "N/A"}
          </Typography>

          <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
            <strong>Director:</strong> {movie.director ? movie.director : "N/A"}
          </Typography>

          <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
            <strong>Producer:</strong> {movie.producer ? movie.producer : "N/A"}
          </Typography>

          <Box sx={{ marginTop: 4, display: "flex", justifyContent: "center" }}>
            <Button
              href={movie.trailer}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                backgroundColor: "primary.main",
                color: "white",
                "&:hover": { backgroundColor: "primary.dark" },
              }}
              variant="contained"
            >
              Watch Trailer
            </Button>
          </Box>
        </Grid2>
      </Grid2>

      <Divider sx={{ marginY: 4 }} />
    </Box>
  );
}

MovieDetails.propTypes = {
  allmovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
      duration: PropTypes.number,
      cast: PropTypes.arrayOf(PropTypes.string),
      director: PropTypes.string,
      producer: PropTypes.string,
      trailer: PropTypes.string.isRequired,
    })
  ).isRequired,
};
