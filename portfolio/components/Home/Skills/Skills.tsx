"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Chakra_Petch, Lora } from "next/font/google";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["600", "700"],
});

type Skill = {
  name: string;
  logo: string;
};

type SkillGroup = {
  name: string;
  key: string;
  items: Skill[];
};

const skills: SkillGroup[] = [
  {
    name: "Data Engineering",
    key: "Data Engineering",
    items: [
      { name: "SSIS", logo: "/logos/SSISlarge.png" },
      { name: "SSAS", logo: "/logos/SSAS_large.png" },
      { name: "Data Warehousing", logo: "/logos/datawarehouse.png" },
      { name: "Star Schema", logo: "/logos/starschema.png" },
      { name: "Snowflake Schema", logo: "/logos/snowflake.png" },
      { name: "ETL Development", logo: "/logos/etl.png" },
      { name: "Data Pipelines", logo: "/logos/pipeline.jpeg" },
      { name: "OLAP", logo: "/logos/olap.png" },
    ],
  },
  {
    name: "Data Analytics & BI",
    key: "Data Analytics & BI",
    items: [
      { name: "Power BI", logo: "/logos/powerbi.png" },
      { name: "SQL", logo: "/logos/sql.png" },
      { name: "Python", logo: "/logos/python.png" },
      { name: "Data Visualization", logo: "/logos/datavizualisation.png" },
      { name: "KPI Reporting", logo: "/logos/kpi.jpg" },
      { name: "Business Intelligence", logo: "/logos/bi.jpg" },
      { name: "Dashboard Design", logo: "/logos/dashboard.png" },
    ],
  },
  {
    name: "AI / ML",
    key: "AI / ML",
    items: [
      { name: "Python", logo: "/logos/python.png" },
      { name: "Machine Learning", logo: "/logos/machine.jpg" },
      { name: "NumPy", logo: "/logos/numpy.png" },
      { name: "Pandas", logo: "/logos/pandas.png" },
      { name: "Feature Engineering", logo: "/logos/feature.png" },
    ],
  },
  {
    name: "Software Engineering",
    key: "Software Engineering",
    items: [
      { name: "Java", logo: "/logos/java.png" },
      { name: "JavaScript", logo: "/logos/javascript.png" },
      { name: "React", logo: "/logos/react.png" },
      { name: "Node.js", logo: "/logos/nodejs.png" },
      { name: "Spring Boot", logo: "/logos/springboot.png" },
      { name: "REST APIs", logo: "/logos/restapi.png" },
    ],
  },
  {
    name: "Databases",
    key: "Databases",
    items: [
      { name: "MySQL", logo: "/logos/mysql.png" },
      { name: "SQL Server", logo: "/logos/sqlserver.png" },
      { name: "MongoDB", logo: "/logos/mongodb.png" },
      { name: "SuperBase", logo: "/logos/super.png" },
      { name: "Oracle", logo: "/logos/oracle.png" },
      { name: "Data Modeling", logo: "/logos/datamodeling.jpg" },
      { name: "Stored Procedures", logo: "/logos/storedprocedures.png" },
    ],
  },
  {
    name: "Tools",
    key: "Tools",
    items: [
      { name: "Git", logo: "/logos/git.png" },
      { name: "GitHub", logo: "/logos/gith.png" },
      { name: "VS Code", logo: "/logos/vscode.png" },
      { name: "Postman", logo: "/logos/postman.png" },
      { name: "Visual Studio", logo: "/logos/visualstudio.png" },
      { name: "Android Studio", logo: "/logos/androidstudio.png" },
      { name: "Jira", logo: "/logos/jira.png" },
    ],
  },
];

export default function SkillsSection() {
  const [selected, setSelected] = useState("All Skills");

  const categories = useMemo(
    () => ["All Skills", ...skills.map((skillGroup) => skillGroup.key)],
    []
  );

  const allSkills = useMemo(
    () => skills.flatMap((skillGroup) => skillGroup.items),
    []
  );

  const visibleGroups =
    selected === "All Skills"
      ? [{ name: "All Skills", items: allSkills }]
      : skills.filter((skillGroup) => skillGroup.key === selected);

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full overflow-hidden px-5 py-22 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#8B6FD6]/200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl text-white">
        <div className="relative mb-20 text-center animate-fadeInUp">
          <span className="absolute inset-x-0 top-1/2 -z-8 flex -translate-y-1/2 justify-center gap-102">
            <span className="h-[4px] w-9 bg-[#8B6FD6]/40" />
            <span className="h-[4px] w-9 bg-[#8B6FD6]/40" />
          </span>

          <h4
            className={`text-4xl font-extrabold tracking-wide md:text-3xl lg:text-4xl ${lora.className}`}
          >
            <span className="text-[#8B6FD6]">Skills & </span>{" "}
            <span className="text-white">Technologies</span>
          </h4>
        </div>

        <div className="mb-13 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`rounded-full px-8 py-3 text-sm font-semibold transition-all ${
                selected === category
                  ? "scale-105 bg-[#8B6FD6] shadow-lg"
                  : "bg-[#2A2A35] hover:text-[#8B6FD6]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {visibleGroups.map((group) => (
            <div key={group.name}>
              {selected !== "All Skills" && (
                <h3
                  className={`mb-6 text-3xl font-bold tracking-wide text-[#8B6FD6] underline decoration-[#8B6FD6]/60 underline-offset-8 ${chakraPetch.className}`}
                >
                  {group.name}
                </h3>
              )}

              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-6">
                {group.items.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex h-32 w-full flex-col items-center justify-center rounded-xl border border-white/5 bg-[#2d2c2c]/60 p-4 text-center backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-2 flex h-12 w-16 items-center justify-center rounded-lg p-1.5 sm:h-14 sm:w-20">
                      <div className="relative h-full w-full">
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          fill
                          sizes="(max-width: 640px) 52px, 68px"
                          className="object-contain object-center"
                        />
                      </div>
                    </div>

                    <p className="flex min-h-8 items-center text-xs font-semibold leading-tight sm:text-sm">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-20 overflow-hidden">
        <div className="flex gap-10 px-10 animate-marquee">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex h-12 w-12 shrink-0 items-center justify-center p-1 opacity-80 transition hover:opacity-100"
            >
              <div className="relative h-full w-full">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  fill
                  sizes="48px"
                  className="object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
