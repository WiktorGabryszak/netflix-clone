import "@/app/_styles/globals.css";
import { Roboto } from "next/font/google";

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
	other: { pinterest: "nopin" },
};

export default async function RootLayout({ children }) {
	return (
		<html lang='en'>
			<meta name='google-site-verification' content='yE9T6dQehzq32QWzLk4rxiRXJMOMFDdwlb2UniO5olI' />
			<body className={`${roboto.className}`}>{children}</body>
		</html>
	);
}
