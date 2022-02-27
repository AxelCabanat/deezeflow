import { useContext } from 'react';

import PlayerContext from '../Contexts/PlayerContext';
import Navbar from './Navbar/Navbar';
import Player from './Player';

export default function Footer() {
  const { currentTrack } = useContext(PlayerContext);

  return (
    <>
      {currentTrack && <Player className="player" />}

      <Navbar />
    </>
  );
}
