import MovieInfo from "./movie-info/movie-info";
import MovieSeances from "./movie-seances/MovieSeances";
import {useSelector} from "react-redux";

function Movies() {
    const {films} = useSelector(state => state.app);

    return (
        <>
            {films.map((film) =>
                <section key={film.id} className="movie">
                    <MovieInfo film={film}/>
                    <MovieSeances film={film}/>
                </section>
            )}
        </>
    )
}

export default Movies;