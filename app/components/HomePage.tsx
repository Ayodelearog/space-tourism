import React from "react";
import Button from "./ui/Button";
import BackgroundImage from "./BackgroundImage";
import Link from "next/link";

const HomePage: React.FC = () => {
	return (
		<section className="relative w-full min-h-screen pt-[102px] md:px-10 lg:py-[128px] lg:px-[165px] ">
			<div className="absolute min-h-screen inset-0 z-0 ">
				<BackgroundImage />
			</div>

			{/* mobile and tab */}
			<div className="p-6 w-full flex flex-col items-center gap-6 relative z-10 md:mt-[128px] md:px-[88px] lg:hidden">
				<p className="font-barlow-condensed text-preset-6 text-[16px] text-blue-300 md:text-preset-5">
					SO, YOU WANT TO TRAVEL TO
				</p>
				<h1 className="font-bellefair text-preset-1 text-white text-[5rem] md:text-preset-1">
					SPACE
				</h1>
				<p className="font-barlow-condensed text-preset-9 text-[15px] text-blue-300 text-center md:text-preset-9">
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>

				<Link href="/destination" className="">
					<Button btnStyle="md:w-[272px] md:h-[272px] md:text-preset-4" />
				</Link>
			</div>

			{/* desktop */}
			<div className=" w-full flex-col items-center gap-6 relative z-10 md:mt-[128px] lg:flex-row hidden lg:flex mt-auto">
				<div className="flex-col gap-24 items-start">
					<p className="font-barlow-condensed text-preset-5 text-blue-300 ">
						SO, YOU WANT TO TRAVEL TO
					</p>
					<h1 className="font-bellefair text-preset-1 text-white ">SPACE</h1>
					<p className="font-barlow-condensed text-preset-9  text-blue-300  max-w-[540px] ">
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>

				<div className=" px-[30px] py-[35px]">
					<Link href="/destination">
						<Button btnStyle="md:w-[272px] md:h-[272px] md:text-preset-4" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomePage;
