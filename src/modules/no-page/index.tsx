import { FC } from "react";

import Button from "@Components/button";

import { NoPageProps } from "./types";
import { NotFoundContainer, Title, SubTitle } from "./styles";

const NoPage: FC<NoPageProps> = ({ title, subtitle, onClickHandler }) => {
  return (
    <NotFoundContainer>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Button type="button" onClick={onClickHandler}>
        Go To Homepage
      </Button>
    </NotFoundContainer>
  );
};

export default NoPage;
