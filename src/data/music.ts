import type { Testimonial } from './construction';

export interface Artist {
  id: string;
  name: string;
  stageName: string;
  genre: string;
  genreKey: string;
  image: string;
  bio: string;
  bioKey: string;
  fullBio: string;
  fullBioKey: string;
  socials: { platform: string; url: string }[];
  albumIds: string[];
  monthlyListeners: string;
}

export interface Album {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  releaseDate: string;
  releaseDateLabel: string;
  coverImage: string;
  tracks: { title: string; duration: string }[];
  description: string;
  descriptionKey: string;
  behindAlbum: string;
  behindAlbumKey: string;
  type: 'Album' | 'EP' | 'Single';
  typeLabel: string;
}

export interface VideoItem {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  views: string;
  duration: string;
}

export interface MusicEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  price: string;
  image: string;
  description: string;
  descriptionKey: string;
  category: string;
  categoryKey: string;
}

export interface StudioService {
  id: string;
  title: string;
  titleKey: string;
  description: string;
  descriptionKey: string;
  icon: string;
  price: string;
}

// ── Artists based on johnbajani.com ──
export const artists: Artist[] = [
  {
    id: 'john-bajani',
    name: 'John Bajani P',
    stageName: 'John Bajani P',
    genre: 'Gospel / Worship',
    genreKey: 'mArt.genreGospelWorship',
    image: 'https://images.pexels.com/photos/7715781/pexels-photo-7715781.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: "Artiste aux multiples talents, auteur-compositeur, pianiste et producteur. En route pour devenir l'un des meilleurs producteurs de l'industrie gospel en Afrique.",
    bioKey: 'mArt.johnBio',
    fullBio: "John Bajani P. est un artiste aux multiples talents, auteur-compositeur, pianiste et producteur. Il se dirige pour devenir l'un des meilleurs producteurs de l'industrie de la musique gospel en Afrique aujourd'hui. Il a écrit et produit de nombreuses chansons pour différents artistes et a finalement sorti son album gospel de début intitulé 'STAND', qui a un genre musical mixte. Cet album est un travail sensationnel et bien produit. Quelque chose que chaque individu qui aime la musique gospel et les sons doux devrait avoir dans sa collection.",
    fullBioKey: 'mArt.johnFullBio',
    socials: [
      { platform: 'Facebook', url: 'https://johnbajani.com' },
      { platform: 'Twitter', url: 'https://johnbajani.com' },
      { platform: 'Apple Music', url: 'https://music.apple.com/us/artist/john-bajani-p/605366560' },
    ],
    albumIds: ['stand', 'au-milieu-de-tout'],
    monthlyListeners: '500K+',
  },
  {
    id: 'mojalefa-maluka',
    name: 'Mojalefa Maluka',
    stageName: 'Mojalefa Maluka',
    genre: 'Worship',
    genreKey: 'mArt.genreWorship',
    image: 'https://images.pexels.com/photos/9008889/pexels-photo-9008889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: "Artiste de louange produit par JB Records, connu pour son album 'WORSHIP'.",
    bioKey: 'mArt.mojalefaBio',
    fullBio: "Mojalefa Maluka est un artiste de louange produit par John Bajani Production. Son album 'WORSHIP' est une collection profonde de chants de louange qui touchent les cœurs et élèvent les esprits vers Dieu.",
    fullBioKey: 'mArt.mojalefaFullBio',
    socials: [
      { platform: 'Facebook', url: '#' },
      { platform: 'YouTube', url: '#' },
    ],
    albumIds: ['worship'],
    monthlyListeners: '200K+',
  },
  {
    id: 'nano-makhathini',
    name: 'Nano Makhathini',
    stageName: 'Nano Makhathini',
    genre: 'Gospel / Contemporary',
    genreKey: 'mArt.genreGospelContemporary',
    image: 'https://images.pexels.com/photos/8198205/pexels-photo-8198205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: "Artiste gospel contemporain produit par JB Records, connu pour son album 'HEALED'.",
    bioKey: 'mArt.nanoBio',
    fullBio: "Nano Makhathini est un artiste gospel contemporain produit par JB Production. Son album 'HEALED' raconte des histoires de guérison, de restauration et de la puissance de la foi à travers une musique qui touche l'âme.",
    fullBioKey: 'mArt.nanoFullBio',
    socials: [
      { platform: 'Facebook', url: '#' },
      { platform: 'YouTube', url: '#' },
    ],
    albumIds: ['healed'],
    monthlyListeners: '150K+',
  },
  {
    id: 'jb-ensemble',
    name: 'JB Worship Collective',
    stageName: 'JB Worship Collective',
    genre: 'Choral / Worship',
    genreKey: 'mArt.genreChoralWorship',
    image: 'https://images.pexels.com/photos/8815036/pexels-photo-8815036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: "Le collectif de louange de JB Records, réunissant des voix ointes pour des performances puissantes.",
    bioKey: 'mArt.collectiveBio',
    fullBio: "Le JB Worship Collective est le chœur phare de JB Records. Fondé par John Bajani P, le collectif réunit des chanteurs d'églises à travers l'Afrique. Leurs harmonies sont célestes et leurs performances live sont connues pour amener les publics à se lever et à se prosterner.",
    fullBioKey: 'mArt.collectiveFullBio',
    socials: [
      { platform: 'Facebook', url: '#' },
      { platform: 'YouTube', url: '#' },
    ],
    albumIds: ['i-shall-testify'],
    monthlyListeners: '300K+',
  },
];

