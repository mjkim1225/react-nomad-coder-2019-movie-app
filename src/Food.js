import React from "react";
import PropTypes from "prop-types";

function Food ({name, pic, rating}) {
    return (
        <div>
            <h3>i love {name}</h3>
            <h4>{rating} / 5</h4>
            <img src={pic} alt={name} />
        </div>
    )
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

export default Food
;
