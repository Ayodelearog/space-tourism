import React from "react";
import Button from "./ui/Button";
import BackgroundImage from "./BackgroundImage";
import Link from "next/link";

const HomePage: React.FC = () => {
	return (
		<section className="relative w-full min-h-screen pt-[102px]">
			<div className="absolute h-screen inset-0 z-0">
				<BackgroundImage />
			</div>

			<div className="p-6 w-full flex flex-col items-center gap-6 relative z-10">
				<p className="font-barlow-condensed text-preset-6 text-[16px] text-blue-300">
					SO, YOU WANT TO TRAVEL TO
				</p>
				<h1 className="font-bellefair text-preset-1 text-white text-[79px]">SPACE</h1>
				<p className="font-barlow-condensed text-preset-9 text-[15px] text-blue-300 text-center">
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>

				<Link href="/destination" className="">
					<Button />
				</Link >
			</div>
		</section>
	);
};

export default HomePage;
