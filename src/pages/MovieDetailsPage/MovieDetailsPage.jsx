import { useState, useEffect } from 'react';
import { useParams, Outlet} from 'react-router-dom';
import { getMovieDetails } from "../../services/ApiService";
import MovieDescription from "../../components/MovieDescription/MovieDescription";
import { List, LinkNav } from "./MovieDetailsPage.styled";

const MovieDetailsPage = () => {

    const [movie, setMovie] = useState(false);
    const { movieId } = useParams();
    
    
    useEffect(() => {
    getMovieDetails(movieId).then(( data ) => {
      return setMovie(data);
    });
    }, [movieId]);
    
    return (
        <>
            
            {movie && (
          <>
            <MovieDescription movie={movie} />
            <h3>Additional information</h3>
            <List>
              <li>
                <LinkNav to="cast">Cast</LinkNav>
              </li>
              <li>
                <LinkNav to="reviews">Reviews</LinkNav>
              </li>
            </List>
            <Outlet/>
                </>
            )}
        </>
    )
};

export default MovieDetailsPage;