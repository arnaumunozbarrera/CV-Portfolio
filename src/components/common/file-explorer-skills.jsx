import React, { useMemo, useState, useEffect } from "react";
import {
  Monitor,
  LayoutGrid,
  List,
  ChevronRight,
  Folder,
  X,
  Code,
  Database,
  Wrench
} from "lucide-react";

const sections = [
  {
    id: "languages",
    label: "Languages",
    icon: Code,
    items: [
      {
        name: "JavaScript",
        level: "Advanced",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        description: "Used for building dynamic web applications, especially with React and modern frontend ecosystems."
      },
      {
        name: "Python",
        level: "Advanced",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        description: "Applied in data analysis, scripting, and backend development with a focus on ML workflows."
      },
      {
        name: "Java",
        level: "Intermediate",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        description: "Used for structured backend systems and object-oriented design patterns."
      },
      {
        name: "C++",
        level: "Intermediate",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        description: "Focused on low-level programming and performance-critical applications."
      }
    ]
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    items: [
      {
        name: "MongoDB",
        level: "Advanced",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        description: "NoSQL database used for scalable applications and flexible data models."
      },
      {
        name: "PostgreSQL",
        level: "Advanced",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        description: "Relational database for structured data and complex queries."
      },
      {
        name: "Oracle",
        level: "Intermediate",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
        description: "Enterprise-grade database used in academic and professional environments."
      }
    ]
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    items: [
      {
        name: "Docker",
        level: "Intermediate",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        description: "Containerization tool for consistent environments and deployment."
      },
      {
        name: "Git",
        level: "Advanced",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        description: "Version control system used for collaboration and code management."
      },
      {
        name: "NGINX",
        level: "Intermediate",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        description: "Web server and reverse proxy for handling traffic and deployment setups."
      },
      {
        name: "Figma",
        level: "Intermediate",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        description: "Design tool used for UI/UX prototyping and interface design."
      }
    ]
  }
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

export default function WindowsExplorerSkills({ setShowSkills }) {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [selectedItem, setSelectedItem] = useState(sections[0].items[0]);
  const [viewMode, setViewMode] = useState("grid");

  const currentSection = useMemo(
    () => sections.find((s) => s.id === activeSection),
    [activeSection]
  );

  const closeSkills = () => setShowSkills(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (!media.matches) setViewMode("grid");
    };
    handleResize();
    media.addEventListener("change", handleResize);
    return () => media.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="w-full h-[92.5%] text-white flex justify-center overflow-hidden">
      <div className="flex w-full max-w-[1400px] h-full flex-col lg:flex-row overflow-hidden lg:overflow-hidden rounded-[28px] border border-white/10 bg-[#161616] shadow-2xl shadow-black/40">

        {/* Sidebar */}
        <aside className="flex w-full lg:w-[300px] flex-col border-b lg:border-b-0 lg:border-r border-white/10 bg-[#121212] max-h-[40%] lg:max-h-full overflow-auto">

          <div className="flex items-center border-b border-white/10 pl-5 pr-12 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20">
                <Folder className="h-5 w-5 text-amber-300" />
              </div>
              <div>
                <p className="text-sm font-semibold">Skills</p>
                <p className="text-xs text-zinc-400">Arnau's explorer</p>
              </div>
              <button
                onClick={closeSkills}
                className="rounded-xl border px-3 py-2 ml-28 transition lg:hidden text-gray-400 hover:text-white border-white/20 hover:bg-white/10"
              >
                <X size={14} />
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
                    setSelectedItem(section.items[0]);
                  }}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* Explorer */}
        <section className="flex min-w-0 flex-1 flex-col bg-[#191919] max-h-[60%] lg:max-h-full">

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
                onClick={closeSkills}
                className="rounded-xl border px-3 py-2 transition hidden lg:block text-gray-400 hover:text-white border-white/20 hover:bg-white/10"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5">

            {viewMode === "grid" ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {currentSection.items.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => setSelectedItem(item)}
                    className="rounded-2xl border p-5 text-left transition border-white/10 bg-white/5 hover:bg-white/10"
                  >
                    <img src={item.img} alt={item.name} className="w-12 h-12 mb-3" />
                    <p className="text-lg font-medium text-white">{item.name}</p>
                    <p className="mt-1 text-base text-zinc-400">{item.level}</p>
                    <p className="mt-3 text-base text-zinc-500">{item.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141414]">
                {currentSection.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 p-4 border-b border-white/5 last:border-b-0"
                  >
                    <img src={item.img} alt={item.name} className="w-10 h-10" />
                    <div>
                      <p className="text-lg text-white">{item.name}</p>
                      <p className="text-base text-zinc-400">{item.level}</p>
                      <p className="text-base text-zinc-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
