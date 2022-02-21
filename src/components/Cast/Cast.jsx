import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieCredits } from "../../services/ApiService";
import { List, Item, Img, Title, HideBtn } from "./Cast.styled";

const Cast = () => {
    const imgUrl = 'https://image.tmdb.org/t/p/w300';
    const [actors, setActors] = useState([]);
    const location = useLocation();
    const movieId = useParams().movieId;
    const notPhoto = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';

    useEffect(() => {
        getMovieCredits(movieId).then((data) => {
            setActors(data.cast)
        })
    }, [movieId])

    return (
        <>
            {actors && (
                <List>
                    {actors.map(actor => {
                        return (
                            <Item key={actor.id}>
                                <Img src={actor.profile_path? `${imgUrl}${actor.profile_path}`: notPhoto} alt={actor.name} />
                                <div>
                                <Title>name: {actor.name}</Title>
                                <Title>character: {actor.character}</Title>
                                </div>
                            </Item>
                        )
                    } )}
                </List>
            )}
                <HideBtn to={location?.state ?? `/movies/${movieId}` }>Hide cast</HideBtn>
            
        </>
    )

};

export default Cast;