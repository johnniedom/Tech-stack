import { EpicStackLogo, logos } from "./logos/logos";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-red-100 grid gap-12 place-items-center py-[4rem] px-[1rem]">
      <div className="grid grid-cols-1 place-items-center w-[100%] max-w-md">
        <EpicStackLogo className="size-20" />
        <h1 className=" text-[2.2rem] sm:text-[2.652rem] md:text-5xl lg:text-6xl  font-bold text-center">
          The <span className="text-highlight">Epic</span> Stack
        </h1>
        <p className="text-center w-full font-thin leading-6 text-gray-300">
          Check the{" "}
          <a href="#" className="font-bold underline hover:underline-offset-0">
            Getting Started
          </a>{" "}
          guide file for how to get your project off the ground!
        </p>
      </div>

      <ul className="flex flex-wrap max-w-[840px] gap-2 p-2 sm:gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 place-content-center ">
        {logos.map((logo) => (
          <li
            key={logo.href}
            className="p-4 size-24 flex bg-wrapper rounded-xl items-center justify-center"
          >
            <a href={logo.href}>
              <Image
                src={logo.src}
                alt={logo.alt}
                unoptimized={true}
                className="w-16"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
