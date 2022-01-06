import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
	const { asPath } = useRouter();

	const isDashboard = asPath === "/dashboard";
	return (
		<div className=" w-full h-16 flex justify-center border-b border-gray-800 sm:h-20 transition-all ease duration-300">
			<nav className=" w-full flex justify-between items-center h-full ">
				<Link href="/">
					<a className=" text-green-400 italic text-3xl font-black  md:text-4xl">
						CineQuiz
					</a>
				</Link>
				<Link href="/dashboard">
					<a
						className={`text-base font-mediumhover:text-green-400 md:text-lg hover:text-green-400 transition-all ease duration-300 ${
							isDashboard ? "text-green-400" : "text-neutral-300"
						}`}
					>
						Dashboard
					</a>
				</Link>
			</nav>
		</div>
	);
};

export default Header;

/*
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#2b5797">
<meta name="msapplication-TileImage" content="/mstile-144x144.png">
<meta name="theme-color" content="#ffffff">
*/

/* 
<div className=" w-full h-16 flex justify-center sm:h-20 ">
			<nav className=" w-full border-b mx-3 flex  justify-between items-center h-full sm:w-10/12 md:w-9/12 lg:w-8/12">
				<Link href="/">
					<a className=" text-green-400 text-2xl font-black  sm:text-3xl">
						CineQuiz
					</a>
				</Link>
				<Link href="/dashboard">
					<a className="text-neutral-300 text-sm hover:text-green-400 smer:text-base md:text-lg">
						Dashboard
					</a>
				</Link>
			</nav>
		</div>
*/
