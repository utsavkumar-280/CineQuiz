export type Option = {
	_id: string;
	isCorrect: boolean;
	content: string;
};

export type Question = {
	_id: string;
	points: number;
	negativePoints: number;
	question: string;
	options: Option[];
	selectedOptionId?: string | null;
};

export type Quiz = {
	_id: string;
	name: string;
	description: string;
	coverImage: string;
	category: string;
	totalScore: number;
	questions: Question[];
};
