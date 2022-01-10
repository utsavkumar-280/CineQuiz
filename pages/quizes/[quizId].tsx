/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Seo from "../../components/Seo";
import Layout from "../../components/Layout";

import { useQuizData } from "../../contexts/QuizDataProvider";
import { Question, Option } from "../../utils";
import {
	initActiveQuiz,
	incScore,
	decScore,
	incQuestionNo,
	setSelectedOption,
	enableClick,
	disableClick,
} from "../../reducers/quiz.reducer";

const Quiz = () => {
	const router = useRouter();
	const { quizID } = router.query;

	const {
		state: {
			active: { quiz, questionNo, score },
			isClickEnabled,
		},
		dispatch,
	} = useQuizData();

	const [selectedOptionId, setSelectedOptionId] = useState("");

	const currentActiveQuestion = quiz?.questions[questionNo] as Question;

	const calculateScoreAndUpdateQuestion = (option: Option) => {
		option.isCorrect
			? dispatch(incScore({ score: currentActiveQuestion?.points }))
			: dispatch(decScore({ score: currentActiveQuestion?.negativePoints }));

		if (questionNo + 1 === quiz?.questions.length) {
			router.replace("/result");
		} else {
			dispatch(incQuestionNo());
		}
	};

	const optionClickHandler = async (option: Option) => {
		setSelectedOptionId(option._id);
		dispatch(
			setSelectedOption({
				optionId: option?._id,
				questionId: currentActiveQuestion?._id,
			})
		);

		dispatch(disableClick());
		setTimeout(() => {
			calculateScoreAndUpdateQuestion(option);
			dispatch(enableClick());
		}, 1000);
	};

	useEffect(() => {
		dispatch(initActiveQuiz({ quizId: quizID as string }));
		return () => {};
	}, [dispatch, quizID]);

	return (
		<Layout>
			<Seo title={`${quiz?.name}`} />
			<main className="w-full grow px-2 flex flex-col items-center ">
				{quiz && currentActiveQuestion ? (
					<section className="grow w-full xl:w-9/12 lg:w-10/12 flex flex-col items-center">
						<header className="w-full h-24 sm:h-20 flex justify-center items-center">
							<h1 className="text-gray-200 font-bold text-center text-2xl sm:text-3xl ">
								{quiz?.name}
							</h1>
						</header>
						<div className="w-full sm:w-9/12 grow flex flex-col items-center">
							<section className="w-full flex justify-between my-2 sm:my-4 sm:text-lg sm:font-medium">
								<h2 className="text-gray-500 ">
									Question:{" "}
									<span className="text-gray-200">
										{questionNo + 1}/{quiz?.questions.length}
									</span>
								</h2>
								<h2 className="text-gray-500 ">
									Score:{" "}
									<span
										className={`${
											score >= 0 ? "text-green-400" : "text-red-500"
										}`}
									>
										{score}
									</span>
								</h2>
							</section>
							<section className="w-full flex items-center justify-center xl:my-8">
								<h1 className="text-gray-200 text-center">
									{currentActiveQuestion?.question}
								</h1>
							</section>
							<section className="w-full my-7 flex flex-col justify-evenly items-center sm:px-5 ">
								{currentActiveQuestion?.options.map((option) => (
									<button
										key={option._id}
										className={`w-full sm:text-lg font-medium tracking-wide p-5 mb-4 rounded-2xl bg-themeCard text-gray-200 transition-all ease duration-[250ms]
										 ${
												!isClickEnabled &&
												!option.isCorrect &&
												option._id === selectedOptionId &&
												"bg-red-600"
											} ${
											!isClickEnabled && option.isCorrect && "bg-green-600 "
										}`}
										disabled={!isClickEnabled}
										onClick={() => optionClickHandler(option)}
									>
										{option.content}
									</button>
								))}
							</section>
						</div>
					</section>
				) : (
					<div></div>
				)}
			</main>
		</Layout>
	);
};

export default Quiz;
