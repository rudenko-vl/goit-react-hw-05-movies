import { useEffect, useState } from 'react';
import { getTrendingMovies } from "../../services/ApiService";
import { List, Item, Img, Title, MovieLink } from "./HomePage.styled";

function HomePage() {
    const [moviesList, setMoviesList] = useState([]);
    const imgUrl = 'https://image.tmdb.org/t/p/w400';
    const notMovieImg = 'https://cdn.pixabay.com/photo/2013/07/12/12/45/clapperboard-146180_960_720.png';
    useEffect(() => {
        getTrendingMovies().then((data) => {
            return setMoviesList(data.results)
        })
    }, [setMoviesList]);
    return (
        
            <List>
            {moviesList && moviesList.map(movie => {
                return (
                    movie.title && (
                        <Item key={movie.id}>
                            <MovieLink to={`/movies/${movie.id}`} state={'/'}>
                                <Img src={movie.poster_path? `${imgUrl}${movie.poster_path}`: notMovieImg} alt={movie.id} />
                                <Title>{movie.title}</Title>
                            </MovieLink>
                        </Item>
                  )  
                )
            })}
        </List>
        
    )

};

export default HomePage;