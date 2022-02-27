import { useState, useEffect } from "react";
import PlayerContext from "./PlayerContext";

function PlayerContextProvider({ children }) {
  // Playlist
  const [tracks, setTracks] = useState([]);

  // Musique en cours
  const [currentTrack, setCurrentTrack] = useState();

  // Est-ce que la musique en cours défile ?
  const [isPlaying, setIsPlaying] = useState(false);

  // Définit la première musique quand la playlist change
  useEffect(() => {
    if (tracks && tracks.length > 0) {
      setCurrentTrack(tracks[0]);
    }
  }, [tracks])

	/**
   * Change de musique selon la direction :
   * 1 = avance
   * -1 = recule
   */
	function changeTrack(direction = 1) {
		// On récupère l'index de la musique suivante
		const nextTrackIndex = tracks.indexOf(currentTrack) + direction;

		// Si l'index de la prochaine musique n'est pas dans la range du tableau tracks,
		// on ne fait rien.
		if (nextTrackIndex < 0 || nextTrackIndex === tracks.length) {
			return;
		}

		// On définit la prochaine musique
		setCurrentTrack(tracks[nextTrackIndex]);
	}

  return (
    <PlayerContext.Provider value={{
      tracks,
      setTracks,
      currentTrack,
      setCurrentTrack,
      isPlaying,
      setIsPlaying,
      changeTrack,
    }}>
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;