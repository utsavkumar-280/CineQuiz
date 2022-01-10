import { v4 as uuid } from "uuid";
import { Quiz } from "../utils";
import { Attempts, QuizState, QuizAction } from "./reducer.types";

export const quizInitialState: QuizState = {
	quizzes: null,
	active: {
		quiz: null,
		questionNo: 0,
		score: 0,
	},
	isClickEnabled: true,
	previousAttempts: [],
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
			console.log({ quizId, state });
			const selectedQuiz: Quiz = state?.quizzes?.find(
				(quiz) => quiz?._id === quizId
			) as Quiz;

			console.log({ selectedQuiz, state });

			selectedQuiz?.questions?.forEach(
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
			const attemptedQuiz = {
				_id: uuid(),
				quiz: action.payload.activeQuiz,
				score: action.payload.score,
			};

			if (state.previousAttempts) {
				localStorage.setItem(
					"dashboard",
					JSON.stringify({
						previouslyAttempted: [...state.previousAttempts, attemptedQuiz],
					})
				);
				return {
					...state,
					previousAttempts: [...state.previousAttempts, attemptedQuiz],
				};
			}

			localStorage.setItem(
				"dashboard",
				JSON.stringify({
					previouslyAttempted: [attemptedQuiz],
				})
			);
			return {
				...state,
				previousAttempts: [attemptedQuiz],
			};

		case "CLEAR_ALL_PREVIOUS_ATTEMPTS":
			if (typeof window !== "undefined") {
				const savedDashboard = localStorage.getItem("dashboard");
				if (savedDashboard) {
					localStorage.removeItem("dashboard");
				}
			}

			return { ...state, previousAttempts: [] };

		case "SET_PREVIOUS_ATTEMPTS":
			if (typeof window !== "undefined") {
				const localDashboard = localStorage.getItem("dashboard");
				//console.log({ localDashboard });

				const { previouslyAttempted }: { previouslyAttempted: Attempts[] } =
					localDashboard ? JSON.parse(localDashboard) : [];
				return { ...state, previousAttempts: previouslyAttempted };
			}
		case "RESET_QUIZ_STATE":
			return {
				...quizInitialState,
				quizzes: state.quizzes,
				previousAttempts: state.previousAttempts,
			};

		default:
			return state;
	}
};

//action creators

export const initAllQuizzes = ({
	quizzes,
}: {
	quizzes: Quiz[];
}): QuizAction => ({
	type: "INIT_ALL_QUIZZES",
	payload: {
		quizzes,
	},
});

export const initActiveQuiz = ({ quizId }: { quizId: string }): QuizAction => ({
	type: "INIT_ACTIVE_QUIZ",
	payload: { quizId },
});

export const setSelectedOption = ({
	optionId,
	questionId,
}: {
	optionId: string;
	questionId: string;
}): QuizAction => ({
	type: "SET_SELECTED_OPTION_ID",
	payload: { optionId, questionId },
});

export const incScore = ({ score }: { score: number }): QuizAction => ({
	type: "INC_SCORE",
	payload: { score },
});

export const decScore = ({ score }: { score: number }): QuizAction => ({
	type: "DEC_SCORE",
	payload: { score },
});

export const incQuestionNo = (): QuizAction => ({ type: "INC_QUESTION_NO" });

export const enableClick = (): QuizAction => ({ type: "ENABLE_CLICK" });

export const disableClick = (): QuizAction => ({ type: "DISABLE_CLICK" });

export const addAttemptedQuiz = ({
	activeQuiz,
	score,
}: {
	activeQuiz: Quiz;
	score: number;
}): QuizAction => ({
	type: "ADD_ATTEMPTED_QUIZ",
	payload: { activeQuiz, score },
});

export const clearAllPreviousAttempts = (): QuizAction => ({
	type: "CLEAR_ALL_PREVIOUS_ATTEMPTS",
});

export const setPreviousAttempts = (): QuizAction => ({
	type: "SET_PREVIOUS_ATTEMPTS",
});

export const resetQuizState = (): QuizAction => ({ type: "RESET_QUIZ_STATE" });
