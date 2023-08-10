import React, { createContext, useState, useEffect } from "react";
import { ChildrenType } from "../utils/types";
import { toast } from "react-toastify";
import productServices from "../services/product.service";
import { useNavigate } from "react-router-dom";

type ProductContextValue = {
  productList: any[];
  categoryList: any[];
  crudHandler: (
    action: string,
    productId: string,
    filteredProducts: any[],
    setFilteredProducts: any
  ) => void;
  handleFavorite:(action:string,productId:string)=>void,
  favoriteList:any[]
  isFavoriteFunc:()=>void
};

const initialContextValue: ProductContextValue = {
  productList: [],
  categoryList: [],
  crudHandler: () => {},
  handleFavorite:(action,productId)=>{}
  ,
  favoriteList:[],
  isFavoriteFunc:()=>{}
};

export const ProductContext =
  createContext<ProductContextValue>(initialContextValue);

export const ProductContextProvider: React.FC<ChildrenType> = ({
  children,
}) => {
  const [productList, setProductList] = useState<any[]>([]);
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [favoriteList, setFavoriteList] = useState<any[]>([]);
  const isFavoriteFunc = (productId:string)=>{
    const favoritesLocalToObj = JSON.parse(localStorage.getItem('favorites'))
return     favoritesLocalToObj?.some(item=>item===productId)

  }

  useEffect(() => {
    productServices
      .getProductList()
      .then((res) => setProductList(res.data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    productServices
      .getCategoryList()
      .then((res) => setCategoryList(res.data))
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  const nav = useNavigate();
  const crudHandler = async (
    action: string,
    productId: string,
    filteredProducts?: any[],
    setFilteredProducts?: React.Dispatch<React.SetStateAction<any[]>>,
    updatedProduct?: {}
  ) => {
    if (action === "delete") {
      const updatedProducts = filteredProducts.filter(
        (item) => item?._id !== productId
      );
      setFilteredProducts(updatedProducts);
      productServices.deleteProduct(productId).then((res) => toast(res.data));
    } else if (action === `edit`) {
      nav(`/product-edit/${productId}`);
    } else if (action === `update`) {
      productServices
        .updateProduct(productId, updatedProduct)
        .then((res) => toast(res.data));
    } else if (action === `add`) {
      productServices.addProduct(updatedProduct).then((res) => toast(res.data));
    }
  };
const handleFavorite = (action: string, productId: string) => {
  if (action === `add`) {
    const isAlreadyExist = favoriteList.some(item => item === productId);
    if (isAlreadyExist) {
      toast(`You already have this one in your favorites`);
    } else {
      toast(`Favorite added successfully`);
      setFavoriteList(s => [...s, productId]);

      // Add the new favorite to localStorage
      const updatedFavorites = [...favoriteList, productId];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  } else if (action === `remove`) {
    const isExist = favoriteList.some(item => item === productId);

    if (isExist) {
      const updatedFavoriteList = favoriteList.filter(item => item !== productId);
      setFavoriteList(updatedFavoriteList);
      toast(`Removed from favorites`);
      localStorage.setItem('favorites', JSON.stringify(updatedFavoriteList));
    } else {
      toast(`You don't have this one in your favorites`);
    }
  }
};


  const contextValue: ProductContextValue = {
    crudHandler,
    categoryList,
    productList,
    handleFavorite,
    favoriteList,isFavoriteFunc
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
