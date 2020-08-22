import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import SearchContent from '../components/Search';
import Table from '../components/Table';
import PaginationItem from '../components/pagination';

const itemCountPerPage = 5;
const KEY = 'apikey=e37837c6';
const BASE_URL = 'http://www.omdbapi.com/';

const Home = () => {
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState();
  const [tableData, setTableData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [requestPageNumber, setRequestPageNumber] = useState(1);

  const fetchMovieInfo = (movieTitle = 'pokemon', page = 1, callback) => {
    fetch(`${BASE_URL}/?${KEY}&s=${movieTitle}&page=${page}`)
      .then((res) => res.json())
      .then((result) => {
        const { Search, totalResults } = result;
        setLoading(true);
        if (Search) {
          setTotalItemCount(totalResults);
          if (typeof callback !== 'undefined') {
            callback(Search);
          } else {
            setTableData(Search.slice(0, 5));
          }
        }
        setLoading(false);
      });
  };

  const handlePageChange = (pageNumber) => {
    const isEven = pageNumber % 2 === 0;
    const tempPageNumber = isEven ? pageNumber : pageNumber + 1;
    const requestPage = tempPageNumber / 2;
    setActivePage(pageNumber);
    setRequestPageNumber(requestPage);
  };

  const handleSearch = (e) => {
    setLoading(true);
    setTitle(e);
    fetchMovieInfo(e);
  };

  useEffect(() => {
    fetchMovieInfo(title, requestPageNumber, (data) => {
      const isEven = activePage % 2 === 0;
      setTableData(isEven ? data.slice(5, 10) : data.slice(0, 5));
    });
  }, [activePage]);

  return (
    <div className="container">
      <div className="search-content my-5">
        <h2 className="search-content__title">Movie</h2>
        <SearchContent handleSearch={handleSearch} />
      </div>
      {loading ? (
        <ReactLoading
          type="spinningBubbles"
          width={18}
          height={18}
          color="#2f5bea"
        />
      ) : tableData.length > 0 ? (
        <Table data={tableData} />
      ) : (
        'Content not found.'
      )}
      <PaginationItem
        pageCount={Math.ceil(totalItemCount / itemCountPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default Home;
