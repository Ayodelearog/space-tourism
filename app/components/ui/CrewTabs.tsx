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
				className="w-full flex flex-col gap-32 lg:flex-row lg:px-[165px] lg:py-[48px] lg:pt-0"
			>
				<div className="flex flex-col gap-24 md:pt-10 md:px-[88px] lg:px-0 lg:justify-center relative lg:w-[50%]">
					<div>
						{crews.map((crew) => (
							<TabsContent
								key={crew.name}
								value={crew.id}
								className={`w-full flex flex-col gap-24  transition-opacity duration-600 lg:items-start  ${
									activeTab === crew.id ? "opacity-100" : "opacity-0"
								}`}
							>
								<div className="w-full lg:w-fit lg:text-left text-center flex flex-col items-center gap-8 lg:items-start">
									<p className="text-white leading-[20.6px] text-[18px]  font-bellefair text-opacity-50 uppercase md:leading-[28px]  md:text-[24px] lg:text-left">
										{crew.rank}
									</p>
									<p className="text-white text-[24px] leading-[27.5px] font-bellefair uppercase  md:text-[40px]">
										{crew.name}
									</p>
								</div>

								<p className="text-blue-300 text-center text-preset-9 text-[15px] font-barlow-condensed  lg:text-left">
									{crew.description}
								</p>
							</TabsContent>
						))}
					</div>

					<TabsList className="w-full bg-transparent justify-start lg:absolute lg:bottom-0 lg:left-0 lg:w-fit">
						<div className="w-full px-[40.5px] lg:px-0 flex justify-center items-center gap-32">
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

				<div className="w-full flex justify-center items-center relative lg:w-[50%] lg:py-[30px]">
					{crews.map((crew) => (
						<TabsContent
						key={crew.id}
						value={crew.id}
						className={`transition-opacity duration-600 w-full ${
						  activeTab === crew.id ? "opacity-100" : "opacity-0"
						}`}
					  >
						<div className="relative w-full h-[340px] md:h-[532px] lg:h-[712px]">
						  <Image
							src={crew.image}
							alt={crew.name.toLowerCase()}
							fill
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
							className="object-contain"
						  />
						  <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-blue-900 to-transparent"></div>
						</div>
					  </TabsContent>
					))}
				</div>
			</Tabs>
		</div>
	);
}
