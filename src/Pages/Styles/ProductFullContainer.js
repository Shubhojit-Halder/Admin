import styled from "styled-components";
import { mobile } from "../../Responsive";


export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
export const ImageContainer = styled.div`
  flex: 1;
  margin-bottom: 10px;
`;
export const Image = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  ${mobile({ height: "350px" })}
`;
export const InfoContainer = styled.div`
  flex: 1;
  border-left: 1px solid #00000018;
  padding-left: 30px;
  ${mobile({
    borderTop: "1px solid #00000018",
    borderLeft: "none",
    paddingLeft: "0px",
  })}
`;
export const Desc = styled.p`
  margin: 10px 0px;
  padding: 10px 0px;
`;
export const Header = styled.h1`
  margin: 10px 0px;
`;
export const Title = styled.h3`
  margin: 10px 0px;
`;
export const Price = styled.h3`
  margin: 10px 0px;
  font-size: 35px;
  font-weight: 200;
`;
export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px;
  justify-content: space-between;
`;
export const Filter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ marginBottom: "15px" })}
`;
export const FilterTitle = styled.h4`
  margin-right: 10px;
`;
export const FilterColor = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.bg};
  border: 0.5px solid black;
  padding: 5px;
  margin: 4px;
  border-radius: 50%;
  cursor: pointer;
`;
export const FilterSize = styled.div`
  border: 1px solid black;
  width: 30px;
  height: 30px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  cursor: pointer;
`;
export const AddtoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const Total = styled.span`
  font-size: 25px;
  padding: 10px;
  margin: 10px;
  border: 2px solid teal;
  height: 10px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  width: 200px;
  padding: 10px;
  margin: 20px 20px 20px 40px;
  background: transparent;
  font-size: 20px;
  transition: 0.5s;
  ${mobile({ margin: "20px 20px 20px 0px" })}
  :hover {
    border: 2px solid teal;
    background: teal;
    color: #fff;
  }
`;