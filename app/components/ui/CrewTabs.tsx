"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

const crews = [
	{
		rank: "Commander",
		name: " Douglas Hurley",
		description:
			"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
		image: "/crew/image-douglas-hurley.webp",
		id: "1",
	},
	{
		rank: "Mission specialist",
		name: " MARK SHUTTLEWORTH",
		description:
			"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
		image: "/crew/image-mark-shuttleworth.webp",
		id: "2",
	},
	{
		rank: "Pilot",
		name: " Victor Glover",
		description:
			"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
		image: "/crew/image-victor-glover.webp",
		id: "3",
	},
	{
		rank: "Flight Engineer",
		name: " Anousheh Ansari",
		description:
			"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
		image: "/crew/image-anousheh-ansari.webp",
		id: "4",
	},
];

export default function CrewTabs() {
	const [activeTab, setActiveTab] = useState("1");


	const handleSwipe = useCallback(
		(direction: "LEFT" | "RIGHT") => {
			const currentIndex = crews.findIndex((crew) => crew.id === activeTab);
			if (direction === "LEFT") {
				const nextIndex = (currentIndex + 1) % crews.length;
				setActiveTab(crews[nextIndex].id);
			} else if (direction === "RIGHT") {
				const prevIndex = (currentIndex - 1 + crews.length) % crews.length;
				setActiveTab(crews[prevIndex].id);
			}
		},
		[activeTab]
	);

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => handleSwipe("LEFT"),
		onSwipedRight: () => handleSwipe("RIGHT"),
		trackMouse: true,
		trackTouch: true,
	});



	return (
		<div className="w-full h-full " {...swipeHandlers}>
			<Tabs
				value={activeTab}
				onValueChange={setActiveTab}
				className="w-full flex flex-col gap-32 "
			>
				<div className="flex flex-col gap-24">
					<div >
						{crews.map((crew) => (
							<TabsContent
								key={crew.name}
								value={crew.id}
								className={`w-full flex flex-col gap-24  transition-opacity duration-600 ${
									activeTab === crew.id ? "opacity-100" : "opacity-0"
								}`}
							>
								<div className="w-full text-center flex flex-col items-center gap-8">
									<p className="text-white text-preset-4 text-[18px] font-bellefair text-opacity-50 uppercase ">
										{crew.rank}
									</p>
									<p className="text-white text-[24px] font-bellefair  uppercase ">
										{crew.name}
									</p>
								</div>

								<p className="text-blue-300 text-center text-preset-9 text-[15px] font-barlow-condensed  ">
									{crew.description}
								</p>
							</TabsContent>
						))}
					</div>

					<TabsList className="w-full bg-transparent justify-start">
						<div className="w-full px-[40.5px] flex justify-center items-center gap-32">
							{crews.map((crew, index) => (
								<TabsTrigger
									key={crew.id}
									value={crew.id}
									className="h-[10px] w-[10px] bg-[#979797] rounded-full data-[state=active]:bg-white  hover:bg-white transition-colors duration-600 ease-in-out p-0"
								></TabsTrigger>
							))}
						</div>
					</TabsList>
				</div>

				<div className="w-full flex justify-center items-center relative">
					{crews.map((crew) => (
						<TabsContent
							key={crew.id}
							value={crew.id}
							className={`transition-opacity backdrop-blur h-[340px] duration-600  w-full ${
								activeTab === crew.id ? "opacity-100" : "opacity-0"
							}`}
						>
							<Image
								src={crew.image}
								alt={crew.name.toLowerCase()}
								fill
								priority
								className="object-contain md:hidden"
							/>

							<div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent h-[60px] w-full    "></div>
						</TabsContent>
					))}
				</div>
			</Tabs>
		</div>
	);
}
