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
	verification: { google: "yE9T6dQehzq32QWzLk4rxiRXJMOMFDdwlb2UniO5olI" },
};

export default async function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${roboto.className}`}>{children}</body>
		</html>
	);
}
