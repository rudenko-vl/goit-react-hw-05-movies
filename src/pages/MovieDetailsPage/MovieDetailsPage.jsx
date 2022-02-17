import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, Link, useLocation, } from 'react-router-dom';
import { getMovieDetails } from "../../services/ApiService";
import MovieDescription from "../../components/MovieDescription/MovieDescription";

const MovieDetailsPage = () => {

    const [movie, setMovie] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    
    useEffect(() => {
    getMovieDetails(movieId).then(( data ) => {
      return setMovie(data);
    });
    }, [movieId]);
    
    return (
        <>
            <button type='button'>
                <Link to={location?.state ?? '/'}>Go back</Link>
            </button>
            {movie && (
                <>
                    <MovieDescription movie={movie} />
                    <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink to="cast">cast </NavLink>
              </li>
              <li>
                <NavLink to="reviews">reviews </NavLink>
              </li>
            </ul>
            <Outlet/>
                </>
            )}
        </>
    )
};

export default MovieDetailsPage;