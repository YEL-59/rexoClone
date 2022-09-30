import React from "react";

function Rfp() {
	return (
		<div className="w-full bg-[#f4f8f9] ">
			<div className="container mx-auto flex lg:flex-row flex-col justify-between gap-5 p-5 ">
				<div className="mt-20">
					<div className="bg-white rounded-lg shadow-lg ">
						<h1 className="text-3xl font-medium px-[200px] py-[50px] text-center">
							Request For Proposal
						</h1>
					</div>
					<h1 className="text-xl font-medium px-[200px] py text-center border-b-2">
						PROJECT INFO
					</h1>

					<div>
						<form action="">
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Project Name * :
								</label>
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									placeholder="Username"
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Project Estimate Starting Date * :
								</label>
								<input
									type="date"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Project Estimate Ending Date * :
								</label>
								<input
									type="date"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Approximate Project Budget ( $ ) * :
								</label>
								<input
									type="number"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									placeholder="Approximate Project Budget ... Ex:5000"
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Project Duration( Working Days ) * :
								</label>
								<input
									type="number"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									placeholder="Project Duration Working Days "
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Let us know about your company * :
								</label>
								<textarea
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									rows="6"
									placeholder="Example: Rexoit is one of the leading software companies in Bangladesh. Rexoit was established in 2017 to steer customers through the next generation of business innovation powered by technology with state-of-the-art software development and IT services. We provide a wide variety of Software Development & information technology services, including ERP system ..."
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Project Executive Summary * :
								</label>
								<textarea
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									rows="3"
									placeholder="Example: Rexoit is one of the leading software companies in Bangladesh.."
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Target Location * :
								</label>
								<textarea
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									rows="3"
									placeholder="Example: Rexoit is one of the leading s."
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Target Audience * :
								</label>
								<textarea
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									rows="2"
									placeholder="Example: Rexoit is one of the leading software companies in Bangladesh."
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									I want to make application for my Client * :
								</label>
								<div className="bg-white rounded-lg shadow-lg  p-3">
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>

									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
								</div>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									I want to make application for my Client * :
								</label>
								<div className="bg-white rounded-lg shadow-lg  p-3">
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>

									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
								</div>
							</div>
							{/* admin modarator */}
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									I want to make application for my Client * :
								</label>
								<div className="bg-white rounded-lg shadow-lg  p-3">
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>

									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
								</div>
							</div>

							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									I want to make application for my Client * :
								</label>
								<div className="bg-white rounded-lg shadow-lg  p-3">
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>

									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="">
										<label htmlFor="" className="  text-lg ">
											Other's :
										</label>
										<input
											type="text"
											className="form-control block w-full px-4 py-2 text-lg border  text-gray-700 bg-white bg-clip-padding  rounded-lg focus:outline-none"
											id="exampleFormControlInput2"
											placeholder="Russhin,chiness,spanish"
										/>
									</div>
								</div>
							</div>

							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Do You Have Domain
									*
:
								</label>
								<div className="bg-white rounded-lg shadow-lg  p-3">
									

									<div className="flex items-center gap-2 ">
										
										<div>
											<div class="form-check">
												<input class="form-check-input appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
													<label class="form-check-label inline-block text-gray-800 text-lg" for="flexRadioDefault1">
														Yes
													</label>
											</div>
											<div class="form-check mt-2">
												<input class="form-check-input appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
													<label class="form-check-label inline-block text-gray-800 text-lg" for="flexRadioDefault2">
														No
													</label>
											</div>
										</div>
										
									</div>
									
									
								</div>
							</div>


							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Do You Have Hosting
									*
 :
								</label>
								<div className="bg-white rounded-lg shadow-lg  p-3">


									<div className="flex items-center gap-2 ">

										<div>
											<div class="form-check">
												<input class="form-check-input appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
												<label class="form-check-label inline-block text-gray-800 text-lg" for="flexRadioDefault1">
													Yes
												</label>
											</div>
											<div class="form-check mt-2">
												<input class="form-check-input appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
												<label class="form-check-label inline-block text-gray-800 text-lg" for="flexRadioDefault2">
													No
												</label>
											</div>
										</div>

									</div>


								</div>
							</div>

							<h1 className="text-4xl font-medium px-[200px] py-10 text-center ">
								GENERAL FEATURES
							</h1>

							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									I want to make application for my Client * :
								</label>
								<div className="bg-white rounded-lg shadow-lg  p-3">
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>

									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
								</div>
							</div>

							<h1 className="text-4xl font-medium px-[200px] py-10 text-center ">
								MORE FEATURES
							</h1>

							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Write More Features* :
								</label>
								<textarea
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									rows="4"
									placeholder="Write more feature..."
								/>
							</div>


							<h1 className=" max-w-5xl text-4xl font-medium px-[200px] py-10  text-center ">
								PROGRAMMING LANGUAGE / TECHNOLOGY
							</h1>

							

							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									I want to make application for my Client * :
								</label>
								<div className="bg-white rounded-lg shadow-lg  p-3">
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>

									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="flex items-center gap-2">
										{" "}
										<input
											type="checkbox"
											className="form-control  h-10 w-5"
											id="exampleFormControlInput2"
											placeholder="Username"
										/>
										<span>check box</span>
									</div>
									<div className="">
										<label htmlFor="" className="  text-lg ">
											Other's :
										</label>
										<input
											type="text"
											className="form-control block w-full px-4 py-2 text-lg border  text-gray-700 bg-white bg-clip-padding  rounded-lg focus:outline-none"
											id="exampleFormControlInput2"
											placeholder="GO,Kotlin,C#"
										/>
									</div>
								</div>
							</div>

							<h1 className=" max-w-5xl text-4xl font-medium px-[200px] py-10  text-center ">
								DEMO LINK
							</h1>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Share Demo Link :
								</label>
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									placeholder="EXAMPLE:WWW.REXOIT.COM"
								/>
							</div>
							<h1 className=" max-w-5xl text-4xl font-medium px-[200px] py-10  text-center ">
								YOUR COMPANY INFO
							</h1>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Share Demo Link :
								</label>
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									placeholder="EXAMPLE:WWW.REXOIT.COM"
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Share Demo Link :
								</label>
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									placeholder="EXAMPLE:WWW.REXOIT.COM"
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Share Demo Link :
								</label>
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									placeholder="EXAMPLE:WWW.REXOIT.COM"
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Share Demo Link :
								</label>
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									placeholder="EXAMPLE:WWW.REXOIT.COM"
								/>
							</div>
							<div className="mb-6  space-y-5">
								<label htmlFor="" className="text-lg font-medium">
									Company / Contact Person Address
									*
:
								</label>
								<textarea
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding shadow-lg  rounded-lg focus:outline-none"
									id="exampleFormControlInput2"
									rows="2"
									placeholder="Example: DHAKA,GULSAN-1205"
								/>
							</div>
							<div className='mb-6'>

								<label for="formFile" class="form-label inline-block mb-2 text-gray-700"> Upload Document (pdf, docx, png, jpeg) : </label>
								<input class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"></input>

							</div>
							<div className="flex  justify-start mb-6">
								<button
									type="button"
									className="inline-block px-9 py-2  bg-primary text-white font-medium   rounded shadow-md "
								>
									Submit
								</button>
							</div>




						</form>
					</div>
				</div>

				<div className="mt-20">
					<div className="bg-white rounded-lg shadow-lg p-5">

						{/* cirle*/}

						<div className="h-[250px] w-[250px] bg-slate-600 rounded-full ">

						</div>


						<h1 className="text-lg font-medium  text-center text-gray-500">
							Your Completion Percentage
						</h1>
						<p className="max-w-xl text-gray-400">A request for proposal (RFP) is an open request for bids to complete a new project proposed by the company that issues it. An RFP must describe and define the project/software in enough detail to attract viable responses. The prospective company should be able to understand the nature of the business, the requirements of the software, and the goals it wishes to achieve with the project. The project must be defined in enough detail for the software development company to clearly understand its scopes like Technical requirements, project timeframe, budget, and all of the products and services that must be provided to carry it out. A well-written RFP conveys the intention behind the proposal and ensures that the result will meet expectations. It also ensures an open process.</p>

					</div>
				</div>
			</div>
		</div>
	);
}

export default Rfp;
