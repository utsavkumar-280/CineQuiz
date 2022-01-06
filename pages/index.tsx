import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import QuizCard from "../components/QuizCard";
import { categories } from "../utils/data";

const Home: NextPage = () => {
	const router = useRouter();
	const searchedCategory = router?.query?.cat || "All";

	//console.log(searchedCategory);
	return (
		<Layout>
			<Seo title={`Home`} />
			<main className="w-full grow flex flex-col">
				<div className="w-full h-16 flex items-center">
					<nav className="w-full flex justify-start sm:justify-center flex-nowrap overflow-x-auto whitespace-nowrap tracking-wide">
						{categories.map((cat, index) => (
							<div key={index}>
								<Link href={`?cat=${encodeURI(cat)}`}>
									<a
										className={`mx-1 px-6 py-1 my-[5px]  text-[16.25px]   text-gray-500 border border-gray-500 rounded-full  flex justify-center items-center whitespace-nowrap  font-medium transition-all ease duration-300 hover:text-green-400 hover:border-green-400 ${
											searchedCategory === cat
												? "text-green-400 border-green-400 px-8"
												: ""
										}`}
									>
										{cat}
									</a>
								</Link>
							</div>
						))}
					</nav>
				</div>

				<div className="grow px-9 flex flex-col items-center">
					<QuizCard />
					<QuizCard />
					<QuizCard />
					<QuizCard />
					<QuizCard />
					<QuizCard />
				</div>
			</main>
		</Layout>
	);
};

export default Home;
