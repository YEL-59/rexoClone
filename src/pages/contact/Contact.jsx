import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Contact() {
	return (
		<div className="container mx-auto flex lg:flex-row flex-col lg:space-y-0 space-y-24 justify-between items-center  mt-24 ">
			<div className="max-w-xl  px-5">
				<form>
					<h1 className=" font-extrabold md:text-3xl text-2xl ">Keep In Touch</h1>
					<p className='mb-10'>We help you to grow business with More than 25 years experience with these services.</p>
					{/*-- Email input-- */}
					<div className="mb-6 ">
						<input
							type="text"
							className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
							id="exampleFormControlInput2"
							placeholder="Username"
						/>
					</div>
					<div className="mb-6 ">
						<input
							type="text"
							className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
							id="exampleFormControlInput2"
							placeholder="Username"
						/>
					</div>
					<div className="mb-6 ">
						<input
							type="text"
							className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
							id="exampleFormControlInput2"
							placeholder="Username"
						/>
					</div>
					<div className="mb-6 ">
						<input
							type="text"
							className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
							id="exampleFormControlInput2"
							placeholder="Username"
						/>
					</div>
					<div className='mb-6'>
						<textarea
							class="
        form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
							id="exampleFormControlTextarea1"
							rows="3"
							placeholder="Your message"
						></textarea>

					</div>

					<div className='mb-6'>
						
						<label for="formFile" class="form-label inline-block mb-2 text-gray-700"> File </label>
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
					<div className="mb-6 flex items-center gap-3">
						<input
							type="checkbox"
							className="form-control  h-10 w-5 "
							id="exampleFormControlInput2"
							placeholder="Username"
						/>
						<span>check box</span>
					</div>

					
					{/* Submit button */}
					<div className="flex  justify-start mb-6">
						<button
							type="button"
							className="inline-block px-9 py-2  bg-primary text-white font-medium   rounded shadow-md "
						>
							Send message
						</button>
					</div>

					
					
					
				</form>
			</div>
			<div className='space-y-20 '>
				<div className="flex ">
					<div>
						<LocationOnIcon sx={{ fontSize: 60 }} />
					</div>
					<div>
						<h1 className='text-xl font-bold '>Dhaka Office</h1>
						<address>House #06, Road #104,  Gulshan-2, Dhaka-1212, Bangladesh</address>

					</div>
				</div>
				<div className="flex max-w-xl">
					<div>
						<LocationOnIcon sx={{ fontSize: 60 }} />
					</div>
					<div>
						<h1 className='text-xl font-bold '>Cumilla Office</h1>
						<address>1030/GHA, Police Lines Rd, Jhautola, (Near Jhautola Jame Masjid), Cumilla</address>

					</div>
				</div>
				<div className="flex ">
					<div>
						<LocationOnIcon sx={{ fontSize: 60 }} />
					</div>
					<div>
						<h1 className='text-xl font-bold '>Email Address</h1>
						<address>info@rexoit.com</address>

					</div>
				</div>
				<div className="flex ">
					<div>
						<LocationOnIcon sx={{ fontSize: 60 }} />
					</div>
					<div>
						<h1 className='text-xl font-bold '>Phone Number</h1>
						<address>+880 1888 042371</address>
						<address>+880 1888 042371</address>

					</div>
				</div>
				{/* google map */}
				<div className='h-auto w-auto max-w-md'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat dolores hic enim accusantium eum praesentium officia molestias repellat tempora mollitia, totam placeat officiis beatae perferendis nesciunt fugit necessitatibus nobis.

				</div>

			</div>
		</div>
	);
}

export default Contact;
