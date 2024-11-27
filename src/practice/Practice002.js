import React, { useState } from "react";
import './Practice002.css';

function App() {
  // 초기 박스 상태 설정
  const [boxes, setBoxes] = useState([
    { color: "red" },
    { color: "blue" },
    { color: "green" },
    { color: "black" },
  ]);

  // 박스 추가 함수
  const addBox = (color, position) => {
    if (position === "front") {
      setBoxes([{ color }, ...boxes]);
    } else if (position === "back") {
      setBoxes([...boxes, { color }]);
    }
  };

  // 박스 삭제 함수
  const removeBox = (position) => {
    if (boxes.length === 0) return; // 박스가 없으면 아무 작업도 하지 않음
    if (position === "front") {
      setBoxes(boxes.slice(1)); // 앞의 박스 제거
    } else if (position === "back") {
      setBoxes(boxes.slice(0, -1)); // 뒤의 박스 제거
    }
  };

  return (
    <div>
      <div>
        <button className="add-button" onClick={() => addBox("red", "front")}>앞빨간박스추가</button>
        <button className="add-button" onClick={() => addBox("blue", "front")}>앞파란박스추가</button>
        <button className="add-button" onClick={() => addBox("green", "front")}>앞초록박스추가</button>

        <button className="add-button" onClick={() => addBox("red", "back")}>뒤빨간박스추가</button>
        <button className="add-button" onClick={() => addBox("blue", "back")}>뒤파란박스추가</button>
        <button className="add-button" onClick={() => addBox("green", "back")}>뒤초록박스추가</button>

        <button className="add-button" onClick={() => removeBox("front")}>앞박스삭제</button>
        <button className="add-button" onClick={() => removeBox("back")}>뒷박스삭제</button>
      </div>

      <div style={{ display: "flex" }} className="box-container">
        {boxes.map((box, index) => (
          <ColorBox key={index} bgColor={box.color} className="box" />
        ))}
      </div>
      
    </div>
  );
}

function ColorBox({ bgColor }) {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: bgColor,
      }}
    ></div>
  );
}

export default App;
