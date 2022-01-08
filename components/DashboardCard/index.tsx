import { useState } from "react";
import Link from "next/link";

const DashboardCard = () => {
	const [isCorrect, setCorrect] = useState(true);
	return (
		<div className="w-full  flex flex-col justify-between sm:flex-row items-center bg-themeCard mb-5 p-3 sm:p-4  rounded-xl">
			<div className="h-20 smer:h-16 flex flex-col justify-between items-start self-start sm:self-center">
				<Link href={`/quizes/1`}>
					<a
						className="text-neutral-300 text-lg lg:text-xl font-semibold tracking-wide hover:text-green-400 transition-all ease duration-[250ms]"
						onClick={() => setCorrect((prev) => !prev)}
					>
						Lord of the Rings: Test of the Triology
					</a>
				</Link>
				<Link href={`/result`}>
					<a className=" text-gray-500 hover:text-green-400 transition-all ease duration-[250ms]">
						Result
					</a>
				</Link>
			</div>
			<div
				className={`flex ${
					isCorrect ? "text-green-400 " : "text-red-500 "
				}    rounded-full  self-end sm:self-center`}
			>
				<p className="pr-1 ">Score: </p>
				<p className="pl-1 ">40/100</p>
			</div>
		</div>
	);
};

export default DashboardCard;
