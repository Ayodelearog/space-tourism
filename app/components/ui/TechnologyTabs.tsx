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
	}
];

export default function TechnologyTabs() {
	const [activeTab, setActiveTab] = useState("1");

	const handleSwipe = useCallback(
		(direction: "LEFT" | "RIGHT") => {
			const currentIndex = technologies.findIndex((technology) => technology.id === activeTab);
			if (direction === "LEFT") {
				const nextIndex = (currentIndex + 1) % technologies.length;
				setActiveTab(technologies[nextIndex].id);
			} else if (direction === "RIGHT") {
				const prevIndex = (currentIndex - 1 + technologies.length) % technologies.length;
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
				className="w-full flex flex-col gap-32 "
			>
				<div className="w-full flex justify-center items-center relative  ">
					{technologies.map((technology) => (
						<TabsContent
							key={technology.id}
							value={technology.id}
							className={`transition-opacity backdrop-blur h-[258px] duration-600  w-full ${
								activeTab === technology.id ? "opacity-100" : "opacity-0"
							}`}
						>
							<Image
								src={technology.image}
								alt={technology.name.toLowerCase()}
								fill
								priority
								className="object-cover md:hidden"
							/>

							
						</TabsContent>
					))}
				</div>

				<div className="flex flex-col gap-24 px-6">
					<TabsList className="w-full bg-transparent justify-start">
						<div className="w-full px-[40.5px] flex justify-center items-center gap-32">
							{technologies.map((technology, index) => (
								<TabsTrigger
									key={technology.id}
									value={technology.id}
									className="h-[40px] w-[40px] rounded-full data-[state=active]:bg-white  hover:bg-white transition-colors duration-600 ease-in-out p-0 font-bellefair text-[18px] bg-transparent border border-white border-opacity-25"
								>
									{technology.id}
								</TabsTrigger>
							))}
						</div>
					</TabsList>
					<div>
						{technologies.map((technology) => (
							<TabsContent
								key={technology.name}
								value={technology.id}
								className={`w-full flex flex-col gap-24  transition-opacity duration-600 ${
									activeTab === technology.id ? "opacity-100" : "opacity-0"
								}`}
							>
								<div className="w-full text-center flex flex-col items-center gap-8">
									<p className="text-white  text-[18px] font-bellefair text-opacity-50 uppercase ">
										{technology.terminology}
									</p>
									<p className="text-white  text-[24px] font-bellefair  uppercase ">
										{technology.name}
									</p>
								</div>

								<p className="text-blue-300 text-center text-preset-9 text-[15px] font-barlow  ">
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
