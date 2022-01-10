import {
	createContext,
	useEffect,
	useContext,
	useReducer,
	FunctionComponent,
} from "react";

import { quizReducer, quizInitialState } from "../reducers/quiz.reducer";
import { initAllQuizzes, setPreviousAttempts } from "../reducers/quiz.reducer";
import { Attempts } from "../reducers/reducer.types";
import { Quiz } from "../utils";
import { QuizDataContext } from "./QuizDataContext.types";

const QuizDataContext = createContext<QuizDataContext>({} as QuizDataContext);

export const QuizDataProvider: FunctionComponent = ({ children }) => {
	const [state, dispatch] = useReducer(quizReducer, quizInitialState);

	const getAllQuizzes = async () => {
		const response = await fetch("https://cine-insta.herokuapp.com/quizzes");
		if (response.status === 200) {
			const data = await response.json();
			console.log(data);
			dispatch(initAllQuizzes({ quizzes: data.response }));
		}
	};

	useEffect(() => {
		getAllQuizzes();
		dispatch(setPreviousAttempts());
	}, []);

	return (
		<QuizDataContext.Provider value={{ state, dispatch }}>
			{children}
		</QuizDataContext.Provider>
	);
};

export const useQuizData = () => useContext(QuizDataContext);
