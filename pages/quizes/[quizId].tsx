/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";

const Quiz = () => {
	const router = useRouter();
	const { quizId } = router.query;

	console.log(router);
	return (
		<Layout>
			<Seo title={`Quiz ${quizId}`} />
			<main className="w-full grow px-2 flex flex-col items-center">
				<section className="grow w-full xl:w-9/12 lg:w-10/12 flex flex-col items-center">
					<header className="w-full h-24 sm:h-20 flex justify-center items-center">
						<h1 className="text-gray-200 font-bold text-center text-2xl sm:text-3xl">
							Lord of the Rings: The Test of the Triology
						</h1>
					</header>
					<div className="w-full sm:w-9/12 grow flex flex-col items-center">
						<section className="w-full flex justify-between my-2 sm:my-4 sm:text-lg sm:font-medium">
							<h2 className="text-gray-500">
								Question: <span className="text-gray-200">3/10</span>
							</h2>
							<h2 className="text-gray-500">
								Score: <span className="text-green-400">50</span>
							</h2>
						</section>
						<section className="w-full flex items-center justify-start xl:my-8">
							<h1 className="text-gray-200">
								Which English lawyer described Donna Paulsen as having"a body
								like Elizabeth Hurley and the sass of a Maggie Thatcher" in
								season 3? Which English lawyer described Donna Paulsen as
								having"a body like Elizabeth Hurley and the sass of a Maggie
								Thatcher" in season 3?
							</h1>
						</section>
						<section className="w-full my-7 flex flex-col justify-evenly items-center sm:px-5">
							<button className="w-full sm:text-lg font-medium tracking-wide p-5 mb-4 rounded-2xl bg-themeCard text-gray-200">
								Harry
							</button>
							<button className="w-full sm:text-lg font-medium tracking-wid p-5 mb-4 rounded-2xl bg-green-600 text-gray-200">
								Ronald
							</button>
							<button className="w-full sm:text-lg font-medium tracking-wid p-5 mb-4 rounded-2xl bg-red-600 text-gray-200">
								Harmione
							</button>
						</section>
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default Quiz;
