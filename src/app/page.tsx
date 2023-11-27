import resumeJson from '@/assets/constants/resume.json';
import ResumeDate from '@/components/about/resume-date';
import ResumeRow from '@/components/about/resume-row';

export default function Home() {
  return (
    <div className="mt-5 pb-5">
      <div className="mt-6 flex flex-col space-y-10 lg:mt-12 lg:px-3">
        <ResumeRow title="Pendidikan" date="2018 - Oct 2021">
          <div className="pl-5 lg:pl-0">
            <p className="text-xs font-medium text-dark-text-primary md:text-sm lg:text-base">
              Politeknik Negeri Indramayu -{' '}
              <span className="font-normal">
                Teknik Informatika{' '}
                <span className="text-dark-text-secondary">(D3)</span>
              </span>
            </p>
          </div>
        </ResumeRow>

        <ResumeRow title="Pengalaman" date="" isCustom>
          <div className="flex w-full flex-col space-y-8 pl-5 lg:pl-0">
            {resumeJson?.pengalaman?.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex w-full flex-col items-start justify-start lg:flex-row lg:items-center lg:justify-between">
                    <p className="text-xs font-bold text-dark-text-primary md:text-sm lg:text-base">
                      {item.judul.kantor} -
                      <span className="ms-2 font-normal">
                        {item.judul.posisi}
                        <span className="ms-2 text-dark-text-secondary">
                          {item.judul.tipe}
                        </span>
                      </span>
                    </p>
                    <ResumeDate date={item.date} />
                  </div>
                  <div className="my-3 flex flex-wrap gap-2">
                    {item.techstack.map((tech, idx) => {
                      return (
                        <div
                          key={`tech-${item.id}-${idx}`}
                          className="rounded-md bg-dark-label-bg px-1 pb-0.5">
                          <span className="text-xs text-dark-label lg:text-sm">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <ul className="list-disc pl-4 text-dark-text-primary">
                    {item.description.map((desc, idx) => {
                      return (
                        <li
                          key={`desc-${item.id}-${idx}`}
                          className="mt-2 text-xs font-light lg:text-sm">
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
          <div className="flex w-full flex-col pl-5 lg:pl-0">
            <div>
              <h4 className="text-sm font-bold text-dark-text-primary lg:text-base">
                Bahasa
              </h4>
              <div className="mt-3 flex flex-row">
                <div className="w-4/12 lg:w-2/12">
                  <span className="text-xs font-light text-light-text-secondary">
                    FE Related
                  </span>
                </div>
                <div className="flex w-8/12 flex-wrap gap-2 lg:w-10/12 lg:gap-4">
                  {resumeJson.bahasa.map((lang, idx) => {
                    return (
                      <div
                        key={`language-${idx}`}
                        className="rounded-md bg-dark-label-bg px-2 pb-0.5">
                        <span className="text-xs text-dark-label lg:text-sm">
                          {lang}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-sm font-bold text-dark-text-primary lg:text-base">
                Teknogi
              </h4>
              <div className="mt-3 flex flex-row">
                <div className="w-4/12 lg:w-2/12">
                  <span className="text-xs font-light text-light-text-secondary">
                    UI Related
                  </span>
                </div>
                <div className="flex w-8/12 flex-wrap gap-2 lg:w-10/12 lg:gap-4">
                  {resumeJson.uiTech.map((ui, idx) => {
                    return (
                      <div
                        key={`ui-${idx}`}
                        className="rounded-md bg-dark-label-bg px-2 pb-0.5">
                        <span className="text-xs text-dark-label lg:text-sm">
                          {ui}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-3 flex flex-row">
                <div className="w-4/12 lg:w-2/12">
                  <span className="text-xs font-light text-light-text-secondary">
                    FE Related
                  </span>
                </div>
                <div className="flex w-8/12 flex-wrap gap-2 lg:w-10/12 lg:gap-4">
                  {resumeJson.techStack.map((techS, idx) => {
                    return (
                      <div
                        key={`techS-${idx}`}
                        className="rounded-md bg-dark-label-bg px-2 pb-0.5">
                        <span className="text-xs text-dark-label lg:text-sm">
                          {techS}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-sm font-bold text-dark-text-primary lg:text-base">
                Tools & Software
              </h4>
              <div className="mt-3 flex flex-row">
                <div className="w-4/12 lg:w-2/12">
                  <span className="text-xs font-light text-light-text-secondary">
                    Coder Related
                  </span>
                </div>
                <div className="flex w-8/12 flex-wrap gap-4 lg:w-10/12">
                  {resumeJson.tools.map((tool, idx) => {
                    return (
                      <div
                        key={`tool-${idx}`}
                        className="rounded-md bg-dark-label-bg px-2 pb-0.5">
                        <span className="text-xs text-dark-label lg:text-sm">
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
