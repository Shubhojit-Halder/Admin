import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Wrapper = styled.div`
  margin-top: 80px;
  padding: 20px;
  flex-wrap: wrap;
`;
export const Title = styled.div`
  font-weight: 400;
  text-align: center;
  font-size: 25px;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
export const Button = styled.button`
  background-color: ${(props) => (props.bg === "filled" ? "#000" : "#fff")};
  color: ${(props) => (props.bg === "filled" ? "#fff" : "#000")};
  padding: 10px;
  border: ${(props) => (props.bg === "filled" ? "none" : "1.5px solid black")};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
`;
export const TopTexts = styled.div``;
export const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
  text-decoration: underline;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 70vh;
  ${mobile({
    marginTop: "30px",
    flexDirection: "column",
  })}/* align-items: center; */
`;
export const Info = styled.div`
  flex: 3;
  /* ${mobile({ flex: 0 })} */
`;
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;
export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProductSize = styled.span``;
export const ProductName = styled.span`
  font-size: 17px;
`;
export const ProductId = styled.span`
  font-size: 15px;
  ${mobile({ fontSize: "10px" })}
`;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px 0px 15px 0px",
  })}
`;

export const Container = styled.div``;
export const ProductAmountContainer = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;
export const ProductAmount = styled.div`
  border: 1px solid black;
  width: 20px;
  height: 20px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;
export const ProductBrand = styled.h3`
  font-size: 22px;
`;
export const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-top: 10px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.2px solid #00000071;
  padding: 10px;
  height: 280px;
`;
export const SummaryHeader = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
`;
export const SummaryItem = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SummaryItemText = styled.span`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  margin-right: 10px;
`;
export const SummaryItemPrice = styled.span`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
`;
