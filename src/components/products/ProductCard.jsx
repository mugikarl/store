import React from 'react'
import Button from '../Button';
import { Link } from 'react-router-dom';

const ProductCard = ({ imageSrc, name, id }) => {
  return ( 
  <div className='border shadow-md flex flex-col items-center gap-2 w-40 p-4'> 
    <img src={imageSrc} className="w-24 h-[124px]"/>
    <span className="font-bold text-base">{name}</span>

    <div className = 'flex justify-end'>
      <Link to={`/${id}`} className="bg-green-500 hover:bg-green-500/70 px-4 py-2 rounded-lg">View</Link>
    </div>
  </div>
  );
};

export default ProductCard
