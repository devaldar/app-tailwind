import React from 'react';
import { Button } from 'components/Shared';

export const Form = () => {
	const twInput =
		'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ';

	return (
		<section className="flex px-10 m-auto mt-52 max-w-7xl">
			<div className="flex flex-wrap items-center gap-5 md:flex-nowrap">
				<div className="flex flex-col flex-auto w-1/2">
					<h3 className="w-full mb-6 text-6xl font-semibold">{'Register Interest'}</h3>
					<div className="w-full mb-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque
						cumque vitae fuga ab unde amet sequi corrupti cupiditate placeat repellendus
						vero dolores rerum molestiae ut deleniti ipsam, nisi earum. Ipsam temporibus
						nesciunt recusandae eaque nemo reprehenderit sit amet sint!
					</div>
				</div>
				<div className="flex justify-center flex-auto w-1/2">
					<div className="flex w-auto py-10 bg-white rounded-md px-7 ">
						<form className="w-[400px]">
							<div className="mb-6">
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 "
								>
									Your email
								</label>
								<input
									type="email"
									id="email"
									className={twInput}
									placeholder="Enter your email"
									required
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 "
								>
									Your Name
								</label>
								<input
									type="text"
									id="password"
									placeholder="Enter your full name"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
									required
								/>
							</div>

							<Button twClasses="max-w-fit m-auto px-11" isSecondary={true}>
								Join
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
