import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { AiFillDelete } from 'react-icons/ai';

const Favorites = () => {
  const ProductCtx = useContext(ProductContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  useEffect(() => {
    const favoriteParse = JSON.parse(localStorage.getItem('favorites')) || [];
    const foundedFavorites = ProductCtx.productList.filter(item =>
      favoriteParse.includes(item?._id)
    );
    setFavoriteProducts(foundedFavorites);
  }, [ProductCtx.productList]);
useEffect(()=>{console.log(favoriteProducts)},[favoriteProducts])
  return (
    <div className='d-flex align-items-center justify-content-center bgc2 p-2 '>
      {favoriteProducts.map((item, index) => {
        return (
          <div key={index} className='d-flex'>
            <div className='bgc5 text-white p-2 d-flex gap-2 '>
            <label className='' htmlFor="">Title:</label>
           <span>{item?.title}</span>
           </div>
                  <div className='bgc5 text-white p-2 d-flex gap-2 '>

            <label htmlFor="">Price:</label>
           <span>{item?.price}</span>
           </div>
                        <div className='bgc5 text-white p-2 d-flex gap-2 '>
<span className='p-2 bgc1 cursor' onClick={()=>ProductCtx.handleFavorite(`remove`,item?._id)}><AiFillDelete/></span>

           </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
