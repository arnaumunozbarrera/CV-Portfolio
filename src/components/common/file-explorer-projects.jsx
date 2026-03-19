import React, { useMemo, useState, useEffect } from "react";
import { FolderClosed, Sun, Moon, X, CircleUserRound, FileBadge2, Linkedin, Github, Languages, DatabaseZap, Wrench, FolderGit2, SplinePointer, BookUser, Waypoints, University, CodeXml, FolderCode  } from 'lucide-react';
import {
  ChevronRight,
  Folder,
  HardDrive,
  LayoutGrid,
  List,
  Monitor,
} from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import MLCars from "../../assets/projects/ML-Car-Project.png";
import MLTitanic from "../../assets/projects/ML-Titanic-Project.png";
import MongoDB from "../../assets/projects/Massive-Data-Consult-Optimization-Project.png";
import NoneRelationalDBs from "../../assets/projects/Non-relational-Distributed-DBs-Project.png";

const sections = [
  {
    id: "entry-1",
    label: "ML - Car price predictions",
    icon: Monitor,
    items: [
      { name: "Github repository", type: "Source code", modified: "15/03/2026 16:21", src: MLCars, href: "https://github.com/arnaumunozbarrera/ML-Model-Car-Prices.git"},
      { name: "Repository README", type: "README.md", modified: "15/03/2026 16:21", src: "", href:"https://github.com/arnaumunozbarrera/ML-Model-Car-Prices/blob/5b20d49645001b5c873edf4ab2f0f29353b373f7/README.md"},
      { name: "Data file", type: "CSV", modified: "15/03/2026 16:21", src: "", href:"https://github.com/arnaumunozbarrera/ML-Model-Car-Prices/tree/5b20d49645001b5c873edf4ab2f0f29353b373f7/data"},
    ],
  },
  {
    id: "entry-2",
    label: "ML - Titanic survival predictions",
    icon: Monitor,
    items: [
      { name: "Github repository", type: "Source code", modified: "15/03/2026 16:21", src: MLTitanic, href: "https://github.com/arnaumunozbarrera/ML-Model-Titanic.git"},
      { name: "Repository README", type: "README.md", modified: "15/03/2026 16:21", src: "", href:"https://github.com/arnaumunozbarrera/ML-Model-Titanic/blob/145ce5a85b33b180fe3d8894dfd6c070c610a811/README.md"},
      { name: "Data files", type: "CSV", modified: "15/03/2026 16:21", src: "", href:"https://github.com/arnaumunozbarrera/ML-Model-Titanic/tree/145ce5a85b33b180fe3d8894dfd6c070c610a811/APC_Practica_1_2025.ipynb/titanic"},
    ],
  },
  {
    id: "entry-3",
    label: "DBs - Data Analysis & Optimizations",
    icon: HardDrive,
    items: [
      { name: "Github repository", type: "Source code", modified: "15/03/2026 16:21", src: MongoDB, href: "https://github.com/arnaumunozbarrera/MongoDB-Data-Analysis-Project.git"},
      { name: "Repository README", type: "README.md", modified: "15/03/2026 16:21", src: "", href:"https://github.com/arnaumunozbarrera/MongoDB-Data-Analysis-Project/blob/7179a9f5a9a3b0c418a0905c003cf0da94fbe618/README.md"},
      { name: "Project's inform file (CAT)", type: "PDF", modified: "15/03/2026 16:21", src: "", href:"https://github.com/arnaumunozbarrera/MongoDB-Data-Analysis-Project/blob/7179a9f5a9a3b0c418a0905c003cf0da94fbe618/ATS%20-%20Pr%C3%A0ctica%201.pdf"},
      { name: "Data files", type: "JSON", modified: "15/03/2026 16:21", src: "", href:"https://github.com/arnaumunozbarrera/MongoDB-Data-Analysis-Project/tree/7179a9f5a9a3b0c418a0905c003cf0da94fbe618/datasets"},
    ],
  },
  {
    id: "entry-4",
    label: "DBs - Non relational architectures",
    icon: HardDrive,
    items: [
      { name: "Repository", type: "Source code", modified: "15/03/2026 16:21", src: NoneRelationalDBs, href: "https://github.com/arnaumunozbarrera/Non-relational-Distributed-DBs-Project.git"},
      { name: "Project's inform file (CAT)", type: "PDF", modified: "15/03/2026 16:21", src: "", href:"https://github.com/arnaumunozbarrera/Non-relational-Distributed-DBs-Project/blob/2689db2ab1e62a20b8f1d59f4c7fc1c6e5ec2cf7/src/Inform%20%5BCAT%5D.pdf"},
      { name: "Desired Architecture", type: "Image", modified: "15/03/2026 16:21", src: "", href:"https://github.com/arnaumunozbarrera/Non-relational-Distributed-DBs-Project/blob/2689db2ab1e62a20b8f1d59f4c7fc1c6e5ec2cf7/images/arquitectura.png"},
    ],
  },
];

