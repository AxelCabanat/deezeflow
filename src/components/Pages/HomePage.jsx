import { Link } from 'react-router-dom';
import './HomePage.css';
import { useContext } from 'react';
import StartQuestionnaireContext from '../../Contexts/StartQuestionnaire';
import ColorThemeContext from '../../Contexts/ColorThemeContext';
import { resetMood } from '../Questions/AlgoMood';
import { shuffle } from '../Questions/AlgoQuestion';
import questionsData from '../Questions/QuestionsData';
import Plus from '../../assets/Plus-Big.png';

const HomePage = ({ DeezePlaylistSelection }) => {
	const { setMymood, resetStep } = useContext(StartQuestionnaireContext);
	const { myColorTheme } = useContext(ColorThemeContext);
	return (
		<div className="accueil">
			<div className="divButton">
				<Link to="/form">
					<button
						type="button"
						className={`buttonMood ${myColorTheme
							? `theme-${myColorTheme}-shadow`
							: 'theme-default-shadow'}`}
						onClick={() => {
							resetStep();
							resetMood();
							shuffle(questionsData, true);
							setMymood('');
						}}
					>
						<div>
							{' '}
							<h2> Dans quel mood es-tu?</h2>
							<p>
								{' '}
								<br /> Remplis notre questionnaire pour trouver la playlist parfaitement adaptée à ton
								humeur du moment!
							</p>{' '}
						</div>
					</button>
				</Link>{' '}
			</div>

			<div className="suggestOther">
				<div className="suggestOtherScroll">
					{shuffle(DeezePlaylistSelection).slice(0, 3).map((playlist) => (
						<Link key={playlist.id} to={`/my-playlist/${playlist.id}`}>
							<img src={playlist.picture_big} alt="cover" />
						</Link>
					))}

					<Link className="plus-img" to="/deezeflow-playlists">
						<img src={Plus} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
