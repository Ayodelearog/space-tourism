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

			<div className="absolute inset-0 z-0 md:block lg:hidden">
				<Image
					src="/technology/background-technology-tablet.jpg"
					alt="Space background"
					fill
					priority
					className="object-cover md:block"
					sizes="(max-width: 768px) 100vw, 100vw"
				/>
			</div>

			<div className="absolute inset-0 z-0 hidden lg:block">
				<Image
					src="/technology/background-technology-desktop.jpg"
					alt="Space background"
					fill
					priority
					className="object-cover "
					sizes="(max-width: 1440px) 100vw, 100vw"
				/>
			</div>

			<div className="p-6 px-0 w-full flex flex-col items-center md:items-start gap-6 relative z-10 ">

				<div className="flex gap-6 items-center font-barlow-condensed md:text-preset-5 text-[16px] text-white uppercase px-10 lg:ml-[165px] lg:px-0">
					<span className="text-bold opacity-25 md:leading-10">03</span>
					<span className="md:leading-10">SPACE LAUNCH 101</span>
				</div>

				<div className="w-full ">

				<TechnologyTabs />
				</div>
			</div>

			
		</section>
	);
};

export default Technology;
