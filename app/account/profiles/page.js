import AccountProfileContainer from "@/app/_components/AccountProfileContainer";
import AccountTitle from "@/app/_components/AccountTitle";

export const metadata = {
	title: "Profiles",
};

async function page() {
	return (
		<>
			<section className='flex flex-col gap-4'>
				<AccountTitle desc='Manage your profiles' title='Profiles' />
				<AccountProfileContainer />
			</section>
		</>
	);
}

export default page;
