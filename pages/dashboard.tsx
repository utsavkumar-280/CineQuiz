import Layout from "../components/Layout";
import Seo from "../components/Seo";

const dashboard = () => {
	return (
		<Layout>
			<Seo title={`Dashboard`} />
			<main>
				<h1 className=" px-5  text-red-400 sm:text-red-600 md:text-yellow-400 smest:text-blue-500 smer:text-orange-500   ">
					Dashboard
				</h1>
			</main>
		</Layout>
	);
};

export default dashboard;
