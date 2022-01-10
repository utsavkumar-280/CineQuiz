import { useState } from "react";
import Link from "next/link";
import { Attempts } from "../../reducers/reducer.types";

const DashboardCard = ({ attempt }: { attempt: Attempts }) => {
	return (
		<div className="w-full  flex flex-col justify-between sm:flex-row items-center bg-themeCard mb-5 p-3 sm:p-4  rounded-xl">
			<div className="h-20 smer:h-16 flex flex-col justify-between items-start self-start sm:self-center">
				<Link href={`/quiz?quizid=${encodeURI(attempt.quiz?._id as string)}`}>
					<a className="text-neutral-300 text-lg lg:text-xl font-semibold tracking-wide hover:text-green-400 transition-all ease duration-[250ms]">
						{attempt.quiz?.name}
					</a>
				</Link>
				<Link href={`/result?attemptId=${encodeURI(attempt._id)}`}>
					<a className=" text-gray-500 hover:text-green-400 transition-all ease duration-[250ms]">
						Result
					</a>
				</Link>
			</div>
			<div
				className={`flex ${
					attempt.score > 0 ? "text-green-400 " : "text-red-500 "
				}    rounded-full  self-end sm:self-center`}
			>
				<p className="pr-1 ">Score: </p>
				<p className="pl-1 ">
					{attempt.score}/{attempt.quiz?.totalScore}
				</p>
			</div>
		</div>
	);
};

export default DashboardCard;
