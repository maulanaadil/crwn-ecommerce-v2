/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import PRODUCTS from "../assets/data/shopData.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

ProductProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
