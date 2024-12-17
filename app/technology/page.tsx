import React from "react";
import Image from "next/image";

import TechnologyTabs from "../components/ui/TechnologyTabs";

const Technology: React.FC = () => {
	return (
		<section className="relative min-h-screen pt-[102px]">
			<div className="absolute inset-0 z-0 md:hidden lg:hidden">
				<Image
					src="/technology/background-technology-mobile.jpg"
					alt="Space background"
					fill
					priority
					className="object-cover md:hidden"
					sizes="(max-width: 375px) 100vw, 100vw"
				/>
			</div>

			<div className="p-6 px-0 w-full flex flex-col items-center gap-6 relative z-10">
				<div className="flex gap-6 items-center font-barlow-condensed text-divreset-6 text-[16px] uppercase text-white">
					<span className="text-bold opacity-25">03</span>
					<span className="">SPACE LAUNCH 101</span>
				</div>

				<div className="w-full  ">
					<TechnologyTabs />
				</div>
			</div>
		</section>
	);
};

export default Technology;
