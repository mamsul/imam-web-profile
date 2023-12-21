export const links = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Experience', path: '#experience' },
  { name: 'Skills', path: '#skills' },
  { name: 'Playground', path: '#playground' },
  { name: 'Contact', path: '#contact' },
] as const;

export const skills = [
  'HTML',
  'CSS',
  'SCSS',
  'Javascript',
  'Typescript',
  'Tailwind CSS',
  'Bootstrap',
  'Shadcn UI',
  'React.js',
  'Next.js',
  'Vue.js',
  'Nuxt.js',
  'Redux',
  'Redux Toolkit',
  'Zustand',
  'Jotai',
  'Vuex',
] as const;

export const experiences: Experience[] = [
  {
    title: 'Agtran Sdn. Bhd.',
    subtitle: 'Frontend Developer - Part Time',
    duration: 'Sept 2023 - Nov 2023',
    description:
      'Working part-time to work on the admin dashboard application project to manage car reservations from users and manage master data.',
  },
  {
    title: 'Fishlog',
    subtitle: 'Frontend Engineer - Full Time',
    duration: 'Des 2022 - Nov 2023',
    description:
      'Work for a company engaged in fisheries cold storage. Working on ERP applications for warehouse management systems, and several other projects that focus on web applications.',
  },
  {
    title: 'Agtran Sdn. Bhd.',
    subtitle: 'Frontend Developer - Full Time',
    duration: 'Des 2021 - Nov 2022',
    description:
      'Working on several web and mobile application projects. the tech stack that I have used are Vue, Nuxt.js, Flutter, Tailwind CSS.',
  },
  {
    title: 'Bigio',
    subtitle: 'Programmer - Internship',
    duration: 'Nov 2020 - Mar 2021',
    description:
      'Assisted with tasks and features of several client projects, working together with seniors and colleagues from other universities.',
  },
  {
    title: 'Politeknik Negeri Indramayu',
    subtitle: 'Diploma III - Informatics',
    duration: '2018 - 2021',
    description:
      'Studied for 3 years in the informatics engineering department, with a GPA of 3.81 graduating with a GPA of 3.81',
  },
];
