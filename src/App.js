import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [cellData, setCellData] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [chance, setChance] = useState("O");

  const [moveCounter, setMoveCounter] = useState(0);

  function togglePosition(e) {
    const id = e.target.id;
    if (e.target.innerHTML !== "") {
      return;
    }
    let cpData = cellData;
    let thischance = chance === "O" ? "X" : "O";
    if (id <= 3) {
      let row = cellData[0];
      row[id - 1] = thischance;
      cpData[0] = row;
    } else if (id <= 6) {
      let row = cellData[1];
      row[id - 4] = thischance;
      cpData[1] = row;
    } else {
      let row = cellData[2];
      row[id - 7] = thischance;
      cpData[2] = row;
    }
    setCellData(cpData);
    setChance(thischance);
    setMoveCounter(moveCounter + 1);
    checkWin();
  }

  useEffect(() => {
    if (moveCounter === 9) {
      setTimeout(() => {
        alert("Match drawed");
           window.location.reload();
      }, 500);
    }
  }, [moveCounter]);

  function checkWin() {
    let thischance = chance === "O" ? "X" : "O";
    let mainWin = true;
    let offWin = true;
    for (let i = 0; i < 3; i++) {
      let hrwin = true;
      for (let j = 0; j < 3; j++) {
        if (cellData[i][j] !== thischance) {
          hrwin = false;
        }
        if (i == j) {
          if (cellData[i][j] !== thischance) {
            mainWin = false;
          }
        }
        if (i + j == 2) {
          if (cellData[i][j] !== thischance) {
            offWin = false;
          }
        }
      }
      if (hrwin) {
        setTimeout(() => {
          alert(`${thischance} guy won the game`);
             window.location.reload();
        }, 500);
      }
    }
    if (mainWin || offWin) {
      setTimeout(() => {
        alert(`${thischance} guy won the game`);
           window.location.reload();
      }, 500);
    }
    for (let i = 0; i < 3; i++) {
      let vrwin = true;
      for (let j = 0; j < 3; j++) {
        if (cellData[j][i] !== thischance) {
          vrwin = false;
        }
      }
      if (vrwin) {
        setTimeout(() => {
          alert(`${thischance} guy won the game`);
        }, 500);
      }
    }
  }

  return (
    <div className="App">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="board">
        <div className="row">
          <div className="cell" id="1" onClick={togglePosition}>
            {cellData[0][0]}
          </div>
          <span className="border"></span>
          <div className="cell" id="2" onClick={togglePosition}>
            {cellData[0][1]}
          </div>
          <span className="border"></span>
          <div className="cell" id="3" onClick={togglePosition}>
            {cellData[0][2]}
          </div>
        </div>
        <span className="hrbr"></span>
        <div className="row">
          <div className="cell" id="4" onClick={togglePosition}>
            {cellData[1][0]}
          </div>
          <span className="border"></span>
          <div className="cell" id="5" onClick={togglePosition}>
            {cellData[1][1]}
          </div>
          <span className="border"></span>
          <div className="cell" id="6" onClick={togglePosition}>
            {cellData[1][2]}
          </div>
        </div>
        <span className="hrbr"></span>
        <div className="row">
          <div className="cell" id="7" onClick={togglePosition}>
            {cellData[2][0]}
          </div>
          <span className="border"></span>
          <div className="cell" id="8" onClick={togglePosition}>
            {cellData[2][1]}
          </div>
          <span className="border"></span>
          <div className="cell" id="9" onClick={togglePosition}>
            {cellData[2][2]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
