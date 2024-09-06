import { Roboto } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { supabase } from "./_lib/supabase";
import { getCurrentUser } from "./_lib/data-service";
import { auth } from "./_lib/auth";

const roboto = Roboto({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "300", "500", "700", "900"],
});

export const metadata = {
	title: {
		template: "%s - Netflix",
		default: "Home - Netflix",
	},
};

export default async function RootLayout({ children }) {
	const session = await auth();

	return (
		<html lang='en'>
			<body className={`${roboto.className}`}>
				{session === null ? (
					<main className='h-full'>{children}</main>
				) : (
					<>
						<Header />
						<main className='h-full'>{children}</main>
						<Footer />
					</>
				)}
			</body>
		</html>
	);
}
