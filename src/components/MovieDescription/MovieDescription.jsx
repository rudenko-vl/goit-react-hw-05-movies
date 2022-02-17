const MovieDescription = ({movie}) => {
    const imgUrl = 'https://image.tmdb.org/t/p/original';
    const notMovieImg = 'https://cdn.pixabay.com/photo/2013/07/12/12/45/clapperboard-146180_960_720.png';
    return (
        <>
        <div>
            <img src={movie.backdrop_path? `${imgUrl}${movie.backdrop_path}`: notMovieImg} alt={movie.title} />
            </div>
            <div>
                <h2>{movie.original_title}</h2>
            </div>
        </>
    )

};

export default MovieDescription;