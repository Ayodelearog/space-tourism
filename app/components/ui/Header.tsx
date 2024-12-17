"use client";
import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

// interface SidebarProps {
// 	isSidebarOpen: boolean;
// 	setIsSidebarOpen: (isOpen: boolean) => void;
// }

const Header = ( ) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	return (
		<header className="py-6 w-full fixed top-0 left-0 z-20">
			<div className="w-full px-6 flex justify-between items-center ">
				<div className="w-10 h-10 relative ">
					<Image
						src="/shared/logo.svg"
						fill
						alt="logo"
						className="object-contain"
					/>
				</div>

				<button
					className="w-6 h-5 relative "
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
		</header>
	);
};

export default Header;
