import logo from "@/public/netflix.png";
import Image from "next/image";
import LoginForm from "../_components/LoginForm";
import { auth } from "../_lib/auth";
import { supabase } from "../_lib/supabase";

export const metadata = {
	title: "Login",
};

async function page() {
	return (
		<div className="relative h-full w-full bg-[url('/hero.jpg')] bg-center bg-no-repeat bg-fixed bg-cover">
			<div className='bg-black w-full h-full lg:bg-opacity-50'>
				<nav className='px-12 py-5'>
					<Image src={logo} alt='Netflix Logo' />
				</nav>
				<LoginForm />
			</div>
		</div>
	);
}

export default page;
