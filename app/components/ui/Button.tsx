import React from "react";

interface btnProps {
	btnStyle?: string;
}

const Button = ({btnStyle}: btnProps) => {
	return (
		<div className="p-20  rounded-full bg-transparent hover:bg-white hover:bg-opacity-25 focus:bg-white focus:bg-opacity-25 transition-colors duration-300 ease-out ">
			<button className={`bg-white rounded-full h-[144px] w-[144px]  text-blue-900 font-bellefair text-[18px] hover:text-blue-300 transition-colors duration-300 ease-out ${btnStyle} `}>
				EXPLORE
			</button>
		</div>
	);
};

export default Button;
