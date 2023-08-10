import React, { useState, useContext } from "react";
import { categoryList, productList } from "../content/files/products";
import Categories from "../components/sections/products/categories/Categories";
import { ProductContext } from "../contexts/ProductContext";
import { AuthContext } from "../contexts/AuthContext";
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showProducts, setshowProducts] = useState(true);
  const [chosenCategory, setChosenCategory] = useState();
  const ProductCtx = useContext(ProductContext);
  const AuthCtx = useContext(AuthContext);
  const nav = useNavigate();
  return (
    <div className="text-center p-3 d-flex flex-column">
      {AuthCtx.isAdmin && (
        <span
          onClick={() => nav("/product-add")}
          className="cursor bgc10 text-white p-2 radius2"
        >
          Add product <AiFillPlusCircle size={24} />
        </span>
      )}
      <Categories
        setShowProducts={setshowProducts}
        setChosenCategory={setChosenCategory}
        categories={ProductCtx.categoryList}
      />
    </div>
  );
};

export default Home;
