import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ColorThemeContext from './Contexts/ColorThemeContext';
import StartQuestionnaireContext from './Contexts/StartQuestionnaire';
import PlayerContextProvider from './Contexts/PlayerContextProvider';
import Header from './components/header';
import Formulaire from './components/Pages/Formulaire';
import HomePage from './components/Pages/HomePage';
import SuggestionPlaylist from './components/SuggestionPlaylist';
import DeezeflowPlaylists from './components/DeezeflowPlaylists';
import MyPlaylist from './components/MyPlaylist';
import Footer from './components/Footer';

import './font.css';

function App() {
	const [ myMood, setMymood ] = useState();
	const [ step, setStep ] = useState(0);
	const [ savedMood, setSavedMood ] = useState('');
	const [ myColorTheme, setMyColorTheme ] = useState();
	const [ DeezePlaylistSelection, setDeezePlaylistSelection ] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_DEEZFLOW_API}/deezer/user/4633045002/playlists`)
			.then((response) => response.json())
			.then((data) => setDeezePlaylistSelection(data.data.slice(0, 7)));
	}, []);

	function resetStep() {
		setStep(0);
	}
	return (
		<PlayerContextProvider>
			<StartQuestionnaireContext.Provider
				value={{
					myMood,
					setMymood,
					step,
					setStep,
					resetStep,
					savedMood,
					setSavedMood
				}}
			>
				<ColorThemeContext.Provider value={{ myColorTheme, setMyColorTheme }}>
					<Router>
						<div className="App">
							<Header setMyColorTheme={setMyColorTheme} />

							<Routes>
								<Route
									exact
									path="/"
									element={<HomePage DeezePlaylistSelection={DeezePlaylistSelection} />}
								/>
								<Route path="/form" element={<Formulaire />} />
								<Route path="/suggests" element={<SuggestionPlaylist />} />
								<Route
									path="/deezeflow-playlists"
									element={<DeezeflowPlaylists DeezePlaylistSelection={DeezePlaylistSelection} />}
								/>
								<Route path="/my-playlist/:id" element={<MyPlaylist />} />
							</Routes>

							<Footer />
						</div>
					</Router>
				</ColorThemeContext.Provider>
			</StartQuestionnaireContext.Provider>
		</PlayerContextProvider>
	);
}

export default App;
