import React from 'react';

function FilterList({ filterData }) {
  return filterData.length ? (
    filterData.map((item, index) => (
      <li key={index}>
        {item.filterName} ({item.filterType})
      </li>
    ))
  ) : (
    <p>No Filters have been added</p>
  );
}

export default FilterList;
