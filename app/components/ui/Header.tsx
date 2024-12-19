"use client";
import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{
		name: "HOME",
		path: "/",
	},
	{
		name: "DESTINATION",
		path: "/destination",
	},
	{
		name: "CREW",
		path: "/crew",
	},
	{
		name: "TECHNOLOGY",
		path: "/technology",
	},
];

const Header = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const pathname = usePathname();

	return (
		<header className="py-6 md:p-0 w-full fixed top-0 left-0 z-20 ">
			<div className="w-full px-6 flex justify-between items-center md:hidden ">
				<div className="w-10 h-10 relative ">
					<Image
						src="/shared/logo.svg"
						fill
						alt="logo"
						className="object-contain"
					/>
				</div>

				<button
					className="w-6 h-5 relative  "
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				>
					<Image
						src="/shared/icon-hamburger.svg"
						fill
						alt="hamburger open"
						className="object-contain"
					/>
				</button>
			</div>

			<Sidebar
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>

			<div className="w-full hidden md:flex items-center gap-10 pl-10 ">
				<div className="min-w-10 h-10 relative ">
					<Image
						src="/shared/logo.svg"
						fill
						alt="logo"
						className="object-contain"
					/>
				</div>

				<nav className=" flex  gap-32 w-full pl-[117px] md:bg-white md:bg-opacity-5 md:backdrop-blur-sm">
					{navLinks.map((item, index) => (
						<Link
							key={item.name}
							href={item.path}
							className={`flex gap-3 items-center text-preset-8 text-base font-barlow-condensed border-b-4 text-white transition-color duration-300 ease-in-out  py-[38.5px]
                      ${
												pathname === item.path
													? "border-white "
													: "border-transparent text-preset-8 hover:border-gray-400"
											}`}
						>
							<p
								className={`font-bold ${
									pathname === "/" && item.name.toLowerCase() === "home"
										? "hidden"
										: "block"
								}`}
							>
								{index.toString().padStart(2, "0")}
							</p>

							<p>{item.name}</p>
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
