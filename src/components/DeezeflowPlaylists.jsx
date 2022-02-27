import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './DeezeflowPlaylists.css';
import ColorThemeContext from '../Contexts/ColorThemeContext';

function DeezeflowPlaylists({ DeezePlaylistSelection }) {
  const { myColorTheme } = useContext(ColorThemeContext);

  return (
    <div className="suggest">
      <h3
        className={` ${
          myColorTheme ? `theme-${myColorTheme}-shadow` : 'theme-default-shadow'
        }`}
      >
        <span>Nos Playlists</span>
      </h3>
      <div className="deezeflow-suggest">
        {DeezePlaylistSelection.slice(0, 7).map((playlist) => (
          <Link to={`/my-playlist/${playlist.id}`}>
            <div className="playlistDeezeflow">
              <img src={playlist.picture_medium} alt="cover" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DeezeflowPlaylists;
