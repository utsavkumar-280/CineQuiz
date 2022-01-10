import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QuizDataProvider } from "../contexts/QuizDataProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<QuizDataProvider>
				<Component {...pageProps} />
			</QuizDataProvider>
		</>
	);
}

export default MyApp;
