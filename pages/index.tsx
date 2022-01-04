import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Home: NextPage = () => {
	const router = useRouter();
	const category = router.query.category ? router.query.category : "All";
	console.log(category);
	return (
		<Layout>
			<Seo title={`Home`} />
			<main className=" w-full grow flex justify-center sm:h-20 ">
				<Link href="?category=basics">
					<a className=" px-5  text-red-400 smest:text-blue-500 smer:text-orange-200 ">
						Hello
					</a>
				</Link>
			</main>
		</Layout>
	);
};

export default Home;
