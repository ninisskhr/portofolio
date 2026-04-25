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
  pdfLabel?: string
  pdfLink?: string
  externalLabel?: string
  externalLink?: string
  documents?: {
    label: string
    link: string
  }[]
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
  name: 'Khoirotun Nisak',
  initials: 'Portofolio Ninis',
  summary:
    'Information Systems fresh graduate with experience in system implementation, functional documentation, testing, and data-driven projects. Accustomed to understanding user needs, collaborating with teams, and supporting the development of relevant and user-friendly digital solutions. Interested in roles that combine technology, communication, and problem-solving, while continuously learning and growing in dynamic work environments.',
  email: 'khoirotun.nisak888@gmail.com',
  location: 'Surabaya, Indonesia',
  cvLabel: 'Download CV',
  cvLink: '/cv/CV.pdf',
  instagram: 'https://instagram.com/ninisskhr',
  github: 'https://github.com/ninisskhr',
  linkedin: 'https://www.linkedin.com/in/ninisskhr',
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
  { name: 'System Implementation', type: 'Implementation', icon: 'https://cdn.simpleicons.org/windowsterminal/4D4D4D' },
  { name: 'User Acceptance Testing', type: 'Testing', icon: 'https://cdn.simpleicons.org/checkmarx/54B848' },
  { name: 'Bug Validation', type: 'Testing', icon: 'https://cdn.simpleicons.org/bugatti/BE0030' },
  { name: 'User Guide Documentation', type: 'Documentation', icon: 'https://cdn.simpleicons.org/googledocs/4285F4' },
  { name: 'Flow Documentation', type: 'Documentation', icon: 'https://cdn.simpleicons.org/diagramsdotnet/F08705' },
  { name: 'Minutes of Meeting', type: 'Documentation', icon: 'https://cdn.simpleicons.org/googlemeet/00897B' },

  { name: 'Python', type: 'Data & Programming', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Pandas', type: 'Data Analysis', icon: 'https://cdn.simpleicons.org/pandas/150458' },
  { name: 'Power BI', type: 'Data Visualization', icon: 'https://cdn.simpleicons.org/powerbi/F2C811' },
  { name: 'MySQL', type: 'Database', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Google Colab', type: 'Data & Analytics', icon: 'https://cdn.simpleicons.org/googlecolab/F9AB00' },
  { name: 'Microsoft Excel', type: 'Data Processing', icon: 'https://cdn.simpleicons.org/microsoftexcel/217346' },

  { name: 'HTML', type: 'Web Technology', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', type: 'Web Technology', icon: 'https://cdn.simpleicons.org/css/1572B6' },
  { name: 'JavaScript', type: 'Programming Language', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'PHP', type: 'Programming Language', icon: 'https://cdn.simpleicons.org/php/777BB4' },
  { name: 'Java', type: 'Programming Language', icon: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
  { name: 'Vue.js', type: 'Framework / Library', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
  { name: 'React.js', type: 'Framework / Library', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Tailwind CSS', type: 'Framework / Library', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Bootstrap', type: 'Framework / Library', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },

  { name: 'Figma', type: 'UI/UX Design', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Wireframing', type: 'UI/UX Design', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Prototyping', type: 'UI/UX Design', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'User Flow', type: 'UI/UX Design', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },

  { name: 'COBIT 2019', type: 'IT Governance', icon: 'https://cdn.simpleicons.org/educative/4951F5' },
  { name: 'Gap Analysis', type: 'IT Governance', icon: 'https://cdn.simpleicons.org/googleanalytics/E37400' },
  { name: 'Interview & Questionnaire', type: 'Research Method', icon: 'https://cdn.simpleicons.org/googleforms/7248B9' },

  { name: 'Visual Studio Code', type: 'IDE / Editor', icon: '/icons/visual-studio-code.svg' },
  { name: 'NetBeans', type: 'IDE / Editor', icon: 'https://cdn.simpleicons.org/apachenetbeanside/1B6AC6' },
  { name: 'Git', type: 'Version Control', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', type: 'Version Control', icon: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'phpMyAdmin', type: 'Database Tool', icon: 'https://cdn.simpleicons.org/phpmyadmin/6C78AF' },
  { name: 'MySQL Workbench', type: 'Database Tool', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Microsoft 365', type: 'Office Tool', icon: '/icons/microsoft.svg' },
]
export const experiences: ExperienceItem[] = [
  {
    period: '01 Jan 2025 - 31 Ags 2025',
    role: 'System Integration',
    organization: 'PT Sinergi Informatika Semen Indonesia',
    type: 'Internship',
    description:
      'As a System Integration Intern, I handled the project from requirement gathering to go-live, including functional documentation, user guide preparation, UAT support, issue tracking, and coordination with stakeholders and technical teams to ensure a smooth and successful system implementation.',
    highlights: ['End-to-End Project Handling', 'User & Technical Team Coordination', 'Documentation, UAT & Go-Live Support'],
  },
  {
    period: 'Oct 2025',
     role: 'Scholarship Data Collection ',
    organization: 'BNI KCP Bangkalan',
    type: 'Freelance',
    description:
      'Assisted with the initial data collection and verification process for scholarship recipient documents, including checking data completeness and document suitability, and entered data into recap spreadsheets using Excel and Google Sheets while ensuring consistency and accuracy.',
    highlights: ['Data collection & verification', 'Excel / Google Sheets input'],
  },
{
  period: '2024 - 2025',
  role: 'IT Governance Audit Project',
  organization: 'PDAM Surya Sembada Surabaya',
  type: 'Academic Project',
  description:
    'Conducted an IT governance assessment for PDAM Surya Sembada Surabaya using the COBIT 2019 framework. The project involved mapping business goals to IT goals, collecting data through interviews and questionnaires, analyzing current and target maturity levels (as-is and to-be), identifying governance gaps, and delivering recommendations to improve alignment between technology and business objectives.',
  highlights:[
    'COBIT 2019 Assessment',
    'Gap Analysis & Recommendations',
    'Field-Based Data Collection'
  ]
  },
{
  period: '2023 - 2024',
  role: 'Owner',
  organization: 'Nibina Store (@nibinastore)',
  type: 'Entrepreneurship',
  description:
    'Ran a small food business selling chocolate banana snacks (piscok), managing sales, promotions, and customer interactions. Generated average monthly revenue of around IDR 3,000,000 while strengthening communication, customer service, and business management skills.',
  highlights: ['Sales & Promotion', 'Customer Handling', 'Monthly Revenue ~IDR 3M'],
},
]


export const activities: ActivityItem[] = [
{
  title: 'Client Meetings & MoM Documentation',
  date: 'PT SISI X PT BAI, 2025',
  type: 'Implementation',
  role: 'System Integration Intern',
  location: 'Rasuna Said, Jakarta Selatan',
  shortDescription:
    'Joined client meetings and documented implementation decisions, progress updates, and follow-up actions.',
    description:
      'Actively participated in weekly meetings, requirement discussions, and progress reviews with client teams and project stakeholders during the e-procurement system implementation. Responsible for preparing Minutes of Meeting (MoM) to document key decisions, requirement updates, issue discussions, and next action items, helping maintain clear communication between users and the internal project team.',
  image: '/activities/meeting.png',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
  pdfLabel: 'View MoM Document',
  pdfLink: '/documents/mom.pdf',
},
{
  title: 'UAT Testing',
  date: 'PT SISI x PT BAI, 2025',
  type: 'Testing',
  role: 'System Integration Intern',
  location: 'System Integration Unit',
  shortDescription:
    'Prepared and supported User Acceptance Testing scenarios for Vendor Management processes.',
  description:
    'Prepared User Acceptance Test (UAT) materials and supported testing activities for Vendor Management processes, including registration, verification, profile updates, punishment flow, and related approval stages. This activity helped ensure that each business flow was tested properly and aligned with project requirements before implementation.',
  image: '/activities/uat.png',
  highlights: ['UAT Scenario', 'Testing Support', 'Vendor Management Process'],
  pdfLabel: 'View UAT Document',
  pdfLink: '/documents/uat.pdf',
},
{
  title: 'Flow Documentation',
  date: 'PT SISI x PT BAI, 2025',
  type: 'Documentation',
  role: 'System Integration Intern',
  location: 'System Integration Unit',
  shortDescription:
    'Developed and revised flow documentation for multiple Vendor Management processes.',
  description:
    'Developed and revised flow documentation for Vendor Management processes, including registration, verification, profile updates, punishment flow, and related approval stages. The documentation was created to make business processes easier to understand, support team coordination, and ensure implementation flows were clearly structured.',
  image: '/activities/flow.png',
  highlights: ['Flow Documentation', 'Business Process', 'Approval Flow'],
},
{
  title: 'System Testing',
  date: 'PT SISI x PT BAI, 2025',
  type: 'Testing',
  role: 'System Integration Intern',
  location: 'PROCSI E-Procurement Project',
  shortDescription:
    'Tested multiple business flows and features to ensure the system worked according to requirements.',
  description:
    'Performed system testing across multiple Vendor Management features, including registration, approval flow, profile updates, CHSEMS, finance-related changes, dashboards, and integration scenarios. This activity focused on checking whether each feature and business flow worked properly and aligned with project requirements before implementation.',
  image: '/activities/testing.jpeg',
  highlights: ['System Testing', 'Business Flow Testing', 'Feature Validation'],
},
{
  title: 'Bug Validation & Retesting',
  date: 'PT SISI x PT BAI, 2025',
  type: 'Testing',
  role: 'System Integration Intern',
  location: 'PROCSI E-Procurement Project',
  shortDescription:
    'Identified bugs, validated fixes, and supported retesting to ensure system readiness.',
  description:
    'Identified bugs during testing activities, validated issue findings, and supported retesting after fixes were implemented. This activity helped ensure that the system behaved as expected, that issues were resolved correctly, and that the application was ready for implementation and use.',
  image: '/activities/bug.jpeg',
  highlights: ['Bug Identification', 'Bug Validation', 'Retesting Support'],
},
{
  title: 'User Guide & Bilingual Documentation',
  date: 'PT SISI x PT BAI, 2025',
  type: 'Documentation',
  role: 'System Integration Intern',
  location: 'PROCSI Implementation Project',
  shortDescription:
    'Created bilingual user guides for internal teams and external system users.',
  description:
    'Prepared user guides, manual books, and bilingual guidance documents for both internal users and external vendors. The documentation covered login, vendor registration, profile completion, verification steps, dashboards, and related workflows, helping users understand the system more clearly and supporting smoother adoption during implementation.',
  image: '/activities/Picture2.jpg',
  highlights: ['User Guide', 'Bilingual Documentation', 'Manual Book'],
  documents: [
    {
      label: 'View User Guide',
      link: '/documents/userguide.pdf',
    },
    {
      label: 'View Bilingual Document',
      link: '/documents/billingual.pdf',
    },
  ],
},
{
    title: 'Go-Live & User Socialization Support',
    date: 'PT BAI Go-Live, July 2025',
    type: 'Deployment',
    role: 'System Integration Intern',
    location: 'PT BAI Implementation Project',
    shortDescription:
      'Supported go-live sessions and user socialization for the e-procurement system rollout.',
    description:
      'Contributed directly to the go-live and socialization activities of the e-procurement system implementation. Helped document go-live outcomes, monitored issues found during rollout, and supported follow-up actions to ensure users could adopt the new system more smoothly and with fewer disruptions.',
    image: '/activities/golive.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
    title: 'Post Go-Live Issue Monitoring',
    date: 'PT BAI Post Go-Live, 2025',
    type: 'Support',
    role: 'System Integration Intern',
    location: 'Production Support Phase',
    shortDescription:
      'Monitored production issues and supported follow-up improvements after go-live.',
    description:
      'Handled post go-live support by monitoring issues reported after deployment, checking production behavior, validating problem cases, and helping follow up on fixes. Also supported updates to guidance documents and implementation notes to improve system stability, usability, and user confidence after launch.',
    image: '/activities/post.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'Master of Ceremony for Yudisium Angkatan MMXIX',
  date: '2023',
  type: 'Master of Ceremony',
  role: 'Master of Ceremony',
  location: 'Trunojoyo University of Madura',
  shortDescription:
    'Served as the Master of Ceremony for the Yudisium event of Angkatan MMXIX.',
  description:
    'Served as the Master of Ceremony for the Yudisium event of Angkatan MMXIX in 2023. This activity involved guiding the event flow, introducing each agenda, maintaining formal communication, and ensuring the ceremony ran smoothly from opening to closing.',
  image: '/activities/mc.jpeg',
  highlights: ['Public Speaking', 'Event Hosting', 'Formal Communication'],
},
{
  title: 'Safari Pendidikan HIMASA UTM',
  date: '2023',
  type: 'Community Service',
  role: 'Committee / Participant',
  location: 'Bangkalan, Madura',
  shortDescription:
    'Participated in an educational outreach activity to support learning motivation in village schools.',
  description:
    'Participated in Safari Pendidikan organized by HIMASA UTM, an educational outreach activity carried out across village schools. This activity aimed to support education awareness, encourage students’ learning motivation, and contribute to community-based educational development.',
  image: '/activities/sekolah.jpeg',
  highlights: ['Educational Outreach', 'Community Service', 'Student Motivation'],
  externalLabel: 'Read Article',
  externalLink: 'https://suararakyat.id/lakukan-safari-pendidikan-ke-64-sekolah-himasa-utm-optimis-bangkitkan-pendidikan-desa/?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn0ySC2K-VltLeBo1WfydULwPWaVW3mwXlf66Tc6E6S2i4V-m20YBa-PTooFE_aem_AjV4-ofqwJiIrpWBqVi4Wg',
},
{
  title: 'IT Governance Audit at PDAM Surya Sembada Surabaya',
  date: 'Surabaya, 2024 - 2025',
  type: 'Academic Project',
  role: 'IT Governance Audit Project',
  location: 'PDAM Surya Sembada Surabaya',
  shortDescription:
    'Evaluated IT governance practices through COBIT 2019, interviews, maturity assessment, and improvement recommendations.',
  description:
    'Led an academic IT governance assessment for PDAM Surya Sembada Surabaya using COBIT 2019. This project included field-based data collection through interviews and questionnaires, business-to-IT goal mapping, maturity level assessment, gap analysis, and the development of recommendations to strengthen governance processes and improve business-IT alignment.',
  image: '/activities/TKTI.jpeg',
  highlights: ['COBIT 2019', 'IT Governance Audit', 'Gap Analysis'],

  documents: [
    {
      label: 'View Audit Report',
      link: '/documents/it.pdf',
    },
  ],

  externalLabel: 'Mapping Project',
  externalLink: 'https://docs.google.com/spreadsheets/d/16dpoAuTCqnN8rlk9C1ZM1E9thX-fTZqB/edit?usp=sharing&ouid=112856330792412500248&rtpof=true&sd=true',
},
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
  title: 'Event Coordination at Aksara Music Festival',
  date: 'Bangkalan, 2024',
  type: 'Committee',
  role: 'Event Division Staff',
  location: 'Aksara Music Festival',
  shortDescription:
    'Coordinated event flow, technical communication, and on-site execution during the festival.',
  description:
    'Served in the event division team for Aksara Music Festival, helping manage the event rundown, coordinate stage and backstage flow, communicate with performers and technical teams, and respond quickly to schedule changes or operational issues during the event. This experience strengthened my teamwork, communication, and event handling skills in a dynamic environment.',
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
    'Competition with the theme “Transforming Tourism: Enhancing User Experience Through Digital Innovation.” We developed a mobile-based travel planning application designed to help users plan trips more easily and efficiently by providing information on tourist destinations, transportation, and accommodation.',
  image: '/activities/gowisata.png',
  highlights: ['UI/UX Competition', 'Travel Planning App', 'Figma Prototype'],
  externalLabel: 'View Figma Prototype',
  externalLink: 'https://www.figma.com/proto/L5d5KDnUG661iXX8lnp2ro/Lomba?node-id=244-8715&starting-point-node-id=244%3A8715&t=bUYVkLeGQQoENHVa-1',
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
    category: 'CRIUX UI/UX Competition (2024)',
    description:
      'Designed a digital tourism platform concept focused on improving the user journey for destination discovery, travel planning, and booking experience through a more intuitive and user-centered interface.',
    stack: ['Figma', 'User Flow', 'Wireframe', 'UI Design'],
    status: 'UI/UX',
    image: '/criux.jpg',
    badge: 'Design',
  },
  {
    title: 'Tourist Visit Forecasting System',
    category: 'Academic Research Project (2025 - 2026)',
    description:
      'Developed a forecasting system to support tourism trend analysis and data-driven planning by predicting visitor patterns across multiple destinations using historical data and analytical modeling.',
    stack: ['Python', 'Forecasting', 'Data Analysis', 'Model Development'],
    status: 'Forecasting',
    image: '/forecast.png',
    badge: 'Research',
  },
  {
    title: 'Retail Sales Data Project',
    category: 'Data Analytics Project (2026)',
    description:
      'Built a retail sales analytics solution by designing the data structure, processing transaction data, and creating an interactive dashboard to support performance monitoring and business insight generation.',
    stack: ['MySQL', 'Python', 'Power BI', 'DAX', 'Data Modeling'],
    status: 'Analytics',
    image: '/bi.png',
    badge: 'Data',
  },
  {
    title: 'E-Commerce Sales Analytics Dashboard',
    category: 'Data Analytics Project (2026)',
    description:
      'Created an end-to-end analytics dashboard for e-commerce sales data, transforming raw transactions into actionable insights on revenue trends, customer behavior, and overall sales performance.',
    stack: ['Python', 'Pandas', 'Plotly Dash', 'EDA', 'Dashboard'],
    status: 'Dashboard',
    image: '/analytics.png',
    badge: 'Analytics',
  },
  {
    title: 'Vendor Selection Decision Support System',
    category: 'Academic Project – PT Sumber Mas Plywood (2024)',
    description:
      'Developed a web-based decision support system to streamline vendor evaluation and ranking, helping improve procurement decision-making through a structured scoring approach.',
    stack: ['Web Development', 'Decision Support System', 'SAW Method'],
    status: 'System',
    image: '/spk.jpeg',
    badge: 'System',
  },
  {
    title: 'IT Governance Audit',
    category: 'Academic Project – PDAM Surya Sembada Surabaya (2024 - 2025)',
    description:
      'Conducted an IT governance assessment to evaluate current practices, identify improvement areas, and provide recommendations to strengthen alignment between technology initiatives and business objectives.',
    stack: ['COBIT 2019', 'Gap Analysis', 'Interview', 'IT Governance'],
    status: 'Audit',
    image: '/cobit2019.jpg',
    badge: 'Governance',
  },
  {
    title: 'E-Procurement System Implementation',
    category: 'E-Procurement – PT Sinergi Informatika Semen Indonesia (2025)',
    description:
      'Supported the implementation of an e-procurement system through documentation, testing, UAT support, go-live preparation, and coordination with users and technical teams to ensure a smooth rollout.',
    stack: ['System Implementation', 'UAT', 'User Guide', 'Documentation'],
    status: 'Implementation',
    image: '/eproc.png',
    badge: 'Internship',
  },
]

export const achievements: AchievementItem[] = [
  {
    title: '2nd Place in Create UI/UX at the National Level in 2024',
    year: 'May 2024',
    description:
      'CRIUX 2024 Competition Transforming Tourism: Enhancing User Experience Through Digital Innovation.',
  },
]
