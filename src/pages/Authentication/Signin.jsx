import React from "react";

function Signin() {
	return (
		<div className="container mx-auto mt-10">
			<div className="max-w-lg px-5 mx-auto">
			<form>
				<h1 className="text-center font-extrabold md:text-3xl text-2xl mb-14 mt-24">Login To Your Account</h1>
				{/*-- Email input-- */}
				<div className="mb-6 ">
					<input
						type="text"
							className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
						id="exampleFormControlInput2"
						placeholder="Username"
					/>
				</div>

				{/*-- Password input */}
				<div className="mb-6 ">
					<input
						type="password"
							className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-700 rounded-lg focus:outline-none"
						id="exampleFormControlInput2"
						placeholder="Password"
					/>
				</div>
				{/* Submit button */}
				<div className="flex  justify-center mb-6">
					<button
						type="button"
						className="inline-block px-9 py-2  bg-primary text-white font-medium   rounded shadow-md "
					>
						Login
					</button>
				</div>

				{/* 2 column grid layout for inline styling */}
					<div className="flex justify-between items-center  text-sm">
					<div className="form-group form-check">
						<input
							type="checkbox"
							className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
							id="exampleCheck2"
						/>
						<label
							className="form-check-label inline-block text-gray-400"
							for="exampleCheck2"
						>
							Remember me
						</label>
					</div>
						<a href="#!" className="text-gray-400 ">
						Haven't an account?
					</a>
				</div>
					<div className="flex justify-end items-center text-sm">
					
					<a href="#!" className="text-gray-400 ">
						Forgot Password?
					</a>
				</div>
			</form>
			</div>
		</div>
	);
}

export default Signin;
