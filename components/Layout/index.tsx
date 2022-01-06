import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-screen w-full flex justify-center font-inter transition-all ease duration-300 ">
			<div className=" w-[95%] flex flex-col sm:w-11/12 md:w-9/12 lg:w-8/12 2xl:w-7/12">
				<div className="w-full min-h-screen flex flex-col justify-start">
					<Header />
					{children}
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
