import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilterProductTable from './components/FilterProductTable';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

const products = [
  // Sporting Goods
  {id:1, name:"Tennis", price: 99.9, type: 1, stock: 100},
  {id:2, name:"Badminton", price: 59.9, type: 1, stock: 16},
  {id:3, name:"Basketball", price: 100, type: 1, stock: 10},
  {id:4, name:"Soccer", price: 65, type: 1, stock: 0},

  // Electronics
  {id:4, name:"IPod Touch", price: 99.9, type: 2, stock: 1},
  {id:5, name:"IPhone 5", price: 399.9, type: 2, stock: 10},
  {id:6, name:"Nexus 7", price: 199.9, type: 2, stock: 0},
];

const headers = ["Sporting Goods", "Electronics"];

function App() {
  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);

  const filteredProducts = products.filter(
    (product) => 
      //Case 1: If query is in name
      product.name.toLowerCase().includes(query.toLowerCase()) &&
      //Case 2: If it has stocks
      //!stockChecked: if the value is false it can be considered
      //
      (!stockChecked || product.stock > 0)
);

  return <FilterProductTable>
     <SearchBar query={query} setQuery={setQuery} stockChecked={stockChecked} setStockChecked={setStockChecked}/>
     <ProductTable headers={headers} products={filteredProducts}/>
    </FilterProductTable>;

}

export default App
