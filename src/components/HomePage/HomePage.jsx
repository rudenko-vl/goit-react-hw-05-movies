import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from "../../services/ApiService";
import { List } from "./HomePage.styled";

function HomePage() {
    const [moviesList, setMoviesList] = useState([]);
    useEffect(() => {
        getTrendingMovies().then((data) => {
            return setMoviesList(data.results)
        })
    }, [setMoviesList]);
    return (
        <main>
            <List>
            {moviesList && moviesList.map(movie => {
                return (
                    movie.title && (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} state={'/'}>
                                <p>{movie.title}</p>
                                {/* <img src={movie.poster_path} alt={movie.id} /> */}
                            </Link>
                            

                        </li>
                  )  
                )
            })}

        </List>
        </main>
    )

};

export default HomePage;