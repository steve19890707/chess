import { useContext } from "react";
import { ReducerContext } from "./Props";
import styled from "styled-components";

const fetchChess = (index) => {
  switch (index) {
    case 0:
    case 8:
    case 81:
    case 89:
      return "車";
    case 1:
    case 7:
    case 82:
    case 88:
      return "馬";
    case 2:
    case 6:
      return "相";
    case 83:
    case 87:
      return "象";
    case 3:
    case 5:
      return "士";
    case 84:
    case 86:
      return "仕";
    case 4:
      return "帥";
    case 85:
      return "將";
    case 19:
    case 25:
    case 64:
    case 70:
      return "炮";
    case 27:
    case 29:
    case 31:
    case 33:
    case 35:
      return "兵";
    case 54:
    case 56:
    case 58:
    case 60:
    case 62:
      return "卒";
    default:
      return "";
  }
};
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
const StyledChess = styled.div`
  position: absolute;
  z-index: 2;
  width: 65px;
  height: 65px;
  box-sizing: border-box;
  border: 4px solid transparent;
  background-color: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  &.black {
    border-color: #000;
    span {
      color: #000;
    }
  }
  &.red {
    border-color: #da2d27;
    span {
      color: #da2d27;
    }
  }
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
      font-weight: bold;
      pointer-events: none;
    }
    .move-line {
      position: absolute;
    }
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => {
    return chessPointCss(v);
  })}
`;
// 卒 & 兵
export const ChessSoldier = ({ init = 0, camp = "" }) => {
  const [state, dispatch] = useContext(ReducerContext);
  return (
    <StyledChess className={`${camp} point-${init}`}>
      <div className="content">
        <span>{fetchChess(init)}</span>
        <div className="move-line"></div>
      </div>
    </StyledChess>
  );
};
