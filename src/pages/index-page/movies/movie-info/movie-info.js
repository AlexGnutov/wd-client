import poster1 from "../../../../img/poster1.jpg";
import PropTypes from 'prop-types';

function MovieInfo(props) {
    const {film} = props;

    return (
        <div className="movie__info">
            <div className="movie__poster">
                <img className="movie__poster-image" alt={film.imageText} src={poster1}/>
            </div>
            <div className="movie__description">
                <h2 className="movie__title">{film.title}</h2>
                <p className="movie__synopsis">{film.synopsis}</p>
                <p className="movie__data">
                    <span className="movie__data-duration">{film.duration} мин.</span>
                    <br/>
                    <span className="movie__data-origin">{film.origin}</span>
                </p>
            </div>
        </div>
    )
}

MovieInfo.propTypes = {
    film: PropTypes.object,
}

export default MovieInfo;