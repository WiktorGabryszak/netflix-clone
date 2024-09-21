import AccountTitle from "@/app/_components/AccountTitle";

export const metadata = {
	title: "Password",
};

function page() {
	return (
		<div>
			<AccountTitle desc='Look at your password' title='Password' />
		</div>
	);
}

export default page;
