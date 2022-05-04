import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import { fetchCategoriesStart } from "@Store/categories/categories-action";

import CategoriesPreviewPage from "./categories-preview-page";
import Category from "./category-page";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
