import AccountTitle from "@/app/_components/AccountTitle";
import SecurityContainer from "@/app/_components/SecurityContainer";

export const metadata = {
	title: "Security",
};

function page() {
	return (
		<>
			<section className='flex flex-col gap-4'>
				<AccountTitle desc='Security options' title='Security' />
				<SecurityContainer />
			</section>
		</>
	);
}

export default page;
