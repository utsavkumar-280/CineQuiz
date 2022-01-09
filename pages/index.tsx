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
				<div className="w-full bg-themeBg h-16 flex items-center z-10 sticky top-16 sm:top-20">
					<nav className="w-full flex justify-start sm:justify-center flex-nowrap overflow-x-auto whitespace-nowrap tracking-wide">
						{categories.map((cat, index) => (
							<div key={index}>
								<Link href={`?cat=${encodeURI(cat)}`}>
									<a
										className={`mx-1 px-6 py-1 my-[5px]  text-[16.25px]   text-gray-500 border border-gray-700 rounded-full  flex justify-center items-center whitespace-nowrap  font-medium transition-all ease duration-[250ms] hover:text-green-400 hover:border-green-400 ${
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
					<QuizCard imgUrl={`https://i.postimg.cc/3wWYJGYb/LORings.jpg`} />
					<QuizCard imgUrl={`https://i.postimg.cc/6QCzZjW7/GOT.jpg`} />
					<QuizCard imgUrl={`https://i.postimg.cc/rpTZfXYG/HPotter.jpg`} />
					<QuizCard imgUrl={`https://i.postimg.cc/y6SyQ8cc/StarWars.jpg`} />
					<QuizCard imgUrl={`https://i.postimg.cc/8PZcLhcH/The-Office.jpg`} />
					<QuizCard imgUrl={`https://i.postimg.cc/BbqYfWx2/Sacred-Games.jpg`} />
					<QuizCard imgUrl={`https://i.postimg.cc/4dK21Cz5/director.jpg`} />
					<QuizCard imgUrl={`https://i.postimg.cc/t4v41PDx/bollywood.jpg`} />
					<QuizCard imgUrl={`https://i.postimg.cc/NFpJxgK5/amitabh.jpg`} />
				</div>
			</main>
		</Layout>
	);
};

export default Home;
