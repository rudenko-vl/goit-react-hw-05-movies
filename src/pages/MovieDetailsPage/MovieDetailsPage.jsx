import { useState, useEffect } from 'react';
import { useParams, Outlet} from 'react-router-dom';
import { getMovieDetails } from "../../services/ApiService";
import MovieDescription from "../../components/MovieDescription/MovieDescription";
import { List, LinkNav } from "./MovieDetailsPage.styled";
import Loading from 'components/Loading/Loading';

const MovieDetailsPage = () => {

    const [movie, setMovie] = useState(false);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    
    
  useEffect(() => {
      setLoading(true);
    getMovieDetails(movieId).then((data) => {
      setLoading(false);
      return setMovie(data);
    });
    }, [movieId]);
    
    return (
        <>
            {loading && <Loading/>}
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