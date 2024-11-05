import React from 'react'

const SearchBar = ({ query,setQuery,stockChecked, setStockChecked, sort, setSort, }) => {
  return (
    <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type here" className="border rounded-lg p-2 border-pink-200" data-testid="search-text"/>
        <div>
            <input type="checkbox" checked={stockChecked} onChange={(e) => setStockChecked(e.target.checked)} data-testid="search-checkbox"/>
            Only show products in stock
        </div>
        <select value = {sort} onChange={(e) => setSort(e.target.value)} data-testid="search-select">
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
    </div>
   );
};

export default SearchBar
