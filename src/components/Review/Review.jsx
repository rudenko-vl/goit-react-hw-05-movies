import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from "../../services/ApiService";

const Review = () => {
    const [reviews, setReview] = useState([]);
    const movieId = useParams().movieId;

    useEffect(() => {
        getMovieReview(movieId).then(data => {
            return setReview(data.results)
        })
    }, [movieId])

    return (
        <>
            {reviews.length > 0 ?
            (<ul>
                    {reviews.map(review => {
                        return (
                            <li key={review.id}>
                                <h2>Author : {review.author}</h2>
                                <div> Content : {review.content}</div>
                            </li>
                        )
                    })}
        </ul>)
            : (<p>Not found</p>)}
        </>
    )

};

export default Review;