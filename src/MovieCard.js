import "./MovieCard.css";

const MovieCard = ({title, rating, releaseDate, director, url}) => {
    return (
        <div className='movie-card'>
            <img src={url} alt="movie-img" className='movie-img' />
            <div className='info'>
                <div className='info-container heading'>
                    <h3> {title} </h3>
                    <p> <span className='rating'> {rating} </span>/10</p>
                </div>
                <div className='info-container sub-heading'>
                    <p>Release Date</p>
                    <p>Director</p>
                </div>
                <div className='info-container details'>
                    <p> {releaseDate} </p>
                    <p> {director} </p>
                </div>
            </div>
        </div>
    )
}
export default MovieCard;