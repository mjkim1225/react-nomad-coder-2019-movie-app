import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return (
        <div class="movies__movie">
            <h3 class="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p class="movie_summary">{summary}</p>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string,
}

export default Movie;