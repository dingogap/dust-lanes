function FilterList({ filterData }) {
  return filterData.length
    ? filterData.map((i, j) => (
        <li key={j}>
          {i.filterName} ({i.filterType})
        </li>
      ))
    : '';
}

export default FilterList;
