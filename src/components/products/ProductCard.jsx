import React from 'react'
import Button from '../Button';

const ProductCard = ({ imageSrc, name }) => {
  return ( 
  <div className='border shadow-md flex flex-col items-center gap-2 w-40 p-4'> 
    <img src={imageSrc} className="w-24 h-[124px]"/>
    <span className="font-bold text-base">{name}</span>

    <div className = 'flex justify-end'>
    <Button name = "View" onClick={() => console.log(name)} className="bg-green-500 hover:bg-green-500/70"></Button>
    </div>
  </div>
  );
};

export default ProductCard
