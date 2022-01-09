import { v4 as uuid } from "uuid";
import { Quiz } from "../utils";
import { Attempts, QuizState, QuizAction } from "./reducer.types";

export const initialState: QuizState = {
	quizzes: null,
	active: {
		quiz: null,
		questionNo: 0,
		score: 0,
	},
	isClickEnabled: true,
	previousAttempts: null,
};

export const quizReducer = (
	state: QuizState,
	action: QuizAction
): QuizState => {
	switch (action.type) {
		case "INIT_ALL_QUIZZES":
			return { ...state, quizzes: action.payload.quizzes };

		case "INIT_ACTIVE_QUIZ":
			const { quizId } = action.payload;
			const selectedQuiz: Quiz = state.quizzes?.find(
				(quiz) => quiz._id === quizId
			) as Quiz;

			selectedQuiz.questions.forEach(
				(question) => (question.selectedOptionId = null)
			);

			return { ...state, active: { ...state.active, quiz: selectedQuiz } };

		case "SET_SELECTED_OPTION_ID":
			const { optionId, questionId } = action.payload;
			return {
				...state,
				active: {
					...state.active,
					quiz: {
						...state.active.quiz,
						questions: state.active?.quiz?.questions.map((question) => {
							return question._id === questionId
								? { ...question, selectedOptionId: optionId }
								: question;
						}),
					} as Quiz,
				},
			};

		case "INC_SCORE":
			return {
				...state,
				active: {
					...state.active,
					score: state.active.score + action.payload.score,
				},
			};

		case "DEC_SCORE":
			return {
				...state,
				active: {
					...state.active,
					score: state.active.score - action.payload.score,
				},
			};

		case "INC_QUESTION_NO":
			return {
				...state,
				active: { ...state.active, questionNo: state.active.questionNo + 1 },
			};

		case "ENABLE_CLICK":
			return {
				...state,
				isClickEnabled: true,
			};

		case "DISABLE_CLICK":
			return {
				...state,
				isClickEnabled: false,
			};

		case "ADD_ATTEMPTED_QUIZ":
			const dashboard = localStorage.getItem("dashboard");
			const attemptedQuiz = {
				_id: uuid(),
				quiz: action.payload.activeQuiz,
				score: action.payload.score,
			};

			if (dashboard) {
				let { previousAttempts } = JSON.parse(dashboard);
				previousAttempts = [...previousAttempts, attemptedQuiz];

				localStorage.setItem("dashboard", JSON.stringify({ previousAttempts }));
			} else {
				localStorage.setItem(
					"dashboard",
					JSON.stringify({ previousAttempts: [attemptedQuiz] })
				);
			}
			return {
				...state,
				previousAttempts: [
					...(state.previousAttempts as Attempts[]),
					attemptedQuiz,
				],
			};

		case "CLEAR_ALL_PREVIOUS_ATTEMPTS":
			const savedDashboard = localStorage.getItem("dashboard");
			if (savedDashboard) {
				localStorage.removeItem("dashboard");
			}
			return { ...state, previousAttempts: null };

		default:
			return state;
	}
};

//action creators

export const initAllQuizzes = ({ quizzes }: { quizzes: Quiz[] }) => ({
	type: "INIT_ALL_QUIZZES",
	payload: {
		quizzes,
	},
});

export const initActiveQuiz = ({ quizId }: { quizId: string }) => ({
	type: "INIT_ACTIVE_QUIZ",
	payload: { quizId },
});

export const setSelectedOptionId = ({
	optionId,
	questionId,
}: {
	optionId: string;
	questionId: string;
}) => ({
	type: "SET_SELECTED_OPTION_ID",
	payload: { optionId, questionId },
});

export const incScore = ({ score }: { score: number }) => ({
	type: "INC_SCORE",
	payload: { score },
});

export const decScore = ({ score }: { score: number }) => ({
	type: "DEC_SCORE",
	payload: { score },
});

export const incQuestionNo = () => ({ type: "INC_QUESTION_NO" });

export const enableClick = () => ({ type: "ENABLE_CLICK" });

export const disableClick = () => ({ type: "DISABLE_CLICK" });

export const addAttemptedQuiz = ({
	activeQuiz,
	score,
}: {
	activeQuiz: Quiz;
	score: number;
}) => ({
	type: "ADD_ATTEMPTED_QUIZ",
	payload: { activeQuiz, score },
});

export const clearAllPreviousAttempts = () => ({
	type: "CLEAR_ALL_PREVIOUS_ATTEMPTS",
});
