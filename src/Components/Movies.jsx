import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button } from "@mui/material";


export default function Movies({ allmovies, theme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        padding: 4,
      }}
    >
      <Grid container spacing={5}>
        {allmovies && allmovies.length > 0 ? (
          allmovies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <Card
                sx={{
                  width: 300,
                  height: 450,
                  border: theme === 'light' ? '5px solid #000' : 'none',  // Border for light mode
                  borderRadius: theme === 'light' ? 5 : 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt={movie.title}
                  height="200"
                  image={movie.poster_path}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {movie.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {movie.overview}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={`/movie/${movie.id}`}
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "primary.main",
                      borderColor: "primary.main", 
                      borderRadius: "5px",
                      padding: "8px 16px",
                      fontWeight: "bold",
                    }}
                  >
                    Know More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No movies found</Typography>
        )}
      </Grid>
    </Box>
  );
}

Movies.propTypes = {
  allmovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
  theme: PropTypes.string.isRequired,
};
