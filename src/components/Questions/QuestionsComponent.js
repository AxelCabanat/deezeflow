import { useContext } from 'react';
import ColorThemeContext from '../../Contexts/ColorThemeContext';
import './QuestionComponent.css';


const QuestionsComponent = ({ questions, onAnswered = () => {} }) => {
	const {myColorTheme} = useContext(ColorThemeContext)
	return (
		<div className="question-screen">
			<div className ="placeholder"></div>
			<h3 className = {`box-questions ${myColorTheme? `theme-${myColorTheme}-shadow`:"theme-default-shadow"}`}><span>{questions.question}</span></h3>
			<ul>
				{questions.answers.map((resp) => (
					<li className = "box-answers cursor-pointer"
						onClick={() => {
							onAnswered(resp.mood)
						}}
					><div>
						{resp.title}
					</div>
					</li>
				))}
			</ul>
			<div className ="placeholder"></div>
		</div>
	);
};

export default QuestionsComponent;
