import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "utils/firebase.utils";

import { setCategoriesMap } from "store/categories/categories-action";

import CategoriesPreview from "./categories-preview";
import Category from "./category";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
