import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { DatabaseZap, Database, Pyramid, ShieldCheck } from 'lucide-react';
import { BentoCard, BentoGrid } from "../common/bento-grid";

const features = [
  {
    Icon: DatabaseZap,
    name: "Aural",
    description: "React Native | Node.js | MongoDB",
    href: "https://github.com/arnaumunozbarrera/aural-back.git",
    href2: "https://github.com/arnaumunozbarrera/aural-client.git",
    cta: "Learn more",
    background: <img className="absolute right-6 -top-5 opacity-100  rounded-lg" src={require("../../assets/projects/Aural-ReactNative-Node-App-Dark.png")}/>,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    report: "https://www.youtube.com/watch?v=IMJD2gQpGxE"
  },
  {
    Icon: GlobeIcon,
    name: "E-commerce Website",
    description: "HTML | CSS | JS | PHP",
    href: "https://github.com/arnaumunozbarrera/Ecommerce-Website-Project.git",
    cta: "Learn more",
    background: <img className="absolute -right-0 -top-0 opacity-100 w-full h-auto" src={require("../../assets/projects/Ecommerce-Website-Project.png")}/>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    report: "https://deepwiki.com/arnaumunozbarrera/Ecommerce-Website-Project"

  },
  {
    Icon: Database,
    name: "Data Analysis & Optimizations",
    description: "PYTHON | SQL",
    href: "https://github.com/arnaumunozbarrera/Massive-Data-Consult-Optimization-Project.git",
    hre2: "https://github.com/arnaumunozbarrera/ats-mongodb-2025-restaurantes.git",
    cta: "Learn more",
    background: <img className="absolute -right-0 -top-0 opacity-100 " src={require("../../assets/projects/MongoDB-Data-Analysis.png")}/>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    report: "https://deepwiki.com/arnaumunozbarrera/Massive-Data-Consult-Optimization-Project"
  },
  {
    Icon: Pyramid,
    name: "Non Relational DBs Architecture",
    description: "ORACLE",
    href: "https://github.com/arnaumunozbarrera/Non-relational-Distributed-DBs-Project.git",
    cta: "Learn more",
    background: <img className="absolute -right-0 -top-0 opacity-50 " src={require("../../assets/projects/Non-relational-Distributed-DBs-Project.png")}/>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    report: "https://deepwiki.com/arnaumunozbarrera/MongoDB-Data-Analysis"
  },
  {
    Icon: ShieldCheck,
    name: "Testing Projects",
    description: "JAVA | JUNIT | MOCKITO | JENKINS  ",
    href: "https://github.com/arnaumunozbarrera/Testing-Project.git",
    href2: "https://github.com/arnaumunozbarrera/UI-Testing-Project.git",
    cta: "Learn more",
    background: <div className="flex flex-col gap-0"> <img className="absolute -right-0 -top-0 opacity-100 " src={require("../../assets/projects/UI-Testing-Project.png")}/> <img className="absolute -right-0 top-20 opacity-100 " src={require("../../assets/projects/Testing-Project.png")}/></div> ,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    report: "https://deepwiki.com/arnaumunozbarrera/Testing-Project"
  },
];

export function Projects() {
  return (
    <BentoGrid className="grid-rows-4 grid-cols-2 lg:grid-rows-3 md:grid-cols-2  md:pt-3 ">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
