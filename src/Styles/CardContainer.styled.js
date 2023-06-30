import styled from "styled-components";
export const CardContainer = styled.div`
  position: relative;
  width: ${(props) => props.width};
  background: #fff;
  box-shadow: 0px 0px 10px #a5a5a598;
  border-radius: 5px;
  height:  ${(props) => props.height};
  margin: 10px 20px;
  padding: 10px;
  .header{
    color: #636363dc;
    font-size: 15px;
    font-weight: 800;

  }
  .footer{
  }
  .number{
    font-size: 3.2rem;
    text-align: center;
  }
`;
