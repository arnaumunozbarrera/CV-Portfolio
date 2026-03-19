import React from "react";
import { X } from "lucide-react";

const timelineSections = [
  {
    id: "experience",
    title: "Job Experience",
    items: [
      {
        year: "February 2025 - Present",
        title: "Full Stack Developer Intern",
        subtitle: "Energiot Devices SL",
        description:
            "Worked on data-driven IoT platforms, designing scalable data backend systems for efficient ingestion, processing, and visualization of high-frequency sensor data.",
        },
    ],
  },
  {
    id: "studies",
    title: "Studies",
    items: [
      {
        year: "Sept 2022 - Sept 2026",
        title: "Computer Engineering",
        subtitle: "Universitat Autònoma de Barcelona",
        description: "",
      },
    ],
    annex: {
      title: "Annex",
      items: [
        {
          year: "Online",
          title: "Kaggle Courses",
          subtitle: "Machine Learning & Deep Learning",
          description: "",
        },
      ],
    },
  },
];

const footerContent = {
  title:
    "Always looking to collaborate on open-source projects and learn from developers worldwide.",
  description:
"My career path is centered on building data-intensive systems, exploring scalable data architectures, and applying data engineering and analytics to drive meaningful insights and decision-making."};

function TimelineHeader({ title, caption = "Timeline" }) {
  return (
    <div className="mb-4 md:mb-5 mt-6">
      <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
        {caption}
      </p>
      <h3 className="mt-2 text-base font-semibold text-white md:text-lg">
        {title}
      </h3>
    </div>
  );
}

function TimelineItemCard({ item, compact = false, className = "" }) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-[#141414] shadow-lg shadow-black/25",
        compact ? "p-4" : "p-5",
        className,
      ].join(" ")}
    >
      <p className={compact ? "mb-1 text-xs text-zinc-400" : "mb-2 text-sm text-zinc-400"}>
        {item.year}
      </p>

      <h4
        className={[
          "font-semibold leading-tight text-white",
          compact ? "text-[15px]" : "text-[1.02rem]",
        ].join(" ")}
      >
        {item.title}
      </h4>

      <p className="mt-1 text-sm text-zinc-400">{item.subtitle}</p>

      {item.description && (
        <p
          className={[
            "text-zinc-300",
            compact ? "mt-3 text-sm leading-5" : "mt-4 text-sm leading-6",
          ].join(" ")}
        >
          {item.description}
        </p>
      )}
    </div>
  );
}

function MobileTimelineTrack({ items = [], annex, showFuture = false }) {
  const futureItems = showFuture
    ? [
        {
          year: "Future",
          title: "Master",
          subtitle: "Aiming to persue a Master's Degree in Data Science or AI",
          description:
            "TBD",
        },
      ]
    : [];

  const allItems = annex?.items?.length
    ? [...items, ...annex.items, ...futureItems]
    : [...items, ...futureItems];

  return (
    <div className="relative flex flex-col gap-3 md:hidden">
      <div className="absolute bottom-0 left-3.5 top-0 w-px bg-white/10" />

      {allItems.map((item, index) => (
        <div key={`${item.title}-${index}`} className="relative pl-10">
          <div className="absolute left-0 top-4 flex h-7 w-7 items-center justify-center">
            <div className="h-4 w-4 rounded-full border-[3px] border-[#161616] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]" />
          </div>

          <TimelineItemCard item={item} compact />
        </div>
      ))}
    </div>
  );
}

function ExperienceDesktopTrack({ items }) {
  const item = items?.[0];
  if (!item) return null;

  return (
    <div className="relative hidden h-[240px] md:block">
      <div className="absolute left-[8%] right-[8%] top-[58%] h-px bg-white/15" />

      <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -bottom-2 left-1/2 h-12 w-px -translate-x-1/2 bg-white/15" />
        <div className="absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#161616] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_28px_rgba(255,255,255,0.08)]" />

        <div className="absolute bottom-10 left-1/2 w-[330px] -translate-x-1/2">
          <TimelineItemCard item={item} />
        </div>
      </div>
    </div>
  );
}

