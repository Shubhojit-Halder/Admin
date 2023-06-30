import styled from "styled-components";
export const SidebarContainer = styled.div`
  margin-top: 0px;
  height: 90%;
  background: #00806d;
  width: 200px;
  position: absolute;
  padding: 10px 0px 0px 10px;
  color:#fff;
  .sub-sections{
    margin-bottom: 20px;
  }
  .line{
    height: 1.5px;
    background: #fff;
  }
  .category-header{
    font-size: 15px;
    margin-bottom: 10px;
  }
  .list-items{
    cursor: pointer;
    display: flex;
    margin-left: 10px;
    margin-top: 8px;
    font-weight: 500;
    margin-bottom: 15px;
    /* justify-content: center; */
    align-items:center;
  }
`;
