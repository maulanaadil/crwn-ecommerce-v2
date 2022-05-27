import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    margin: 10px;
    width: auto;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgray;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 20%;

    &:last-child {
      width: 10%;
    }

    span {
      font-size: 12px;
    }
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
`;

export const Total = styled.span`
  padding-bottom: 20px;
  font-size: 20px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    padding-bottom: 10px;
  }
`;

export const TextWarning = styled.div`
  color: red;
  text-align: center;
  margin: 40px auto;
  font-size: 24px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;
