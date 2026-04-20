export type NavLink = {
  label: string
  href: string
}

export type StatItem = {
  label: string
  value: string
  description: string
}

export type SkillItem = {
  name: string
  type: string
  icon: string
}

export type ExperienceItem = {
  period: string
  role: string
  organization: string
  type: string
  description: string
  highlights: string[]
}

export type ActivityItem = {
  title: string
  date: string
  type: string
  role: string
  location: string
  shortDescription: string
  description: string
  image: string
  highlights: string[]
}

export type ProjectItem = {
  title: string
  category: string
  description: string
  stack: string[]
  status: string
  image?: string
  badge?: string
}

export type AchievementItem = {
  title: string
  year: string
  description: string
}

export const profile = {
  name: 'Bintang Wahyu Ariyono',
  initials: 'Portofolio Bintang',
  summary:
    'I am an Information Systems graduate with interests in data analysis, web development, and information systems management. During my studies, I gained experience through internships, organizations, and academic projects that helped me develop my technical, communication, teamwork, and problem-solving skills. I am accustomed to working with discipline, thoroughness, and responsibility, and am highly motivated to continue learning, developing, and making my best contributions in a professional environment.',
  email: 'abintangwahyu@gmail.com',
  location: 'Surabaya, Indonesia',
  cvLabel: 'Download CV',
  cvLink: '/cv/Curriculum Vitae_Bintang Wahyu Ariyono.pdf',
  instagram: 'https://instagram.com/bintanggw',
  github: 'https://github.com/stargbl',
  linkedin: 'https://linkedin.com/in/bintang-wahyu',
}

