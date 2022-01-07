import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
	return (
		<Layout>
			<Seo title={`Dashboard`} />
			<main className="w-full grow px-2 flex flex-col items-center">
				<section className="w-full xl:w-9/12 lg:w-10/12 flex justify-between items-center h-16 sm:h-20">
					<h1 className="text-lg text-neutral-300">Previous Attempt</h1>
					<button className=" text-gray-500 border border-gray-800 px-3 rounded-full hover:text-green-400 hover:border-green-400 transition-all ease duration-[250ms]">
						Clear All
					</button>
				</section>
				<section className="grow w-full xl:w-9/12 lg:w-10/12 flex flex-col items-center">
					<Dashboard />
					<Dashboard />
					<Dashboard />
					<Dashboard />
				</section>
			</main>
		</Layout>
	);
};

export default Dashboard;
