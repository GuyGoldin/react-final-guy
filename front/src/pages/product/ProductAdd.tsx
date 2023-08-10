import React, { useContext, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { useState } from "react";
import { Form } from "react-bootstrap";
import CustomButton from "../../components/ui/Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// זה השלב - לעשות EDIT
const ProductAdd = () => {
  const [productD, setProductD] = useState({});
  const { productId } = useParams();
  const ProductCtx = useContext(ProductContext);

  const formSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    ProductCtx.crudHandler("add", productId, null, null, productD);
  };
  const nav = useNavigate();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    keyName: string
  ) => {
    const { value } = e.target;
    setProductD((s) => ({
      ...s,
      [keyName]: value,
    }));
  };

  return (
    <div className="d-flex align-items-center flex-column">
      <CustomButton onPress={() => nav(-1)} classNames="p-2  radius2 btn2">
        <BsFillArrowRightCircleFill size={24} /> BACK
      </CustomButton>
      <Form
        className="w_100 d-flex  flex-column p-2 align-items-center justify-content-center text-center gap-1"
        onSubmit={(e) => formSubmit(e)}
      >
        <div className="bgc1 p-2 w_100 radius1">
          <label className="p-1 radius1 text-white bgc2">Title</label>
          <input
            required
            type="text"
            className="form-control text-center"
            defaultValue={productD?.title}
            onChange={(e) => handleInputChange(e, `title`)}
          />
        </div>
        <div className="bgc1 p-2 w_100 radius1">
          <label className="p-1 radius1 text-white bgc2">Description</label>
          <input
            required
            className="form-control text-center"
            type="text"
            defaultValue={productD?.desc}
            onChange={(e) => handleInputChange(e, `desc`)}
          />
        </div>
        <div className="bgc1 p-2 w_100 radius1">
          <label className="p-1 radius1 text-white bgc2">Price</label>
          <input
            required
            className="form-control text-center"
            type="number"
            defaultValue={productD?.price}
            onChange={(e) => handleInputChange(e, `price`)}
          />
        </div>
        <div className="bgc1 p-2 w_100 radius1">
          <label className="p-1 radius1 text-white bgc2">Category</label>
          <select
            required
            className="form-control text-center"
            onChange={(e) => handleInputChange(e, `category`)}
          >
            <option value="" disabled selected>
              Select category
            </option>
            {ProductCtx?.categoryList?.map((item, i) => {
              return (
                <option key={i} value={item?._id}>
                  {item?.name}
                </option>
              );
            })}
          </select>
        </div>
        <CustomButton type="submit">Submit</CustomButton>
      </Form>
    </div>
  );
};

export default ProductAdd;
