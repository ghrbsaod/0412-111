import Style from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Memo() {
  const [contents, setContents] = useState([]);
  const [input, setInput] = useState("");

  const navigate = useNavigate();
  function moveToHomeButton() {
    navigate("/");
  }

  const addContent = () => {
    setContents([...contents, input]);
    setInput("");
  };
  return (
    <Style.memo>
      <div className="todo">
        <FontAwesomeIcon
          className="homeButton"
          icon={faHouse}
          onClick={moveToHomeButton}
        />
        <h1 className="title"> ※ 메모asd장 ※</h1>
        <input
          className="input-contents"
          placeholder="메모내용을 입력하세요"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        ></input>
        <button className="input-button" onClick={addContent}>
          추가
        </button>
        <div className="contents">
          {contents.map((content, index) => (
            <div key={index}>●{content}</div>
          ))}
        </div>
      </div>
    </Style.memo>
  );
}
