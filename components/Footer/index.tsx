import Link from "next/link";

const Footer = () => {
	return (
		<div className=" w-full h-32 flex justify-center border-t border-gray-800 transition-all ease duration-300">
			<nav className=" w-full flex flex-col justify-center items-center h-full ">
				<Link href="/">
					<a className=" text-green-400 italic text-3xl font-black">CineQuiz</a>
				</Link>
				<div className="text-sm font-light text-neutral-300">
					BY{" "}
					<a
						className={`text-sm text-green-400 italic font-medium`}
						href="https://utsavkumar.tech/"
						target="_blank"
						rel="noreferrer"
					>
						@UTSAV
					</a>
				</div>
			</nav>
		</div>
	);
};

export default Footer;
