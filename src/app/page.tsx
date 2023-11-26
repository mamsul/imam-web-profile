import ResumeRow from "@/components/about/resume-row";
import HeaderSection from "@/components/section/header-section";
import Badge from "@/components/utility/badge";
import { CalendarCheck } from "lucide-react";
import {
  pengalaman,
  bahasa,
  uiTech,
  techStack,
  tools,
} from "@/assets/constants/resume.json";
import ResumeDate from "@/components/about/resume-date";

export default function Home() {
  return (
    <div className="mt-5 pb-5">
      <div className="flex flex-col space-y-10 lg:px-3 mt-6 lg:mt-12">
        <ResumeRow title="Pendidikan" date="2018 - Oct 2021">
          <div className="pl-5 lg:pl-0">
            <p className="text-xs md:text-sm lg:text-base text-dark-text-primary font-medium">
              Politeknik Negeri Indramayu -{" "}
              <span className="font-normal">
                Teknik Informatika{" "}
                <span className="text-dark-text-secondary">(D3)</span>
              </span>
            </p>
          </div>
        </ResumeRow>

        <ResumeRow title="Pengalaman" date="" isCustom>
          <div className="w-full flex flex-col space-y-8 pl-5 lg:pl-0">
            {pengalaman.map((item) => {
              return (
                <div key={item.id}>
                  <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center">
                    <p className="text-xs md:text-sm lg:text-base text-dark-text-primary font-bold">
                      {item.judul.kantor} -
                      <span className="font-normal ms-2">
                        {item.judul.posisi}
                        <span className="text-dark-text-secondary ms-2">
                          {item.judul.tipe}
                        </span>
                      </span>
                    </p>
                    <ResumeDate date={item.date} />
                  </div>
                  <div className="flex flex-wrap gap-2 my-3">
                    {item.techstack.map((tech, idx) => {
                      return (
                        <div
                          key={`tech-${item.id}-${idx}`}
                          className="bg-dark-label-bg px-1 rounded-md pb-0.5"
                        >
                          <span className="text-dark-label text-xs lg:text-sm">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <ul className="list-disc text-dark-text-primary pl-4">
                    {item.description.map((desc, idx) => {
                      return (
                        <li
                          key={`desc-${item.id}-${idx}`}
                          className="font-light text-xs lg:text-sm mt-2"
                        >
                          {desc}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </ResumeRow>

        <ResumeRow title="Skill & Tools" date="" isCustom>
          <div className="w-full flex flex-col pl-5 lg:pl-0">
            <div>
              <h4 className="text-sm lg:text-base text-dark-text-primary font-bold">
                Bahasa
              </h4>
              <div className="flex flex-row mt-3">
                <div className="w-4/12 lg:w-2/12">
                  <span className="text-light-text-secondary font-light text-xs">
                    FE Related
                  </span>
                </div>
                <div className="w-8/12 lg:w-10/12 flex flex-wrap gap-2 lg:gap-4">
                  {bahasa.map((lang, idx) => {
                    return (
                      <div
                        key={`language-${idx}`}
                        className="bg-dark-label-bg px-2 rounded-md pb-0.5"
                      >
                        <span className="text-xs lg:text-sm text-dark-label">
                          {lang}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-sm lg:text-base text-dark-text-primary font-bold">
                Teknogi
              </h4>
              <div className="flex flex-row mt-3">
                <div className="w-4/12 lg:w-2/12">
                  <span className="text-light-text-secondary font-light text-xs">
                    UI Related
                  </span>
                </div>
                <div className="w-8/12 lg:w-10/12 flex flex-wrap gap-2 lg:gap-4">
                  {uiTech.map((ui, idx) => {
                    return (
                      <div
                        key={`ui-${idx}`}
                        className="bg-dark-label-bg px-2 rounded-md pb-0.5"
                      >
                        <span className="text-dark-label text-xs lg:text-sm">
                          {ui}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row mt-3">
                <div className="w-4/12 lg:w-2/12">
                  <span className="text-light-text-secondary font-light text-xs">
                    FE Related
                  </span>
                </div>
                <div className="w-8/12 lg:w-10/12 flex flex-wrap gap-2 lg:gap-4">
                  {techStack.map((techS, idx) => {
                    return (
                      <div
                        key={`techS-${idx}`}
                        className="bg-dark-label-bg px-2 rounded-md pb-0.5"
                      >
                        <span className="text-dark-label text-xs lg:text-sm">
                          {techS}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-sm lg:text-base text-dark-text-primary font-bold">
                Tools & Software
              </h4>
              <div className="flex flex-row mt-3">
                <div className="w-4/12 lg:w-2/12">
                  <span className="text-light-text-secondary font-light text-xs">
                    Coder Related
                  </span>
                </div>
                <div className="w-8/12 lg:w-10/12 flex flex-wrap gap-4">
                  {tools.map((tool, idx) => {
                    return (
                      <div
                        key={`tool-${idx}`}
                        className="bg-dark-label-bg px-2 rounded-md pb-0.5"
                      >
                        <span className="text-dark-label text-xs lg:text-sm">
                          {tool}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </ResumeRow>
      </div>
    </div>
  );
}
