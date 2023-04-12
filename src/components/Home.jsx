import { useNavigate } from 'react-router-dom';
import photo from '../assets/img/rilla.jpg';
import Style from './Style';

function Home() {
  const navigate = useNavigate();
  function onclickStartButton() {
    navigate('/todo-list');
  }
  function onclickMemoButton() {
    navigate('/memo');
  }
  function onclickMadeButton() {
    navigate('/made');
  }
  return (
    <Style.home>
      <div className="photo">
        <img className="photoImage" src={photo} />
        <p>오늘도 달려야지</p>
        <button className="startButton" onClick={onclickStartButton}>
          시작하기
        </button>
        <button className="memoButton" onClick={onclickMemoButton}>
          메모장에 적어보기
        </button>
        <button className="madeButton" onClick={onclickMadeButton}>
          ETC..
        </button>
      </div>
    </Style.home>
  );
  
}

export default Home;
