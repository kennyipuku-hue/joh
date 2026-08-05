import { useLang } from '@/lib/i18n';

export interface Service {
  id: string;
  titleKey: string;
  title: string;
  descriptionKey: string;
  description: string;
  icon: string;
  featuresKey: string[];
  features: string[];
}

export interface Project {
  id: string;
  titleKey: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Church' | 'Renovation';
  categoryKey: string;
  location: string;
  year: string;
  image: string;
  descriptionKey: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface TeamMember {
  id: string;
  name: string;
  roleKey: string;
  role: string;
  image: string;
  bioKey: string;
  bio: string;
  linkedin: string;
}

export interface Testimonial {
  id: string;
  name: string;
  roleKey: string;
  role: string;
  quoteKey: string;
  quote: string;
  rating: number;
}

// ── Services based on jbprojectsdrc.com ──
export const services: Service[] = [
  {
    id: 'consultation',
    titleKey: 'cServ.consultTitle',
    title: 'Consultation',
    descriptionKey: 'cServ.consultDesc',
    description:
      "La consultation approfondie avant la construction aide à éviter des problèmes potentiels, à garantir que le projet est réalisable.",
    icon: 'DraftingCompass',
    featuresKey: ['cServ.consultF1', 'cServ.consultF2', 'cServ.consultF3', 'cServ.consultF4'],
    features: ['Étude de faisabilité', 'Analyse du site', 'Conseil budgétaire', 'Planification du calendrier'],
  },
  {
    id: 'construction',
    titleKey: 'cServ.constructionTitle',
    title: 'Construction',
    descriptionKey: 'cServ.constructionDesc',
    description:
      "Nous avons une longue et fière histoire en mettant l'accent sur les résultats environnementaux, sociaux et économiques.",
    icon: 'Building2',
    featuresKey: ['cServ.constructionF1', 'cServ.constructionF2', 'cServ.constructionF3', 'cServ.constructionF4'],
    features: ['Maisons résidentielles', 'Bâtiments commerciaux', 'Églises et centres de culte', 'Infrastructure durable'],
  },
  {
    id: 'project-mgmt',
    titleKey: 'cServ.pmTitle',
    title: 'Gestion des Projets',
    descriptionKey: 'cServ.pmDesc',
    description:
      "Identification claire des objectifs du projet et des besoins du client. Établissement d'un budget réaliste et d'un calendrier de construction.",
    icon: 'ClipboardList',
    featuresKey: ['cServ.pmF1', 'cServ.pmF2', 'cServ.pmF3', 'cServ.pmF4'],
    features: ['Suivi de budget', 'Gestion du calendrier', 'Contrôle qualité', 'Conformité sécurité'],
  },
  {
    id: 'materials',
    titleKey: 'cServ.materialsTitle',
    title: 'Matériaux de Construction',
    descriptionKey: 'cServ.materialsDesc',
    description:
      "Nous comprenons l'importance cruciale des matériaux de construction modernes pour garantir la durabilité, la résilience et l'esthétique de chaque projet.",
    icon: 'Hammer',
    featuresKey: ['cServ.materialsF1', 'cServ.materialsF2', 'cServ.materialsF3', 'cServ.materialsF4'],
    features: ['Matériaux durables', 'Approvisionnement local', 'Contrôle qualité', 'Technologie moderne'],
  },
  {
    id: 'maintenance',
    titleKey: 'cServ.maintenanceTitle',
    title: 'Maintenance des Maisons',
    descriptionKey: 'cServ.maintenanceDesc',
    description:
      "Une fois la maison construite, la maintenance devient cruciale. Inspections régulières, réparation des dommages, remplacement des éléments défectueux.",
    icon: 'Home',
    featuresKey: ['cServ.maintenanceF1', 'cServ.maintenanceF2', 'cServ.maintenanceF3', 'cServ.maintenanceF4'],
    features: ['Inspections régulières', 'Réparations', 'Entretien préventif', 'Service après-vente'],
  },
  {
    id: 'renovation',
    titleKey: 'cServ.renovationTitle',
    title: 'Rénovation',
    descriptionKey: 'cServ.renovationDesc',
    description:
      "Transformez l'intérieur de votre maison avec des solutions de réaménagement intelligentes. De la cuisine à la salle de bains en passant par les espaces de vie.",
    icon: 'Palette',
    featuresKey: ['cServ.renovationF1', 'cServ.renovationF2', 'cServ.renovationF3', 'cServ.renovationF4'],
    features: ['Rénovation de cuisine', 'Rénovation de salle de bains', 'Agrandissement', 'Modernisation complète'],
  },
];

// ── Projects (based on DRC context) ──
export const projects: Project[] = [
  {
    id: 'kinshasa-estate',
    titleKey: 'cProj.kinshasaTitle',
    title: 'Résidence de Luxe à Kinshasa',
    category: 'Residential',
    categoryKey: 'cProj.residential',
    location: 'Kinshasa, RDC',
    year: '2024',
    image: 'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    descriptionKey: 'cProj.kinshasaDesc',
    description:
      "Une résidence contemporaine de 600 m² avec baies vitrées du sol au plafond, piscine à débordement et éléments de design durable.",
    beforeImage: 'https://images.pexels.com/photos/4170185/pexels-photo-4170185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    afterImage: 'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'lubumbashi-complex',
    titleKey: 'cProj.lubumbashiTitle',
    title: 'Complexe Résidentiel de Lubumbashi',
    category: 'Commercial',
    categoryKey: 'cProj.commercial',
    location: 'Lubumbashi, RDC',
    year: '2023',
    image: 'https://images.pexels.com/photos/9170385/pexels-photo-9170385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    descriptionKey: 'cProj.lubumbashiDesc',
    description:
      "Un complexe d'appartements modernes de 48 unités avec commerce au rez-de-chaussée, terrasse sur le toit et parking souterrain.",
    beforeImage: 'https://images.pexels.com/photos/5504388/pexels-photo-5504388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    afterImage: 'https://images.pexels.com/photos/9170385/pexels-photo-9170385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'grace-chapel',
    titleKey: 'cProj.chapelTitle',
    title: 'Centre de Culte Grâce',
    category: 'Church',
    categoryKey: 'cProj.church',
    location: 'Kinshasa, RDC',
    year: '2023',
    image: 'https://images.pexels.com/photos/37423094/pexels-photo-37423094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    descriptionKey: 'cProj.chapelDesc',
    description:
      "Un centre de culte de 1 200 places avec acoustique de pointe, restauration de vitraux et salle communautaire.",
    beforeImage: 'https://images.pexels.com/photos/36099309/pexels-photo-36099309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    afterImage: 'https://images.pexels.com/photos/37423094/pexels-photo-37423094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'goma-residence',
    titleKey: 'cProj.gomaTitle',
    title: 'Résidence Familiale de Goma',
    category: 'Residential',
    categoryKey: 'cProj.residential',
    location: 'Goma, RDC',
    year: '2024',
    image: 'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    descriptionKey: 'cProj.gomaDesc',
    description:
      "Une maison familiale chaleureuse avec cuisine ouverte, espaces de vie ouverts et jardin paysager.",
    beforeImage: 'https://images.pexels.com/photos/8134819/pexels-photo-8134819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    afterImage: 'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'katanga-tower',
    titleKey: 'cProj.katangaTitle',
    title: 'Tour de Bureaux de Katanga',
    category: 'Commercial',
    categoryKey: 'cProj.commercial',
    location: 'Katanga, RDC',
    year: '2022',
    image: 'https://images.pexels.com/photos/5674684/pexels-photo-5674684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    descriptionKey: 'cProj.katangaDesc',
    description:
      "Un immeuble de bureaux de 12 étages avec vitrage mur-rideau, lobby panoramique et certification de durabilité.",
    beforeImage: 'https://images.pexels.com/photos/14486702/pexels-photo-14486702.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    afterImage: 'https://images.pexels.com/photos/5674684/pexels-photo-5674684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'matadi-renovation',
    titleKey: 'cProj.matadiTitle',
    title: 'Rénovation de Matadi',
    category: 'Renovation',
    categoryKey: 'cProj.renovation',
    location: 'Matadi, RDC',
    year: '2024',
    image: 'https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    descriptionKey: 'cProj.matadiDesc',
    description:
      "Rénovation intérieure complète d'une maison des années 1970 en un espace de vie moderne et ouvert avec des finitions haut de gamme.",
    beforeImage: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    afterImage: 'https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const galleryImages: string[] = [
  'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/37423094/pexels-photo-37423094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/9170385/pexels-photo-9170385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8134819/pexels-photo-8134819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7031405/pexels-photo-7031405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/9976121/pexels-photo-9976121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/37808899/pexels-photo-37808899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

// ── Team based on jbprojectsdrc.com ──
export const team: TeamMember[] = [
  {
    id: 'john-bajani',
    name: 'John BAJANI PWANGA',
    roleKey: 'cTeam.jdRole',
    role: 'Managing Director',
    image: '/src/components/sections/construction/Team1.jpg',
    bioKey: 'cTeam.jdBio',
    bio: "Le PDG de JB Projects Consulting. Il est responsable de la prise de décisions clés, de la gestion des opérations et de la supervision de l'ensemble de l'entreprise.",
    linkedin: 'https://www.linkedin.com/in/john-bajani-pwanga',
  },
  {
    id: 'daniel-tchick',
    name: 'Daniel TCHICK',
    roleKey: 'cTeam.dtRole',
    role: 'Business Development Manager',
    image: '/src/components/sections/construction/Team2.jpg',
    bioKey: 'cTeam.dtBio',
    bio: "Il a acquis une vaste expérience dans la gestion stratégique, la supervision de projets et le leadership d'équipes performantes. Son engagement envers l'excellence opérationnelle et la satisfaction client.",
    linkedin: 'https://www.linkedin.com/in/daniel-tchick',
  },
  {
    id: 'neville-kand',
    name: 'Neville LUSUNG KAND',
    roleKey: 'cTeam.nlRole',
    role: 'Provincial Director (Kinshasa)',
    image: '/src/components/sections/construction/team6.jpg',
    bioKey: 'cTeam.nlBio',
    bio: "Pilotage efficace de la planification stratégique pour assurer la croissance continue de l'entreprise et le développement de nouveaux marchés provinciaux.",
    linkedin: 'https://www.linkedin.com/in/neville-lusung-kand',
  },
  {
    id: 'david-tukumbane',
    name: 'David Tukumbane',
    roleKey: 'cTeam.dt2Role',
    role: 'Provincial Director (Katanga)',
    image: '/src/components/sections/construction/team4.jpg',
    bioKey: 'cTeam.dt2Bio',
    bio: "Pilotage efficace de la planification stratégique pour assurer la croissance continue de l'entreprise et le développement de nouveaux marchés provinciaux.",
    linkedin: 'https://www.linkedin.com/in/david-tukumbane',
  },
  {
    id: 'willy-lomingo',
    name: 'Willy Lomingo',
    roleKey: 'cTeam.wlRole',
    role: 'Site Manager',
    image: '/src/components/sections/construction/team3.jpg',
    bioKey: 'cTeam.wlBio',
    bio: "Il a acquis une vaste expérience dans la gestion stratégique, la supervision de projets et le leadership d'équipes performantes. Son engagement envers l'excellence opérationnelle et la satisfaction client.",
    linkedin: 'https://www.linkedin.com/in/willy-lomingo',
  },
  {
    id: 'theodoris-mbuyamba',
    name: 'Théodoris Anu Kalenga Mbuyamba',
    roleKey: 'cTeam.taRole',
    role: 'Site Supervisor',
    image: '/src/components/sections/construction/team5.jpg',
    bioKey: 'cTeam.taBio',
    bio: "Il a acquis une vaste expérience dans la gestion stratégique, la supervision de projets et le leadership d'équipes performantes. Son engagement envers l'excellence opérationnelle et la satisfaction client.",
    linkedin: 'https://www.linkedin.com/in/theodoris-mbuyamba',
  },
];

export const constructionTestimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Client de Kinshasa',
    roleKey: 'cTest.t1Role',
    role: 'Propriétaire, Résidence de Kinshasa',
    quoteKey: 'cTest.t1Quote',
    quote:
      "JB Projects Consulting a transformé notre maison de rêve en réalité. Chaque détail a été exécuté avec précision et soin. L'équipe a été professionnelle du premier jour à la remise des clés.",
    rating: 5,
  },
  {
    id: 't2',
    name: 'Pasteur de Lubumbashi',
    roleKey: 'cTest.t2Role',
    role: 'Centre de Culte Grâce',
    quoteKey: 'cTest.t2Quote',
    quote:
      "Construire notre église était une confiance sacrée, et JB a honoré cela. L'acoustique, l'artisanat, le calendrier — tout a dépassé nos attentes.",
    rating: 5,
  },
  {
    id: 't3',
    name: 'Promoteur immobilier',
    roleKey: 'cTest.t3Role',
    role: 'Tour de Bureaux de Katanga',
    quoteKey: 'cTest.t3Quote',
    quote:
      "J'ai travaillé avec de nombreux entrepreneurs, mais JB Projects Consulting se distingue. Leur gestion de projet est irréprochable et leur qualité est inégalée.",
    rating: 5,
  },
];

export const faqs: { qKey: string; q: string; aKey: string; a: string }[] = [
  {
    qKey: 'cFaq.q1',
    q: "Combien de temps prend un projet résidentiel typique ?",
    aKey: 'cFaq.a1',
    a: "La durée dépend de divers facteurs, mais en moyenne, la construction d'une maison prend entre 6 mois et 1 an.",
  },
  {
    qKey: 'cFaq.q2',
    q: "Proposez-vous des estimations gratuites ?",
    aKey: 'cFaq.a2',
    a: "Oui. Nous offrons des consultations initiales gratuites et des estimations pour tous les projets. Après examen de votre projet, nous fournissons un devis détaillé et transparent.",
  },
  {
    qKey: 'cFaq.q3',
    q: "Êtes-vous licenciés et assurés ?",
    aKey: 'cFaq.a3',
    a: "Absolument. JB Projects Consulting est pleinement licencié et assuré. Nous sommes basés en République Démocratique du Congo et opérons dans plusieurs provinces.",
  },
  {
    qKey: 'cFaq.q4',
    q: "Puis-je voir des exemples de vos travaux précédents ?",
    aKey: 'cFaq.a4',
    a: "Bien sûr. Notre portfolio inclut des maisons résidentielles, des bâtiments commerciaux, des églises et des rénovations. Nous sommes heureux d'organiser des visites de projets terminés sur demande.",
  },
  {
    qKey: 'cFaq.q5',
    q: "Offrez-vous des garanties sur votre travail ?",
    aKey: 'cFaq.a5',
    a: "Oui, tous nos projets sont garantis par notre engagement qualité. Nous utilisons des matériaux de construction modernes pour garantir la durabilité, la résilience et l'esthétique.",
  },
  {
    qKey: 'cFaq.q6',
    q: "Quelles zones desservez-vous ?",
    aKey: 'cFaq.a6',
    a: "Nous desservons toute la République Démocratique du Congo avec des bureaux provinciaux à Kinshasa et Katanga. Pour les projets en dehors de ces zones, veuillez nous contacter pour discuter des arrangements.",
  },
];

export const processSteps: { step: string; titleKey: string; title: string; descriptionKey: string; description: string }[] = [
  {
    step: '01',
    titleKey: 'cProc.step1Title',
    title: 'Consultation',
    descriptionKey: 'cProc.step1Desc',
    description:
      "La consultation approfondie avant la construction aide à éviter des problèmes potentiels et à garantir que le projet est réalisable.",
  },
  {
    step: '02',
    titleKey: 'cProc.step2Title',
    title: 'Design & Planification',
    descriptionKey: 'cProc.step2Desc',
    description:
      "Nos architectes créent des designs détaillés et des rendus 3D, sécurisant tous les permis et approbations nécessaires.",
  },
  {
    step: '03',
    titleKey: 'cProc.step3Title',
    title: 'Construction',
    descriptionKey: 'cProc.step3Desc',
    description:
      "Nos équipes qualifiées donnent vie au design avec un contrôle qualité rigoureux à chaque étape de la construction.",
  },
  {
    step: '04',
    titleKey: 'cProc.step4Title',
    title: 'Finition & Inspection',
    descriptionKey: 'cProc.step4Desc',
    description:
      "Finitions intérieures haut de gamme, inspections finales et une visite complète avant la remise des clés.",
  },
];

export const whyChooseUs: { icon: string; titleKey: string; title: string; descriptionKey: string; description: string }[] = [
  {
    icon: 'Leaf',
    titleKey: 'cWhy.durabilityTitle',
    title: 'Durabilité',
    descriptionKey: 'cWhy.durabilityDesc',
    description: "Des matériaux et des méthodes qui garantissent la durabilité, la résilience et l'esthétique de chaque projet.",
  },
  {
    icon: 'Clock',
    titleKey: 'cWhy.onTimeTitle',
    title: 'Projets à temps',
    descriptionKey: 'cWhy.onTimeDesc',
    description: "Nous respectons votre calendrier. Notre gestion de projet garantit que chaque étape est réalisée dans les délais.",
  },
  {
    icon: 'ShieldCheck',
    titleKey: 'cWhy.techTitle',
    title: 'Technologie moderne',
    descriptionKey: 'cWhy.techDesc',
    description: "Des techniques et matériaux de construction modernes pour des résultats à la pointe de l'innovation.",
  },
  {
    icon: 'Palette',
    titleKey: 'cWhy.designTitle',
    title: 'Dernière conception',
    descriptionKey: 'cWhy.designDesc',
    description: "Des designs contemporains qui allient esthétique, fonctionnalité et respect de l'environnement.",
  },
  {
    icon: 'HeartHandshake',
    titleKey: 'cWhy.transparencyTitle',
    title: 'Transparence',
    descriptionKey: 'cWhy.transparencyDesc',
    description: "Nous croyons en la transparence, la communication ouverte et la qualité inégalée à chaque étape.",
  },
  {
    icon: 'Users',
    titleKey: 'cWhy.collabTitle',
    title: 'Collaboration',
    descriptionKey: 'cWhy.collabDesc',
    description: "Notre processus est conçu pour être transparent et collaboratif, garantissant que chaque étape est réalisée avec précision.",
  },
];
