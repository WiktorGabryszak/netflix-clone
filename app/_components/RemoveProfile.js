import { XMarkIcon } from "@heroicons/react/24/solid";
import { removeProfile } from "../_lib/actions";
import { useTransition } from "react";

function RemoveProfile({ profileId }) {
	const [isPending, startTransition] = useTransition();

	function handleDelete(profileId) {
		startTransition(() => removeProfile(profileId));
	}
	return (
		<form action={() => handleDelete(profileId)}>
			<button className={`bg-zinc-950 rounded-full text-zinc-50 ${isPending ? "p-2" : "p-1"} text-sm`}>
				{!isPending ? <XMarkIcon className='w-5 h-5 text-zinc-50' /> : "Deleting..."}
			</button>
		</form>
	);
}

export default RemoveProfile;
