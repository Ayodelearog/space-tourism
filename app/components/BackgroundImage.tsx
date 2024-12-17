import Image from "next/image";

export default function BackgroundImage() {
	return (
		<>
			<Image
				src="/home/background-home-mobile.jpg"
				alt="Space background"
				fill
				priority
				className="object-cover md:hidden"
				sizes="(max-width: 375px) 100vw, 100vw"
			/>
			<Image
				src="/home/background-home-tablet.jpg"
				alt="Space background"
				fill
				priority
				className="hidden md:block lg:hidden object-cover"
				sizes="(min-width: 768px) and (max-width: 1440px) 100vw, 100vw"
			/>
			<Image
				src="/home/background-home-desktop.jpg"
				alt="Space background"
				fill
				priority
				className="hidden lg:block object-cover"
				sizes="100vw"
			/>
		</>
	);
}
