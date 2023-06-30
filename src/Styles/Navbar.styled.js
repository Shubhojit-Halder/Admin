import styled from "styled-components";
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100vw;
  /* overflow: hidden; */
  box-shadow: 0px 0px 10px #c4c4c470;
  padding: 10px 0px;
  z-index: 3;
  background: #fff;
  .logo {
    color: teal;
    flex: 1;
    font-size: 30px;
    text-align: center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .searchDiv{
    flex: 1;
    margin-left: 20px;
  }
  .search {
    background-color: transparent;
    color: #000;
    outline: none;
    border: 1px solid black;
    padding: 5px;
    letter-spacing: 0.7px;
    width: 200px;
  }
  
`;
