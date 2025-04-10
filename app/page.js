import { EpicStackLogo, logos } from './logos/logos'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="mx-auto grid min-h-screen max-w-screen-xl place-items-center gap-12 px-[1rem] py-[4rem] xl:grid-cols-2 xl:gap-0">
      <div className="grid max-w-md grid-cols-1 place-items-center gap-4 sm:gap-6 xl:col-start-2 xl:col-end-3 xl:justify-items-start xl:my-auto" >
        <EpicStackLogo className="size-20" />
        <h1 className="md:text-5xl text-center text-4xl font-bold sm:text-4.5xl lg:text-5.5xl">
          The <span className="text-highlight">Epic</span> Stack
        </h1>
        <p className="md:2xl w-full text-center text-base font-thin leading-6 sm:text-lg">
          Check the{' '}
          <a href="#" className="font-bold underline hover:underline-offset-0">
            Getting Started
          </a>{' '}
          guide file for how to get your project off the ground!
        </p>
      </div>
      <div className="xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2">
        <ul className="flex max-w-[840px] flex-wrap place-content-center gap-2 xl:gap-4 p-2 xl:grid grid-rows-6 grid-cols-5 ">
          {logos.map((logo) => (
            <li
              key={logo.href}
              className={`flex size-24 items-center justify-center rounded-xl bg-wrapper p-4 ${logo.col} ${logo.row} `}
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
    </div>
  )
}
