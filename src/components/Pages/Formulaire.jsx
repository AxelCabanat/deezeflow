import questionsData from '../Questions/QuestionsData';
import { addAnswer, resetMood, calculateScore } from '../Questions/AlgoMood';
import QuestionsComponent from '../Questions/QuestionsComponent';
import './Formulaire.css';
import { useState, useEffect, useContext } from 'react';
import { shuffle } from '../Questions/AlgoQuestion';
import SuggestionPlaylist from '../SuggestionPlaylist';
import StartQuestionnaireContext from '../../Contexts/StartQuestionnaire';

const Formulaire = () => {
  const { myMood, setMymood, step, setStep, resetStep } = useContext(
    StartQuestionnaireContext
  );

  useEffect(() => {
    const elementScroll = document.querySelector('.question-screen');

    if (!elementScroll) {
      return;
    }

    setTimeout(() => (elementScroll.scrollTop = 0), 0);

    if (step === 4) {
      setMymood(calculateScore());
    }
  }, [step]);

  function nextStep() {
    setStep(step + 1);
  }

  useEffect(() => {
    shuffle(questionsData, true);
  }, []);

  return (
    <>
      {!myMood && (
        <QuestionsComponent
          questions={questionsData[step]}
          onAnswered={(answer) => {
            addAnswer(answer);
            nextStep();
          }}
        />
      )}

      {myMood && (
        <>
          <SuggestionPlaylist myMood={myMood} />

          <button
            className="buttonReplay"
            onClick={() => {
              resetMood();
              resetStep();
              shuffle(questionsData, true);
              setMymood('');
            }}
          >
            Rejouer
          </button>
        </>
      )}
    </>
  );
};

export default Formulaire;
