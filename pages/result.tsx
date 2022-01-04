import Layout from "../components/Layout";
import Seo from "../components/Seo";

const result = () => {
	return (
		<Layout>
			<Seo title={`Result`} />
			<main>
				<h1 className=" px-5  text-red-400 smest:text-blue-500 smer:text-orange-200 ">
					Result
				</h1>
			</main>
		</Layout>
	);
};

export default result;
