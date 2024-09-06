"use client";

import { useCallback, useState } from "react";
import LoginInput from "./LoginInput";
import { signInAction, signUpAction } from "../_lib/actions";
import { useRouter } from "next/navigation";
import SignInGoogle from "./SignInGoogle";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const [formType, setFormType] = useState("login");

	const router = useRouter();

	const toggleFormType = useCallback(() => {
		setFormType((current) => (current === "login" ? "register" : "login"));
	}, []);

	return (
		<div className='flex justify-center'>
			<div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
				<h2 className='text-white text-4xl mb-8 font-semibold'>
					{formType === "login" ? "Sign in" : "Create an Account"}
				</h2>
				<div className='flex flex-col gap-4'>
					<LoginInput
						id='email'
						label='Email'
						name='email'
						type='text'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<LoginInput
						id='password'
						label='Password'
						name='password'
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					{formType !== "login" ? (
						<LoginInput
							id='repeatPassword'
							label='Repeat Password'
							type='password'
							name='repeatPassword'
							onChange={(e) => setRepeatPassword(e.target.value)}
							value={repeatPassword}
						/>
					) : null}
				</div>
				<div className='flex flex-col gap-2'>
					<button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
						{formType === "login" ? "Sign In" : "Sign Up"}
					</button>
					<SignInGoogle />
				</div>
				<p className='text-neutral-500 mt-12'>
					{formType === "login"
						? "First time using Netflix?"
						: "Already have an account"}
					<span
						className='text-white ml-1 hover:underline cursor-pointer'
						onClick={toggleFormType}>
						{formType === "login" ? "Create new Account" : "Login"}
					</span>
				</p>
			</div>
		</div>
	);
}
