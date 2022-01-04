import React from "react";
import Head from "next/head";

const Seo = ({ title }: { title: String }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="robots" content="follow, index" />
				<meta
					content="A quiz app for people in love with cinema."
					name="description"
				/>
				<link rel="icon" href="/favicon/favicon.ico" />
			</Head>
		</div>
	);
};

export default Seo;
