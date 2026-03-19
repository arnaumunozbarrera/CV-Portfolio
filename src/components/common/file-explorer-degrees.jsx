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
import midToML from "../../assets/certificates/MidToML.png";
import introToDeepLearning from "../../assets/certificates/IntroToDeepLearning.png";
import hackatonBadge from "../../assets/certificates/hackaton_badge.svg";
import english from "../../assets/certificates/EnglishCertificate.png";
import McKinsey from "../../assets/certificates/McKinseyProgram.jpeg";

const sections = [
  {
    id: "entry-1",
    label: "Programming",
    icon: Monitor,
    items: [
        { name: "Certificate - Intermediate to Machine Learning", type: "Image", modified: "15/03/2026 16:21", src: midToML},
        { name: "Certificate - Intro to Deep Learning", type: "Image", modified: "15/03/2026 16:21", src: introToDeepLearning},
        { name: "Certificate - UABTHEHACK", type: "Image", modified: "15/03/2026 16:21", src: hackatonBadge},
    ],
  },
  {
    id: "entry-2",
    label: "Languages",
    icon: Languages,
    items: [
      { name: "Certificate - C1 Cambridge English", type: "Image", modified: "15/03/2026 16:21", src: english},
    ],
  },
  {
    id: "entry-3",
    label: "Others",
    icon: HardDrive,
    items: [
      { name: "Certificate - McKinsey program", type: "Image", modified: "15/03/2026 16:21", src: McKinsey},
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

export default function WindowsExplorerDegrees({setShowDegress}) {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [selectedItem, setSelectedItem] = useState(sections[0].items[0].name);
  const [viewMode, setViewMode] = useState("details");

  const currentSection = useMemo(
    () => sections.find((section) => section.id === activeSection) || sections[0],
    [activeSection]
  );

  const closeDegrees = () => {
    setShowDegress(false);
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

  const [urlFullScreen, setUrlFullScreen] = useState("");

  return (
    <div className="w-full h-[92.5%] text-white flex justify-center">
      <div className="flex w-full max-w-[1400px] h-full flex-col lg:flex-row overflow-hidden rounded-[28px] border border-white/10 bg-[#161616] shadow-2xl shadow-black/40">
        {/* Sidebar */}
        <aside className="flex w-full lg:w-[300px] flex-col border-b lg:border-b-0 lg:border-r border-white/10 bg-[#121212]">

          <div className="flex items-center border-b border-white/10 pl-5 pr-12 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20">
                <Folder className="h-5 w-5 text-amber-300" />
              </div>
              <div>
                <p className="text-sm font-semibold">Degrees</p>
                <p className="text-xs text-zinc-400">Arnau's explorer</p>
              </div>
              <button
                onClick={closeDegrees}
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

            <div className="space-y-1 ">
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
        <section className="flex min-w-0 flex-1 flex-col bg-[#191919]">

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
                onClick={closeDegrees}
                className={[
                  "rounded-xl border px-3 py-2 transition hidden lg:block text-gray-400 hover:text-[#fff] border-white/20 hover:bg-white/10",
                ].join(" ")}
              >
                <X size={14}/>
              </button>
           
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-5">

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
                    <button
                      key={item.name}
                      onClick={() => {setSelectedItem(item.name), setUrlFullScreen(item.src)}} 
                      className={[
                        "grid w-full md:grid-cols-[4fr_3fr_1fr] items-center border-b border-white/5 px-4 py-3 text-left transition last:border-b-0",
                        active ? "bg-white/10" : "hover:bg-white/5",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-5">
                        {item.type == "Image" && (
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
                      <div className="hidden lg:block m-4 lg:max-w-40 h-auto rounded-lg overflow-hidden">
                        <img src={item.src} alt="Degree certificate" className=' rounded-lg'/>
                      </div>
                    </button>
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
                        Obtained: {item.modified}
                      </p>
                    </button>
                  );
                })}
              </div>
            )}

          </div>
        </section>
      </div>

      {urlFullScreen && (
        <div
          className="hidden lg:fixed inset-0 z-50 lg:flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setUrlFullScreen("")}
        >
          <div className="relative w-auto h-[80%] max-w-[1024px]">
            
            <button
              onClick={() => setUrlFullScreen("")}
              className="absolute -top-12 right-0 text-white hover:text-zinc-300"
            >
              <X size={28} />
            </button>

            <img
              src={urlFullScreen}
              alt="Certificate Fullscreen"
              className="h-full w-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}