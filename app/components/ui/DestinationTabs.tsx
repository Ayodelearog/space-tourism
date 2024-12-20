"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";

const destinations = [
	{
		name: "MOON",
		description:
			"See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
		distance: "384,400 KM",
		travelTime: "3 DAYS",
		image: "/destination/image-moon.webp",
	},
	{
		name: "MARS",
		description:
			"Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
		distance: "225 MIL. KM",
		travelTime: "9 MONTHS",
		image: "/destination/image-mars.webp",
	},
	{
		name: "EUROPA",
		description:
			"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
		distance: "628 MIL. KM",
		travelTime: "3 YEARS",
		image: "/destination/image-europa.webp",
	},
	{
		name: "TITAN",
		description:
			"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
		distance: "1.6 BIL. KM",
		travelTime: "7 YEARS",
		image: "/destination/image-titan.webp",
	},
];

export default function DestinationTabs() {
	const [activeTab, setActiveTab] = useState("moon");
	return (
		<div className="w-full h-full ">
			<Tabs
				value={activeTab}
				onValueChange={setActiveTab}
				className="w-full flex flex-col-reverse gap-32 lg:flex-row-reverse lg:px-[165px] lg:py-[48px]"
			>
				<div className="flex flex-col gap-24 md:px-[87px] md:py-3 lg:py-[133px] lg:px-[47px] lg:w-[50%]">
					<TabsList className="w-full bg-transparent justify-start">
						<div className="w-full px-[40.5px] flex justify-center items-center gap-32 md:justify-center lg:px-0 lg:w-fit">
							{destinations.map((destination) => (
								<TabsTrigger
									key={destination.name}
									value={destination.name.toLowerCase()}
									className="text-preset-8 text-[14px] font-barlow-condensed p-0 pb-[15px] border-b-[3px] border-transparent rounded-none data-[state=active]:border-white data-[state=active]:text-white text-blue-300 hover:border-white hover:border-opacity-25 transition-colors duration-600 ease-in-out md:text-preset-8 "
								>
									{destination.name}
								</TabsTrigger>
							))}
						</div>
					</TabsList>

					<div className="lg:w-fit">
						{destinations.map((destination) => (
							<TabsContent
								key={destination.name}
								value={destination.name.toLowerCase()}
								className={`w-full flex flex-col gap-24 lg:gap-10  transition-opacity duration-600 ${
									activeTab === destination.name.toLowerCase()
										? "opacity-100"
										: "opacity-0"
								}`}
							>
								<div className="w-full lg:w-fit flex flex-col items-center gap-16 lg:items-start">
									<h1 className="text-white uppercase text-preset-2 text-[58px] font-bellefair md:text-preset-2">
										{destination.name}
									</h1>
									<p className="font-barlow text-preset-9 text-[15px] text-blue-300 text-center lg:text-left">
										{destination.description}
									</p>
								</div>

								<div className="w-full border-t border-white border-opacity-25"></div>

								<div
									className={`w-full flex flex-col items-center gap-24 md:flex-row md:items-center md:justify-center  lg:w-full `}
								>
									
									<div className="flex flex-col gap-12 lg:w-full lg:items-start lg:text-left">
										<p className="font-barlow-condensed uppercase text-preset-7 text-[14px] text-blue-300 text-center  ">
											AVG. DISTANCE
										</p>

										<p className="font-bellefair uppercase text-preset-6 text-white text-center mt-12 ">
											{destination.distance}
										</p>
									</div>

									<div className="flex flex-col gap-12 lg:w-full lg:items-start lg:text-left">
										<p className="font-barlow-condensed uppercase text-preset-7 text-[14px] text-blue-300 text-center">
											Est. travel time
										</p>

										<p className="font-bellefair uppercase text-preset-6 text-white text-center mt-12">
											{destination.travelTime}
										</p>
									</div>
								</div>
							</TabsContent>
						))}
					</div>
				</div>

				<div className="w-full py-24 flex justify-center items-center relative lg:w-[50%]">
					{destinations.map((destination) => (
						<TabsContent
							key={destination.name}
							value={destination.name.toLowerCase()}
							className={`transition-opacity duration-600   ${
								activeTab === destination.name.toLowerCase()
									? "opacity-100"
									: "opacity-0"
							}`}
						>
							<div className="relative w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]">
								<Image
									src={destination.image}
									alt={`Image of ${destination.name}`}
									fill
									sizes="(max-width: 768px) 150px, (max-width: 1024px) 300px, 445px"
									priority
									className="object-contain"
								/>
							</div>
						</TabsContent>
					))}
				</div>
			</Tabs>
		</div>
	);
}
