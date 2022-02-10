import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from "../../services/ApiService";
import { List, Item, Img, Title } from "./HomePage.styled";

function HomePage() {
    const [moviesList, setMoviesList] = useState([]);
    const imgUrl = 'https://image.tmdb.org/t/p/w400';
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
                        <Item key={movie.id}>
                            <Link to={`/movies/${movie.id}`} state={'/'}>
                                <Img src={`${imgUrl}${movie.poster_path}`} alt={movie.id} />
                                <Title>{movie.title}</Title>
                            </Link>
                            

                        </Item>
                  )  
                )
            })}

        </List>
        </main>
    )

};

export default HomePage;