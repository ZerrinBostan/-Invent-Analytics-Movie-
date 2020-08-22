import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const PaginationItem = ({
  pageCount,
  initialPage = 1,
  pageRangeDisplayed = 5,
  marginPagesDisplayed = 1,
  onPageChange,
  ...rest
}) => {
  const handlePageChange = (page) => {
    if (onPageChange) {
      onPageChange(page.selected + 1);
    }
  };

  if (!pageCount) {
    return null;
  }

  return (
    <ReactPaginate
      pageCount={pageCount}
      initialPage={initialPage - 1}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={handlePageChange}
      breakLabel="..."
      breakClassName="pagination--li"
      containerClassName="pagination"
      pageClassName="pagination--li"
      activeClassName="pagination--li-active"
      previousLabel="<"
      nextLabel=">"
      previousClassName="pagination--li previous"
      nextClassName="pagination--li next"
      disabledClassName="disabled"
      {...rest}
    />
  );
};

PaginationItem.propTypes = {
  pageCount: PropTypes.number.isRequired,
  initialPage: PropTypes.number.isRequired,
  pageRangeDisplayed: PropTypes.number.isRequired,
  marginPagesDisplayed: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,

};

export default PaginationItem;
