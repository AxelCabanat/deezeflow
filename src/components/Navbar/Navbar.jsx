import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { shuffle } from '../Questions/AlgoQuestion';
import questionsData from '../Questions/QuestionsData';
import StartQuestionnaireContext from '../../Contexts/StartQuestionnaire';
import { resetMood } from '../Questions/AlgoMood';

import './Navbar.css';

export default function Navbar() {
  const { setMymood, resetStep } = useContext(StartQuestionnaireContext);

  return (
    <div>
      <nav>
        <ul className="list">
          <li>
            <button type="button" className="accueil">
              <Link to="/">
                <span className="icon-home" />
              </Link>
            </button>
          </li>
          <li>
            <button type="button" className="quizzMood">
              <Link
                to="/form"
                onClick={() => {
                  resetMood();
                  resetStep();
                  shuffle(questionsData, true);
                  setMymood('');
                }}
              >
                <span className="icon-logo" />
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