export const navLinks: NavLink[] = [
  { label: 'Profile', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Activities', href: '#activities' },
  { label: 'Project', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skill', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const skills: SkillItem[] = [
  { name: 'JavaScript', type: 'Programming Language', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Python', type: 'Programming Language', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'PHP', type: 'Programming Language', icon: 'https://cdn.simpleicons.org/php/777BB4' },
  { name: 'Java', type: 'Programming Language', icon: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
  { name: 'HTML', type: 'Web Technology', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', type: 'Web Technology', icon: 'https://cdn.simpleicons.org/css/1572B6' },
  { name: 'Vue.js', type: 'Framework / Library', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
  { name: 'React.js', type: 'Framework / Library', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Tailwind CSS', type: 'Framework / Library', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Bootstrap', type: 'Framework / Library', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
  { name: 'MySQL', type: 'Database', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'phpMyAdmin', type: 'Database Tool', icon: 'https://cdn.simpleicons.org/phpmyadmin/6C78AF' },
  { name: 'SQLyog', type: 'Database Tool', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'MySQL Workbench', type: 'Database Tool', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Google Colab', type: 'Data & Analytics', icon: 'https://cdn.simpleicons.org/googlecolab/F9AB00' },
  { name: 'Figma', type: 'Design Tool', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Visual Studio Code', type: 'IDE / Editor', icon: '/icons/visual-studio-code.svg' },
  { name: 'NetBeans', type: 'IDE / Editor', icon: 'https://cdn.simpleicons.org/apachenetbeanside/1B6AC6' },
  { name: 'Git', type: 'Version Control', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', type: 'Version Control', icon: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Microsoft 365', type: 'Office Tool', icon: '/icons/microsoft.svg' },
  ]

export const experiences: ExperienceItem[] = [
  {
    period: 'Jan 2025 - Feb 2025',
    role: 'ICT Infrastructure & Security Division',
    organization: 'Dinas Komunikasi dan Informatika Kabupaten Sidoarjo',
    type: 'Internship',
    description:
      'Learned the basics of penetration testing, including how to protect data and prevent threats, as well as website debugging to identify and fix errors. Also learned router configuration and management to support a stable and secure network.',
    highlights: ['Basic penetration testing', 'Website debugging','Router configuration'],
  },
  {
    period: 'Feb 2025 - Mar 2025',
    role: 'Teaching Assistant ',
    organization: 'BLSDM Komdigi Surabaya',
    type: 'Internship',
    description:
      'Assisted with training on digital entrepreneurship and e-government for students, community members, and small business owners, performed laboratory PC maintenance and software installation, and helped prepare training materials for elementary school students.',
    highlights: ['Training support', 'PC maintenance', 'Training material preparation'],
  },
  {
    period: 'Mar 2025 - Jul 2025',
    role: 'Informatics Application Division',
    organization: 'Dinas Komunikasi dan Informatika Provinsi Jawa Timur',
    type: 'Internship',
    description:
      'Involved in web-based application development, learned and implemented the basics of JavaScript, Vue.js, and Tailwind CSS in development tasks, and conducted testing of web-based applications that support Smart City and e-Government initiatives in East Java Province.',
    highlights: ['Web application development', 'Web application testing'],
  },
  {
    period: 'Oct 2025',
    role: 'Scholarship Data Collection ',
    organization: 'BNI KCP Bangkalan',
    type: 'Internship',
    description:
      'Assisted with the initial data collection and verification process for scholarship recipient documents, including checking data completeness and document suitability, and entered data into recap spreadsheets using Excel and Google Sheets while ensuring consistency and accuracy.',
    highlights: ['Data collection & verification', 'Excel / Google Sheets input'],
  },
]


export const activities: ActivityItem[] = [
{
  title: 'Speaker - MBKM Research Socialization',
  date: 'Tanjung Bumi Village, 2025',
  type: 'Socialization',
  role: 'Speaker - MBKM Research Socialization',
  location: 'Lingkup Pemerintahan Provinsi Jawa Timur',
  shortDescription:
    'Participated in the socialization of the BIMA Research MBKM research in Tanjung Bumi Village, Bangkalan.',
  description:
    'Participated in a research outreach activity by the BIMA Research MBKM in Tanjung Bumi Village, Bangkalan, on tourist visit forecasting. This activity aimed to provide an understanding of the importance of tourist number prediction as a basis for more effective planning, facility management, and tourism potential development.',
  image: '/activities/riset2.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'Scholarship Data Collection BNI - UTM KIP scholarship',
  date: 'BNI KCP Bangkalan, 2025',
  type: 'Internship',
  role: 'Scholarship Data Collection BNI - UTM KIP scholarship',
  location: 'Lingkup Pemerintahan Provinsi Jawa Timur',
  shortDescription:
    'Assisted with scholarship document data collection, verification, and spreadsheet data entry while ensuring accuracy and consistency.',
  description:
    'Assisted with the initial data collection and verification process for scholarship recipient documents, including checking data completeness and document suitability, and entered data into recap spreadsheets using Excel and Google Sheets while ensuring consistency and accuracy.',
  image: '/activities/BNI2.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'Data Observation MBKM Research BIMA',
  date: 'DISPORAPAR KAB.Sumenep, 2025',
  type: 'Research',
  role: 'Data Observation MBKM Research BIMA',
  location: 'Lingkup Pemerintahan Provinsi Jawa Timur',
  shortDescription:
    'Conducting data observations at the Sumenep Regency Tourism Office to support research on tourist visit forecasting.',
  description:
    'Data collection and observation activities for the BIMA Research MBKM at the Sumenep Regency Tourism Office, which supports research on tourist visit forecasting. This activity was conducted to obtain information related to the number of tourist visits, visit patterns over a certain period, and factors that may influence tourist numbers. The data obtained can be used as a basis for the forecasting process to help produce more accurate tourist visit predictions.',
  image: '/activities/riset.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'Informatics Application Division - DISKOMINFO JATIM',
  date: 'DISKOMINFO Prov. JATIM, 2025',
  type: 'Internship',
  role: 'Informatics Application Division - DISKOMINFO JATIM',
  location: 'Lingkup Pemerintahan Provinsi Jawa Timur',
  shortDescription:
    'Contribute to the development and testing of web-based applications and e-Government in East Java Province.',
  description:
    'Involved in the development of web-based applications by learning and applying the basics of JavaScript, Vue.js, and Tailwind CSS in development activities. Also conducted testing of web-based applications that support Smart City and e-Government initiatives within East Java Province to help ensure functionality and system quality.',
  image: '/activities/pelepasan2.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'Teaching Assistant Division - BLSDM Komdigi Surabaya',
  date: 'BLSDM Komdigi Surabaya ,2025',
  type: 'Internship',
  role: 'Teaching Assistant Division - BLSDM Komdigi Surabaya',
  location: 'Lingkup Pemerintahan Provinsi Jawa Timur',
  shortDescription:
    'Supported digital entrepreneurship and e-government training, PC maintenance, software installation, and training material preparation.',
  description:
    'Assisted with training on digital entrepreneurship and e-government for students, community members, and small business owners. Also supported laboratory PC maintenance and software installation, while helping prepare training materials for elementary school students to support the learning activities.',
  image: '/activities/pelepasan.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'Teaching Assistant - Website Development Training',
  date: 'BLSDM KOMDIGI Surabaya, 2025',
  type: 'Internship',
  role: 'Teaching Assistant - Website Development Training',
  location: 'Lingkup Pemerintahan Provinsi Jawa Timur',
  shortDescription:
    'Participate in the implementation of workshops and assist with technical operational needs during the activity.',
  description:
    'Participated in the implementation of workshops by assisting with technical and operational needs throughout the activities, including helping prepare the venue, supporting the use of equipment and presentation materials, coordinating activity requirements, and ensuring that each session could run in an orderly and effective manner.',
  image: '/activities/magang.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'Teaching Assistant - Digital Enterpreneurship Academy (DEA)',
  date: 'BLSDM KOMDIGI Surabaya, 2025',
  type: 'Internship',
  role: 'Teaching Assistant - Digital Enterpreneurship Academy (DEA)',
  location: 'BLSDM Kodigi Surabaya',
  shortDescription:
    'Participate in the implementation of workshops and assist with technical operational needs during the activity.',
  description:
    'Participated in the implementation of workshops by assisting with technical and operational needs throughout the activities, including helping prepare the venue, supporting the use of equipment and presentation materials, coordinating activity requirements, and ensuring that each session could run in an orderly and effective manner.',
  image: '/activities/DSC02259.JPG',
  highlights: ['Koordinasi kegiatan', 'Dukungan teknis', 'Komunikasi tim'],
},
{
  title: 'Public Relations Division - Aksara Music Festival',
  date: 'Trunodjoyo University, 2024',
  type: 'Volunteer',
  role: 'Public Relations Division - Aksara Music Festival',
  location: 'Ekosistem Digital Jawa Timur',
  shortDescription:
    'Supported external communication and coordination by liaising with media, sponsors, partners, artists, management, and invited guests.',
  description:
    'Established communication and cooperation with external parties such as media, sponsors, and partners, while serving as a liaison between the committee, artists, management, invited guests, and other external stakeholders. This role helped support smooth coordination, clear communication, and effective collaboration throughout the event.',
  image: '/activities/Aksara Music Festival 2024.jpg',
  highlights: ['Testing fitur', 'Pencatatan bug', 'Evaluasi UI'],
},
{
  title: '2nd Place Winner of the National UI/UX CRIUX Competition',
  date: 'CRIUX HIMASI UTM, 2024',
  type: 'Competition',
  role: '2nd Place Winner of the National UI/UX CRIUX Competition',
  location: 'Ekosistem Digital Jawa Timur',
  shortDescription:
    'Participated in the National UI/UX CRIUX Competition and won 2nd place, developing a mobile-based travel planning application.',
  description:
    'Participating in the National UI/UX CRIUX Competition with the theme “Transforming Tourism: Enhancing User Experience Through Digital Innovation.” In this competition, we developed a mobile-based travel planning application designed to help users plan trips more easily and efficiently by providing information on tourist destinations, transportation, and accommodation.',
  image: '/activities/gowisata.jpg',
  highlights: ['Testing fitur', 'Pencatatan bug', 'Evaluasi UI'],
},
{
  title: 'BOOTCAMP FUNDAMENTALS OF UI/UX DESIGN',
  date: 'BLSDM KOMDIGI Surabaya, 2024',
  type: 'Certification',
  role: 'BOOTCAMP FUNDAMENTALS OF UI/UX DESIGN',
  location: 'Lingkup Pemerintahan Provinsi Jawa Timur',
  shortDescription:
    'Attending the Bootcamp Fundamentals of UI/UX Design at BLSDMP KOMDIGI Surabaya for 2 days on.',
  description:
    'Participated in the Bootcamp Fundamentals of UI/UX Design organized by BLSDMP KOMDIGI Surabaya in 2024 for 2 days. This program provided fundamental knowledge of UI/UX design, including interface design, user experience, and design thinking in developing effective digital solutions. Through this bootcamp, I strengthened my design skills and was awarded Best Design in recognition of the work I produced.',
  image: '/activities/komdigi.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'Information Technology Governance, PDAM Surya Sembada',
  date: 'PDAM Surya Sembada Surabaya, 2024',
  type: 'Experience',
  role: 'Information Technology Governance',
  location: 'Lingkup Pemerintahan Provinsi Jawa Timur',
  shortDescription:
    'Conducted IT governance analysis using COBIT 2019, identified governance gaps, dan interviewed relevant stakeholders.',
  description:
    'Conducting IT governance analysis at PDAM Surya Sembada, Surabaya City using COBIT 2019, identifying gaps between current and expected conditions, conducting interviews with relevant parties to gather relevant information, and compiling recommendations for improvement to support IT governance improvement.',
  image: '/activities/TKTI.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'International Guest Lecture, Information System',
  date: 'Trunodjoyo University, 2024',
  type: 'Experience',
  role: 'International Guest Lecture, Information System',
  location: 'Lingkup Pemerintahan Provinsi Jawa Timur',
  shortDescription:
    'Participated in an International Guest Lecture on “The Role of AI in Delivery Services,” gaining insights into the application of AI.',
  description:
    'Participated in an International Guest Lecture on "The Role of AI in Delivery Services," focusing on the role of Artificial Intelligence technology in supporting efficiency, accuracy, and innovation in the delivery service sector. This event provided new insights into how AI is being utilized to improve operational processes, decision-making, and service quality in the digital era.',
  image: '/activities/studi.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
]

export const projects: ProjectItem[] = [
  {
    title: 'UI/UX Competition Project',
    category: 'CRIUX UI/UX competition (2024)',
    description:
      'Interface design concept for the Create UI/UX 2024 competition with a focus on a user experience that is clean, easy to understand, and relevant to user needs.',
    stack: ['Figma', 'User Flow', 'Wireframe'],
    status: 'UI/UX',
    image: '/criux.jpg',
    badge: 'Design',
  },
  {
    title: 'Tourist Visit forecasting',
    category: 'Academic Project MBKM BIMA (2025)',
    description:
      'An academic project focused on creating tourist visitation forecasting models to aid trend analysis and data-driven decision making.',
    stack: ['Data Analysis', 'Forecasting', 'Excel / Tools Academic'],
    status: 'Forecasting',
    image: '/riset.png',
    badge: 'Research',
  },
  {
    title: 'Application Development Persebaya Selamanya',
    category: 'Research Methods (2024)',
    description:
      'This research focuses on redesigning the Persebaya Selamanya application to improve user experience through Design Thinking method and SUS evaluation.',
    stack: ['Figma', 'User Flow', 'Wireframe'],
    status: 'UI/UX',
    image: '/persebaya.png',
    badge: 'Design',
  },
  {
    title: 'Employee Appraisal System',
    category: 'Final Academic Project (2024)',
    description:
      'This website is a decision support system for assessing and determining the best employees at PT. Sumber Mas Plywood using the Simple Additive Weighting (SAW) method.',
    stack: ['PHP', 'phpMyAdmin'],
    status: 'SPK',
    image: '/spk.png',
    badge: 'New',
  },
  {
    title: 'Village Profile Website',
    category: 'Final Internship Project (2025)',
    description:
      'This website was created as a media for information on the profile of Jati Village, Sidoarjo, which displays a general overview of the village, village conditions, government conditions, as well as the problems and potential it has.',
    stack: ['Bootstrap', 'HTML'],
    status: 'Front-end Design',
    image: '/webdes.png',
    badge: 'New',
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Personal Projects (2026)',
    description:
      'A personal portfolio website with a modern look to showcase your profile, experience, skills, projects, and contact information professionally.',
    stack: ['Vue.js', 'Tailwind CSS', 'Vite'],
    status: 'Portofolio',
    image: '/porto.png',
    badge: 'New',
  },
]

export const achievements: AchievementItem[] = [
  {
    title: ' Regional Scholarship Recipient in the Academic Category in 2025',
    year: 'Jun 2025',
    description: 'Received a scholarship award from the local government for academic achievements.',
  },
  {
    title: '2nd Place in Create UI/UX at the National Level in 2024',
    year: 'May 2024',
    description:
      'CRIUX 2024 Competition Transforming Tourism: Enhancing User Experience Through Digital Innovation.',
  },
  {
    title: 'Best design in Bootcamp Fundamentals Of UI/UX 2024',
    year: 'August 2024',
    description: 'Received the Best Design award at the 2024 UI/UX Fundamentals Bootcamp at BLSDM Komdigi Surabaya.',
  },
]