function StudiesDesktopTrack({ items, annex }) {
  const mainItem = items?.[0];
  const topBranch = annex?.items?.[0];
  const futureItem = {
    year: "Future",
    title: "Master",
    subtitle: "Aiming to persue a Master's Degree in Data Science or AI",
    description: "TBD",
  };

  if (!mainItem) return null;

  return (
    <div className="relative hidden h-[360px] md:block">
      <div className="absolute left-[10%] right-[8%] top-[62%] h-px bg-white/15" />

      <div className="absolute left-[24%] top-[62%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#161616] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_28px_rgba(255,255,255,0.08)]" />

        <div className="absolute left-1/2 top-[-206px] h-[236px] w-px -translate-x-1/2 bg-white/15" />
        <div className="absolute left-1/2 top-[14px] h-[52px] w-px -translate-x-1/2 bg-white/15" />

        <div className="absolute left-1/2 top-[22px] w-[330px] -translate-x-1/2">
          <TimelineItemCard item={mainItem} />
        </div>
      </div>

      {topBranch && (
        <div className="absolute left-[24%] top-[18%] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#161616] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]" />

          <div className="absolute bottom-10 left-1/2 w-[290px] -translate-x-1/2">
            <TimelineItemCard item={topBranch} className="bg-[#121212]" />
          </div>
        </div>
      )}

      <div className="absolute left-[72%] top-[62%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#161616] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]" />

        <div className="absolute bottom-10 left-1/2 w-[290px] -translate-x-1/2">
          <TimelineItemCard item={futureItem} className="border-dashed bg-[#121212]" />
        </div>
      </div>
    </div>
  );
}

function TimelineTrack({ section }) {
  if (section.id === "experience") {
    return (
      <>
        <MobileTimelineTrack items={section.items} />
        <ExperienceDesktopTrack items={section.items} />
      </>
    );
  }

  return (
    <>
      <MobileTimelineTrack items={section.items} annex={section.annex} showFuture />
      <StudiesDesktopTrack items={section.items} annex={section.annex} />
    </>
  );
}

function TimelineSection({ section }) {
  return (
    <section className="rounded-[24px] border border-white/10 bg-[#101010] p-4 md:p-6">
      <TimelineHeader title={section.title} />
      <TimelineTrack section={section} />
    </section>
  );
}

function FooterBlock({ title, description }) {
  return (
    <section className="rounded-[24px] border border-white/10 bg-[#101010] p-4 md:p-6">
      <div className="space-y-2">
        <p className="text-sm text-zinc-100 md:text-[15px]">{title}</p>
        <p className="text-xs leading-5 text-zinc-400 md:text-sm md:leading-6">
          {description}
        </p>
      </div>
    </section>
  );
}

export default function CareerStudiesTimeline({ setShowExperience }) {
  const closeTimeline = () => {
    setShowExperience(false);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-transparent px-3 py-3 text-white md:px-5 md:py-5">
      <div className="flex h-full max-h-[920px] w-full max-w-[1600px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#161616] shadow-2xl shadow-black/40">
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#121212] px-4 py-3 md:px-5 md:py-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              Career & Studies
            </p>
            <p className="truncate text-xs text-zinc-400">Arnau&apos;s timeline</p>
          </div>

          <button
            onClick={closeTimeline}
            className="rounded-xl border border-white/20 px-3 py-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Close timeline"
            type="button"
          >
            <X size={14} />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 bg-[#191919] p-3 md:p-4 ">
          <div className="grid h-full w-full grid-rows-[auto_auto_auto] gap-3 overflow-auto md:gap-4">
            {timelineSections.map((section) => (
              <TimelineSection key={section.id} section={section} />
            ))}

            <FooterBlock
              title={footerContent.title}
              description={footerContent.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