function SidebarItem({ label, active, onClick, Icon }) {
  return (
    <button
      onClick={onClick}
      className={[
        "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-all",
        active
          ? "bg-white/10 text-white shadow-inner"
          : "text-zinc-300 hover:bg-white/5 hover:text-white",
      ].join(" ")}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span className="truncate text-sm">{label}</span>
    </button>
  );
}

export default function WindowsExplorerProjects({setShowProjects}) {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [selectedItem, setSelectedItem] = useState(sections[0].items[0].name);
  const [viewMode, setViewMode] = useState("details");

  const currentSection = useMemo(
    () => sections.find((section) => section.id === activeSection) || sections[0],
    [activeSection]
  );

  const closeProjects = () => {
    setShowProjects(false);
  }

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (!media.matches) {
        setViewMode("details");
      }
    };

    handleResize();
    media.addEventListener("change", handleResize);

    return () => media.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="w-full h-[92.5%] text-white flex justify-center overflow-y-auto lg:overflow-hidden">
      <div className="flex w-full max-w-[1400px] h-full flex-col lg:flex-row overflow-visible lg:overflow-hidden rounded-[28px] border border-white/10 bg-[#161616] shadow-2xl shadow-black/40">        {/* Sidebar */}
        <aside className="flex w-full lg:w-[300px] flex-col border-b lg:border-b-0 lg:border-r border-white/10 bg-[#121212] min-h-0">
          <div className="flex items-center border-b border-white/10 pl-5 pr-12 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20">
                <Folder className="h-5 w-5 text-amber-300" />
              </div>
              <div>
                <p className="text-sm font-semibold">Latest Projects</p>
                <p className="text-xs text-zinc-400">Arnau's explorer</p>
              </div>

              <button
                onClick={closeProjects}
                className={[
                  "rounded-xl border px-3 py-2 ml-28 transition lg:hidden text-gray-400 hover:text-[#fff] border-white/20 hover:bg-white/10",
                ].join(" ")}
              >
                <X size={14}/>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto px-3 py-4">
            <div className="mb-3 px-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
              Files
            </div>

            <div className="space-y-1">
              {sections.map((section) => (
                <SidebarItem
                  key={section.id}
                  label={section.label}
                  Icon={section.icon}
                  active={section.id === activeSection}
                  onClick={() => {
                    setActiveSection(section.id);
                    setSelectedItem(section.items[0]?.name || null);
                  }}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* Explorer */}
        <section className="flex min-w-0 flex-1 flex-col bg-[#191919] min-h-0">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 px-5 py-[15px] gap-3">

            <div className="flex w-full sm:w-auto max-w-[520px] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <Monitor className="h-4 w-4 text-zinc-400" />
              <ChevronRight className="h-3.5 w-3.5 text-zinc-500" />
              <span className="truncate text-white">{currentSection.label}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={[
                  "rounded-xl border px-3 py-2 transition hidden lg:block",
                  viewMode === "grid"
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10",
                ].join(" ")}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>

              <button
                onClick={() => setViewMode("details")}
                className={[
                  "rounded-xl border px-3 py-2 transition hidden lg:block",
                  viewMode === "details"
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10",
                ].join(" ")}
              >
                <List className="h-4 w-4" />
              </button>
              <button
                onClick={closeProjects}
                className={[
                  "rounded-xl border px-3 py-2 transition hidden lg:block text-gray-400 hover:text-[#fff] border-white/20 hover:bg-white/10",
                ].join(" ")}
              >
                <X size={14}/>
              </button>
           
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5 min-h-0">
            {viewMode === "details" ? (
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141414]">

                <div className="hidden md:grid grid-cols-[4fr_3fr_1fr] border-b border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-400">
                  <div>Name</div>
                  <div>Modification Date</div>
                  <div>Type</div>
                </div>

                {currentSection.items.map((item) => {
                  const active = selectedItem === item.name;

                  return (
                    (item.href != "" ? (
                      <a href={item.href}>
                        <button
                          key={item.name}
                          onClick={() => setSelectedItem(item.name)}
                          className={[
                            "grid w-full md:grid-cols-[4fr_3fr_1fr] items-center border-b border-white/5 px-4 py-3 text-left transition last:border-b-0",
                            active ? "bg-white/10" : "hover:bg-white/5",
                          ].join(" ")}
                        >
                          <div className="flex items-center gap-5">
                            { item.type == "Source code" && (
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10">
                                <GitHubLogoIcon className="h-4 w-4 text-sky-300" />
                              </div>
                            )}

                            { (item.type == "JSON" || item.type == "CSV") && (
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
                                  fill="#7cd2fc" viewBox="0 0 24 24" >
                                  <path d="M4 2H2v19c0 .55.45 1 1 1h19v-2H4z"></path><path d="M9.17 6.83c.13-.49.58-.83 1.08-.83s.95.34 1.08.83l2.4 8.86c.37 1.36 1.61 2.31 3.02 2.31s2.65-.95 3.02-2.31l1.2-4.43-1.93-.52-1.2 4.43c-.13.49-.58.83-1.08.83s-.95-.34-1.08-.83l-2.4-8.86C12.91 4.95 11.67 4 10.26 4s-2.65.95-3.02 2.31l-1.2 4.43 1.93.52z"></path>
                                </svg>
                              </div>
                            )}

                            {item.type == "Image" && (
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10">
                                <ChevronRight className="h-4 w-4 text-sky-300" />
                              </div>
                            )}

                            { (item.type == "README.md" || item.type == "PDF") && (
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10">
                                <Folder className="h-4 w-4 text-sky-300" />
                              </div>
                            )}

                            {item.type == "" && (
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10">
                                <ChevronRight className="h-4 w-4 text-sky-300" />
                              </div>
                            )}

                            <div className="flex flex-col">
                              <span className="truncate text-sm text-zinc-100">
                                {item.name}
                              </span>

                              <span className="text-xs text-zinc-400 md:hidden">
                                {item.type} • {item.modified}
                              </span>
                            </div>
                          </div>

                          <div className="hidden md:block truncate text-sm text-zinc-300">
                            {item.modified}
                          </div>

                          <div className="hidden md:block truncate text-sm text-zinc-300">
                            {item.type}
                          </div>
                          {item.src != "" && (
                            <div className="hidden lg:block mt-4 w-auto h-full max-h-[10rem] max-w-[20rem] rounded-lg overflow-hidden">
                              <img src={item.src} alt="Project's Image" className=' rounded-lg'/>
                            </div>
                          )}
                        </button>
                      </a>
                    ): 
                    <button
                          key={item.name}
                          onClick={() => setSelectedItem(item.name)}
                          className={[
                            "grid w-full md:grid-cols-[4fr_3fr_1fr] items-center border-b border-white/5 px-4 py-3 text-left transition last:border-b-0",
                            active ? "bg-white/10" : "hover:bg-white/5",
                          ].join(" ")}
                        >
                          <div className="flex items-center gap-5">
                            { item.type == "Github" && (
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10">
                                <GitHubLogoIcon className="h-4 w-4 text-sky-300" />
                              </div>
                            )}

                            { item.type == "Inform" && (
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10">
                                <Folder className="h-4 w-4 text-sky-300" />
                              </div>
                            )}

                            {item.type == "" && (
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10">
                                <ChevronRight className="h-4 w-4 text-sky-300" />
                              </div>
                            )}

                            <div className="flex flex-col">
                              <span className="truncate text-sm text-zinc-100">
                                {item.name}
                              </span>

                              <span className="text-xs text-zinc-400 md:hidden">
                                {item.type} • {item.modified}
                              </span>
                            </div>
                          </div>

                          <div className="hidden md:block truncate text-sm text-zinc-300">
                            {item.modified}
                          </div>

                          <div className="hidden md:block truncate text-sm text-zinc-300">
                            {item.type}
                          </div>
                          {item.src != "" && (
                            <div className="hidden lg:block mt-4 w-auto h-full max-h-[10rem] max-w-[20rem] rounded-lg overflow-hidden">
                              <img src={item.src} alt="Project's Image" className=' rounded-lg'/>
                            </div>
                          )}
                        </button>
                    )
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {currentSection.items.map((item) => {
                  const active = selectedItem === item.name;

                  return (
                    <button
                      key={item.name}
                      onClick={() => setSelectedItem(item.name)}
                      className={[
                        "rounded-2xl border p-5 text-left transition",
                        active
                          ? "border-white/20 bg-white/10"
                          : "border-white/10 bg-white/5 hover:bg-white/10",
                      ].join(" ")}
                    >
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
                        <Folder className="h-7 w-7 text-amber-300" />
                      </div>

                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="mt-1 text-xs text-zinc-400">{item.type}</p>
                      <p className="mt-3 text-xs text-zinc-500">
                        Modified: {item.modified}
                      </p>
                    </button>
                  );
                })}
              </div>
            )}

          </div>
        </section>
      </div>
    </div>
  );
}