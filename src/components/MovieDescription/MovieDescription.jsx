import { useLocation } from 'react-router-dom';
import { Wrapper, Img, WrapInfo, MovieTitle, Span, Text, Title, SpanScore, ItemGenres } from "./MovieDescription.styled";
import { GoBackBtn } from "./MovieDescription.styled";
const MovieDescription = ({ movie }) => {
    const imgUrl = 'https://image.tmdb.org/t/p/original';
    const notMovieImg = 'https://cdn.pixabay.com/photo/2013/07/12/12/45/clapperboard-146180_960_720.png';

    const location = useLocation();

    return (
        <Wrapper>
            
            <Img src={movie.backdrop_path? `${imgUrl}${movie.backdrop_path}`: notMovieImg} alt={movie.title} />
            
            <WrapInfo>
                <GoBackBtn to={location?.state ?? '/'}>⬅ Go back</GoBackBtn>
                <MovieTitle><Span>Movie title:</Span> {movie.original_title} ({movie.release_date.substring(0,4)})</MovieTitle>
                <Title>
                    User Score: <SpanScore>{movie.vote_average * 10}%</SpanScore>
                </Title>
                   <Title>Overviev</Title>
                 <Text> {movie.overview}</Text>
                   <Title>Genres</Title>
                    <ul>
                    {movie.genres.map(genner => {
                        return <ItemGenres key={genner.id}>✔ {genner.name}</ItemGenres>;
                    })}
                    </ul>
            </WrapInfo>
        </Wrapper>
    )

};

export default MovieDescription;