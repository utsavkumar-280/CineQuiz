import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-screen w-full font-inter transition-all ease duration-300">
			<div className=" min-h-screen flex flex-col justify-start">
				<Header />
				{children}
			</div>

			<Footer />
		</div>
	);
};

export default Layout;
