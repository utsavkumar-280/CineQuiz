/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Hp from "../../public/assets/StarWars.jpg";

const QuizCard = () => {
	return (
		<Link href="/quizes/1">
			<a className="mb-4 group bg-themeCard rounded-xl sm:flex sm:w-10/12 sm:h-64  xl:w-5/6  hover:shadow-md hover:shadow-green-400/10 transition-all ease duration-300">
				<div className="relative w-full h-96 sm:w-3/6 sm:h-full  xl:w-4/12 2xl:w-3/12">
					<Image
						src={Hp}
						alt="quiz-img"
						layout="fill"
						objectFit="cover"
						className="rounded-t-xl sm:rounded-l-xl sm:rounded-r-none"
					/>
				</div>

				<div className="h-[90px] p-2 px-3 flex flex-col justify-between sm:justify-around sm:h-full sm:w-4/6 xl:w-10/12 2xl:w-11/12">
					<h2 className=" text-gray-200 text-base font-semibold sm:text-lg group-hover:text-green-400 transition-all ease duration-300 2xl:text-xl">
						Lord of the Rings: Test of the Trilogy
					</h2>
					<p className="hidden sm:block sm:text-sm text-gray-500">
						You like to call yourself a Star Wars trivia master, well this is
						the quiz you can prove it on. It's time to take on your fears and
						may the force be with you.
					</p>
					<div className="flex justify-between text-sm">
						<p className=" text-gray-400 sm:text-green-400  tracking-wide">
							10 questions
						</p>
						<p className=" text-green-400">
							+10 <span className=" text-red-400 ml-1">-5</span>
						</p>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default QuizCard;
