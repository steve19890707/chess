import styled from "styled-components";
const StyledChessBottom = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #dbceae;
  border: 5px solid #59513c;
  z-index: 1;
  pointer-events: none;
  .chess-area {
    display: flex;
    flex-wrap: wrap;
  }
  .chessGrid {
    position: relative;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    &.top-type {
      border-right: 2px solid #59513c;
      border-bottom: 2px solid #59513c;
      &:nth-child(4),
      &:nth-child(13) {
        &:before {
          position: absolute;
          content: "";
          width: 145%;
          height: 2px;
          background-color: #59513c;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
      &:nth-child(5),
      &:nth-child(12) {
        &:before {
          position: absolute;
          content: "";
          width: 145%;
          height: 2px;
          background-color: #59513c;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
      &:nth-child(9),
      &:nth-child(15),
      &:nth-child(18),
      &:nth-child(20),
      &:nth-child(22),
      &:nth-child(24) {
        &:before {
          position: absolute;
          content: "";
          right: 2px;
          bottom: 2px;
          width: 15px;
          height: 2px;
          background-color: #59513c;
        }
        &:after {
          position: absolute;
          content: "";
          right: 2px;
          bottom: 2px;
          width: 2px;
          height: 15px;
          background-color: #59513c;
        }
      }
      &:nth-child(10),
      &:nth-child(16),
      &:nth-child(17),
      &:nth-child(19),
      &:nth-child(21),
      &:nth-child(23) {
        &:before {
          position: absolute;
          content: "";
          left: 2px;
          bottom: 2px;
          width: 15px;
          height: 2px;
          background-color: #59513c;
        }
        &:after {
          position: absolute;
          content: "";
          left: 2px;
          bottom: 2px;
          width: 2px;
          height: 15px;
          background-color: #59513c;
        }
      }
      &:nth-child(25),
      &:nth-child(27),
      &:nth-child(29),
      &:nth-child(31) {
        &:before {
          position: absolute;
          content: "";
          left: 2px;
          top: 2px;
          width: 15px;
          height: 2px;
          background-color: #59513c;
        }
        &:after {
          position: absolute;
          content: "";
          left: 2px;
          top: 2px;
          width: 2px;
          height: 15px;
          background-color: #59513c;
        }
      }
      &:nth-child(26),
      &:nth-child(28),
      &:nth-child(29),
      &:nth-child(30),
      &:nth-child(32) {
        &:before {
          position: absolute;
          content: "";
          right: 2px;
          top: 2px;
          width: 15px;
          height: 2px;
          background-color: #59513c;
        }
        &:after {
          position: absolute;
          content: "";
          right: 2px;
          top: 2px;
          width: 2px;
          height: 15px;
          background-color: #59513c;
        }
      }
      &:nth-child(8n) {
        border-right: 0;
      }
    }
    &.bottom-type {
      border-right: 2px solid #59513c;
      border-top: 2px solid #59513c;
      &:nth-child(20),
      &:nth-child(29) {
        &:before {
          position: absolute;
          content: "";
          width: 145%;
          height: 2px;
          background-color: #59513c;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
      &:nth-child(21),
      &:nth-child(28) {
        &:before {
          position: absolute;
          content: "";
          width: 145%;
          height: 2px;
          background-color: #59513c;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
      &:nth-child(2),
      &:nth-child(4),
      &:nth-child(6),
      &:nth-child(8),
      &:nth-child(9),
      &:nth-child(15) {
        &:before {
          position: absolute;
          content: "";
          right: 2px;
          bottom: 2px;
          width: 15px;
          height: 2px;
          background-color: #59513c;
        }
        &:after {
          position: absolute;
          content: "";
          right: 2px;
          bottom: 2px;
          width: 2px;
          height: 15px;
          background-color: #59513c;
        }
      }
      &:nth-child(1),
      &:nth-child(3),
      &:nth-child(5),
      &:nth-child(7),
      &:nth-child(10),
      &:nth-child(16) {
        &:before {
          position: absolute;
          content: "";
          left: 2px;
          bottom: 2px;
          width: 15px;
          height: 2px;
          background-color: #59513c;
        }
        &:after {
          position: absolute;
          content: "";
          left: 2px;
          bottom: 2px;
          width: 2px;
          height: 15px;
          background-color: #59513c;
        }
      }
      &:nth-child(11),
      &:nth-child(13),
      &:nth-child(18),
      &:nth-child(24) {
        &:before {
          position: absolute;
          content: "";
          left: 2px;
          top: 2px;
          width: 15px;
          height: 2px;
          background-color: #59513c;
        }
        &:after {
          position: absolute;
          content: "";
          left: 2px;
          top: 2px;
          width: 2px;
          height: 15px;
          background-color: #59513c;
        }
      }
      &:nth-child(12),
      &:nth-child(14),
      &:nth-child(17),
      &:nth-child(23) {
        &:before {
          position: absolute;
          content: "";
          right: 2px;
          top: 2px;
          width: 15px;
          height: 2px;
          background-color: #59513c;
        }
        &:after {
          position: absolute;
          content: "";
          right: 2px;
          top: 2px;
          width: 2px;
          height: 15px;
          background-color: #59513c;
        }
      }
      &:nth-child(8n) {
        border-right: 0;
      }
    }
    .RT-top {
      position: absolute;
      content: "";
      right: 2px;
      top: 2px;
      width: 15px;
      height: 2px;
      background-color: #59513c;
    }
    .RT-bottom {
      position: absolute;
      content: "";
      right: 2px;
      top: 2px;
      width: 2px;
      height: 15px;
      background-color: #59513c;
    }
    .LT-top {
      position: absolute;
      content: "";
      left: 2px;
      top: 2px;
      width: 15px;
      height: 2px;
      background-color: #59513c;
    }
    .LT-bottom {
      position: absolute;
      content: "";
      left: 2px;
      top: 2px;
      width: 2px;
      height: 15px;
      background-color: #59513c;
    }
  }
  .padd {
    width: 100%;
    height: 100px;
  }
`;
export const ChessBottom = () => {
  const chessCreateList = Array.from(Array(32).keys());
  return (
    <StyledChessBottom>
      <div className="chess-area">
        {chessCreateList.map((k, v) => {
          return (
            <div key={k} className="chessGrid top-type">
              {(v === 16 || v === 22) && (
                <>
                  <div className="RT-top" />
                  <div className="RT-bottom" />
                </>
              )}
              {(v === 17 || v === 23) && (
                <>
                  <div className="LT-top" />
                  <div className="LT-bottom" />
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="padd"></div>
      <div className="chess-area">
        {chessCreateList.map((k, v) => {
          return (
            <div key={k} className="chessGrid bottom-type">
              {(v === 9 || v === 15) && (
                <>
                  <div className="RT-top" />
                  <div className="RT-bottom" />
                </>
              )}
              {(v === 8 || v === 14) && (
                <>
                  <div className="LT-top" />
                  <div className="LT-bottom" />
                </>
              )}
            </div>
          );
        })}
      </div>
    </StyledChessBottom>
  );
};
