import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Card from '../components/Card';

const KEY = 'apikey=e37837c6';
const BASE_URL = 'http://www.omdbapi.com/';

const MovieDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const fetchMovieData = () => {
    setLoading(true);
    fetch(`${BASE_URL}/?${KEY}&i=${id}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovieData();
  }, [id]);

  return (
    <div className="container">
      <div className="search-content my-5">
        {loading ? (
          <ReactLoading
            type="spinningBubbles"
            width={18}
            height={18}
            color="#2f5bea"
          />
        ) : (
          <Card data={data} />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
