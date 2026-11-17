// All portfolio content lives here so components stay presentational.

export const profile = {
  name: 'Ahmad Fajruddin Syauqi',
  shortName: 'Syauqi',
  role: 'Software Developer',
  location: 'Malang, Indonesia',
  email: 'fajrudinsauqi@gmail.com',
  phone: '+6289699188684',
  github: 'https://github.com/syauqiaja',
  linkedin: 'https://www.linkedin.com/in/fajruddinsyauqi',
  resume: '/resume/Resume_Syauqi_Fullstack_Developer-3.pdf',
  resumeName: 'Ahmad_Fajruddin_Syauqi_Resume.pdf',
  photo: '/images/me.jpeg',
};

export const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const heroWords = ['mobile apps', 'web platforms', 'Flutter apps', 'Android apps', 'happy users'];

// Stat tiles under the hero. `value` is counted up when the tile scrolls into view.
export const stats = [
  { value: 2, suffix: '+', label: 'Years shipping', helper: 'Mobile & web, in production', color: 'bg-sunshine', icon: 'rocket' },
  { value: 90, suffix: '%', label: 'Crash-free sessions', helper: 'Up from 58% with Flutter BLoC', color: 'bg-pink', icon: 'shield' },
  { value: 500, suffix: '+', label: 'Installs, month one', helper: 'Herbify on Google Play', color: 'bg-mint-pop', icon: 'smartphone' },
  { value: 720, suffix: '+', label: 'Teams outranked', helper: 'Top 3 capstone, Bangkit 2023', color: 'bg-navy', icon: 'award', dark: true },
];

export const techStrip = [
  'Flutter', 'Dart', 'Kotlin', 'Java', 'Laravel', 'Livewire', 'Volt', 'PHP', 'BLoC', 'Provider',
  'Coroutines', 'Dagger-Hilt', 'MySQL', 'PostgreSQL', 'Tailwind CSS', 'Firebase', 'Git', 'CI/CD',
];

export const skillGroups = [
  {
    id: 'mobile',
    label: 'Mobile',
    title: 'Cross-platform & native mobile',
    blurb: 'Flutter apps with BLoC, Provider and GetIt, plus native Android in Kotlin and Java with MVVM, Coroutines and Dagger-Hilt.',
    level: 95,
    tools: ['Flutter', 'Dart', 'BLoC', 'Provider', 'GetIt', 'Kotlin', 'Java', 'Coroutines', 'Dagger-Hilt', 'RxAndroid'],
    color: 'bg-mint-pop',
    icon: 'smartphone',
  },
  {
    id: 'web',
    label: 'Web',
    title: 'Laravel back-ends & dashboards',
    blurb: 'RESTful APIs and admin systems with Laravel, Livewire and Volt, backed by MySQL or PostgreSQL.',
    level: 88,
    tools: ['Laravel', 'Livewire', 'Volt', 'REST APIs', 'MySQL', 'PostgreSQL', 'Tailwind CSS', 'Bootstrap'],
    color: 'bg-sunshine',
    icon: 'globe',
  },
  {
    id: 'state',
    label: 'Architecture',
    title: 'State & clean architecture',
    blurb: 'Reactive state with BLoC, Provider and Flow; modular Clean Architecture that keeps big apps maintainable.',
    level: 92,
    tools: ['Clean Architecture', 'MVVM', 'Modularization', 'Coroutines Flow', 'Reactive programming'],
    color: 'bg-pink',
    icon: 'layers',
  },
  {
    id: 'ops',
    label: 'DevOps & QA',
    title: 'Automation & quality',
    blurb: 'CI/CD pipelines that cut delivery time in half, Git workflows, and tests with JUnit and PHPUnit.',
    level: 84,
    tools: ['CI/CD', 'Git workflows', 'JUnit', 'PHPUnit', 'UI testing', 'Code review'],
    color: 'bg-navy',
    icon: 'zap',
  },
];

