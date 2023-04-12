import Style from './Style';
import photo from '../assets/img/rilla.jpg';
import { useNavigate } from 'react-router-dom';

export default function Made() {
  const navigate = useNavigate();
  function homeButton() {
    navigate('/');
  }
  return (
    <Style.made>
      <div>
        <p className="todoBy">운동하고 싶다...</p>
        <img className="photoImage" src={photo} />
        <p className="githubLink">
          My GitHub : <a href="https://github.com/ghrbsaod">ghrbsaod</a>
        </p>
        <button className="homeButton" onClick={homeButton}>
          go HOME
        </button>
      </div>
    </Style.made>
  );
}
