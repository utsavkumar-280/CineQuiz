import React from "react";
import { QuizState } from "../reducers/reducer.types";

export type QuizDataContext = {
	state: QuizState;
	dispatch: React.Dispatch<any>;
};
