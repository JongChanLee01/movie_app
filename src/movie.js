import React from "react";
import PropTypes from "prop-types";

function Movie({year, title, summary, poster, genres}){
    return (
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">{genre}</li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
      </div>
    );
}
// const summary = asdfqwera sdfqu ewoiruopq
// summary.length -->summary에 들어가 있는 데이터의 길이가 나옴
// summary.slice( 0, 10) --> summary.slice( 시작점, 10개(끝점) ) 0 1 2 3 4 5 6 7 8 9

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  // arrayOf는 component에 객체 배열을 전달하기 위함
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;