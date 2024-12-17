"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
	isSidebarOpen: boolean;
	setIsSidebarOpen: (isOpen: boolean) => void;
}

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

export default function Sidebar({
	isSidebarOpen,
	setIsSidebarOpen,
}: SidebarProps) {
	const [isVisible, setIsVisible] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (isSidebarOpen) {
			setIsVisible(true);
		} else {
			const timer = setTimeout(() => setIsVisible(false), 300); // 300ms matches the transition duration
			return () => clearTimeout(timer);
		}
	}, [isSidebarOpen]);

	return (
		<div
			className={`fixed top-0 right-0 w-[70vw] h-screen z-30 bg-[#0B0D17] bg-opacity-15 backdrop-blur-2xl
                  transition-all duration-500 ease-out
                  ${
										isVisible
											? " translate-x-0"
											: "translate-x-full pointer-events-none"
									}`}
		>
			<div className="py-8 px-6 w-full h-[85px] flex items-center justify-end">
				<button
					className="w-6 h-5 relative"
					onClick={() => setIsSidebarOpen(false)}
				>
					<Image
						src="/shared/icon-close.svg"
						fill
						alt="Close menu"
						className="object-contain"
					/>
				</button>
			</div>

			<nav className="mt-[64px] flex flex-col gap-32 w-full pl-32">
				{navLinks.map((item, index) => (
					<Link
						key={item.name}
						href={item.path}
						className={`flex gap-3 items-center text-preset-8 text-base font-barlow-condensed py-8 border-r-4 text-white
                      ${
												pathname === item.path
													? "border-white "
													: "border-transparent text-preset-8 hover:border-gray-400"
											}`}
					>
						<p className="font-bold">{index.toString().padStart(2, "0")}</p>
						<p>{item.name}</p>
					</Link>
				))}
			</nav>
		</div>
	);
}
