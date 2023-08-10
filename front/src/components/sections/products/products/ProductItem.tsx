import React, { useContext, useState } from "react";
import ShekelSymbol from "../../../ui/ShekelSymbol";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AuthContext } from "../../../../contexts/AuthContext";
import { AiFillDelete, AiFillEdit, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ProductContext } from "../../../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

interface ProductItemProps {
  item: {
    title: string;
    price: number;
    _id: string;
  };
  filteredProducts: any[];
  setFilteredProducts: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  filteredProducts,
  setFilteredProducts,
  item: prItem,
}) => {

  const AuthCtx = useContext(AuthContext);
  const ProductCtx = useContext(ProductContext);
  let isFavorite = ProductCtx.isFavoriteFunc(prItem?._id)
const nav = useNavigate()
  return (
    <tr>
      <td>{prItem?.title}</td>
      <td>{prItem?.price}</td>
      <td>
        <img src="../assets/shooes.jpg" />
      </td>
      <td>
        <button className="btn2 p-1 fs_12 ls2">
          <BsFillCartPlusFill size={20} />
          הוסף לסל
        </button>
        <span>{isFavorite ? <span className="cursor" onClick={()=>ProductCtx.handleFavorite('remove',prItem?._id)}><AiFillStar size={24}/> </span>: <span className="cursor"  onClick={()=>ProductCtx.handleFavorite('add',prItem?._id)}><AiOutlineStar  size={24}/> </span> }
       </span> 
       <button className="btn3 p-1 radius2"  onClick={()=>nav(`/product-details/${prItem._id}`)}>Details</button>
       {AuthCtx.isAdmin && (
          <div>
            <span
              onClick={() =>
                ProductCtx.crudHandler(
                  `delete`,
                  prItem?._id,
                  filteredProducts,
                  setFilteredProducts
                )
              }
              className="cursor"
            >
              {" "}
              <AiFillDelete size={25} />
            </span>
            <span
              onClick={() => ProductCtx.crudHandler(`edit`, prItem?._id)}
              className="cursor"
            >
              <AiFillEdit size={25} />
            </span>
          </div>
        )}
      </td>
    </tr>
  );
};

export default ProductItem;
