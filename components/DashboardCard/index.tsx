import { useState } from "react";
const DashboardCard = () => {
	const [isCorrect, setCorrect] = useState(true);
	return (
		<div className="w-full flex justify-between items-center bg-themeCard mb-5 p-4  rounded-xl">
			<div>
				<h1 className="text-neutral-300 text-lg lg:text-xl font-semibold tracking-wide">
					Ultimate Harry Potter Quiz
				</h1>
				<button
					className=" text-gray-500 hover:text-green-400 transition-all ease duration-[250ms]"
					onClick={() => setCorrect((prev) => !prev)}
				>
					Retake
				</button>
			</div>
			<div
				className={`flex ${
					isCorrect
						? "text-neutral-100 bg-green-600"
						: "text-neutral-100 bg-red-600"
				}    rounded-full `}
			>
				<p className="pr-1 pl-3">40/100</p>
				<p className="pl-2 pr-3">Failed</p>
			</div>
		</div>
	);
};

export default DashboardCard;
