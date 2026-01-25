const MovieCard = ({movieProp}) => {
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img alt={movieProp.title} src={`https://image.tmdb.org/t/p/w500${movieProp.poster_path}`}/>
                <button className="movie-liked">Like</button>
            </div>
            <span>{movieProp.title}</span>
        </div>
    )
}

export default MovieCard;