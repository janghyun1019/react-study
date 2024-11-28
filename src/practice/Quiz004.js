import React, { useState } from "react";
import './Quiz004.css';

function Quiz004() {
  const [boxes, setBoxes] = useState([
    { color: "red" },
    { color: "blue" },
    { color: "green" },
    { color: "black" },
  ]);

  const addBox = (color, position) => {
    if (position === "front") {
      setBoxes([{ color }, ...boxes]);
    } else if (position === "back") {
      setBoxes([...boxes, { color }]);
    }
  };

  const removeBox = (position) => {
    if (boxes.length === 0) return;
    if (position === "front") {
      setBoxes(boxes.slice(1));
    } else if (position === "back") {
      setBoxes(boxes.slice(0, -1));
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
          <div 
            key={index}
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              backgroundColor: box.color,
              position: "relative",
            }}
          >
            <button className="remBtn"
              onClick={() => {
                let tempBoxes = [...boxes];
                tempBoxes.splice(index, 1); // 해당 인덱스의 박스를 제거
                setBoxes(tempBoxes);
              }}
            >X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz004;
