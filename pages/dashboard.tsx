import { useEffect } from "react";
import Link from "next/link";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import DashboardCard from "../components/DashboardCard";

import { useQuizData } from "../contexts/QuizDataProvider";
import {
	clearAllPreviousAttempts,
	resetQuizState,
} from "../reducers/quiz.reducer";

const Dashboard = () => {
	const {
		state: { previousAttempts },
		dispatch,
	} = useQuizData();
	console.log({ previousAttempts });
	useEffect(() => {
		dispatch(resetQuizState());
	}, [dispatch]);

	return (
		<Layout>
			<Seo title={`Dashboard`} />
			<main className="w-full grow px-2 flex flex-col items-center">
				{previousAttempts && previousAttempts.length != 0 ? (
					<>
						<section className="w-full xl:w-9/12 lg:w-10/12 flex justify-between items-center h-16 sm:h-20">
							<h1 className="text-lg text-neutral-300">Previous Attempt</h1>
							<button
								className=" text-gray-500 border border-gray-800 px-3 rounded-full hover:text-green-400 hover:border-green-400 transition-all ease duration-[250ms]"
								onClick={() => dispatch(clearAllPreviousAttempts())}
							>
								Clear All
							</button>
						</section>
						<section className="grow w-full xl:w-9/12 lg:w-10/12 flex flex-col items-center">
							{previousAttempts
								.slice(0)
								.reverse()
								.map((attempt) => (
									<DashboardCard key={attempt._id} attempt={attempt} />
								))}
						</section>
					</>
				) : (
					<section className="w-full grow flex flex-col items-center justify-center text-gray-300 mb-40">
						<h1 className=" text-2xl font-bold">No Previous Attempts</h1>
						<Link href={`/`}>
							<a className=" text-green-400"> Checkout these quizzes.</a>
						</Link>
					</section>
				)}
			</main>
		</Layout>
	);
};

export default Dashboard;
