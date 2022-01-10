import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import { useQuizData } from "../contexts/QuizDataProvider";
import { addAttemptedQuiz } from "../reducers/quiz.reducer";

const Result = () => {
	const {
		state: {
			active: { quiz, score },
			previousAttempts,
		},
		dispatch,
	} = useQuizData();

	const router = useRouter();
	const { attemptId } = router.query;

	const currentAttempt = previousAttempts?.find(
		(attempt) => attempt._id === attemptId
	);

	const result = attemptId ? currentAttempt : { quiz, score };

	console.log({ attemptId, quiz, score, previousAttempts });

	useEffect(() => {
		if (quiz && score) {
			dispatch(addAttemptedQuiz({ activeQuiz: quiz, score }));
		}
	}, [dispatch, quiz, score]);

	return (
		<Layout>
			<Seo title={`Result`} />
			<main className="w-full grow px-2 flex flex-col items-center ">
				{result?.quiz && result.score ? (
					<section className="grow w-full xl:w-9/12 lg:w-10/12 flex flex-col items-center">
						<header className="w-full h-24 sm:h-20 flex justify-center items-center">
							<h1 className="text-gray-200 font-bold text-center text-2xl sm:text-3xl ">
								{`Result: ${result?.quiz?.name}`}
							</h1>
						</header>
						<div className="w-full sm:w-9/12 grow flex flex-col items-center">
							<section className="w-full flex justify-center my-2 sm:my-4 sm:text-lg sm:font-medium">
								<h2 className="text-gray-500 ">
									Score:{" "}
									<span
										className={`${
											result?.score >= 0 ? "text-green-400" : "text-red-500"
										}`}
									>
										{`${result?.score} / ${result?.quiz?.totalScore}`}
									</span>
								</h2>
							</section>
							{result?.quiz?.questions.map((currentQuestion) => (
								<div
									key={currentQuestion._id}
									className="w-full flex flex-col items-center"
								>
									<section className="w-full flex items-center justify-center xl:my-8">
										<h1 className="text-gray-200 text-center">
											{currentQuestion?.question}
										</h1>
									</section>
									<section className="w-full my-7 flex flex-col justify-evenly items-center sm:px-5 ">
										{currentQuestion?.options.map((option) => (
											<button
												key={option._id}
												className={`w-full sm:text-lg font-medium tracking-wide p-5 mb-4 rounded-2xl bg-themeCard text-gray-200 transition-all ease duration-[250ms]
										 ${
												!option.isCorrect &&
												option._id === currentQuestion?.selectedOptionId &&
												"bg-red-600"
											} ${option.isCorrect && "bg-green-600 "}`}
												disabled={true}
											>
												{option.content}
											</button>
										))}
									</section>
								</div>
							))}
						</div>
					</section>
				) : (
					<section className="w-full grow flex flex-col items-center justify-center text-gray-300 mb-40">
						<h1 className=" text-2xl font-bold">No Results</h1>
						<Link href={`/`}>
							<a className=" text-green-400"> Checkout these quizzes.</a>
						</Link>
					</section>
				)}
			</main>
		</Layout>
	);
};

export default Result;
