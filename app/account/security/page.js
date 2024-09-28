import AccountTitle from "@/app/_components/AccountTitle";
import SecurityContainer from "@/app/_components/SecurityContainer";
import { auth } from "@/app/_lib/auth";
import { getUserByUserId } from "@/app/_lib/data-service";

export const metadata = {
	title: "Security",
};

export default async function page() {
	const session = await auth();
	const user = await getUserByUserId(session.user.userId);

	return (
		<>
			<section className='flex flex-col gap-4'>
				<AccountTitle desc='Security options' title='Security' />
				<SecurityContainer user={user} />
			</section>
		</>
	);
}
