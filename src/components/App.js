import { useContext } from "react";
import { ReducerContext } from "./Props";
import styled, { createGlobalStyle } from "styled-components";
// components part
import { ChessBottom } from "./ChessBottom";
import { ChessSoldier } from "./Chess";
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: "PingFangSC-Regular";
    background-color: #303030;
  }
`;
const StyledApp = styled.div`
  .area {
    position: relative;
    margin: 50px auto;
    width: 800px;
    height: 900px;
  }
`;
export const App = () => {
  const [state, dispatch] = useContext(ReducerContext);
  const initList = [
    { init: 0, camp: "red" },
    { init: 1, camp: "red" },
    { init: 2, camp: "red" },
    { init: 3, camp: "red" },
    { init: 4, camp: "red" },
    { init: 5, camp: "red" },
    { init: 6, camp: "red" },
    { init: 7, camp: "red" },
    { init: 8, camp: "red" },
    { init: 19, camp: "red" },
    { init: 25, camp: "red" },
    { init: 27, camp: "red" },
    { init: 29, camp: "red" },
    { init: 31, camp: "red" },
    { init: 33, camp: "red" },
    { init: 35, camp: "red" },
    { init: 54, camp: "black" },
    { init: 56, camp: "black" },
    { init: 58, camp: "black" },
    { init: 60, camp: "black" },
    { init: 62, camp: "black" },
    { init: 64, camp: "black" },
    { init: 70, camp: "black" },
    { init: 81, camp: "black" },
    { init: 82, camp: "black" },
    { init: 83, camp: "black" },
    { init: 84, camp: "black" },
    { init: 85, camp: "black" },
    { init: 86, camp: "black" },
    { init: 87, camp: "black" },
    { init: 88, camp: "black" },
    { init: 89, camp: "black" },
  ];
  return (
    <StyledApp>
      <GlobalStyle />
      <div className="area">
        <ChessBottom />
        {initList.map((v, k) => {
          return <ChessSoldier key={k} init={v.init} camp={v.camp} />;
        })}
      </div>
    </StyledApp>
  );
};