// ── Albums based on johnbajani.com ──
export const albums: Album[] = [
  {
    id: 'stand',
    title: 'STAND',
    artistId: 'john-bajani',
    artistName: 'John Bajani P',
    releaseDate: '2013',
    releaseDateLabel: '2013',
    coverImage: 'https://images.pexels.com/photos/7520351/pexels-photo-7520351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    type: 'Album',
    typeLabel: 'Album',
    descriptionKey: 'mAlbum.standDesc',
    description: "L'album gospel de début de John Bajani P, intitulé 'STAND', a un genre musical mixte. C'est un travail sensationnel et bien produit que chaque amateur de musique gospel devrait avoir dans sa collection.",
    behindAlbumKey: 'mAlbum.standBehind',
    behindAlbum: "STAND a été enregistré et produit par John Bajani P dans les studios JB. L'album mélange plusieurs genres musicaux pour créer un son unique qui parle à tous. Chaque piste a été soigneusement composée et produite pour toucher les cœurs et élever les esprits.",
    tracks: [
      { title: 'I Know Who I Am', duration: '4:12' },
      { title: 'Stand', duration: '5:39' },
      { title: 'Never Leave Me Alone', duration: '4:28' },
      { title: 'Celebrate Yahweh', duration: '5:15' },
      { title: 'Hallowed Be Thy Name', duration: '6:01' },
      { title: 'Lord Of My Salvation', duration: '4:45' },
      { title: 'Praise Mix', duration: '7:22' },
      { title: 'Stand (Remix)', duration: '5:39' },
    ],
  },
  {
    id: 'au-milieu-de-tout',
    title: 'AU MILIEU DE TOUT',
    artistId: 'john-bajani',
    artistName: 'John Bajani P',
    releaseDate: '2015',
    releaseDateLabel: '2015',
    coverImage: 'https://images.pexels.com/photos/8815022/pexels-photo-8815022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    type: 'Album',
    typeLabel: 'Album',
    descriptionKey: 'mAlbum.auMilieuDesc',
    description: "Une production John Bajani qui célèbre la fidélité de Dieu au milieu de toutes les circonstances de la vie. Un album rempli de louange et d'adoration profonde.",
    behindAlbumKey: 'mAlbum.auMilieuBehind',
    behindAlbum: "AU MILIEU DE TOUT est une production de John Bajani qui reflète la fidélité de Dieu dans toutes les situations. Chaque chanson est un témoignage de la bonté de Dieu.",
    tracks: [
      { title: 'Au Milieu De Tout', duration: '5:20' },
      { title: 'Je Crois En Toi', duration: '4:38' },
      { title: 'Ta Fidélité', duration: '5:01' },
      { title: 'Dans Ta Main', duration: '4:45' },
      { title: 'Saint Esprit', duration: '5:30' },
      { title: 'Grâce Infinie', duration: '4:52' },
      { title: 'Louange Éternelle', duration: '5:18' },
    ],
  },
  {
    id: 'worship',
    title: 'WORSHIP',
    artistId: 'mojalefa-maluka',
    artistName: 'Mojalefa Maluka',
    releaseDate: '2016',
    releaseDateLabel: '2016',
    coverImage: 'https://images.pexels.com/photos/36425622/pexels-photo-36425622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    type: 'Album',
    typeLabel: 'Album',
    descriptionKey: 'mAlbum.worshipDesc',
    description: "Une collection profonde de chants de louange produits par JB Production. Mojalefa Maluka nous invite dans la présence de Dieu à travers chaque piste.",
    behindAlbumKey: 'mAlbum.worshipBehind',
    behindAlbum: "WORSHIP a été produit par John Bajani Production. L'album capture l'essence de l'adoration véritable à travers des chants qui élèvent l'âme.",
    tracks: [
      { title: 'We Bow Down', duration: '5:40' },
      { title: 'Holy Holy', duration: '4:22' },
      { title: 'In Your Presence', duration: '6:15' },
      { title: 'More of You', duration: '4:58' },
      { title: 'Worthy', duration: '5:30' },
      { title: 'Father I Adore', duration: '4:45' },
    ],
  },
  {
    id: 'healed',
    title: 'HEALED',
    artistId: 'nano-makhathini',
    artistName: 'Nano Makhathini',
    releaseDate: '2017',
    releaseDateLabel: '2017',
    coverImage: 'https://images.pexels.com/photos/14990429/pexels-photo-14990429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    type: 'Album',
    typeLabel: 'Album',
    descriptionKey: 'mAlbum.healedDesc',
    description: "Un album qui raconte des histoires de guérison et de restauration. Produit par JB Production, HEALED est un témoignage musical de la puissance de la foi.",
    behindAlbumKey: 'mAlbum.healedBehind',
    behindAlbum: "HEALED a été produit par JB Production. Nano Makhathini partage son témoignage personnel de guérison à travers chaque chanson de cet album inspirant.",
    tracks: [
      { title: 'Healed', duration: '5:12' },
      { title: 'By His Stripes', duration: '4:30' },
      { title: 'Restored', duration: '5:05' },
      { title: 'Jehovah Rapha', duration: '6:22' },
      { title: 'I Am Free', duration: '4:48' },
      { title: 'Testimony', duration: '5:35' },
    ],
  },
  {
    id: 'i-shall-testify',
    title: 'I SHALL TESTIFY',
    artistId: 'jb-ensemble',
    artistName: 'JB Worship Collective',
    releaseDate: '2018',
    releaseDateLabel: '2018',
    coverImage: 'https://images.pexels.com/photos/8815025/pexels-photo-8815025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    type: 'Album',
    typeLabel: 'Album',
    descriptionKey: 'mAlbum.testifyDesc',
    description: "Un album live enregistré par le JB Worship Collective. Des harmonies célestes et des performances puissantes qui élèvent l'âme.",
    behindAlbumKey: 'mAlbum.testifyBehind',
    behindAlbum: "I SHALL TESTIFY a été enregistré en live par le JB Worship Collective sous la direction de John Bajani P. L'album capture l'énergie et l'onction d'une soirée de louange en direct.",
    tracks: [
      { title: 'I Shall Testify', duration: '5:45' },
      { title: 'Step Out', duration: '4:22' },
      { title: 'God Is Good', duration: '5:30' },
      { title: 'We Are Marching', duration: '5:38' },
      { title: 'Total Praise', duration: '6:22' },
      { title: 'He Lives', duration: '6:45' },
    ],
  },
];

