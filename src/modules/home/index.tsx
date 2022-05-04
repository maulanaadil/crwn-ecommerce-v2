import { FC } from "react";

import { CategoryHomeContainer } from "./components";

import { HomeProps } from "./types";
import { CategoriesContainer } from "./styles";

const Home: FC<HomeProps> = ({ children }) => {
  return (
    <CategoriesContainer>
      <CategoryHomeContainer />
      {children}
    </CategoriesContainer>
  );
};

export default Home;
