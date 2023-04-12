import styled from "styled-components";

const home = styled.div`
  .photoImage {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    padding: 50px;
  }
  p {
    font-size: 40px;
    text-align: center;
  }
  .startButton,
  .memoButton {
    display: block;
    width: 270px;
    height: 50px;
    font-size: 20px;
    border: 1px solid black;
    background-color: gray;
    border-radius: 10px;
    margin: 15px auto;
  }
  .madeButton {
    display: block;
    margin: 80px auto 20px auto;
    width: 350px;
    height: 50px;
    font-size: 20px;
    border: 1px solid black;
    background-color: gray;
    border-radius: 10px;
  }
`;

const made = styled.div`
  * {
    box-sizing: border-box;
  }
  .photoImage {
    width: 300px;
    height: 300px;
    margin: 100px auto 10px auto;
    display: flex;
    margin-top: 130px;
  }
  .todoBy {
    text-align: center;
    font-size: 30px;
    margin: 0;
    padding: 40px;
  }
  .githubLink {
    text-align: center;
    font-size: 30px;
    margin-top: 130px;
  }
  .homeButton {
    width: 270px;
    height: 50px;
    font-size: 20px;
    border: 1px solid black;
    background-color: gray;
    border-radius: 10px;
    margin: 0 auto;
    display: block;
    margin-top: 130px;
  }
`;

const memo = styled.div`
  .todo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #FFFDBE
    font-family: sans-serif;
  }
  .homeButton {
    position: absolute;
    top: 20px;
    left: 75%;
    font-size: 30px;
    color: #333;
    cursor: pointer;
  }
  
  .title {
    margin: 30px 0;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }

  .input-contents {
    width: 40%;
    height: 50px;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  .input-button {
    width: 15%;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 50px;
    border: none;
    border-radius: 5px;
    background-color: gray;
    color:#fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
  .input-button:hover {
    background-color: #555;
  }
  .memo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
  .contents{
    width: 40%;
    height: 400px;
    margin-top: 30px;
    padding: 10px;
    border: 5px solid black;
    font-size: 25px;
  }
`;

const TodoListPage = styled.div`
  * {
    box-sizing: border-box;
  }
  .homeButton {
    width: 150%;
    height: 40px;
    padding: 15px;
    cursor: pointer;
  }
  h1 {
    margin-top: 30px;
    font-size: 45px;
    text-align: center;
    padding: 10px;
  }
  .totalCount {
    font-size: 20px;
    text-align: center;
    padding: 10px;
  }
  .input {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .inputBox {
    width: 300px;
    height: 40px;
    margin-right: 10px;
    border-radius: 10px;
    font-size: 20px;
    margin-bottom: 120px;
  }
  .todoInputButton {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-bottom: 120px;
  }
  .line-through {
    text-decoration: line-through;
  }
  .todo-list {
    width: 400px;
    margin: auto;
  }
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 16px;
    text-align: center;
  }
  .checkbox {
    width: 15px;
    height: 20px;
  }
  .trashcan {
    border: none;
    color: white;
    font-size: 20px;
    background-color: rgb(111, 111, 111);
  }
`;

export default { home, made, TodoListPage, memo };