export const videos: VideoItem[] = [
  {
    id: 'v1',
    title: 'STAND — John Bajani P (Official Video)',
    artist: 'John Bajani P',
    thumbnail: 'https://images.pexels.com/photos/36117935/pexels-photo-36117935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    views: '1.2M views',
    duration: '5:39',
  },
  {
    id: 'v2',
    title: 'Celebrate Yahweh — Live Worship',
    artist: 'John Bajani P',
    thumbnail: 'https://images.pexels.com/photos/4061438/pexels-photo-4061438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    views: '800K views',
    duration: '5:15',
  },
  {
    id: 'v3',
    title: 'Never Leave Me Alone — Acoustic Session',
    artist: 'John Bajani P',
    thumbnail: 'https://images.pexels.com/photos/16108227/pexels-photo-16108227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    views: '500K views',
    duration: '4:28',
  },
  {
    id: 'v4',
    title: 'WORSHIP — Mojalefa Maluka Live',
    artist: 'Mojalefa Maluka',
    thumbnail: 'https://images.pexels.com/photos/8815025/pexels-photo-8815025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    views: '400K views',
    duration: '6:30',
  },
  {
    id: 'v5',
    title: 'HEALED — Nano Makhathini (Official Video)',
    artist: 'Nano Makhathini',
    thumbnail: 'https://images.pexels.com/photos/10024790/pexels-photo-10024790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    views: '350K views',
    duration: '5:12',
  },
  {
    id: 'v6',
    title: 'I Shall Testify — JB Worship Collective Live',
    artist: 'JB Worship Collective',
    thumbnail: 'https://images.pexels.com/photos/5847498/pexels-photo-5847498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    views: '600K views',
    duration: '5:45',
  },
];

