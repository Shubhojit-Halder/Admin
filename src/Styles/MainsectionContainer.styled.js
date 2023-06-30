import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  height: 530px;
  background: #eaeaea5c;
  padding: 20px 10px;
  margin-left: 200px;
  display: flex;
  /* background-color: red; */
  flex-wrap: wrap;
  justify-content: space-around;
  .main {
    display: flex;
  }
  .pending{
    background: #e30040;
    padding: 5px;
    border-radius: 5px;
    color:#fff
  }
  .dispatched{
    background: #0021c6c4;
    padding: 5px;
    border-radius: 5px;
    color:#fff
  }
  .delivered{
    background: #0eb73e;
    padding: 5px;
    border-radius: 5px;
    color:#fff
  }
`;
export const Box = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #fff;
  box-shadow: 0px 0px 10px #a5a5a598;
  border-radius: 5px;
  height: ${(props) => props.height};
  margin: 10px 20px;
  padding: 10px;
  .header{
    color: #636363dc;
    font-size: 15px;
    font-weight: 800;
  }
`;
