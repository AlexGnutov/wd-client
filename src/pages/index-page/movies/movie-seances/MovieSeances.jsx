import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {minutesToTimeString} from "../../../../utils/utils";
import {setTicketInfo} from "../../../../store/slices/ticket-config-slice";

function MovieSeances(props) {
    const {halls, seances} = useSelector(state => state.app);
    const {film} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const filmSeances = seances.filter(seance => seance.filmId === film.id);

    const openHallPage = (hall, seance) => {
        dispatch(setTicketInfo({
            seance,
        }));
        navigate(`/seance/${seance.id}`);
    }

    return (
        <div className="movie-seances__hall">
            {
                halls.map((hall) => {
                    const hallFilmSeances = filmSeances.filter(seance => seance.hallId === hall.id)
                    return hallFilmSeances.length > 0 ?
                        <div key={hall.id}>
                            <h3 className="movie-seances__hall-title">{hall.title}</h3>
                            <ul className="movie-seances__list">
                                {hallFilmSeances.map(seance =>
                                    <li key={seance.id} className="movie-seances__time-block">
                                        <Link
                                            className="movie-seances__time"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                openHallPage(hall, seance)
                                            }}
                                        >
                                            {minutesToTimeString(seance.startTime)}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                        : null;
                })
            }
        </div>
    )
}

MovieSeances.propTypes = {
    film: PropTypes.any,
}

export default MovieSeances;