export const events: MusicEvent[] = [
  {
    id: 'e1',
    title: 'Soirée de Louange avec John Bajani P',
    date: '20 Septembre 2025',
    time: '19:00',
    location: 'Grand Centre, Kinshasa',
    venue: 'Grand Centre',
    price: 'À partir de $35',
    image: 'https://images.pexels.com/photos/37790569/pexels-photo-37790569.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    descriptionKey: 'mEvt.e1Desc',
    description: "Une soirée inoubliable de louange avec John Bajani P et un groupe live complet. Ouverture des portes à 18h00.",
    category: 'Soirée de Louange',
    categoryKey: 'mEvt.worshipNight',
  },
  {
    id: 'e2',
    title: 'Concert Gospel: Voices of Praise',
    date: '11 Octobre 2025',
    time: '18:30',
    location: 'Riverside Arena, Lubumbashi',
    venue: 'Riverside Arena',
    price: 'À partir de $45',
    image: 'https://images.pexels.com/photos/35555152/pexels-photo-35555152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    descriptionKey: 'mEvt.e2Desc',
    description: "Un concert gospel multi-artistes mettant en vedette tous les artistes de JB Records dans une nuit de louange.",
    category: 'Concert Gospel',
    categoryKey: 'mEvt.gospelConcert',
  },
  {
    id: 'e3',
    title: 'Lancement de l\'Album STAND',
    date: '1 Novembre 2025',
    time: '20:00',
    location: 'Grand Hall, District des Arts',
    venue: 'Grand Hall',
    price: 'À partir de $50',
    image: 'https://images.pexels.com/photos/1309599/pexels-photo-1309599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    descriptionKey: 'mEvt.e3Desc',
    description: "Le lancement officiel de l'album STAND de John Bajani P. Vivez l'album complet en performance live.",
    category: 'Lancement d\'Album',
    categoryKey: 'mEvt.albumLaunch',
  },
  {
    id: 'e4',
    title: 'Conférence de Musique Gospel 2025',
    date: '5–7 Décembre 2025',
    time: '09:00 Quotidien',
    location: 'Centre des Congrès, Kinshasa',
    venue: 'Centre des Congrès',
    price: 'À partir de $120',
    image: 'https://images.pexels.com/photos/8815037/pexels-photo-8815037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    descriptionKey: 'mEvt.e4Desc',
    description: "Une conférence de trois jours pour les artistes gospel, les chefs de louange et les professionnels de l'industrie. Ateliers, concerts et réseautage.",
    category: 'Conférence',
    categoryKey: 'mEvt.conference',
  },
];

