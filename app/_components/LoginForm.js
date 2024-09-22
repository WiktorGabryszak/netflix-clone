"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { logIn, singUp } from "../_lib/actions";
import SignInGoogle from "./SignInGoogle";

export default function LoginForm() {
	const [formType, setFormType] = useState("login");
	const { register, formState, getValues, handleSubmit, reset } = useForm();
	const { errors } = formState;

	const toggleFormType = useCallback(() => {
		setFormType((current) => (current === "login" ? "register" : "login"));
	}, []);

	async function onSubmit({ email, password }) {
		if (!email || !password) return;
		if (formType === "register") {
			singUp(email, password);
			reset();
		}
		if (formType === "login") {
			logIn(email, password);
			reset();
		}
	}

	return (
		<div className='flex justify-center'>
			<div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full flex flex-col gap-2'>
				<h2 className='text-white text-4xl mb-8 font-semibold text-center'>{formType === "login" ? "Sign in" : "Create an Account"}</h2>
				<form action={handleSubmit(onSubmit)}>
					{/* <div className='flex flex-col gap-4'>
						<div className='relative'>
							<input
								id='Email'
								placeholder=''
								type='text'
								{...register("email", {
									required: "This field is required",
									pattern: {
										value: /\S+@\S+\.\S+/,
										message: "Please provide a valid email address",
									},
								})}
								className='block rounded-md px-6 pt-6 pb-1 w-full text-base text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer '
							/>
							<label
								htmlFor='Email'
								className={`absolute text-base  duration-150 transofrm -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${
									errors?.email ? "text-red-500" : "text-zinc-400"
								}`}>
								{!errors?.email ? "Email" : errors.email.message}
							</label>
						</div>

						<div className='relative'>
							<input
								id='Password'
								placeholder=''
								type='password'
								{...register("password", {
									required: "This field is required",
									minLength: { value: 8, message: "Password needs a minimum of 8 characters" },
								})}
								className='block rounded-md px-6 pt-6 pb-1 w-full text-base text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer '
							/>
							<label
								htmlFor='Password'
								className={`absolute text-base  duration-150 transofrm -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${
									errors?.password ? "text-red-500" : "text-zinc-400"
								}`}>
								{!errors?.password ? "Password" : errors.password.message}
							</label>
						</div>
						{formType !== "login" ? (
							<div className='relative'>
								<input
									id='passwordConfirm'
									type='password'
									placeholder=''
									disabled={formType === "login"}
									{...register("passwordConfirm", {
										required: "This field is required",
										validate: (value) => value === getValues().password || "Passwords need to match",
									})}
									className='block rounded-md px-6 pt-6 pb-1 w-full text-base text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer '
								/>
								<label
									htmlFor='passwordConfirm'
									className={`absolute text-base  duration-150 transofrm -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${
										errors?.passwordConfirm ? "text-red-500" : "text-zinc-400"
									}`}>
									{!errors?.passwordConfirm ? "Repeat Password" : errors.passwordConfirm.message}
								</label>
							</div>
						) : null}
					</div> */}
					{/* <div className='flex flex-col gap-2'>
						<button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
							{formType === "login" ? "Sign In" : "Sign Up"}
						</button>
					</div> */}
				</form>
				<SignInGoogle />
				{/* <p className='text-neutral-500 mt-12'>
					{formType === "login" ? "First time using Netflix?" : "Already have an account"}
					<span className='text-white ml-1 hover:underline cursor-pointer' onClick={toggleFormType}>
						{formType === "login" ? "Create new Account" : "Login"}
					</span>
				</p> */}
			</div>
		</div>
	);
}

{
	/* <LoginInput
							id='Email'
							label='Email'
							name='Email'
							type='text'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/> */
}

{
	/* <LoginInput
							id='Password'
							label='Password'
							name='Password'
							type='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/> */
}

// <LoginInput
// 	id='repeatPassword'
// 	label='Repeat The Password'
// 	type='password'
// 	name='repeatPassword'
// 	onChange={(e) => setRepeatPassword(e.target.value)}
// 	value={repeatPassword}
// />
