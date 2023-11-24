import React from "react";
import Image from "next/image";
import { introData } from "../lib/data";

const IntroSection = () => {
  return (
    <section className="py-8">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <Image src={introData.imageUrl} width={262} height={262} alt="Image" />

        <h6 className="font-medium text-gray-600 text-lg uppercase">
          {introData.name}
        </h6>

        <h1 className="font-bold text-gray-900 text-3xl title-text">
          {introData.title}
        </h1>

        <p className="font-normal text-gray-600 text-lg max-w-[60ch]">
          {introData.description}
        </p>

        <a
          href="#contact"
          className="px-8 py-4 bg-gray-700 text-gray-50 text-base rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-100"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default IntroSection;