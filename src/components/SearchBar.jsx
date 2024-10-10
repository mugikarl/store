import React from 'react'

const SearchBar = ({ query,setQuery,stockChecked, setStockChecked }) => {
  return (
    <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type here" className="border rounded-lg p-2 border-pink-200"/>
        <div>
            <input type="checkbox" checked={stockChecked} onChange={(e) => setStockChecked(e.target.checked)}/>
            Only show products in stock
        </div>
    </div>
   );
};

export default SearchBar
