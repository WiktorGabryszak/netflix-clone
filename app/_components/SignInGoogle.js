import { signInWithGoogleAction } from "../_lib/actions";
import Image from "next/image";

export default function SignInGoogle() {
	return (
		<form action={signInWithGoogleAction}>
			<button className='w-full flex items-center gap-6 px-6 py-3 text-lg font-medium bg-white rounded-md'>
				<Image src='https://authjs.dev/img/providers/google.svg' alt='Google logo' height='24' width='24' />
				<span>Continue with Google</span>
			</button>
		</form>
	);
}
