import  { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productList } from "../../content/files/products";
import "../products.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ProductContext } from "../../contexts/ProductContext";
import { AuthContext } from "../../contexts/AuthContext";
import ProductItem from "../../components/sections/products/products/ProductItem";
const Products = () => {
  const ProductCtx =useContext(ProductContext)
  const { chosenCategory, categoryName } = useParams();
  const nav = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const AuthCtx = useContext(AuthContext)
  useEffect(() => {
    const filter = ProductCtx.productList?.filter((item) => {
      return item.category._id === chosenCategory;
    });
    setFilteredProducts(filter);
  }, [productList]);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center">
      <div className="button-container btn2 d-flex align-items-center mb-1 p-3 w_100">
        <div className="text-center flex-grow-1"> {categoryName}</div>
        <div onClick={() => nav(-1)}>
          <BsFillArrowRightCircleFill className="arrow-icon" size={24} />
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>שם מוצר</th>
            <th>מחיר</th>
            <th>תמונה</th>
            <th>פעולות</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts?.map((prItem, prIndex) => {
            return (
           <ProductItem filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} key={prIndex} item={prItem}/>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
