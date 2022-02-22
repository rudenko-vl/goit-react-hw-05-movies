import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieReview } from "../../services/ApiService";
import { HideBtn } from 'components/Cast/Cast.styled';
import { ListReview } from "./Review.styled";
import Loading from 'components/Loading/Loading';

const Review = () => {
    const [reviews, setReview] = useState([]);
    const [loading, setLoading] = useState(false);
    const movieId = useParams().movieId;
    const location = useLocation();
    const notReviews = 'https://www.cheltv.ru/upload/news/2015/08-Aug/06/%D1%81%D0%BC%D0%B0%D0%B9%D0%BB.jpg'

    useEffect(() => {
        setLoading(true)
        getMovieReview(movieId).then(data => {
            window.scrollBy({ top: 1000, behavior: 'smooth' });
            setLoading(false);
            return setReview(data.results)
        })
    }, [movieId]);

    return (
        <>
            {loading && <Loading/>}
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
                : (<div style={{ width: "200px", height: "300px" }}>
                    <p style={{textAlign: "center", fontWeight: "700"}}>No reviews</p>
                    <img src={notReviews} alt="not found" />
                </div>)}
            <HideBtn to={location?.state ?? `/movies/${movieId}` }>Hide reviews</HideBtn>
        </>
    )

};

export default Review;