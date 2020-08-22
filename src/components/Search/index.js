import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

const SearchContent = ({ handleSearch }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');

  const handleTitleSearch = (e) => {
    setTitle(e.target.value);
  };

  const handleOnClick = () => {
    setLoading(true);
    setTimeout(() => {
      handleSearch(title);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="search-content__form row">
      <div className="col-8">
        <Input
          placeholder="name"
          onChange={handleTitleSearch}
          value={title}
        />
      </div>
      <div className="col-4">
        <Button
          text="search"
          loading={loading}
          onClick={handleOnClick}
          className="search-button"
        />
      </div>
    </div>
  );
};

export default SearchContent;
