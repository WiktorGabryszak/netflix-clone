import { XMarkIcon } from "@heroicons/react/24/solid";
import { removeProfile } from "../_lib/actions";

function RemoveProfile({ profileId }) {
	return (
		<form action={() => removeProfile(profileId)}>
			<button className="bg-zinc-950 rounded-full p-1">
				<XMarkIcon className='w-5 h-5 text-zinc-50' />
			</button>
		</form>
	);
}

export default RemoveProfile;
