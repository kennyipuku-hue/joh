import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type Lang = 'fr' | 'en';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

// Flat dictionary: keys are namespaced like "nav.home", "hero.title"
const dict: Record<string, { fr: string; en: string }> = {
  // ── Language toggle ──
  'lang.toggle': { fr: 'EN', en: 'FR' },
  'lang.label': { fr: 'English', en: 'Français' },

  // ── Company Home — Nav ──
  'nav.construction': { fr: 'Construction', en: 'Construction' },
  'nav.music': { fr: 'Musique', en: 'Music' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  'nav.company': { fr: 'Entreprise', en: 'Company' },

  // ── Company Home — Hero ──
  'home.badge': { fr: 'Deux divisions. Une vision.', en: 'Two Divisions. One Vision.' },
  'home.title1': { fr: 'Bâtir des communautés.', en: 'Building Communities.' },
  'home.title2': { fr: 'Inspirer des vies.', en: 'Inspiring Lives.' },
  'home.subtitle': {
    fr: "JB Group réunit deux divisions d'excellence. Des fondations qui durent des générations à la musique qui touche l'âme — nous bâtissons et nous inspirons.",
    en: 'JB Group is home to two world-class divisions. From foundations that last generations to music that moves the soul — we build and we inspire.',
  },
  'home.exploreConstruction': { fr: 'Explorer la Construction', en: 'Explore Construction' },
  'home.exploreMusic': { fr: 'Explorer la Musique', en: 'Explore Gospel Music' },
  'home.scroll': { fr: 'Défiler', en: 'Scroll' },

  // ── Company Home — Intro ──
  'home.ourStory': { fr: 'Notre Histoire', en: 'Our Story' },
  'home.introTitle': {
    fr: 'Une entreprise. Deux mondes d\'excellence.',
    en: 'One Company. Two Worlds of Excellence.',
  },
  'home.introText': {
    fr: "JB Group a été fondé sur une conviction simple : les bâtiments et la musique ont tous deux le pouvoir de transformer des vies. Ce qui a commencé comme une entreprise de construction s'est développé en une famille de deux divisions — chacune leader dans son domaine. Que nous coulions des fondations ou produisions des albums de louange, notre engagement reste le même : excellence, intégrité et impact.",
    en: 'JB Group was founded on a simple belief: that buildings and music both have the power to transform lives. What began as a construction company has grown into a family of two divisions — each a leader in its field. Whether we are pouring foundations or producing worship albums, our commitment remains the same: excellence, integrity, and impact.',
  },
  'home.stat1': { fr: "Années d'Excellence", en: 'Years of Excellence' },
  'home.stat2': { fr: 'Projets Réalisés', en: 'Projects Completed' },
  'home.stat3': { fr: 'Vies Touchées', en: 'Lives Touched' },

  // ── Company Home — Choose Experience ──
  'home.choosePath': { fr: 'Choisissez votre chemin', en: 'Choose Your Path' },
  'home.chooseTitle': { fr: 'Choisissez votre expérience', en: 'Choose Your Experience' },
  'home.chooseSubtitle': {
    fr: 'Chaque division est un monde à part. Sélectionnez celle qui vous parle.',
    en: 'Each division is a world of its own. Select the one that speaks to you.',
  },
  'home.constructionCard': { fr: 'Division Construction', en: 'Construction Division' },
  'home.constructionCardDesc': {
    fr: "Bâtir l'excellence de la fondation à la finition. Résidentiel, commercial, églises et rénovations.",
    en: 'Building excellence from foundation to finish. Residential, commercial, churches, and renovations.',
  },
  'home.enterConstruction': { fr: 'Entrer dans la Construction', en: 'Enter Construction' },
  'home.musicCard': { fr: 'Division Musique Gospel', en: 'Gospel Music Division' },
  'home.musicCardDesc': {
    fr: "Changer des vies par la musique gospel. Artistes, albums, vidéos, événements et un studio d'enregistrement de classe mondiale.",
    en: 'Changing lives through gospel music. Artists, albums, videos, events, and a world-class recording studio.',
  },
  'home.enterMusic': { fr: 'Entrer dans la Musique', en: 'Enter Gospel Music' },

  // ── Company Home — About ──
  'home.aboutLabel': { fr: 'À propos de JB Group', en: 'About JB Group' },
  'home.aboutTitle': {
    fr: 'Un héritage de construction et d\'inspiration',
    en: 'A Legacy of Building and Inspiring',
  },
  'home.aboutText1': {
    fr: "Fondé par John Bajani Pwanga, JB Group a commencé comme une petite entreprise de construction avec une grande vision. Au fil de 17 ans, nous sommes devenus une entreprise multi-division qui touche chaque aspect de la vie communautaire — des bâtiments où les gens vivent et travaillent, à la musique qui remplit leurs esprits.",
    en: 'Founded by John Bajani Pwanga, JB Group started as a small construction firm with a big vision. Over 17 years, we have grown into a multi-division company that touches every aspect of community life — from the buildings people live and work in, to the music that fills their spirits.',
  },
  'home.aboutText2': {
    fr: "Notre division construction a réalisé de nombreux projets, des maisons de luxe aux centres de culte. Notre division musique a produit des albums gospel et lancé les carrières d'artistes qui aujourd'hui conduisent la louange pour des millions de personnes.",
    en: 'Our construction division has delivered numerous projects, from luxury homes to worship centers. Our music division has produced gospel albums and launched the careers of artists who now lead worship for millions.',
  },
  'home.aboutConstruction': { fr: 'Maisons, églises, commercial', en: 'Homes, churches, commercial' },
  'home.aboutMusic': { fr: 'Artistes, albums, studio', en: 'Artists, albums, studio' },

  // ── Company Home — Why Choose Us ──
  'home.whyLabel': { fr: 'Nos Valeurs', en: 'Our Values' },
  'home.whyTitle': { fr: 'Pourquoi choisir JB Group', en: 'Why Choose JB Group' },
  'home.why1Title': { fr: 'Excellence prouvée', en: 'Proven Excellence' },
  'home.why1Text': {
    fr: "Les deux divisions sont des leaders reconnus, primées dans leurs industries respectives.",
    en: 'Both divisions are recognized leaders, award-winning in their respective industries.',
  },
  'home.why2Title': { fr: 'Capacité full-service', en: 'Full-Service Capability' },
  'home.why2Text': {
    fr: 'Du premier plan à la master finale, nous gérons chaque étape en interne.',
    en: 'From the first blueprint to the final master track, we handle every step in-house.',
  },
  'home.why3Title': { fr: 'Professionnels qualifiés', en: 'Skilled Professionals' },
  'home.why3Text': {
    fr: "Architectes, ingénieurs, producteurs — les meilleurs talents dans les deux domaines.",
    en: 'Architects, engineers, producers, and engineers — the best talent in both fields.',
  },
  'home.why4Title': { fr: 'Philosophie client d\'abord', en: 'Client-First Philosophy' },
  'home.why4Text': {
    fr: "Que vous construisiez une maison ou enregistriez un album, votre vision guide tout.",
    en: 'Whether you are building a home or recording an album, your vision drives everything.',
  },
  'home.why5Title': { fr: 'Accompagnement de bout en bout', en: 'End-to-End Support' },
  'home.why5Text': {
    fr: 'Nous sommes avec vous de la consultation à la réalisation, et bien après.',
    en: 'We are with you from consultation to completion, and long after.',
  },
  'home.why6Title': { fr: 'Impact communautaire', en: 'Community Impact' },
  'home.why6Text': {
    fr: 'Chaque projet et chaque chanson va au-delà du livrable — il s\'agit des personnes.',
    en: 'Every project and every song is about more than the deliverable — it is about people.',
  },

  // ── Company Home — Testimonials ──
  'home.testimonialsLabel': { fr: 'Témoignages', en: 'Testimonials' },
  'home.testimonialsTitle': { fr: 'Ce que les gens disent', en: 'What People Say' },
  'home.testimonialsSubtitle': {
    fr: 'Des propriétaires aux artistes, nos clients partagent leur expérience JB Group.',
    en: 'From homeowners to recording artists, our clients share their JB Group experience.',
  },

  // ── Company Home — Contact ──
  'home.contactLabel': { fr: 'Contactez-nous', en: 'Get in Touch' },
  'home.contactTitle': { fr: 'Contacter JB Group', en: 'Contact JB Group' },
  'home.contactText': {
    fr: "Une question sur la construction ou la musique ? Nous aimerions vous entendre. Envoyez-nous un message et nous répondrons sous 24 heures.",
    en: 'Have a question about construction or music? We would love to hear from you. Send us a message and we will respond within 24 hours.',
  },
  'home.callUs': { fr: 'Appelez-nous', en: 'Call Us' },
  'home.emailUs': { fr: 'Écrivez-nous', en: 'Email Us' },
  'home.visitUs': { fr: 'Visitez-nous', en: 'Visit Us' },
  'home.address': { fr: 'Kinshasa, République Démocratique du Congo', en: 'Kinshasa, Democratic Republic of the Congo' },

  // ── Construction — Nav links ──
  'cNav.home': { fr: 'Accueil', en: 'Home' },
  'cNav.services': { fr: 'Services', en: 'Services' },
  'cNav.projects': { fr: 'Projets', en: 'Projects' },
  'cNav.gallery': { fr: 'Galerie', en: 'Gallery' },
  'cNav.process': { fr: 'Processus', en: 'Process' },
  'cNav.team': { fr: 'Équipe', en: 'Team' },
  'cNav.quote': { fr: 'Devis', en: 'Quote' },
  'cNav.faq': { fr: 'FAQ', en: 'FAQ' },
  'cNav.contact': { fr: 'Contact', en: 'Contact' },
  'cNav.tagline': { fr: "Bâtir l'excellence", en: 'Building Excellence' },

  // ── Construction — Hero ──
  'cHero.badge': { fr: 'Division JB Projects Consulting', en: 'JB Projects Consulting Division' },
  'cHero.title1': { fr: "Bâtir l'excellence", en: 'Building Excellence' },
  'cHero.title2': { fr: 'de la fondation à la finition', en: 'from Foundation to Finish' },
  'cHero.subtitle': {
    fr: "Des maisons de luxe aux centres de culte, nous réalisons des projets de construction avec une qualité intransigeante, de la précision et du soin — à temps, à chaque fois.",
    en: 'From luxury homes to worship centers, we deliver construction projects with uncompromising quality, precision, and care — on time, every time.',
  },
  'cHero.quoteBtn': { fr: 'Demander un devis', en: 'Request a Quote' },
  'cHero.projectsBtn': { fr: 'Voir les projets', en: 'View Projects' },

  // ── Construction — Services ──
  'cServices.eyebrow': { fr: 'Ce que nous faisons', en: 'What We Do' },
  'cServices.title': { fr: 'Nos Services', en: 'Our Services' },
  'cServices.subtitle': {
    fr: 'Des services de construction complets, livrés avec précision et fierté.',
    en: 'Comprehensive construction services delivered with precision and pride.',
  },
  'cServices.viewAll': { fr: 'Voir tous les services', en: 'View All Services' },
  'cServices.ctaTitle': { fr: "Vous ne voyez pas ce qu'il vous faut ?", en: "Don't see what you need?" },
  'cServices.ctaText': {
    fr: 'Nous gérons des projets de toutes tailles. Contactez-nous pour discuter de vos besoins spécifiques.',
    en: 'We handle projects of every scale. Contact us to discuss your specific requirements.',
  },

  // ── Construction — Projects ──
  'cProjects.eyebrow': { fr: 'Notre travail', en: 'Our Work' },
  'cProjects.title': { fr: 'Projets en vedette', en: 'Featured Projects' },
  'cProjects.subtitle': {
    fr: 'Une sélection de nos plus belles réalisations de construction.',
    en: 'A selection of our finest construction achievements.',
  },
  'cProjects.viewAll': { fr: 'Voir tous les projets', en: 'View All Projects' },
  'cProjects.all': { fr: 'Tous', en: 'All' },
  'cProjects.beforeAfter': { fr: 'Avant & Après', en: 'Before & After' },
  'cProjects.beforeAfterSubtitle': {
    fr: 'Voyez les transformations spectaculaires que nous avons réalisées.',
    en: 'See the dramatic transformations we have brought to life.',
  },
  'cProjects.before': { fr: 'Avant', en: 'Before' },
  'cProjects.after': { fr: 'Après', en: 'After' },

  // ── Construction — Gallery ──
  'cGallery.title': { fr: 'Galerie de projets', en: 'Project Gallery' },
  'cGallery.subtitle': {
    fr: 'Un voyage visuel à travers nos travaux réalisés.',
    en: 'A visual journey through our completed work.',
  },

  // ── Construction — Process ──
  'cProcess.title': { fr: 'Processus de construction', en: 'Construction Process' },
  'cProcess.subtitle': {
    fr: "De la première consultation à la remise des clés, notre processus est conçu pour la transparence et la qualité.",
    en: 'From first consultation to final keys, our process is built for transparency and quality.',
  },

  // ── Construction — Team ──
  'cTeam.title': { fr: 'Rencontrez l\'équipe', en: 'Meet the Team' },
  'cTeam.subtitle': {
    fr: 'Les professionnels qualifiés derrière chaque projet JB Projects Consulting.',
    en: 'The skilled professionals behind every JB Projects Consulting project.',
  },

  // ── Construction — Quote ──
  'cQuote.title': { fr: 'Demander un devis', en: 'Request a Quote' },
  'cQuote.subtitle': {
    fr: 'Parlez-nous de votre projet et recevez une estimation détaillée gratuite sous 48 heures.',
    en: 'Tell us about your project and receive a free, detailed estimate within 48 hours.',
  },
  'cQuote.freeEstimate': { fr: 'Estimation gratuite', en: 'Free Estimate' },
  'cQuote.fastResponse': { fr: 'Réponse en 48h', en: '48-Hour Response' },
  'cQuote.detailedBreakdown': { fr: 'Détail complet', en: 'Detailed Breakdown' },
  'cQuote.noCost': { fr: 'Gratuit, sans engagement', en: 'No cost, no obligation' },
  'cQuote.transparent': { fr: 'Prix transparent et détaillé', en: 'Transparent, itemized pricing' },

  // ── Construction — FAQ ──
  'cFaq.title': { fr: 'Foire aux questions', en: 'Frequently Asked Questions' },
  'cFaq.subtitle': {
    fr: 'Réponses aux questions les plus courantes sur nos services de construction.',
    en: 'Answers to the most common questions about our construction services.',
  },

  // ── Construction — Contact ──
  'cContact.title': { fr: 'Contactez-nous', en: 'Contact Us' },
  'cContact.subtitle': {
    fr: 'Nous sommes là pour répondre à vos questions et démarrer votre prochain projet.',
    en: 'We are here to answer your questions and start your next project.',
  },
  'cContact.getInTouch': { fr: 'Nous contacter', en: 'Get in Touch' },
  'cContact.text': {
    fr: "Que vous ayez une question sur nos services, vouliez discuter d'un projet ou ayez besoin d'un devis, notre équipe est prête à vous aider.",
    en: 'Whether you have a question about our services, want to discuss a project, or need a quote, our team is ready to help.',
  },
  'cContact.monFri': { fr: 'Lun–Ven, 8H–18H', en: 'Mon–Fri, 8AM–6PM' },
  'cContact.reply24h': { fr: 'Réponse sous 24h', en: 'We reply within 24 hours' },

  // ── Construction — Why Choose Us ──
  'cWhy.eyebrow': { fr: 'Pourquoi nous', en: 'Why Us' },
  'cWhy.title': { fr: 'Pourquoi choisir JB Projects Consulting', en: 'Why Choose JB Projects Consulting' },

  // ── Construction — CTA ──
  'cCta.title': { fr: 'Prêt à bâtir quelque chose de grand ?', en: 'Ready to Build Something Great?' },
  'cCta.text': {
    fr: 'Donnons vie à votre vision. Demandez un devis gratuit aujourd\'hui.',
    en: "Let's turn your vision into reality. Request a free quote today.",
  },
  'cCta.btn': { fr: 'Demander votre devis gratuit', en: 'Request Your Free Quote' },

  // ── Music — Nav links ──
  'mNav.home': { fr: 'Accueil', en: 'Home' },
  'mNav.artists': { fr: 'Artistes', en: 'Artists' },
  'mNav.music': { fr: 'Musique', en: 'Music' },
  'mNav.videos': { fr: 'Vidéos', en: 'Videos' },
  'mNav.events': { fr: 'Événements', en: 'Events' },
  'mNav.studio': { fr: 'Studio', en: 'Studio' },
  'mNav.bookStudio': { fr: 'Réserver Studio', en: 'Book Studio' },
  'mNav.contact': { fr: 'Contact', en: 'Contact' },
  'mNav.tagline': { fr: 'Musique Gospel', en: 'Gospel Music' },

  // ── Music — Hero ──
  'mHero.badge': { fr: 'JB Records', en: 'JB Records' },
  'mHero.title1': { fr: 'Changer des vies par la', en: 'Changing Lives Through' },
  'mHero.title2': { fr: 'Musique Gospel', en: 'Gospel Music' },
  'mHero.subtitle': {
    fr: "Une louange qui touche l'âme. Des artistes qui conduisent avec un but. Un label et un studio dédiés au son du ciel sur terre.",
    en: 'Worship that moves the soul. Artists who lead with purpose. A record label and studio dedicated to the sound of heaven on earth.',
  },
  'mHero.listen': { fr: 'Écouter maintenant', en: 'Listen Now' },
  'mHero.watch': { fr: 'Voir les vidéos', en: 'Watch Videos' },

  // ── Music — Latest Release ──
  'mRelease.eyebrow': { fr: 'Dernière sortie', en: 'Latest Release' },
  'mRelease.newAlbum': { fr: 'Nouvel album', en: 'New Album' },
  'mRelease.listen': { fr: 'Écouter', en: 'Listen' },
  'mRelease.download': { fr: 'Télécharger', en: 'Download' },
  'mRelease.tracks': { fr: 'titres', en: 'tracks' },

  // ── Music — Featured Artist ──
  'mArtist.featured': { fr: 'Artiste en vedette', en: 'Featured Artist' },
  'mArtist.spotlight': { fr: 'Projecteur sur l\'artiste', en: 'Artist Spotlight' },
  'mArtist.monthlyListeners': { fr: 'auditeurs mensuels', en: 'monthly listeners' },
  'mArtist.viewPage': { fr: 'Voir la page de l\'artiste', en: 'View Artist Page' },

  // ── Music — Videos ──
  'mVideos.eyebrow': { fr: 'Regarder', en: 'Watch' },
  'mVideos.title': { fr: 'Dernières vidéos', en: 'Latest Music Videos' },
  'mVideos.viewAll': { fr: 'Voir tout', en: 'View All' },

  // ── Music — Artists ──
  'mArtists.eyebrow': { fr: 'Notre roster', en: 'Our Roster' },
  'mArtists.title': { fr: 'Artistes signés', en: 'Signed Artists' },
  'mArtists.subtitle': {
    fr: 'Les voix qui définissent JB Records.',
    en: 'The voices that define JB Records.',
  },
  'mArtists.pageTitle': { fr: 'Nos artistes', en: 'Our Artists' },
  'mArtists.pageSubtitle': {
    fr: 'Les voix ointes signées chez JB Records.',
    en: 'The anointed voices signed to JB Records.',
  },

  // ── Music — Events ──
  'mEvents.eyebrow': { fr: 'En direct', en: 'Live' },
  'mEvents.title': { fr: 'Événements à venir', en: 'Upcoming Events' },
  'mEvents.viewAll': { fr: 'Voir tout', en: 'View All' },
  'mEvents.pageTitle': { fr: 'Événements à venir', en: 'Upcoming Events' },
  'mEvents.pageSubtitle': {
    fr: 'Rejoignez-nous pour des soirées de louange, concerts, lancements d\'albums et conférences.',
    en: 'Join us for worship nights, concerts, album launches, and conferences.',
  },
  'mEvents.previous': { fr: 'Des événements précédents', en: 'From Previous Events' },
  'mEvents.aboutEvent': { fr: 'À propos de cet événement', en: 'About This Event' },
  'mEvents.date': { fr: 'Date', en: 'Date' },
  'mEvents.time': { fr: 'Heure', en: 'Time' },
  'mEvents.location': { fr: 'Lieu', en: 'Location' },
  'mEvents.tickets': { fr: 'Billets', en: 'Tickets' },
  'mEvents.registerNow': { fr: 'S\'inscrire maintenant', en: 'Register Now' },
  'mEvents.reserveSpot': { fr: 'Réservez votre place pour', en: 'Reserve your spot for' },
  'mEvents.buyTickets': { fr: 'Acheter des billets', en: 'Buy Tickets' },

  // ── Music — Studio ──
  'mStudio.pageTitle': { fr: 'JB Studios', en: 'JB Studios' },
  'mStudio.pageSubtitle': {
    fr: "Un studio d'enregistrement de classe mondiale, conçu pour la musique gospel.",
    en: 'A world-class recording facility built for gospel music.',
  },
  'mStudio.tour': { fr: 'Visite vidéo du studio', en: 'Studio Video Tour' },
  'mStudio.tourDesc': { fr: 'Découvrez nos installations', en: 'Take a walk through our facility' },
  'mStudio.equipment': { fr: 'Équipement & Salles', en: 'Equipment & Rooms' },
  'mStudio.facility': { fr: 'Installation', en: 'Facility' },
  'mStudio.services': { fr: 'Services du studio & tarifs', en: 'Studio Services & Pricing' },
  'mStudio.whatOffer': { fr: 'Ce que nous offrons', en: 'What We Offer' },
  'mStudio.team': { fr: 'L\'équipe', en: 'The Team' },
  'mStudio.productionTeam': { fr: 'Équipe de production', en: 'Production Team' },
  'mStudio.readyRecord': { fr: 'Prêt à enregistrer ?', en: 'Ready to Record?' },
  'mStudio.readyRecordText': {
    fr: 'Réservez votre session studio aujourd\'hui et créons quelque chose d\'éternel.',
    en: "Book your studio session today and let's create something eternal.",
  },
  'mStudio.bookSession': { fr: 'Réserver une session', en: 'Book a Session' },
  'mStudio.book': { fr: 'Réserver', en: 'Book' },

  // ── Music — Book Studio ──
  'mBook.title': { fr: 'Réserver une session', en: 'Book a Session' },
  'mBook.subtitle': {
    fr: 'Réservez votre temps à JB Studios. Parlez-nous de votre projet et nous confirmerons la disponibilité sous 24 heures.',
    en: 'Reserve your time at JB Studios. Tell us about your project and we will confirm availability within 24 hours.',
  },

  // ── Music — Submit Demo ──
  'mDemo.title': { fr: 'Devenir un artiste', en: 'Become an Artist' },
  'mDemo.subtitle': {
    fr: 'Êtes-vous appelé à la musique gospel ? Soumettez votre démo et rejoignez la famille JB Records.',
    en: 'Are you called to gospel music? Submit your demo and join the JB Records family.',
  },
  'mDemo.step1Title': { fr: 'Soumettre une démo', en: 'Submit Demo' },
  'mDemo.step1Text': { fr: 'Partagez votre musique avec notre équipe A&R', en: 'Share your music with our A&R team' },
  'mDemo.step2Title': { fr: 'Être évalué', en: 'Get Reviewed' },
  'mDemo.step2Text': { fr: 'Nous écoutons chaque soumission personnellement', en: 'We listen to every submission personally' },
  'mDemo.step3Title': { fr: 'Rejoindre la famille', en: 'Join the Family' },
  'mDemo.step3Text': { fr: 'Signer avec JB Records', en: 'Sign with JB Records' },
  'mDemo.ctaTitle': { fr: 'Êtes-vous appelé à la musique gospel ?', en: 'Are You Called to Gospel Music?' },
  'mDemo.ctaText': {
    fr: 'Nous cherchons toujours des artistes oints. Soumettez votre démo et rejoignez la famille JB Records.',
    en: 'We are always looking for anointed artists. Submit your demo and join the JB Records family.',
  },
  'mDemo.ctaBtn': { fr: 'Soumettre votre démo', en: 'Submit Your Demo' },

  // ── Music — Contact ──
  'mContact.title': { fr: 'Contactez-nous', en: 'Contact Us' },
  'mContact.subtitle': {
    fr: 'Nous aimerions vous entendre. Que vous soyez artiste, fan ou partenaire — contactez-nous.',
    en: 'We would love to hear from you. Whether you are an artist, a fan, or a partner — reach out.',
  },
  'mContact.getInTouch': { fr: 'Nous contacter', en: 'Get in Touch' },
  'mContact.text': {
    fr: 'Questions sur nos artistes, musique, événements ou studio ? Envoyez-nous un message.',
    en: 'Questions about our artists, music, events, or studio? Send us a message.',
  },
  'mContact.monFri': { fr: 'Lun–Ven, 9H–17H', en: 'Mon–Fri, 9AM–5PM' },

  // ── Music — Album ──
  'mAlbum.about': { fr: 'À propos de cet album', en: 'About This Album' },
  'mAlbum.trackList': { fr: 'Liste des titres', en: 'Track List' },
  'mAlbum.playAlbum': { fr: 'Écouter l\'album', en: 'Play Album' },
  'mAlbum.pauseAlbum': { fr: 'Pause album', en: 'Pause Album' },
  'mAlbum.buyAlbum': { fr: 'Acheter l\'album', en: 'Buy Album' },
  'mAlbum.behind': { fr: 'Les coulisses de l\'album', en: 'Behind the Album' },
  'mAlbum.related': { fr: 'Albums similaires', en: 'Related Albums' },
  'mAlbum.moreFrom': { fr: 'Plus de', en: 'More from' },

  // ── Music — Artist Detail ──
  'mArtistDetail.bio': { fr: 'Biographie', en: 'Biography' },
  'mArtistDetail.discography': { fr: 'Discographie', en: 'Discography' },
  'mArtistDetail.videos': { fr: 'Vidéos musicales', en: 'Music Videos' },
  'mArtistDetail.events': { fr: 'Événements à venir', en: 'Upcoming Events' },

  // ── Music — Testimonials ──
  'mTestimonials.eyebrow': { fr: 'Témoignages', en: 'Testimonials' },
  'mTestimonials.title': { fr: 'Ce que les artistes disent', en: 'What Artists Say' },

  // ── Music — Albums Page ──
  'mAlbums.title': { fr: 'Musique', en: 'Music' },
  'mAlbums.subtitle': {
    fr: 'Explorez notre catalogue complet d\'albums gospel, EP et singles.',
    en: 'Explore our full catalog of gospel albums, EPs, and singles.',
  },

  // ── Forms ──
  'form.fullName': { fr: 'Nom complet', en: 'Full Name' },
  'form.email': { fr: 'E-mail', en: 'Email' },
  'form.phone': { fr: 'Téléphone', en: 'Phone' },
  'form.subject': { fr: 'Sujet', en: 'Subject' },
  'form.message': { fr: 'Message', en: 'Message' },
  'form.send': { fr: 'Envoyer', en: 'Send Message' },
  'form.sending': { fr: 'Envoi...', en: 'Sending...' },
  'form.sent': { fr: 'Message envoyé !', en: 'Message Sent!' },
  'form.sentDesc': {
    fr: 'Merci de nous avoir contactés. Nous reviendrons vers vous sous 24 heures.',
    en: "Thank you for reaching out. We'll get back to you within 24 hours.",
  },
  'form.sendAnother': { fr: 'Envoyer un autre message', en: 'Send another message' },
  'form.error': { fr: 'Une erreur s\'est produite. Veuillez réessayer ou nous appeler directement.', en: 'Something went wrong. Please try again or call us directly.' },
  'form.howCanHelp': { fr: 'Comment pouvons-nous aider ?', en: 'How can we help?' },
  'form.tellProject': { fr: 'Parlez-nous de votre projet ou demande...', en: 'Tell us about your project or inquiry...' },
  'form.projectType': { fr: 'Type de projet', en: 'Project Type' },
  'form.selectType': { fr: 'Sélectionner un type...', en: 'Select type...' },
  'form.residential': { fr: 'Construction résidentielle', en: 'Residential Construction' },
  'form.commercial': { fr: 'Bâtiment commercial', en: 'Commercial Building' },
  'form.renovation': { fr: 'Rénovation', en: 'Renovation' },
  'form.interior': { fr: 'Finition intérieure', en: 'Interior Finishing' },
  'form.architecture': { fr: 'Architecture & Design', en: 'Architecture & Design' },
  'form.other': { fr: 'Autre', en: 'Other' },
  'form.budget': { fr: 'Budget estimé', en: 'Estimated Budget' },
  'form.selectBudget': { fr: 'Sélectionner une fourchette...', en: 'Select range...' },
  'form.projectLocation': { fr: 'Lieu du projet', en: 'Project Location' },
  'form.cityState': { fr: 'Ville, Pays', en: 'City, Country' },
  'form.projectDetails': { fr: 'Détails du projet', en: 'Project Details' },
  'form.describeProject': {
    fr: 'Décrivez votre projet, votre calendrier et vos exigences spécifiques...',
    en: 'Describe your project, timeline, and any specific requirements...',
  },
  'form.submitQuote': { fr: 'Demander un devis gratuit', en: 'Request Free Quote' },
  'form.submitting': { fr: 'Envoi...', en: 'Submitting...' },
  'form.quoteSent': { fr: 'Demande de devis reçue !', en: 'Quote Request Received!' },
  'form.quoteSentDesc': {
    fr: "Merci de votre intérêt. Notre équipe examinera votre projet et vous contactera sous 48 heures avec une estimation détaillée.",
    en: 'Thank you for your interest. Our team will review your project and contact you within 48 hours with a detailed estimate.',
  },
  'form.submitAnother': { fr: 'Soumettre une autre demande', en: 'Submit another request' },
  'form.stageName': { fr: 'Nom de scène', en: 'Stage Name' },
  'form.genre': { fr: 'Genre', en: 'Genre' },
  'form.selectGenre': { fr: 'Sélectionner un genre...', en: 'Select genre...' },
  'form.gospel': { fr: 'Gospel', en: 'Gospel' },
  'form.worship': { fr: 'Louange', en: 'Worship' },
  'form.contemporary': { fr: 'Gospel contemporain', en: 'Contemporary Gospel' },
  'form.choir': { fr: 'Chorale', en: 'Choral' },
  'form.christianRock': { fr: 'Rock chrétien', en: 'Christian Rock' },
  'form.songTitle': { fr: 'Titre du morceau', en: 'Song Title' },
  'form.demoLink': { fr: 'Lien démo (SoundCloud, YouTube, etc.)', en: 'Demo Link (SoundCloud, YouTube, etc.)' },
  'form.briefBio': { fr: 'Brève biographie', en: 'Brief Bio' },
  'form.tellJourney': {
    fr: 'Parlez-nous de votre parcours dans la musique et le ministère...',
    en: 'Tell us about your journey in music and ministry...',
  },
  'form.submitDemo': { fr: 'Soumettre la démo', en: 'Submit Demo' },
  'form.demoSent': { fr: 'Démo reçue !', en: 'Demo Received!' },
  'form.demoSentDesc': {
    fr: "Merci d'avoir partagé votre don avec nous. Notre équipe A&R examinera votre soumission et répondra sous 5 à 7 jours ouvrables.",
    en: 'Thank you for sharing your gift with us. Our A&R team will review your submission and respond within 5–7 business days.',
  },
  'form.serviceNeeded': { fr: 'Service requis', en: 'Service Needed' },
  'form.selectService': { fr: 'Sélectionner un service...', en: 'Select service...' },
  'form.recording': { fr: 'Enregistrement', en: 'Recording' },
  'form.mixing': { fr: 'Mixage', en: 'Mixing' },
  'form.mastering': { fr: 'Mastering', en: 'Mastering' },
  'form.songwriting': { fr: 'Écriture de chansons', en: 'Song Writing' },
  'form.videoProd': { fr: 'Production vidéo', en: 'Video Production' },
  'form.photography': { fr: 'Photographie', en: 'Photography' },
  'form.preferredDate': { fr: 'Date préférée', en: 'Preferred Date' },
  'form.projectNotes': { fr: 'Notes du projet', en: 'Project Notes' },
  'form.tellStudio': {
    fr: 'Parlez-nous de votre projet, nombre de morceaux, exigences spéciales...',
    en: 'Tell us about your project, number of songs, special requirements...',
  },
  'form.bookSession': { fr: 'Réserver la session', en: 'Book Session' },
  'form.bookingSent': { fr: 'Demande de réservation envoyée !', en: 'Booking Request Sent!' },
  'form.bookingSentDesc': {
    fr: "Nous avons reçu votre demande de réservation de studio. Notre coordinateur de studio confirmera la disponibilité sous 24 heures.",
    en: "We've received your studio booking request. Our studio coordinator will confirm availability within 24 hours.",
  },
  'form.bookAnother': { fr: 'Réserver une autre session', en: 'Book another session' },
  'form.numTickets': { fr: 'Nombre de billets', en: 'Number of Tickets' },
  'form.register': { fr: 'S\'inscrire maintenant', en: 'Register Now' },
  'form.processing': { fr: 'Traitement...', en: 'Processing...' },
  'form.registered': { fr: 'Vous êtes inscrit !', en: "You're Registered!" },
  'form.registeredDesc': {
    fr: 'Nous avons réservé votre place pour',
    en: "We've reserved your spot for",
  },
  'form.confirmationEmail': {
    fr: 'Un e-mail de confirmation avec les détails du billet est en route.',
    en: 'A confirmation email with ticket details is on its way.',
  },

  // ── Footer ──
  'footer.explore': { fr: 'Explorer', en: 'Explore' },
  'footer.otherDivision': { fr: 'Autre division', en: 'Other Division' },
  'footer.contact': { fr: 'Contact', en: 'Contact' },
  'footer.backToGroup': { fr: 'Retour à JB Group', en: 'Back to JB Group' },
  'footer.copyright': { fr: 'Tous droits réservés. Bâtir des communautés. Inspirer des vies.', en: 'All rights reserved. Building Communities. Inspiring Lives.' },

  // ── Construction Services data ──
  'cServ.consultTitle': { fr: 'Consultation', en: 'Consultation' },
  'cServ.consultDesc': { fr: "La consultation approfondie avant la construction aide à éviter des problèmes potentiels, à garantir que le projet est réalisable.", en: "Thorough consultation before construction helps avoid potential problems and ensures the project is feasible." },
  'cServ.consultF1': { fr: 'Étude de faisabilité', en: 'Feasibility study' },
  'cServ.consultF2': { fr: 'Analyse du site', en: 'Site analysis' },
  'cServ.consultF3': { fr: 'Conseil budgétaire', en: 'Budget advice' },
  'cServ.consultF4': { fr: 'Planification du calendrier', en: 'Schedule planning' },
  'cServ.constructionTitle': { fr: 'Construction', en: 'Construction' },
  'cServ.constructionDesc': { fr: "Nous avons une longue et fière histoire en mettant l'accent sur les résultats environnementaux, sociaux et économiques.", en: "We have a long and proud history emphasizing environmental, social, and economic results." },
  'cServ.constructionF1': { fr: 'Maisons résidentielles', en: 'Residential homes' },
  'cServ.constructionF2': { fr: 'Bâtiments commerciaux', en: 'Commercial buildings' },
  'cServ.constructionF3': { fr: 'Églises et centres de culte', en: 'Churches and worship centers' },
  'cServ.constructionF4': { fr: 'Infrastructure durable', en: 'Sustainable infrastructure' },
  'cServ.pmTitle': { fr: 'Gestion des Projets', en: 'Project Management' },
  'cServ.pmDesc': { fr: "Identification claire des objectifs du projet et des besoins du client. Établissement d'un budget réaliste et d'un calendrier de construction.", en: "Clear identification of project objectives and client needs. Establishing a realistic budget and construction schedule." },
  'cServ.pmF1': { fr: 'Suivi de budget', en: 'Budget tracking' },
  'cServ.pmF2': { fr: 'Gestion du calendrier', en: 'Schedule management' },
  'cServ.pmF3': { fr: 'Contrôle qualité', en: 'Quality control' },
  'cServ.pmF4': { fr: 'Conformité sécurité', en: 'Safety compliance' },
  'cServ.materialsTitle': { fr: 'Matériaux de Construction', en: 'Construction Materials' },
  'cServ.materialsDesc': { fr: "Nous comprenons l'importance cruciale des matériaux de construction modernes pour garantir la durabilité, la résilience et l'esthétique de chaque projet.", en: "We understand the crucial importance of modern construction materials to guarantee durability, resilience, and aesthetics for every project." },
  'cServ.materialsF1': { fr: 'Matériaux durables', en: 'Sustainable materials' },
  'cServ.materialsF2': { fr: 'Approvisionnement local', en: 'Local sourcing' },
  'cServ.materialsF3': { fr: 'Contrôle qualité', en: 'Quality control' },
  'cServ.materialsF4': { fr: 'Technologie moderne', en: 'Modern technology' },
  'cServ.maintenanceTitle': { fr: 'Maintenance des Maisons', en: 'Home Maintenance' },
  'cServ.maintenanceDesc': { fr: "Une fois la maison construite, la maintenance devient cruciale. Inspections régulières, réparation des dommages, remplacement des éléments défectueux.", en: "Once the house is built, maintenance becomes crucial. Regular inspections, damage repair, replacement of defective elements." },
  'cServ.maintenanceF1': { fr: 'Inspections régulières', en: 'Regular inspections' },
  'cServ.maintenanceF2': { fr: 'Réparations', en: 'Repairs' },
  'cServ.maintenanceF3': { fr: 'Entretien préventif', en: 'Preventive maintenance' },
  'cServ.maintenanceF4': { fr: 'Service après-vente', en: 'After-sales service' },
  'cServ.renovationTitle': { fr: 'Rénovation', en: 'Renovation' },
  'cServ.renovationDesc': { fr: "Transformez l'intérieur de votre maison avec des solutions de réaménagement intelligentes. De la cuisine à la salle de bains en passant par les espaces de vie.", en: "Transform your home's interior with smart remodeling solutions. From kitchen to bathroom to living spaces." },
  'cServ.renovationF1': { fr: 'Rénovation de cuisine', en: 'Kitchen renovation' },
  'cServ.renovationF2': { fr: 'Rénovation de salle de bains', en: 'Bathroom renovation' },
  'cServ.renovationF3': { fr: 'Agrandissement', en: 'Extension' },
  'cServ.renovationF4': { fr: 'Modernisation complète', en: 'Complete modernization' },

  // ── Construction Projects data ──
  'cProj.residential': { fr: 'Résidentiel', en: 'Residential' },
  'cProj.commercial': { fr: 'Commercial', en: 'Commercial' },
  'cProj.church': { fr: 'Église', en: 'Church' },
  'cProj.renovation': { fr: 'Rénovation', en: 'Renovation' },
  'cProj.kinshasaTitle': { fr: 'Résidence de Luxe à Kinshasa', en: 'Kinshasa Luxury Residence' },
  'cProj.kinshasaDesc': { fr: "Une résidence contemporaine de 600 m² avec baies vitrées du sol au plafond, piscine à débordement et éléments de design durable.", en: "A 600 sq m contemporary residence with floor-to-ceiling windows, infinity pool, and sustainable design elements." },
  'cProj.lubumbashiTitle': { fr: 'Complexe Résidentiel de Lubumbashi', en: 'Lubumbashi Residential Complex' },
  'cProj.lubumbashiDesc': { fr: "Un complexe d'appartements modernes de 48 unités avec commerce au rez-de-chaussée, terrasse sur le toit et parking souterrain.", en: "A 48-unit modern apartment complex with ground-floor retail, rooftop terrace, and underground parking." },
  'cProj.chapelTitle': { fr: 'Centre de Culte Grâce', en: 'Grace Worship Center' },
  'cProj.chapelDesc': { fr: "Un centre de culte de 1 200 places avec acoustique de pointe, restauration de vitraux et salle communautaire.", en: "A 1,200-seat worship center with state-of-the-art acoustics, stained glass restoration, and community hall." },
  'cProj.gomaTitle': { fr: 'Résidence Familiale de Goma', en: 'Goma Family Residence' },
  'cProj.gomaDesc': { fr: "Une maison familiale chaleureuse avec cuisine ouverte, espaces de vie ouverts et jardin paysager.", en: "A warm, family-friendly home with open-concept living, chef's kitchen, and landscaped backyard." },
  'cProj.katangaTitle': { fr: 'Tour de Bureaux de Katanga', en: 'Katanga Office Tower' },
  'cProj.katangaDesc': { fr: "Un immeuble de bureaux de 12 étages avec vitrage mur-rideau, lobby panoramique et certification de durabilité.", en: "A 12-story office tower with curtain-wall glazing, sky lobby, and sustainability certification." },
  'cProj.matadiTitle': { fr: 'Rénovation de Matadi', en: 'Matadi Renovation' },
  'cProj.matadiDesc': { fr: "Rénovation intérieure complète d'une maison des années 1970 en un espace de vie moderne et ouvert avec des finitions haut de gamme.", en: "Complete interior renovation of a 1970s home into a modern, open-plan living space with premium finishes." },

  // ── Construction Team data ──
  'cTeam.jdRole': { fr: 'Directeur Général', en: 'Managing Director' },
  'cTeam.jdBio': { fr: "Le PDG de JB Projects Consulting. Il est responsable de la prise de décisions clés, de la gestion des opérations et de la supervision de l'ensemble de l'entreprise.", en: "CEO of JB Projects Consulting. He is responsible for key decision-making, operations management, and overall company oversight." },
  'cTeam.dtRole': { fr: 'Responsable du Développement Commercial', en: 'Business Development Manager' },
  'cTeam.dtBio': { fr: "Il a acquis une vaste expérience dans la gestion stratégique, la supervision de projets et le leadership d'équipes performantes. Son engagement envers l'excellence opérationnelle et la satisfaction client.", en: "He has extensive experience in strategic management, project supervision, and leading high-performing teams. His commitment to operational excellence and client satisfaction." },
  'cTeam.nlRole': { fr: 'Directeur Provincial (Kinshasa)', en: 'Provincial Director (Kinshasa)' },
  'cTeam.nlBio': { fr: "Pilotage efficace de la planification stratégique pour assurer la croissance continue de l'entreprise et le développement de nouveaux marchés provinciaux.", en: "Effective strategic planning to ensure continuous company growth and development of new provincial markets." },
  'cTeam.dt2Role': { fr: 'Directeur Provincial (Katanga)', en: 'Provincial Director (Katanga)' },
  'cTeam.dt2Bio': { fr: "Pilotage efficace de la planification stratégique pour assurer la croissance continue de l'entreprise et le développement de nouveaux marchés provinciaux.", en: "Effective strategic planning to ensure continuous company growth and development of new provincial markets." },
  'cTeam.wlRole': { fr: 'Responsable de Chantier', en: 'Site Manager' },
  'cTeam.wlBio': { fr: "Il a acquis une vaste expérience dans la gestion stratégique, la supervision de projets et le leadership d'équipes performantes. Son engagement envers l'excellence opérationnelle et la satisfaction client.", en: "He has extensive experience in strategic management, project supervision, and leading high-performing teams. His commitment to operational excellence and client satisfaction." },
  'cTeam.taRole': { fr: 'Superviseur de Chantier', en: 'Site Supervisor' },
  'cTeam.taBio': { fr: "Il a acquis une vaste expérience dans la gestion stratégique, la supervision de projets et le leadership d'équipes performantes. Son engagement envers l'excellence opérationnelle et la satisfaction client.", en: "He has extensive experience in strategic management, project supervision, and leading high-performing teams. His commitment to operational excellence and client satisfaction." },
  'cTeam.viewAll': { fr: 'Voir toute l\'équipe', en: 'View Full Team' },
  'cTeam.leadership': { fr: 'Notre Équipe de Direction', en: 'Our Leadership Team' },

  // ── Construction Testimonials data ──
  'cTest.t1Role': { fr: 'Propriétaire, Résidence de Kinshasa', en: 'Homeowner, Kinshasa Residence' },
  'cTest.t1Quote': { fr: "JB Projects Consulting a transformé notre maison de rêve en réalité. Chaque détail a été exécuté avec précision et soin. L'équipe a été professionnelle du premier jour à la remise des clés.", en: "JB Projects Consulting turned our dream home into reality. Every detail was executed with precision and care. The team was professional from day one to handover." },
  'cTest.t2Role': { fr: 'Centre de Culte Grâce', en: 'Grace Worship Center' },
  'cTest.t2Quote': { fr: "Construire notre église était une confiance sacrée, et JB a honoré cela. L'acoustique, l'artisanat, le calendrier — tout a dépassé nos attentes.", en: "Building our church was a sacred trust, and JB honored that. The acoustics, the craftsmanship, the timeline — everything exceeded our expectations." },
  'cTest.t3Role': { fr: 'Tour de Bureaux de Katanga', en: 'Katanga Office Tower' },
  'cTest.t3Quote': { fr: "J'ai travaillé avec de nombreux entrepreneurs, mais JB Projects Consulting se distingue. Leur gestion de projet est irréprochable et leur qualité est inégalée.", en: "I have worked with many contractors, but JB Projects Consulting stands apart. Their project management is flawless and their quality is unmatched." },

  // ── Construction FAQ data ──
  'cFaq.q1': { fr: "Combien de temps prend un projet résidentiel typique ?", en: "How long does a typical residential project take?" },
  'cFaq.a1': { fr: "La durée dépend de divers facteurs, mais en moyenne, la construction d'une maison prend entre 6 mois et 1 an.", en: "The duration depends on various factors, but on average, building a house takes between 6 months and 1 year." },
  'cFaq.q2': { fr: "Proposez-vous des estimations gratuites ?", en: "Do you offer free estimates?" },
  'cFaq.a2': { fr: "Oui. Nous offrons des consultations initiales gratuites et des estimations pour tous les projets. Après examen de votre projet, nous fournissons un devis détaillé et transparent.", en: "Yes. We offer free initial consultations and estimates for all projects. After reviewing your scope, we provide a detailed, transparent quote." },
  'cFaq.q3': { fr: "Êtes-vous licenciés et assurés ?", en: "Are you licensed and insured?" },
  'cFaq.a3': { fr: "Absolument. JB Projects Consulting est pleinement licencié et assuré. Nous sommes basés en République Démocratique du Congo et opérons dans plusieurs provinces.", en: "Absolutely. JB Projects Consulting is fully licensed and insured. We are based in the Democratic Republic of the Congo and operate in multiple provinces." },
  'cFaq.q4': { fr: "Puis-je voir des exemples de vos travaux précédents ?", en: "Can I see examples of your previous work?" },
  'cFaq.a4': { fr: "Bien sûr. Notre portfolio inclut des maisons résidentielles, des bâtiments commerciaux, des églises et des rénovations. Nous sommes heureux d'organiser des visites de projets terminés sur demande.", en: "Certainly. Our portfolio includes residential homes, commercial buildings, churches, and renovations. We are happy to arrange site visits to completed projects upon request." },
  'cFaq.q5': { fr: "Offrez-vous des garanties sur votre travail ?", en: "Do you offer warranties on your work?" },
  'cFaq.a5': { fr: "Oui, tous nos projets sont garantis par notre engagement qualité. Nous utilisons des matériaux de construction modernes pour garantir la durabilité, la résilience et l'esthétique.", en: "Yes, all our projects are backed by our quality commitment. We use modern construction materials to guarantee durability, resilience, and aesthetics." },
  'cFaq.q6': { fr: "Quelles zones desservez-vous ?", en: "What areas do you serve?" },
  'cFaq.a6': { fr: "Nous desservons toute la République Démocratique du Congo avec des bureaux provinciaux à Kinshasa et Katanga. Pour les projets en dehors de ces zones, veuillez nous contacter pour discuter des arrangements.", en: "We serve the entire Democratic Republic of the Congo with provincial offices in Kinshasa and Katanga. For projects outside these areas, please contact us to discuss arrangements." },

  // ── Construction Process data ──
  'cProc.step1Title': { fr: 'Consultation', en: 'Consultation' },
  'cProc.step1Desc': { fr: "La consultation approfondie avant la construction aide à éviter des problèmes potentiels et à garantir que le projet est réalisable.", en: "Thorough consultation before construction helps avoid potential problems and ensures the project is feasible." },
  'cProc.step2Title': { fr: 'Design & Planification', en: 'Design & Planning' },
  'cProc.step2Desc': { fr: "Nos architectes créent des designs détaillés et des rendus 3D, sécurisant tous les permis et approbations nécessaires.", en: "Our architects create detailed designs and 3D renderings, securing all necessary permits and approvals." },
  'cProc.step3Title': { fr: 'Construction', en: 'Construction' },
  'cProc.step3Desc': { fr: "Nos équipes qualifiées donnent vie au design avec un contrôle qualité rigoureux à chaque étape de la construction.", en: "Our skilled crews bring the design to life with rigorous quality control at every stage of the build." },
  'cProc.step4Title': { fr: 'Finition & Inspection', en: 'Finishing & Inspection' },
  'cProc.step4Desc': { fr: "Finitions intérieures haut de gamme, inspections finales et une visite complète avant la remise des clés.", en: "Premium interior finishes, final inspections, and a comprehensive walk-through before we hand over the keys." },

  // ── Construction Why Choose Us data ──
  'cWhy.durabilityTitle': { fr: 'Durabilité', en: 'Durability' },
  'cWhy.durabilityDesc': { fr: "Des matériaux et des méthodes qui garantissent la durabilité, la résilience et l'esthétique de chaque projet.", en: "Materials and methods that guarantee durability, resilience, and aesthetics for every project." },
  'cWhy.onTimeTitle': { fr: 'Projets à temps', en: 'On-Time Projects' },
  'cWhy.onTimeDesc': { fr: "Nous respectons votre calendrier. Notre gestion de projet garantit que chaque étape est réalisée dans les délais.", en: "We respect your timeline. Our project management ensures every milestone is met on schedule." },
  'cWhy.techTitle': { fr: 'Technologie moderne', en: 'Modern Technology' },
  'cWhy.techDesc': { fr: "Des techniques et matériaux de construction modernes pour des résultats à la pointe de l'innovation.", en: "Modern construction techniques and materials for cutting-edge results." },
  'cWhy.designTitle': { fr: 'Dernière conception', en: 'Latest Design' },
  'cWhy.designDesc': { fr: "Des designs contemporains qui allient esthétique, fonctionnalité et respect de l'environnement.", en: "Contemporary designs that combine aesthetics, functionality, and environmental respect." },
  'cWhy.transparencyTitle': { fr: 'Transparence', en: 'Transparency' },
  'cWhy.transparencyDesc': { fr: "Nous croyons en la transparence, la communication ouverte et la qualité inégalée à chaque étape.", en: "We believe in transparency, open communication, and unmatched quality at every step." },
  'cWhy.collabTitle': { fr: 'Collaboration', en: 'Collaboration' },
  'cWhy.collabDesc': { fr: "Notre processus est conçu pour être transparent et collaboratif, garantissant que chaque étape est réalisée avec précision.", en: "Our process is designed to be transparent and collaborative, ensuring every step is executed with precision." },

  // ── Music Artists data ──
  'mArt.genreGospelWorship': { fr: 'Gospel / Louange', en: 'Gospel / Worship' },
  'mArt.genreWorship': { fr: 'Louange', en: 'Worship' },
  'mArt.genreGospelContemporary': { fr: 'Gospel / Contemporain', en: 'Gospel / Contemporary' },
  'mArt.genreChoralWorship': { fr: 'Chorale / Louange', en: 'Choral / Worship' },
  'mArt.johnBio': { fr: "Artiste aux multiples talents, auteur-compositeur, pianiste et producteur. En route pour devenir l'un des meilleurs producteurs de l'industrie gospel en Afrique.", en: "Multi-talented artist, songwriter, pianist, and producer. Heading to become one of the top finest producers in the gospel music industry in Africa." },
  'mArt.johnFullBio': { fr: "John Bajani P. est un artiste aux multiples talents, auteur-compositeur, pianiste et producteur. Il se dirige pour devenir l'un des meilleurs producteurs de l'industrie de la musique gospel en Afrique aujourd'hui. Il a écrit et produit de nombreuses chansons pour différents artistes et a finalement sorti son album gospel de début intitulé 'STAND', qui a un genre musical mixte. Cet album est un travail sensationnel et bien produit. Quelque chose que chaque individu qui aime la musique gospel et les sons doux devrait avoir dans sa collection.", en: "John Bajani P. is a multi-talented artist, songwriter, pianist, and producer. He is heading to become one of the top finest producers in the gospel music industry in Africa today. He has written and produced many songs for different artists and has finally come up with his debut Gospel Album entitled 'STAND', which has a mixed musical genre. This album is a sensational and well produced work. Something every individual who loves Gospel and sweet sound music should have in their collection." },
  'mArt.mojalefaBio': { fr: "Artiste de louange produit par JB Records, connu pour son album 'WORSHIP'.", en: "Worship artist produced by JB Records, known for his album 'WORSHIP'." },
  'mArt.mojalefaFullBio': { fr: "Mojalefa Maluka est un artiste de louange produit par John Bajani Production. Son album 'WORSHIP' est une collection profonde de chants de louange qui touchent les cœurs et élèvent les esprits vers Dieu.", en: "Mojalefa Maluka is a worship artist produced by John Bajani Production. His album 'WORSHIP' is a profound collection of worship songs that touch hearts and lift spirits toward God." },
  'mArt.nanoBio': { fr: "Artiste gospel contemporain produit par JB Records, connu pour son album 'HEALED'.", en: "Contemporary gospel artist produced by JB Records, known for his album 'HEALED'." },
  'mArt.nanoFullBio': { fr: "Nano Makhathini est un artiste gospel contemporain produit par JB Production. Son album 'HEALED' raconte des histoires de guérison, de restauration et de la puissance de la foi à travers une musique qui touche l'âme.", en: "Nano Makhathini is a contemporary gospel artist produced by JB Production. His album 'HEALED' tells stories of healing, restoration, and the power of faith through soul-touching music." },
  'mArt.collectiveBio': { fr: "Le collectif de louange de JB Records, réunissant des voix ointes pour des performances puissantes.", en: "The JB Records worship collective, bringing together anointed voices for powerful performances." },
  'mArt.collectiveFullBio': { fr: "Le JB Worship Collective est le chœur phare de JB Records. Fondé par John Bajani P, le collectif réunit des chanteurs d'églises à travers l'Afrique. Leurs harmonies sont célestes et leurs performances live sont connues pour amener les publics à se lever et à se prosterner.", en: "The JB Worship Collective is JB Records' flagship choir. Founded by John Bajani P, the collective brings together singers from churches across Africa. Their harmonies are heavenly and their live performances are known to bring audiences to their feet and to their knees." },

  // ── Music Albums data ──
  'mAlbum.standDesc': { fr: "L'album gospel de début de John Bajani P, intitulé 'STAND', a un genre musical mixte. C'est un travail sensationnel et bien produit que chaque amateur de musique gospel devrait avoir dans sa collection.", en: "John Bajani P's debut Gospel Album entitled 'STAND' has a mixed musical genre. It is a sensational and well produced work that every Gospel music lover should have in their collection." },
  'mAlbum.standBehind': { fr: "STAND a été enregistré et produit par John Bajani P dans les studios JB. L'album mélange plusieurs genres musicaux pour créer un son unique qui parle à tous. Chaque piste a été soigneusement composée et produite pour toucher les cœurs et élever les esprits.", en: "STAND was recorded and produced by John Bajani P at JB Studios. The album blends several musical genres to create a unique sound that speaks to everyone. Each track was carefully composed and produced to touch hearts and elevate spirits." },
  'mAlbum.auMilieuDesc': { fr: "Une production John Bajani qui célèbre la fidélité de Dieu au milieu de toutes les circonstances de la vie. Un album rempli de louange et d'adoration profonde.", en: "A John Bajani production celebrating God's faithfulness in the midst of all life's circumstances. An album filled with praise and deep worship." },
  'mAlbum.auMilieuBehind': { fr: "AU MILIEU DE TOUT est une production de John Bajani qui reflète la fidélité de Dieu dans toutes les situations. Chaque chanson est un témoignage de la bonté de Dieu.", en: "AU MILIEU DE TOUT is a John Bajani production reflecting God's faithfulness in all situations. Each song is a testimony of God's goodness." },
  'mAlbum.worshipDesc': { fr: "Une collection profonde de chants de louange produits par JB Production. Mojalefa Maluka nous invite dans la présence de Dieu à travers chaque piste.", en: "A profound collection of worship songs produced by JB Production. Mojalefa Maluka invites us into God's presence through every track." },
  'mAlbum.worshipBehind': { fr: "WORSHIP a été produit par John Bajani Production. L'album capture l'essence de l'adoration véritable à travers des chants qui élèvent l'âme.", en: "WORSHIP was produced by John Bajani Production. The album captures the essence of true worship through songs that elevate the soul." },
  'mAlbum.healedDesc': { fr: "Un album qui raconte des histoires de guérison et de restauration. Produit par JB Production, HEALED est un témoignage musical de la puissance de la foi.", en: "An album telling stories of healing and restoration. Produced by JB Production, HEALED is a musical testimony of the power of faith." },
  'mAlbum.healedBehind': { fr: "HEALED a été produit par JB Production. Nano Makhathini partage son témoignage personnel de guérison à travers chaque chanson de cet album inspirant.", en: "HEALED was produced by JB Production. Nano Makhathini shares his personal testimony of healing through every song on this inspiring album." },
  'mAlbum.testifyDesc': { fr: "Un album live enregistré par le JB Worship Collective. Des harmonies célestes et des performances puissantes qui élèvent l'âme.", en: "A live album recorded by the JB Worship Collective. Heavenly harmonies and powerful performances that elevate the soul." },
  'mAlbum.testifyBehind': { fr: "I SHALL TESTIFY a été enregistré en live par le JB Worship Collective sous la direction de John Bajani P. L'album capture l'énergie et l'onction d'une soirée de louange en direct.", en: "I SHALL TESTIFY was recorded live by the JB Worship Collective under the direction of John Bajani P. The album captures the energy and anointing of a live worship night." },

  // ── Music Events data ──
  'mEvt.worshipNight': { fr: 'Soirée de Louange', en: 'Worship Night' },
  'mEvt.gospelConcert': { fr: 'Concert Gospel', en: 'Gospel Concert' },
  'mEvt.albumLaunch': { fr: "Lancement d'Album", en: 'Album Launch' },
  'mEvt.conference': { fr: 'Conférence', en: 'Conference' },
  'mEvt.e1Desc': { fr: "Une soirée inoubliable de louange avec John Bajani P et un groupe live complet. Ouverture des portes à 18h00.", en: "An unforgettable evening of worship with John Bajani P and a full live band. Doors open at 6:00 PM." },
  'mEvt.e2Desc': { fr: "Un concert gospel multi-artistes mettant en vedette tous les artistes de JB Records dans une nuit de louange.", en: "A multi-artist gospel concert featuring all JB Records artists in one night of praise." },
  'mEvt.e3Desc': { fr: "Le lancement officiel de l'album STAND de John Bajani P. Vivez l'album complet en performance live.", en: "The official album launch for John Bajani P's STAND. Experience the full album performed live." },
  'mEvt.e4Desc': { fr: "Une conférence de trois jours pour les artistes gospel, les chefs de louange et les professionnels de l'industrie. Ateliers, concerts et réseautage.", en: "A three-day conference for gospel artists, worship leaders, and industry professionals. Workshops, concerts, and networking." },

  // ── Music Studio Services data ──
  'mStudioSvc.recordingTitle': { fr: 'Enregistrement', en: 'Recording' },
  'mStudioSvc.recordingDesc': { fr: "Enregistrement professionnel dans notre salle live traitée acoustiquement avec des micros de classe mondiale.", en: "Professional recording in our acoustically-treated live room with world-class microphones." },
  'mStudioSvc.mixingTitle': { fr: 'Mixage', en: 'Mixing' },
  'mStudioSvc.mixingDesc': { fr: "Donnez vie à vos morceaux avec nos ingénieurs expérimentés et notre flux de mixage hybride analogique-numérique.", en: "Bring your tracks to life with our experienced engineers and analog-digital hybrid mixing workflow." },
  'mStudioSvc.masteringTitle': { fr: 'Mastering', en: 'Mastering' },
  'mStudioSvc.masteringDesc': { fr: "Finition finale pour votre sortie. Fort, clair et optimisé pour les plateformes de streaming et les supports physiques.", en: "Final polish for your release. Loud, clear, and optimized for streaming platforms and physical media." },
  'mStudioSvc.songwritingTitle': { fr: 'Écriture de Chansons', en: 'Song Writing' },
  'mStudioSvc.songwritingDesc': { fr: "Collaborez avec nos auteurs internes pour créer des chansons qui touchent les cœurs et résistent au temps.", en: "Collaborate with our in-house writers to craft songs that move hearts and stand the test of time." },
  'mStudioSvc.videoTitle': { fr: 'Production Vidéo', en: 'Video Production' },
  'mStudioSvc.videoDesc': { fr: "Vidéos musicales, sessions live et films de concert. Production complète du concept au montage final.", en: "Music videos, live sessions, and concert films. Full production from concept to final edit." },
  'mStudioSvc.photoTitle': { fr: 'Photographie', en: 'Photography' },
  'mStudioSvc.photoDesc': { fr: "Pochettes d'albums, portraits d'artistes et photographie d'événements. Éclairage professionnel et direction créative.", en: "Album covers, artist portraits, and event photography. Professional lighting and creative direction." },

  // ── Music Testimonials data ──
  'mTest.mt1Role': { fr: 'Artiste et Producteur', en: 'Artist and Producer' },
  'mTest.mt1Quote': { fr: "Merci à tous mes supporters pour vos années de soutien. Beaucoup d'amour à vous tous, et que les bénédictions de Dieu soient sur vous !!!", en: "Thank you to all my supporters for your years of support. Much love to you all, and may God's blessings be upon you!!!" },
  'mTest.mt2Role': { fr: 'Artiste de Louange', en: 'Worship Artist' },
  'mTest.mt2Quote': { fr: "Travailler avec JB Records a transformé ma musique. John Bajani P ne se contente pas de produire des chansons — il capture l'onction dans chaque note.", en: "Working with JB Records transformed my music. John Bajani P doesn't just produce songs — he captures the anointing in every note." },
  'mTest.mt3Role': { fr: 'Artiste Gospel', en: 'Gospel Artist' },
  'mTest.mt3Quote': { fr: "L'équipe du studio est de classe mondiale. Ils ont capturé le cœur de ma louange dans chaque morceau. Le mixage et le mastering ont dépassé tout ce que j'imaginais.", en: "The studio team is world-class. They captured the heart of my worship in every track. The mixing and mastering exceeded everything I imagined." },

  // ── Studio room descriptions ──
  'mStudio.recordingRoomTitle': { fr: 'Salle d\'Enregistrement', en: 'Recording Room' },
  'mStudio.recordingRoomDesc': { fr: "Notre salle live traitée acoustiquement accueille jusqu'à 30 musiciens, avec des micros de classe mondiale de Neumann, AKG et Shure.", en: "Our acoustically-treated live room accommodates up to 30 musicians, featuring world-class microphones from Neumann, AKG, and Shure." },
  'mStudio.mixingRoomTitle': { fr: 'Salle de Mixage', en: 'Mixing Room' },
  'mStudio.mixingRoomDesc': { fr: "Une suite de mixage hybride analogique-numérique avec console Solid State Logic, Pro Tools HDX et une bibliothèque de plugins.", en: "A hybrid analog-digital mixing suite with a Solid State Logic console, Pro Tools HDX, and a curated plugin library." },

  // ── Studio team ──
  'mStudioTeam.johnRole': { fr: 'Producteur Principal', en: 'Chief Producer' },
  'mStudioTeam.johnDesc': { fr: "Fondateur de JB Records et producteur multi-instrumentiste.", en: "Founder of JB Records and multi-instrumentalist producer." },
  'mStudioTeam.engineerRole': { fr: 'Ingénieur Principal', en: 'Chief Engineer' },
  'mStudioTeam.engineerDesc': { fr: "Expert en enregistrement et mixage avec des années d'expérience.", en: "Recording and mixing expert with years of experience." },
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = dict[key];
      if (!entry) return key;
      return entry[lang];
    },
    [lang],
  );

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
