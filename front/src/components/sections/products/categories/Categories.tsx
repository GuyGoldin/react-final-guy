import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const Categories = ({ setChosenCategory, setShowProducts, categories }) => {
  const nav = useNavigate();
  const { darkMode } = useContext(AppContext);
  const handleClick = async (id: string, name: string) => {
    nav(`/products/${id}/${name}`);
  };

  return (
    <div className="row align-items-center justify-content-center text-center">
      {categories?.map((catItem, catIndex) => {
        return (
          <div
            onClick={() => handleClick(catItem._id, catItem.name)}
            className={`${
              darkMode ? "bg-black" : !catItem.class ? "bgc1" : ""
            } shadow w_50 border border-white cursor p-5 fs_color1 fs_12 ls4  ${
              catItem.class ? catItem.class : `m-1`
            }`}
            key={catIndex}
          >
            {catItem?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
