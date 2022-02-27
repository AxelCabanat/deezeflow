import { useState, useEffect, useRef, useContext } from 'react';
import ColorThemeContext from '../Contexts/ColorThemeContext';
import Slider from 'rc-slider';

import PlayerContext from '../Contexts/PlayerContext';

import 'rc-slider/assets/index.css';
import '../player.css';
/**
 * Converti des secondes au format MM:SS
 *
 * @param {Number} seconds
 *
 * @returns String
 */
const secondsToMMSS = (seconds) =>
  new Date(Math.round(seconds) * 1000).toISOString().substr(14, 5);

function Player() {
  const {
    currentTrack,
    setCurrentTrack,
    isPlaying,
    setIsPlaying,
    changeTrack,
  } = useContext(PlayerContext);

  const { myColorTheme } = useContext(ColorThemeContext);

  // Référence vers l'élément DOM audio.
  // Permet d'appeler play, pause et de tracker le temps de la musique
  const currentTrackElm = useRef();

  // Le temps de la musique en cours
  const [currentTime, setCurrentTime] = useState(0);

  // Change la vue du lecteur (petit ou grand)
  const [isDisplayOff, setIsDisplayOff] = useState(false);

  /**
   * Lorsque l'élément DOM audio est set, on l'initialise
   */
  useEffect(() => {
    // Si l'élément DOM n'est pas encore accessible, on sort
    if (!currentTrackElm.current) {
      return;
    }

    // Callback pour traquer le temps passé
    const onTimeUpdate = () => {
      setCurrentTime(currentTrackElm.current.currentTime);
    };

    // Callback pour savoir lorsque la musique est finie
    const onTimeEnded = () => {
      changeTrack(1);
    };

    // Ajout des listeners
    currentTrackElm.current.addEventListener('timeupdate', onTimeUpdate);
    currentTrackElm.current.addEventListener('ended', onTimeEnded);

    // Fonction exécutée lorsque le composant est démonté (détruit)
    return () => {
      // Si l'élément DOM à été initialisé, on retire ses event listener
      if (currentTrackElm.current) {
        currentTrackElm.current.removeEventListener('timeupdate', onTimeUpdate);
        currentTrackElm.current.removeEventListener('ended', onTimeEnded);
      }
    };
  }, [currentTrack]);

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      pause();
    }
  }, [isPlaying]);

  /**
   * Lorsque la musique en cours change, on la charge (load)
   * puis si le lecteur était en cours de lecture, on lance play()
   */
  useEffect(() => {
    if (!currentTrack) {
      return;
    }

    currentTrackElm.current.load();

    if (isPlaying) {
      play();
    }
  }, [currentTrack]);

  /**
   * Joue la musique courante
   */
  function play() {
    currentTrackElm.current.play();
    setIsPlaying(true);
  }

  /**
   * Met la musique courante en pause
   */
  function pause() {
    currentTrackElm.current.pause();
    setIsPlaying(false);
  }

  /**
   * Excécuté lorsque la valeur du slider change
   * On met à jour le temps courant de la musique courante
   */
  function onSliderChange(time) {
    currentTrackElm.current.currentTime = time;
  }

  /**
   * Change l'apparence du lecteur
   */
  function triggerToggle() {
    setIsDisplayOff(!isDisplayOff);
  }

  return (
    <div className={`player ${!isDisplayOff ? 'isDisplayOff-checked' : ''}`}>
      <div className="playerBlock">
        <span onClick={() => triggerToggle()} className="icon-arrow" />

        <div>
          <img src={currentTrack.bigPicture} alt="Pochette de l'album" />
        </div>
      </div>

      <div className="globalPlayer">
        <div className="titlePlayer">
          <p className="title-track">{currentTrack.title}</p>
          <p className="singer">{currentTrack.artist}</p>
        </div>

        <Slider
          value={currentTime}
          max={currentTrack.duration}
          onChange={onSliderChange}
          className={`${
            myColorTheme ? `theme-${myColorTheme}-fill` : 'theme-default-fill'
          }`}
        />

        <div className="blockTime">
          <p>{secondsToMMSS(currentTime)}</p>
          <p>{secondsToMMSS(currentTrack.duration)}</p>
        </div>

        <div className="blockPlayer">
          <audio ref={(el) => (currentTrackElm.current = el)}>
            <source src={currentTrack.src} />
          </audio>

          <div className="buttonPlayer">
            <button
              type="button"
              className="prev"
              aria-label="Previous"
              onClick={() => changeTrack(-1)}
            >
              <div>
                <span className="icon-next" />
              </div>
            </button>

            {isPlaying ? (
              <button className="pause" onClick={pause}>
                <div>
                  <span
                    className={`icon-pause ${
                      myColorTheme
                        ? `theme-${myColorTheme}-fill`
                        : 'theme-default-fill'
                    }`}
                  />
                </div>
              </button>
            ) : (
              <button className="play" onClick={play}>
                <div>
                  <span
                    className={`icon-play ${
                      myColorTheme
                        ? `theme-${myColorTheme}-fill`
                        : 'theme-default-fill'
                    }`}
                  />
                </div>
              </button>
            )}

            <button
              type="button"
              className="next"
              aria-label="Next"
              onClick={() => changeTrack(1)}
            >
              <div>
                <span className="icon-next" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
