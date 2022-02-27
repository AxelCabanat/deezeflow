import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { moodPlaylist, searchPlaylist } from './PlaylistsData';

import './suggest.css';
import ColorThemeContext from '../Contexts/ColorThemeContext';
import StartQuestionnaireContext from '../Contexts/StartQuestionnaire';
import { shuffle } from './Questions/AlgoQuestion';

function SuggestionPlaylist({ myMood }) {
	const { myColorTheme, setMyColorTheme } = useContext(ColorThemeContext);
	const { setSavedMood } = useContext(StartQuestionnaireContext);
	const [ moodPlaylistSelection, setMoodPlaylistSelection ] = useState([]);
	const [ searchPlaylistSelection, setSearchPlaylistSelection ] = useState([]);

	useEffect(() => {
		setMyColorTheme(myMood);
		setSavedMood(myMood);
	}, []);

	useEffect(() => {
		const myMoodPlaylist = moodPlaylist.find((object) => object.mood === myMood);
		fetch(myMoodPlaylist.url).then((response) => response.json()).then((data) => setMoodPlaylistSelection(data));
	}, []);

	useEffect(() => {
		const mySearchPlaylist = searchPlaylist.find((object) => object.mood === myMood);
		fetch(mySearchPlaylist.url)
			.then((response) => response.json())
			.then((data) => setSearchPlaylistSelection(data.data));
	}, []);

	return (
		<div className="suggest">
			<h3 className={` ${myColorTheme ? `theme-${myColorTheme}-shadow` : 'theme-default-shadow'}`}>
				<span>Nous avons trouvé un résultat :</span>
			</h3>

			<Link to={`/my-playlist/${moodPlaylistSelection.id}`}>
				<div className="playlistMood">
					<img src={moodPlaylistSelection.picture_medium} alt="cover" />
				</div>
			</Link>

			<h2>D'autres suggestions</h2>

			<div className="suggestOther">
				<div className="suggestOtherScroll">
					{shuffle(searchPlaylistSelection).slice(0, 5).map((playlist) => (
						<Link key={playlist.id} to={`/my-playlist/${playlist.id}`}>
							<img src={playlist.picture_big} alt="cover" />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default SuggestionPlaylist;
