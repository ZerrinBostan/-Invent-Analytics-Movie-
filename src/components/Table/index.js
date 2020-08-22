import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Table = ({ data }) => {
  const handleSort = (a, b) => {
    const yearA = Number(a.Year.split('–')[0]);
    const yearB = Number(b.Year.split('–')[0]);
    return yearA - yearB;
  };

  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">MOVIE NAME </th>
          <th scope="col">PUBLISHED DATE</th>
          <th scope="col">IMDB ID </th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0
          && data.sort(handleSort).map((item) => {
            const { Title, Year, imdbID } = item;
            return (
              <tr>
                <td>
                  <Link to={imdbID}>{Title}</Link>
                </td>
                <td>{Year}</td>
                <td>{imdbID}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
  }).isRequired,
};

export default Table;