// `art` drives the illustrated cover of each project card.
export const projects = [
  {
    id: 'herbify',
    title: 'Herbify Telemedicine',
    category: 'Mobile',
    description:
      'Herbal telemedicine platform for Indonesia with ML image classification. Moved from MVVM to modular Clean Architecture. Top 3 Bangkit capstone, funded IDR 140M by Google & Dikti.',
    tags: ['Kotlin', 'Clean Arch', 'ML', 'MVVM'],
    link: 'https://play.google.com/store/apps/details?id=com.herbify.herbifyapp',
    linkLabel: 'Google Play',
    art: { bg: 'bg-mint-wash', blob: 'bg-mint-pop', accent: 'bg-teal', emoji: '🌿' },
  },
  {
    id: 'vrlab',
    title: 'VRLaboratory LMS',
    category: 'Web',
    description:
      'VR-integrated learning management system built with Laravel Volt and Tailwind CSS, enabling immersive lab simulations on a RESTful API back-end.',
    tags: ['Laravel', 'Volt', 'VR', 'API'],
    link: 'http://vrlaboratory.bio',
    linkLabel: 'vrlaboratory.bio',
    art: { bg: 'bg-wash', blob: 'bg-sunshine', accent: 'bg-navy', emoji: '🥽' },
  },
  {
    id: 'virulearn',
    title: 'Virulearn',
    category: 'Web',
    description:
      'Interactive virus-education LMS built with Inovasiin.Id. Responsive UI with Bootstrap and Laravel Livewire for dynamic content.',
    tags: ['Livewire', 'Bootstrap'],
    link: 'https://virulearn.com',
    linkLabel: 'virulearn.com',
    art: { bg: 'bg-[#ffe4e1]', blob: 'bg-pink', accent: 'bg-charcoal', emoji: '🦠' },
  },
  {
    id: 'plantelligence',
    title: 'Plantelligence',
    category: 'Web',
    description:
      'Interactive digital flipbook with Laravel Livewire for real-time rendering and TurnJS page-turn animations.',
    tags: ['Laravel', 'Livewire', 'TurnJS'],
    link: 'https://plantelligence.bio',
    linkLabel: 'plantelligence.bio',
    art: { bg: 'bg-[#e6f0ff]', blob: 'bg-mint-pop', accent: 'bg-teal', emoji: '📖' },
  },
];

export const experience = [
  {
    company: 'Galaxy Property',
    role: 'Software Developer',
    period: 'Oct 2024 — Present',
    current: true,
    color: 'bg-mint-pop',
    points: [
      'Improved crash-free sessions from 58% to 90% using Flutter BLoC.',
      'Built RESTful APIs and admin systems with Laravel Livewire.',
      'Cut development time by 50% through CI/CD automation.',
    ],
  },
  {
    company: 'Aliflammim',
    role: 'Software Developer · Remote',
    period: 'Sept 2024 — June 2025',
    color: 'bg-sunshine',
    points: [
      'Led a team of 3 building a Kuwait Quran app with Flutter.',
      'Implemented Provider and BLoC state management patterns.',
      'Coordinated sprints and code reviews for on-time delivery.',
    ],
  },
  {
    company: 'Campaign.com',
    role: 'Android Developer',
    period: 'Jan 2024 — Jan 2025',
    color: 'bg-pink',
    points: [
      'Halved page load time using Coroutines and Flow.',
      'Implemented JUnit tests and cloud messaging features.',
      'Applied best practices with Kotlin, Java and Dagger-Hilt.',
    ],
  },
  {
    company: 'Herbify Indonesia',
    role: 'Founder & Android Developer',
    period: 'July 2023 — June 2024',
    color: 'bg-navy',
    dark: true,
    points: [
      'Published an app with 500+ installs in its first month.',
      'Integrated RESTful APIs and JSON data handling.',
    ],
  },
];

export const education = [
  {
    institution: 'State University of Malang',
    degree: 'Bachelor of Computer Science',
    period: '2020 — 2024',
    highlight: 'GPA 3.88 / 4.00',
    tags: ['Data Structures & Algorithms', 'Databases', 'Operating Systems', 'Network Security'],
    color: 'bg-mint-pop',
    icon: 'graduation',
  },
  {
    institution: 'Bangkit Academy',
    degree: 'Mobile Developer Cohort',
    period: 'Feb — July 2023',
    highlight: 'Graduated with Distinction · Best Presenter in Judging Round',
    link: 'https://drive.google.com/file/d/1FiU1ONEX-gH2JZHKMGJ98xOr-tF1RwPK/view?usp=drive_link',
    color: 'bg-sunshine',
    icon: 'award',
  },
  {
    institution: 'Djarum Beasiswa Plus',
    degree: 'Djarum Foundation Scholarship',
    period: 'Sept 2022 — Aug 2023',
    tags: ['Leadership', 'Communication', 'Teamwork', 'Problem solving'],
    color: 'bg-pink',
    icon: 'sparkles',
  },
];

export const achievement = {
  title: 'Top 3 Best Capstone Project',
  event: 'Bangkit Academy 2023',
  points: ['Outranked 720+ competing teams', 'Secured IDR 140M funding from Google & Dikti', 'Led a team of 6'],
  link: 'https://drive.google.com/file/d/1rFWcWzdpRQpg781YKZZPdWSyP5ljMyxB/view?usp=drive_link',
};
