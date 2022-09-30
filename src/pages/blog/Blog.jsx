import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import BlogImg from '../../assets/background/rexo-blog.jpg';
function Blog() {
	return (
		<>
			<div className="container mx-auto flex justify-between items-center mt-5">
				{/* main container */}

				<div className="flex gap-2">
					<div class="rounded-lg shadow-lg bg-white">
						<a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
							<img className="" src={BlogImg} alt="" />
						</a>
						<div className="bg-[#f4f8f9]">
							<h5 className=" text-gray-900 text-lg font-semibold mb-2">How to Build-An On-Demand-Liquor Delivery App?</h5>
							<div className="flex items-center gap-4 mb-5 text-sm text-gray-500">
								<div>
									<CalendarMonthIcon sx={{ fontSize: 17 }} />
									<span className="px-1">12April,22</span>
								</div>
								<div>
									<PersonIcon sx={{ fontSize: 17 }} />
									<span className="px-1">Afridi</span>
								</div>
								<div>
									<IntegrationInstructionsIcon sx={{ fontSize: 17 }} />
									<span className="px-1">Development</span>
								</div>
							</div>
							<p class="text-gray-700 text-base mb-4">
								The On-demand apps are convenient to use. Learn the development process of an on-demand liquor delivery app with
								thousands of features and programs to use.
							</p>
						</div>
					</div>
				</div>

				{/*sidebar */}
				<div>
					<div className=" bg-[#f4f8f9]">
						<div class="input-group relative flex  items-stretch w-full mb-4">
							<input
								type="search"
								class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								placeholder="Search"
								aria-label="Search"
								aria-describedby="button-addon2"
							/>
							<button
								class="btn inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
								type="button"
								id="button-addon2"
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="search"
									class="w-4"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="currentColor"
										d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
									></path>
								</svg>
							</button>
						</div>
					</div>

					<div className="w-full bg-[#f4f8f9] p-5 mb-6">
						<div>
							<h4 className="mb-2 font-semibold text-2xl">Catagory</h4>
							<div className="text-lg text-gray-500">
								<p>Business</p>
								<p>Graphic</p>
								<p>Enterpreneur</p>
								<p>Marketing</p>
								<p>Mobile App</p>
								<p>Design</p>
								<p>Writing</p>
								<p>Software</p>
								<p>Development</p>
							</div>
						</div>
					</div>

					<div className="w-full bg-[#f4f8f9] p-5 ">
						<div className="flex gap-4 mb-5">
							<div>
								<img src={BlogImg} className="h-20 w-auto" alt="" />
							</div>
							<div>
								<p className="text-lg font-semibold">How to Build-An On-Demand-Liquor Delivery App?</p>
								<span className="text-gray-500">17 April 22</span>
							</div>
						</div>
						<div className="flex gap-4 mb-5">
							<div>
								<img src={BlogImg} className="h-20 w-auto" alt="" />
							</div>
							<div>
								<p className="text-lg font-semibold">How to Build-An On-Demand-Liquor Delivery App?</p>
								<span className="text-gray-500">17 April 22</span>
							</div>
						</div>
						<div className="flex gap-4 mb-5">
							<div>
								<img src={BlogImg} className="h-20 w-auto" alt="" />
							</div>
							<div>
								<p className="text-lg font-semibold">How to Build-An On-Demand-Liquor Delivery App?</p>
								<span className="text-gray-500">17 April 22</span>
							</div>
						</div>
						<div className="flex gap-4 mb-5">
							<div>
								<img src={BlogImg} className="h-20 w-auto" alt="" />
							</div>
							<div>
								<p className="text-lg font-semibold">How to Build-An On-Demand-Liquor Delivery App?</p>
								<span className="text-gray-500">17 April 22</span>
							</div>
						</div>
					</div>
				</div>
				{/*End sidebar */}
			</div>
			<div class="flex justify-center">
				<nav aria-label="Page navigation example">
					<ul class="flex list-style-none">
						<li class="page-item">
							<a
								class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
								href="/"
								aria-label="Previous"
							>
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li class="page-item">
							<a
								class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
								href="/"
							>
								1
							</a>
						</li>
						<li class="page-item">
							<a
								class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
								href="/"
							>
								2
							</a>
						</li>
						<li class="page-item">
							<a
								class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
								href="/"
							>
								3
							</a>
						</li>
						<li class="page-item">
							<a
								class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
								href="/"
								aria-label="Next"
							>
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}

export default Blog;
