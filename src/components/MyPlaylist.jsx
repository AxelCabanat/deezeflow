import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import ColorThemeContext from '../Contexts/ColorThemeContext';
import PlayerContext from '../Contexts/PlayerContext';

import './MyPlaylist.css';

const MyPlaylist = () => {
  const { myColorTheme } = useContext(ColorThemeContext);
  const { setTracks, currentTrack, setCurrentTrack, isPlaying, setIsPlaying } =
    useContext(PlayerContext);

  const { id } = useParams();
  const [myPlaylist, setMyPlaylist] = useState([]);
  const [myPlaylistCover, setMyPlaylistCover] = useState('');

  useEffect(() => {
    setTracks(myPlaylist);
  }, [myPlaylist]);

  function onTrackPause(track) {
    setCurrentTrack(track);
    setIsPlaying(false);
  }

  function onTrackPlay(track) {
    setCurrentTrack(track);
    setIsPlaying(true);
  }

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_DEEZFLOW_API}/deezer/playlist/${
        id || myPlaylistId
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          return setMyPlaylist([]);
        }

        setMyPlaylistCover(data['picture_medium']);

        setMyPlaylist(
          data.tracks.data.map((track) => ({
            bigPicture: track.album.cover_big,
            smallPicture: track.album.cover_small,
            title: track.title,
            artist: track.artist.name,
            duration: 30,
            src: track.preview,
          }))
        );
      });
  }, []);

  return (
    <div className="playlist-container">
      <div className="playlist-cover">
        <img src={myPlaylistCover} alt="cover" />
      </div>

      <button
        className={`buttonPlay playButton  ${
          myColorTheme ? `theme-${myColorTheme}-shadow` : 'theme-default-shadow'
        }`}
        onClick={() => {
          setIsPlaying(true);
        }}
      >
        PLAY ALL
      </button>
      <a
        href={`https://www.deezer.com/fr/playlist/${id}`}
        className="to-deezer-link"
      >
        Playlist en intégralité
      </a>
      <div className="warpPlaylist">
        {myPlaylist.map((track) => (
          <div
            key={track.src}
            className={
              isPlaying && currentTrack.src === track.src
                ? 'active track-info-box'
                : ' track-info-box'
            }
          >
            <div className="track-info-text">
              <p className="title-track">{track.title}</p>
              <p className="singer">{track.artist}</p>
            </div>

            {isPlaying && currentTrack.src === track.src ? (
              <button className="pause" onClick={() => onTrackPause(track)}>
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
              <button className="play" onClick={() => onTrackPlay(track)}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlaylist;
