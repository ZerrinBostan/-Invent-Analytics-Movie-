import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ data }) => {
  const {
    Poster, Title, Runtime, Type, Director, Actors, imdbRating,
  } = data;

  const [imageSrc, setImageSrc] = useState(Poster);

  const handleImageError = () => {
    setImageSrc('/default-poster.png');
  };

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={imageSrc}
        onError={handleImageError}
        alt="movie-img"
      />
      <ul className="list-group list-group-flush">
        <h2 className="card-title">{Title}</h2>
        <li className="list-group-item">Time: {Runtime}</li>
        <li className="list-group-item">Type: {Type}</li>
        <li className="list-group-item">Director: {Director}</li>
        <li className="list-group-item">Actors: {Actors}</li>
        <li className="list-group-item">imdbRating: {imdbRating}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.arrayOf({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Runtime: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired,
  }).isRequired,
};
export default Card;