export const studioServices: StudioService[] = [
  {
    id: 'recording',
    title: 'Enregistrement',
    titleKey: 'mStudioSvc.recordingTitle',
    description: "Enregistrement professionnel dans notre salle live traitée acoustiquement avec des micros de classe mondiale.",
    descriptionKey: 'mStudioSvc.recordingDesc',
    icon: 'Mic',
    price: 'À partir de $75/h',
  },
  {
    id: 'mixing',
    title: 'Mixage',
    titleKey: 'mStudioSvc.mixingTitle',
    description: "Donnez vie à vos morceaux avec nos ingénieurs expérimentés et notre flux de mixage hybride analogique-numérique.",
    descriptionKey: 'mStudioSvc.mixingDesc',
    icon: 'SlidersHorizontal',
    price: 'À partir de $200/morceau',
  },
  {
    id: 'mastering',
    title: 'Mastering',
    titleKey: 'mStudioSvc.masteringTitle',
    description: "Finition finale pour votre sortie. Fort, clair et optimisé pour les plateformes de streaming et les supports physiques.",
    descriptionKey: 'mStudioSvc.masteringDesc',
    icon: 'Disc3',
    price: 'À partir de $150/morceau',
  },
  {
    id: 'songwriting',
    title: 'Écriture de Chansons',
    titleKey: 'mStudioSvc.songwritingTitle',
    description: "Collaborez avec nos auteurs internes pour créer des chansons qui touchent les cœurs et résistent au temps.",
    descriptionKey: 'mStudioSvc.songwritingDesc',
    icon: 'PenLine',
    price: 'Sur devis',
  },
  {
    id: 'video-production',
    title: 'Production Vidéo',
    titleKey: 'mStudioSvc.videoTitle',
    description: "Vidéos musicales, sessions live et films de concert. Production complète du concept au montage final.",
    descriptionKey: 'mStudioSvc.videoDesc',
    icon: 'Video',
    price: 'À partir de $2,500',
  },
  {
    id: 'photography',
    title: 'Photographie',
    titleKey: 'mStudioSvc.photoTitle',
    description: "Pochettes d'albums, portraits d'artistes et photographie d'événements. Éclairage professionnel et direction créative.",
    descriptionKey: 'mStudioSvc.photoDesc',
    icon: 'Camera',
    price: 'À partir de $500/séance',
  },
];

export const musicTestimonials: Testimonial[] = [
  {
    id: 'mt1',
    name: 'John Bajani P',
    roleKey: 'mTest.mt1Role',
    role: 'Artiste et Producteur',
    quoteKey: 'mTest.mt1Quote',
    quote: "Merci à tous mes supporters pour vos années de soutien. Beaucoup d'amour à vous tous, et que les bénédictions de Dieu soient sur vous !!!",
    rating: 5,
  },
  {
    id: 'mt2',
    name: 'Mojalefa Maluka',
    roleKey: 'mTest.mt2Role',
    role: 'Artiste de Louange',
    quoteKey: 'mTest.mt2Quote',
    quote: "Travailler avec JB Records a transformé ma musique. John Bajani P ne se contente pas de produire des chansons — il capture l'onction dans chaque note.",
    rating: 5,
  },
  {
    id: 'mt3',
    name: 'Nano Makhathini',
    roleKey: 'mTest.mt3Role',
    role: 'Artiste Gospel',
    quoteKey: 'mTest.mt3Quote',
    quote: "L'équipe du studio est de classe mondiale. Ils ont capturé le cœur de ma louange dans chaque morceau. Le mixage et le mastering ont dépassé tout ce que j'imaginais.",
    rating: 5,
  },
];

// Re-export type
export type { Testimonial };
