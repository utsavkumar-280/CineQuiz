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
			<main>
				<h1 className=" px-5  text-red-400 smest:text-blue-500 smer:text-orange-200 ">
					this is quiz {quizId}
				</h1>
			</main>
		</Layout>
	);
};

export default Quiz;
