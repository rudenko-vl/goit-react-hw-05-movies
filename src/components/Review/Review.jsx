import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieReview } from "../../services/ApiService";
import { HideBtn } from 'components/Cast/Cast.styled';
import { ListReview } from "./Review.styled";

const Review = () => {
    const [reviews, setReview] = useState([]);
    const movieId = useParams().movieId;
    const location = useLocation();

    useEffect(() => {
        getMovieReview(movieId).then(data => {
            return setReview(data.results)
        })
    }, [movieId])

    return (
        <>
            {reviews.length > 0 ?
            (<ListReview>
                    {reviews.map(review => {
                        return (
                            <li key={review.id}>
                                <h2>Author : {review.author}</h2>
                                <div> Content : {review.content}</div>
                            </li>
                        )
                    })}
        </ListReview>)
                : (<p>Not found</p>)}
            <HideBtn to={location?.state ?? `/movies/${movieId}` }>Hide reviews</HideBtn>
        </>
    )

};

export default Review;