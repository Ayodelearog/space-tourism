"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

const technologies = [
	{
		terminology: "THE TERMINOLOGY…",
		name: " Launch Vehicle",
		description:
			"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
		image: "/technology/image-launch-vehicle-portrait.jpg",
		id: "1",
	},
	{
		terminology: "THE TERMINOLOGY…",
		name: " Spaceport",
		description:
			"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
		image: "/technology/image-spaceport-portrait.jpg",

		id: "2",
	},
	{
		terminology: "THE TERMINOLOGY…",
		name: " Space Capsule",
		description:
			"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
		image: "/technology/image-space-capsule-portrait.jpg",
		id: "3",
	},
];

export default function TechnologyTabs() {
	const [activeTab, setActiveTab] = useState("1");

	const handleSwipe = useCallback(
		(direction: "LEFT" | "RIGHT") => {
			const currentIndex = technologies.findIndex(
				(technology) => technology.id === activeTab
			);
			if (direction === "LEFT") {
				const nextIndex = (currentIndex + 1) % technologies.length;
				setActiveTab(technologies[nextIndex].id);
			} else if (direction === "RIGHT") {
				const prevIndex =
					(currentIndex - 1 + technologies.length) % technologies.length;
				setActiveTab(technologies[prevIndex].id);
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
				className="w-full flex flex-col gap-32 lg:pl-[165px] lg:py-[48px] lg:flex-row-reverse lg:items-center"
			>
				<div className="w-full flex justify-center items-center relative  lg:w-[50%]">
					{technologies.map((technology) => (
						<TabsContent
							key={technology.id}
							value={technology.id}
							className={`transition-opacity backdrop-blur  duration-600 w-full md:pt-[64px] ${
								activeTab === technology.id ? "opacity-100" : "opacity-0"
							}`}
						>
							<div className="relative w-full h-[258px] md:h-[357px] lg:h-[712px]">
								<Image
									src={technology.image}
									alt={technology.name.toLowerCase()}
									fill
									priority
									sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
									className="object-cover"
								/>
								{/* <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-blue-900 to-transparent"></div> */}
							</div>
						</TabsContent>
					))}
				</div>

				<div className="flex flex-col gap-24 md:gap-32 md:px-[88px] px-6 lg:w-[50%] lg:px-0 lg:flex-row lg:items-center lg:gap-[64px] ">
					<TabsList className="w-full bg-transparent flex justify-center lg:justify-start">
						<div className="flex gap-4 lg:gap-8 lg:flex-col">
							{technologies.map((tech) => (
								<TabsTrigger
									key={tech.id}
									value={tech.id}
									className="h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 rounded-full 
                       bg-transparent border border-white/25
                       font-bellefair text-lg md:text-2xl lg:text-[32px] text-white
                       hover:border-white
                       data-[state=active]:bg-white data-[state=active]:text-black
                       transition-colors duration-300 ease-in-out"
									aria-label={tech.name}
								>
									{tech.id}
								</TabsTrigger>
							))}
						</div>
					</TabsList>

					<div>
						{technologies.map((technology) => (
							<TabsContent
								key={technology.name}
								value={technology.id}
								className={`w-full flex flex-col gap-24  transition-opacity duration-600  ${
									activeTab === technology.id ? "opacity-100" : "opacity-0"
								}`}
							>
								<div className="w-full text-center flex flex-col items-center gap-8 lg:items-start">
									<p className="text-white leading-[20.6px] text-[18px]  font-bellefair text-opacity-50 uppercase md:leading-[28px]  md:text-[24px]">
										{technology.terminology}
									</p>
									<p className="text-white text-[24px] leading-[27.5px] font-bellefair uppercase  md:text-[40px]">
										{technology.name}
									</p>
								</div>

								<p className="text-blue-300 text-center leading-[180%] text-[15px] font-barlow md:text-preset-9 lg:text-preset-9 lg:text-left">
									{technology.description}
								</p>
							</TabsContent>
						))}
					</div>
				</div>
			</Tabs>
		</div>
	);
}
