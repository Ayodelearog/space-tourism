import React from "react";
import Image from "next/image";
import DestinationTabs from "../components/ui/DestinationTabs";

const Destination: React.FC = () => {
	return (
		<section className="relative min-h-screen pt-[102px]">
			<div className="absolute inset-0 z-0 md:hidden lg:hidden">
				<Image
					src="/destination/background-destination-mobile.jpg"
					alt="Space background"
					fill
					priority
					className="object-cover "
					sizes="(max-width: 375px) 100vw, 100vw"
				/>
			</div>

			<div className="absolute inset-0 z-0 md:block lg:hidden">
				<Image
					src="/destination/background-destination-tablet.jpg"
					alt="Space background"
					fill
					priority
					className="object-cover md:block lg:hidden"
					sizes="(max-width: 768px) 100vw, 100vw"
				/>
			</div>

			<div className="p-6 md:p-10 w-full flex flex-col items-center md:items-start gap-6 relative z-10 ">

				<div className="flex gap-6 items-center font-barlow-condensed md:text-preset-5 text-[16px] text-white ">
					<span className="text-bold opacity-25 md:leading-10">01</span>
					<span className="md:leading-10">PICK YOUR DESTINATION</span>
				</div>

				<div className="w-full ">

					<DestinationTabs />
				</div>
			</div>
		</section>
	);
};

export default Destination;
