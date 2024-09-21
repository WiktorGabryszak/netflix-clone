import AccountTitle from "@/app/_components/AccountTitle";

export const metadata = {
	title: "Email",
};

function page() {
	return (
		<div>
			<AccountTitle desc='Change your email' title='Email' />
		</div>
	);
}

export default page;
