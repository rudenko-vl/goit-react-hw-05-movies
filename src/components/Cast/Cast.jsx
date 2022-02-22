import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieCredits } from "../../services/ApiService";
import { List, Item, Img, Title, HideBtn } from "./Cast.styled";
import Loading from 'components/Loading/Loading';

const Cast = () => {
    const imgUrl = 'https://image.tmdb.org/t/p/w300';
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const movieId = useParams().movieId;
    const notPhoto = 'http://zornet.ru/_fr/19/9855749.png';

    useEffect(() => {
        setLoading(true)
        getMovieCredits(movieId).then((data) => {
            setActors(data.cast);
            setLoading(false);
            window.scrollBy({ top: 800, behavior: 'smooth' });
        })
    }, [movieId])

    return (
        <>
            {loading && <Loading/>}
            {actors && (
                <List>
                    {actors.map(actor => {
                        return (
                            <Item key={actor.id}>
                                <Img src={actor.profile_path? `${imgUrl}${actor.profile_path}`: notPhoto} alt={actor.name} />
                                <div style={{marginTop: "auto", padding: "7px",}}>
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