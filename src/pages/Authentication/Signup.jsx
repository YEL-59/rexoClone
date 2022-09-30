import React from 'react';

function Signup() {
	return (
		<div className="container mx-auto mt-10">
			<div className="max-w-lg px-5 mx-auto">
				<form>
					<h1 className="text-center font-extrabold md:text-3xl text-2xl mb-14 mt-24">Register New Account</h1>
					{/*-- Email input-- */}
					<div className="mb-6 ">
						<input
							type="text"
							className="form-control block w-full px-4 py-2 text-md  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
							id="exampleFormControlInput2"
							placeholder="Name"
						/>
					</div>
					<div className="mb-6 ">
						<input
							type="text"
							className="form-control block w-full px-4 py-2 text-md  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
							id="exampleFormControlInput2"
							placeholder="Username"
						/>
					</div>
					<div className="mb-6 ">
						<input
							type="text"
							className="form-control block w-full px-4 py-2 text-md  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
							id="exampleFormControlInput2"
							placeholder="Email"
						/>
					</div>
					<div class=" mb-6">
						<div class="relative">
							<select
								class="block appearance-none w-full  border  border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-state"
							>
								<option>New Mexico</option>
								<option>Missouri</option>
								<option>Texas</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
					</div>
					<div className="mb-6 ">
						<input
							type="text"
							className="form-control block w-full px-4 py-2 text-md  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
							id="exampleFormControlInput2"
							placeholder="City"
						/>
					</div>
					<div className="mb-6 ">
						<input
							type="text"
							className="form-control block w-full px-4 py-2 text-md  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
							id="exampleFormControlInput2"
							placeholder="Password"
						/>
					</div>
					<div className="mb-6 ">
						<input
							type="text"
							className="form-control block w-full px-4 py-2 text-md  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
							id="exampleFormControlInput2"
							placeholder="Conferm Password"
						/>
					</div>

					{/* Submit button */}
					<div className="flex  justify-center mb-6">
						<button type="button" className="inline-block px-9 py-2  bg-primary text-white font-medium   rounded shadow-md ">
							Register
						</button>
					</div>

					<div className="flex justify-center items-center text-sm">
						<a href="#!" className="text-gray-400 ">
							Already Have account?
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
