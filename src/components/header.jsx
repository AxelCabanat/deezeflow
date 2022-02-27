import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ColorThemeContext from '../Contexts/ColorThemeContext';
import './header.css';

const Header = ({ setMyColorTheme }) => {
	const { myColorTheme } = useContext(ColorThemeContext);

	const [ deployed, setDeployed ] = useState(false);

	function getDeployed() {
		setDeployed(!deployed);
	}

	return (
		<div>
			<div className="head-bar">
				<Link to="/">
					<div className="deeze-container">
						<div className="deeze-logo">
							<span
								className={`icon-logo ${myColorTheme
									? `theme-${myColorTheme}-fill`
									: 'theme-default-fill'}`}
							/>
							<h1>Deezeflow</h1>
						</div>
					</div>
				</Link>
				<div>
					<div className="front-burger-icon" onClick={getDeployed}>
						<div className="burger-logo">
							<span className="icon-setting" />
							<div />
						</div>
					</div>

					<div className="burger-zone">
						<div
							className={`color joy  ${deployed ? 'joy-deployed' : 'not-deployed'}`}
							onClick={() => {
								setMyColorTheme('joie');
							}}
						/>
						<div
							className={`color focus ${deployed ? 'focus-deployed' : 'not-deployed'}`}
							onClick={() => {
								setMyColorTheme('concentration');
							}}
						/>
						<div
							className={`color anger ${deployed ? 'anger-deployed' : 'not-deployed'}`}
							onClick={() => {
								setMyColorTheme('colère');
							}}
						/>
						<div
							className={`color sadness ${deployed ? 'sadness-deployed' : 'not-deployed'}`}
							onClick={() => {
								setMyColorTheme('tristesse');
							}}
						/>
						<div
							className={`color party ${deployed ? 'party-deployed' : 'not-deployed'}`}
							onClick={() => {
								setMyColorTheme('fiesta');
							}}
						/>
						<div
							className={`color sporty ${deployed ? 'sporty-deployed' : 'not-deployed'}`}
							onClick={() => {
								setMyColorTheme('sport');
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
