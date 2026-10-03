const cards = [
  {
    type: 'intro',
    icon: 'fas fa-laptop-code',
    iconColor: 'var(--cyan)',
    iconBg: 'rgba(0,153,184,0.12)',
    glowColor: 'var(--cyan)',
    title: 'Digital Solutions &amp; Creative Technology',
    subtitle: 'Khidmat Summary • Since 2015',
    name: 'Taher Shajapurwala',
    role: 'Web • Design • Video • Creative • AI • Data • Print',
    stats: [
      { value: '2015', label: 'Serving Since' },
      { value: '10', label: 'Work Areas' },
      { value: '28', label: 'Named Deliverables' }
    ],
    paras: [
      'I have had the opportunity to serve <strong>Idarah since 2015</strong>, working across different areas of technology, creativity, media, and printing. Over the years, my work has grown into a combination of <strong>web development, UI/UX design, graphic design, video production and editing, social media management, AI automation, QA testing, data analysis, and printing solutions</strong>.',
      'I have developed <strong>websites and digital platforms from scratch</strong>, worked on UI/UX and wireframes, created creative posts and publications, managed social media activities, and handled video shoots and editing for events, workshops, podcasts, promotional content, and documentaries.',
      'I have also worked on <strong>quality testing and bug reporting for websites</strong>, prepared <strong>Jamaat-wise and Jamiat-wise data reports</strong>, and developed small automation tools to make regular tasks easier and more efficient. These include tools such as <strong>bulk QR code generation, bulk messaging, and English-to-Lisan al-Da&rsquo;wah conversion</strong>.',
      'Alongside my digital and creative work, I also provide <strong>complete printing support</strong>, including guidance on paper selection, GSM, finishing, and overall print quality for different Idarah requirements.',
      'My aim has always been to provide <strong>practical and reliable support wherever it is required</strong>. Since I work across multiple areas, I am able to understand a requirement from the initial idea, work on the design or development, test and refine it, and take it through to the final output.',
      'I am grateful for the opportunity to continue learning, contributing, and serving through these different areas, and I look forward to taking on new requirements and responsibilities with the same commitment.'
    ],
    skills: [
      { icon: 'fas fa-code', label: 'Web Dev' },
      { icon: 'fas fa-pen-nib', label: 'UI/UX' },
      { icon: 'fas fa-palette', label: 'Graphics' },
      { icon: 'fas fa-video', label: 'Video' },
      { icon: 'fas fa-share-nodes', label: 'Social' },
      { icon: 'fas fa-robot', label: 'AI Auto' },
      { icon: 'fas fa-bug', label: 'QA Test' },
      { icon: 'fas fa-chart-bar', label: 'Data' },
      { icon: 'fas fa-print', label: 'Print' },
    ]
  },
  {
    type: 'project',
    icon: 'fas fa-globe',
    iconColor: 'var(--cyan)',
    iconBg: 'rgba(0,153,184,0.12)',
    glowColor: 'var(--cyan)',
    title: 'Web Development',
    subtitle: 'Responsibility • Since 2015',
    paras: [
      'I have had the opportunity to develop and maintain <strong>5+ websites and web-based platforms</strong> for Idarah, working on each project from the initial idea and development through testing, improvements, and final delivery.',
      'These projects were developed from scratch, with hands-on involvement throughout the process, allowing me to understand the requirements closely and provide ongoing support whenever needed.'
    ],
    stats: [
      { value: '5+', label: 'Platforms Built' },
      { value: '6', label: 'Named Projects' }
    ],
    listLabel: 'Platforms Delivered',
    projects: [
      { name: 'DBEO Website', dot: 'var(--cyan)' },
      { name: 'Talabulilm Homepage', dot: 'var(--emerald)' },
      { name: 'Certification Module', dot: 'var(--violet)' },
      { name: 'AQT – BS Sabaq', dot: 'var(--rose)' },
      { name: 'Online Imtihaan Webpage', dot: 'var(--amber)' },
      { name: 'Minhat Talimiyah – Old Gateway Page', dot: 'var(--blue)' },
    ],
    footer: 'Interface development, backend programming, database integration, deployment and ongoing upkeep are all handled in-house, so Idarah does not depend on an external agency for these platforms.',
    tags: ['HTML/CSS', 'JavaScript', 'Backend', 'Database', 'Deployment', 'Responsive', 'Maintenance']
  },
  {
    type: 'project',
    icon: 'fas fa-pen-nib',
    iconColor: 'var(--violet)',
    iconBg: 'rgba(124,58,237,0.12)',
    glowColor: 'var(--violet)',
    title: 'UI/UX Design',
    subtitle: 'Responsibility • Since 2018',
    desc: 'Designed interfaces and planned website structure for Idarah projects, keeping screens clear and practical for the students, staff and administrators who use them daily.',
    listLabel: 'Projects Delivered',
    projects: [
      { name: 'Araiz', dot: 'var(--violet)' },
      { name: 'Student Profile', dot: 'var(--cyan)' },
      { name: 'Old Istibsaar', dot: 'var(--emerald)' },
      { name: 'Website Wireframing &amp; User Flow Planning', dot: 'var(--rose)' },
    ],
    footer: 'Wireframes and user flows are agreed before development starts, so the structure of a module is settled early rather than reworked during build.',
    tags: ['Wireframing', 'User Flows', 'Prototyping', 'Interface Design', 'Usability']
  },
  {
    type: 'project',
    icon: 'fas fa-palette',
    iconColor: 'var(--rose)',
    iconBg: 'rgba(224,27,111,0.12)',
    glowColor: 'var(--rose)',
    title: 'Graphic Development',
    subtitle: 'Responsibility • Since 2016',
    paras: [
      'I have been involved in <strong>graphic design and creative development for Idarah since 2016</strong>, creating and supporting a wide range of visual and printed materials.',
      'My work includes designing <strong>creative social media posts, books, publications, promotional materials, event creatives, announcements, certificates, and other graphic elements</strong> required for different Talabulilm initiatives.',
      'I work closely with the requirement of each project — from understanding the purpose and content to deciding the <strong>layout, typography, visual style, images, colours, and overall presentation</strong>. I also prepare designs in formats suitable for both <strong>digital use and printing</strong>, depending on the requirement.',
      'Over the years, I have worked on many different Idarah wise activities and continued to support their creative requirements, helping maintain a <strong>clear, consistent, and recognisable visual style</strong> across different initiatives.',
      'This work has also given me the opportunity to understand the content and purpose behind each initiative, allowing me to create designs that are not only visually appealing but also <strong>meaningful, clear, and suitable for the audience</strong>.'
    ],
    tags: ['Social Media Posts', 'Books', 'Publications', 'Promotional Material', 'Event Creatives', 'Announcements', 'Certificates', 'Layout &amp; Typography', 'Digital &amp; Print']
  },
  {
    type: 'project',
    icon: 'fas fa-share-nodes',
    iconColor: 'var(--emerald)',
    iconBg: 'rgba(4,145,106,0.12)',
    glowColor: 'var(--emerald)',
    title: 'Social Media Management',
    subtitle: 'Responsibility • Since 2017',
    desc: 'Managing the complete social media presence of Talabulilm — content planning, regular posting, audience engagement and campaign management — together with promotional activity that raises visibility and awareness of Talabulilm initiatives.',
    footer: 'Content planning, design and publishing sit with the same person, so campaigns go out without waiting on a separate design or approval cycle.',
    tags: ['Content Strategy', 'Campaigns', 'Engagement', 'Analytics', 'Scheduling', 'Brand Awareness']
  },
  {
    type: 'project',
    icon: 'fas fa-camera',
    iconColor: 'var(--amber)',
    iconBg: 'rgba(217,131,0,0.14)',
    glowColor: 'var(--amber)',
    title: 'Video Production &amp; Photography',
    subtitle: 'Responsibility • Since 2017',
    desc: 'Complete video production and photography coverage for Talabulilm events, workshops and initiatives — from single reels through to full documentary production.',
    stats: [
      { value: '7', label: 'Production Streams' },
      { value: '2017', label: 'Covering Since' }
    ],
    listLabel: 'Production Work Covered',
    projects: [
      { name: 'Short-form videos for Talabulilm from 2017', dot: 'var(--amber)' },
      { name: 'Full shoot coverage of AQT and Sabaq', dot: 'var(--cyan)' },
      { name: 'Talabulilm workshops and event coverage', dot: 'var(--emerald)' },
      { name: 'Reel shoots and short promotional clips', dot: 'var(--rose)' },
      { name: 'Complete event shoots for Talabulilm Centres', dot: 'var(--violet)' },
      { name: 'Podcast shoots for Iqtesadiyah', dot: 'var(--blue)' },
      { name: 'Full documentary production for Aelaam', dot: 'var(--indigo)' },
    ],
    footer: 'Shooting and editing are both covered, so an event is filmed and delivered without engaging an outside production team.',
    tags: ['Cinematic', 'Events', 'Podcasts', 'Documentary', 'Reels', 'Promotional']
  },
  {
    type: 'project',
    icon: 'fas fa-film',
    iconColor: 'var(--rose)',
    iconBg: 'rgba(224,27,111,0.12)',
    glowColor: 'var(--rose)',
    title: 'Video Editing &amp; Content Creation',
    subtitle: '',
    desc: 'Currently handling <strong>video editing and content creation</strong> across a wide range of formats and creative requirements for Idarah.',
    listLabel: 'Current Work Includes',
    projects: [
      { name: 'Cinematic Video Editing', dot: 'var(--rose)' },
      { name: 'VFX &amp; Visual Effects', dot: 'var(--cyan)' },
      { name: 'Motion Graphics', dot: 'var(--lime)' },
      { name: 'Promotional &amp; Social Media Videos', dot: 'var(--amber)' },
      { name: 'Event &amp; Documentary Editing', dot: 'var(--violet)' },
      { name: 'Creative Video Content', dot: 'var(--emerald)' },
      { name: 'Short-form Reels &amp; Promotional Clips', dot: 'var(--orange)' },
    ],
    footer: 'Seven editing formats are covered by one resource, from quick social cuts to long-form documentary work.',
    tags: ['Cinematic Editing', 'VFX', 'Motion Graphics', 'Promotional', 'Documentary', 'Social Formats']
  },
  {
    type: 'project',
    icon: 'fas fa-robot',
    iconColor: 'var(--emerald)',
    iconBg: 'rgba(4,145,106,0.12)',
    glowColor: 'var(--emerald)',
    title: 'AI Automation Development',
    subtitle: 'Responsibility • Since 2023',
    desc: 'Building AI-powered automation tools and custom in-house solutions that take repetitive manual work out of routine Idarah processes and shorten the time these tasks take.',
    stats: [
      { value: '4', label: 'Tools Built' },
      { value: '2023', label: 'Building Since' }
    ],
    listLabel: 'Tools Built In-House',
    projects: [
      { name: 'Bulk QR Code Generator', dot: 'var(--emerald)', badge: 'Tool' },
      { name: 'Bulk Message Sender', dot: 'var(--cyan)', badge: 'System' },
      { name: 'English to Lisan al-Da&rsquo;wah (LSD) Converter', dot: 'var(--violet)', badge: 'Language' },
      { name: 'Custom Workflow Automation', dot: 'var(--rose)', badge: 'Workflow' },
    ],
    footer: 'Each tool replaces a task that was previously done by hand, and was built internally rather than purchased or outsourced.',
    tags: ['Vibe Coding', 'AI Tools', 'Automation', 'Custom Solutions', 'Workflow']
  },
  {
    type: 'detail',
    icon: 'fas fa-bug',
    iconColor: 'var(--cyan)',
    iconBg: 'rgba(0,153,184,0.12)',
    glowColor: 'var(--cyan)',
    title: 'QA Testing',
    subtitle: '',
    desc: 'Providing quality assurance for Idarah websites and web applications so that issues are found and documented before they reach students and staff.',
    listLabel: 'Work Covered',
    keyWorks: [
      'Complete QA testing of the Talabulilm website',
      'Identifying and reporting bugs and issues',
      'Functional and usability testing',
      'Testing across different devices and scenarios',
      'Preparing detailed QA reports for development and bug fixing'
    ],
    footer: 'Testing the Talabulilm website from the position of someone who also builds it means problems are caught and described in terms the development side can act on directly.',
    tags: ['Bug Reports', 'Functional Testing', 'Usability', 'Cross-Device', 'QA Reports']
  },
  {
    type: 'detail',
    icon: 'fas fa-chart-bar',
    iconColor: 'var(--violet)',
    iconBg: 'rgba(124,58,237,0.12)',
    glowColor: 'var(--violet)',
    title: 'Data Analysis &amp; Reporting',
    subtitle: '',
    desc: 'Analysing Talabulilm Araiz data and preparing Jamaat-wise and Jamiat-wise reports, turning raw submissions into summaries and visuals that can be read at a glance.',
    listLabel: 'Work Covered',
    keyWorks: [
      'Data analysis and processing',
      'Jamaat-wise &amp; Jamiat-wise reports',
      'Graphical data visualization',
      'Summary reports and insights',
      'Data-driven reporting for better understanding and decision-making'
    ],
    footer: 'These reports are prepared so that Jamaat-wise and Jamiat-wise position can be reviewed directly, supporting decisions with figures rather than estimates.',
    tags: ['Analysis', 'Visualization', 'Reports', 'Insights', 'Decision Support']
  },
  {
    type: 'detail',
    icon: 'fas fa-print',
    iconColor: 'var(--amber)',
    iconBg: 'rgba(217,131,0,0.14)',
    glowColor: 'var(--amber)',
    title: 'Printable Advisor',
    subtitle: 'Own Business',
    desc: 'Providing complete printing solutions for MHB Talabulilm, from print execution through to material selection — advising on the right paper, suitable GSM and finishing so each requirement is produced correctly the first time.',
    listLabel: 'Advisory Covered',
    keyWorks: [
      'Paper selection &amp; material guidance',
      'GSM recommendations',
      'Finishing &amp; print quality optimization',
      'Complete printing solutions'
    ],
    products: ['Booklet', 'Badge', 'Idarah File', 'Tahyyo', 'All Printable Stationary'],
    footer: 'Advising on material and print quality before an order is placed avoids reprints and waste on Idarah stationery and publications.',
    tags: ['Paper', 'GSM', 'Finishing', 'Quality', 'Materials']
  }
];