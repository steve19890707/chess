import { useContext } from "react";
import { ReducerContext } from "./Props";
import styled, { createGlobalStyle } from "styled-components";
import cx from "classnames";
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
const chessPointCss = (row = 0) => {
  let styles = "";
  let value = {
    start: 0 + row * 9,
    end: 9 + row * 9,
  };
  for (let i = value.start; i < value.end; i++) {
    const currentI = i - row * 9;
    styles += `
      &.point-${i} {
        top: ${row * 100}px;
        left: ${currentI * 100}px;
      }
    `;
  }
  return styles;
};
const StyledApp = styled.div`
  .area {
    position: relative;
    margin: 50px auto;
    width: 800px;
    height: 900px;
  }
  .click-dot {
    display: none;
    position: absolute;
    transform: translate(calc(-50% + 4px), calc(-50% + 4px));
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: red;
    z-index: 2;
    cursor: pointer;
    &.active {
      display: block;
    }
    ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => {
      return chessPointCss(v);
    })}
  }
`;
export const App = () => {
  const [state] = useContext(ReducerContext);
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
        {state.chessPoint.map((v, k) => {
          return (
            <div
              key={k}
              className={cx(`click-dot point-${k}`, { active: v.get("dot") })}
            />
          );
        })}
        {initList.map((v, k) => {
          return <ChessSoldier key={k} value={v} />;
        })}
      </div>
    </StyledApp>
  );
};
