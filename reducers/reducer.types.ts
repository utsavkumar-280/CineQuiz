import { Quiz } from "../utils";
export interface Attempts {
	_id: string;
	quiz: Quiz | null;
	score: number;
}
export interface QuizState {
	quizzes: Quiz[] | null;
	active: {
		quiz: Quiz | null;
		questionNo: number;
		score: number;
	};
	isClickEnabled: boolean;
	previousAttempts: Attempts[] | null;
}

export type QuizAction =
	| {
			type: "INIT_ALL_QUIZZES";
			payload: {
				quizzes: Quiz[];
			};
	  }
	| {
			type: "INIT_ACTIVE_QUIZ";
			payload: { quizId: string };
	  }
	| {
			type: "SET_SELECTED_OPTION_ID";
			payload: { optionId: string; questionId: string };
	  }
	| { type: "INC_SCORE"; payload: { score: number } }
	| { type: "DEC_SCORE"; payload: { score: number } }
	| { type: "INC_QUESTION_NO" }
	| { type: "ENABLE_CLICK" }
	| { type: "DISABLE_CLICK" }
	| {
			type: "ADD_ATTEMPTED_QUIZ";
			payload: { activeQuiz: Quiz; score: number };
	  }
	| { type: "CLEAR_ALL_PREVIOUS_ATTEMPTS" };
