import { auth } from "../_lib/auth";
import { getProfilesByUserId } from "../_lib/data-service";
import GenresSelector from "./GenresSelector";
import HeaderContent from "./HeaderContent";

export default async function Header() {
	const session = await auth();
	const profiles = await getProfilesByUserId(session.user.userId);

	
	return (
		<>
			<HeaderContent profiles={profiles}>
				<GenresSelector />
			</HeaderContent>
		</>
	);
}
