import React from "react";
import Button from "./ui/Button";
import BackgroundImage from "./BackgroundImage";
import Link from "next/link";

const content = {
  subtitle: "SO, YOU WANT TO TRAVEL TO",
  title: "SPACE",
  description: "Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!",
};

const HomePage: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen pt-[102px] md:px-10   ">
      <div className="absolute inset-0 z-0">
        <BackgroundImage />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 lg:flex-row lg:justify-between lg:py-[128px] lg:px-[165px] mt-[50px] md:mt-[120px] lg:mt-[160px]">
        <div className="text-center lg:text-left max-w-[540px]">
          <p className="font-barlow-condensed text-blue-300 text-[16px] md:text-preset-5 lg:text-preset-5 mb-4">
            {content.subtitle}
          </p>
          <h1 className="font-bellefair text-white text-[5rem] md:text-[4.5rem] lg:text-preset-1 mb-4">
            {content.title}
          </h1>
          <p className="font-barlow-condensed text-blue-300 text-[15px] md:text-preset-9 lg:text-preset-9">
            {content.description}
          </p>
        </div>

        <div className="mt-6 lg:mt-0 lg:ml-8">
          <Link href="/destination">
            <Button btnStyle="w-[150px] h-[150px] md:w-[272px] md:h-[272px] text-[1.25rem] md:text-preset-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;