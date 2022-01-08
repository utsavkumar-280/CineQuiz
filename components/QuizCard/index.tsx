/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import useNextBlurhash from "use-next-blurhash";
import Hp from "../../public/assets/HPotter.jpg";

const QuizCard = () => {
	const [blurDataUrl] = useNextBlurhash("L8BydJrW4:IU*0n4S5Ri0*XA-6sS", 10, 10);

	return (
		<Link href="/quizes/1">
			<a className="mb-4 group bg-themeCard rounded-xl sm:flex sm:w-11/12 sm:h-64  xl:w-5/6  hover:shadow-md hover:shadow-green-400/10 transition-all ease duration-[250ms]">
				<div className="relative w-full h-96 sm:w-4/12 sm:h-full  lg:w-4/12 2xl:w-3/12">
					<Image
						src={`https://i.postimg.cc/rpTZfXYG/HPotter.jpg`}
						alt="quiz-img"
						layout="fill"
						objectFit="cover"
						placeholder="blur"
						blurDataURL={blurDataUrl}
						className="rounded-t-xl sm:rounded-l-xl sm:rounded-r-none"
					/>
				</div>

				<div className="h-[90px] p-2 px-3 flex flex-col justify-between sm:justify-around sm:h-full sm:w-8/12 lg:w-10/12 2xl:w-11/12">
					<h2 className=" text-gray-200 text-base font-semibold sm:text-lg group-hover:text-green-400 transition-all ease duration-[250ms] 2xl:text-xl">
						Lord of the Rings: Test of the Trilogy
					</h2>
					<p className="hidden sm:block sm:text-sm text-gray-500 xl:mb-14">
						Test your knowledge of the entire Wizarding world; from the
						professors of Hogwarts, to the seven Horcruxes. Can you name them
						all? You may only be a muggle, but if you're a die-hard Harry Potter
						fan, then you'll do as well as Hermione Granger on this quiz!
					</p>
					<div className="flex justify-between text-sm">
						<p className=" text-gray-400 sm:text-green-400  tracking-wide">
							10 questions
						</p>
						<p className=" text-green-400">
							+10 <span className=" text-red-500 ml-1">-5</span>
						</p>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default QuizCard;
