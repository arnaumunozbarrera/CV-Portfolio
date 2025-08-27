import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";
import { Github } from 'lucide-react';

const BentoGrid = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "grid w-full  grid-cols-3 gap-4  lg:max-h-[30rem]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  href2,
  cta,
  github,
  report,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl cursor-pointer",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] bg-[#36343d] min-h-[5rem] max-h-[5rem] lg:max-h-none",
      className,
    )}
    {...props}
  >
    <div>
      <a href={report}>
        {background}
      </a>
    </div>
    <div className="p-4">
      <div className="hidden pointer-events-none z-10 sm:flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
        <h3 className={`text-xl font-bold flex flex-row gap-2 text-white`}>
        <Icon className={`h-7 w-7 origin-left transform-gpu  transition-all duration-300 ease-in-out group-hover:scale-75 text-white `} />{name}
        </h3>
        <p className={`max-w-lg  ${name === "Non Relational DBs Architecture" ? "text-neutral-100" : "text-neutral-200"}`}>{description}</p>
      </div>

      {/* Mobile CTA */}
      <div
        className={cn(
          "lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:-translate-y-0 group-hover:opacity-100",
        )}
      >
        <button className="flex lg:hidden absolute bottom-0 right-0 w-full translate-y-10 transform-gpu flex-row items-center justify-center px-4 py-2 m-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-w-12 rounded-lg bg-gray-300/70 hover:bg-[#fff]">
              <a href={`${href}`} >
              <Github />
            </a>
        </button>

        { href2 && (
          <button href="" className="flex lg:hidden absolute bottom-0 right-14 w-full translate-y-10 transform-gpu flex-row items-center justify-center px-4 py-2 m-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-w-12 rounded-lg bg-gray-300/70 hover:bg-[#fff]">
              <a href={`${href2}`} >
              <Github />
            </a>
          </button>
        )}
      </div>
      
    </div>

    {/* Desktop CTA */}
    <button className="hidden lg:flex  absolute bottom-0 right-0 w-full translate-y-10 transform-gpu flex-row items-center justify-center px-4 py-2 m-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-w-12 rounded-lg bg-gray-300/70 hover:bg-[#fff]">
          <a href={`${href}`} >
          <Github />
        </a>
    </button>

    { href2 && (
      <button href="" className="hidden lg:flex  absolute bottom-0 right-14 w-full translate-y-10 transform-gpu flex-row items-center justify-center px-4 py-2 m-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-w-12 rounded-lg bg-gray-300/70 hover:bg-[#fff]">
          <a href={`${href2}`} >
          <Github />
        </a>
      </button>
    )}

    {/* Hover overlay */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
