import React, {useEffect,useState, useContext,useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../components/ui/Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ProductContext } from "../../contexts/ProductContext";

const ProductDetails = () => {
  const [productD, setProductD] = useState({});
  const { productId } = useParams();
  const ProductCtx = useContext(ProductContext);
  const findProductAndSetState = useCallback(() => {
    const foundProduct = ProductCtx?.productList?.find(
      (item) => item._id === productId
    );
    setProductD(foundProduct);
  }, [ProductCtx?.productList, productId]);

  useEffect(() => {
    findProductAndSetState();
  
  }, [findProductAndSetState]);
 useEffect(()=>{console.log(productD)},[productD])
  const nav = useNavigate()
  return <div>
   <CustomButton onPress={() => nav(-1)} classNames="p-2  radius2 btn2">
        <BsFillArrowRightCircleFill size={24} /> BACK
      </CustomButton>

<div className="bgc1 p-2 radius2 d-flex flex-column align-items-center  justify-content-center text-center">
  <div className="d-flex w_100 text-center">
<label className="bgc2 w_50 text-white p-1 " htmlFor="">Title:</label>
<span className=" ls2 bgc2 w_50 text-white fs_12 p-2  ">{productD?.title}</span>
</div> 
  <div className="d-flex w_100 text-center">
<label className="bgc2 w_50 text-white p-1 " htmlFor="">Description:</label>
<span className=" ls2 bgc2 w_50 text-white fs_12 p-2  ">{productD?.desc}</span>
</div>
  <div className="d-flex w_100 text-center">
<label className="bgc2 w_50 text-white p-1 " htmlFor="">Price:</label>
<span className=" ls2 bgc2 w_50 text-white fs_12 p-2  ">{productD?.price}</span>
</div>  
  <div className="d-flex w_100 text-center">

<label className="bgc2 w_50 text-white p-1 " htmlFor="">Category:</label>
<span className=" ls2 bgc2 w_50 text-white fs_12 p-2  ">{productD?.category?.name}</span>
</div>
</div>
  </div>;
};

export default ProductDetails;
