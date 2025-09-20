import type { Session, Day, Poster } from './types';

export interface CommitteeMember {
  name: string;
  role: 'Présidente' | 'Membre';
}

export const ORGANIZING_COMMITTEE_DATA: CommitteeMember[] = [
  { name: 'Leila Douik El Gharbi', role: 'Présidente' },
  { name: 'Ahmed Abdelghani', role: 'Membre' },
  { name: 'Sonia Maalej', role: 'Membre' },
  { name: 'Nadia Romdhane', role: 'Membre' },
  { name: 'Chiraz Aichaouia', role: 'Membre' },
  { name: 'Maher Abouda', role: 'Membre' },
  { name: 'Sameh Msaed', role: 'Membre' },
  { name: 'Rym Rafrafi', role: 'Membre' },
  { name: 'Mohamed Turki', role: 'Membre' },
  { name: 'Zouhair Souissi', role: 'Membre' }
];

export const SCIENTIFIC_COMMITTEE_DATA: CommitteeMember[] = [
    { name: 'Sameh Msaad', role: 'Présidente' },
    { name: 'Bouthaina Hammami', role: 'Membre' },
    { name: 'Chiraz Mbarek', role: 'Membre' },
    { name: 'Fatma Charfi', role: 'Membre' },
    { name: 'Fatma Guezguez', role: 'Membre' },
    { name: 'Fatma Kamoun', role: 'Membre' },
    { name: 'Fida Allaya', role: 'Membre' },
    { name: 'Hana Mrassi', role: 'Membre' },
    { name: 'Houda Rouis', role: 'Membre' },
    { name: 'Ibtihel Khouaja', role: 'Membre' },
    { name: 'Ikram Aloulou', role: 'Membre' },
    { name: 'Ikram Kammoun', role: 'Membre' },
    { name: 'Imen Sahnoun', role: 'Membre' },
    { name: 'Imene Magroun', role: 'Membre' },
    { name: 'Ines Trabelsi', role: 'Membre' },
    { name: 'Leila Abid', role: 'Membre' },
    { name: 'Leila Triki', role: 'Membre' },
    { name: 'Manel Maalej', role: 'Membre' },
    { name: 'Mohamed Turki', role: 'Membre' },
    { name: 'Nada Kotti', role: 'Membre' },
    { name: 'Nadia Keskes', role: 'Membre' },
    { name: 'Narjes Abid', role: 'Membre' },
    { name: 'Rim Kamoun', role: 'Membre' },
    { name: 'Saloua Jameleddine', role: 'Membre' },
    { name: 'Samira Mhamdi', role: 'Membre' },
    { name: 'Sana Aissa', role: 'Membre' },
    { name: 'Sondes Briki', role: 'Membre' },
    { name: 'Souha Kallel', role: 'Membre' }
];


export const SESSIONS_DATA: Session[] = [
    // Jeudi 9 octobre 2025
    {
      id: 'j1-1',
      title: 'Accueil des participants',
      startTime: new Date(2025, 9, 9, 9, 0),
      endTime: new Date(2025, 9, 9, 10, 0),
      location: 'Hall d\'accueil',
      speakers: [],
      theme: 'Accueil',
      type: 'accueil',
      description: 'Accueil et inscription des participants pour les formations précongrès.',
      details: [],
      introduction: "Accueil et enregistrement des participants pour les formations précongrès, offrant une première occasion de réseautage et de préparation pour les journées à venir.",
      objectives: [
        "Finaliser l'inscription des participants.",
        "Remettre les badges et le matériel du congrès.",
        "Orienter les participants vers les salles de formation."
      ]
    },
    {
      id: 'j1-2',
      title: 'La polysomnographie chez l\'adulte : de l\'initiation à la maîtrise',
      startTime: new Date(2025, 9, 9, 10, 0),
      endTime: new Date(2025, 9, 9, 18, 0),
      location: 'Salle A',
      speakers: [
        { name: 'Fida ALLAYA', specialty: 'Neuro-physiologiste', role: 'CHU de Clermont-Ferrand France' },
        { name: 'Ikram ALOULOU', specialty: 'Physiologiste', role: 'Service de Physiologie - Hôpital Abderrahmen Mami Ariana' },
        { name: 'Chiraz AICHAOUIA', specialty: 'Pneumologue', role: 'Service de Pneumologie - Hôpital Militaire de Tunis' },
        { name: 'Ines MOUSSA', specialty: 'Pneumologue', role: 'Service de Pneumolgie D - Hôpital Abderrahmen Mami Ariana' },
        { name: 'Istabrak ABDELKAFI', specialty: 'Pneumologie' }
      ],
      theme: 'Formation',
      type: 'formation',
      description: 'Journée de formations précongrès (2 sessions en parallèle).',
      details: [],
      isParallel: true,
      introduction: "Cette formation intensive est conçue pour guider les participants à travers les aspects fondamentaux et avancés de la polysomnographie (PSG) chez l'adulte. De la préparation du patient à l'interprétation des tracés complexes, cette session vise à consolider les compétences techniques et cliniques.",
      objectives: [
        "Maîtriser les montages et les capteurs pour une PSG de qualité.",
        "Apprendre à identifier et scorer les différents stades de sommeil et événements respiratoires.",
        "Savoir interpréter un rapport de PSG et le corréler aux symptômes cliniques."
      ]
    },
    {
      id: 'j1-3',
      title: 'La polygraphie ventilatoire de A à Z',
      startTime: new Date(2025, 9, 9, 10, 0),
      endTime: new Date(2025, 9, 9, 18, 0),
      location: 'Salle B',
      speakers: [
        { name: 'Imen SAHNOUN', specialty: 'Pneumologue' },
        { name: 'Hana MRASSI', specialty: 'Pneumologue', role: 'Service de Pneumologie D - Hôpital Abderrahmen Mami Ariana' },
        { name: 'Ines TRABELSI', specialty: 'Pédiatre', role: "Service de Pédiatrie Pavillon 4 - Hôpital d'enfants Bab Saadoun Tunis" },
        { name: 'Narjess ABID', specialty: '' },
        { name: 'Mohamed TURKI', specialty: 'Pneumologue', role: 'Past-Président de la STMS' },
      ],
      theme: 'Formation',
      type: 'formation',
      description: 'Public : Résidents & médecins de toutes spécialités. Participants : 30 maximum.',
      details: [],
      isParallel: true,
      introduction: "Cette formation intensive a pour but de fournir une expertise pratique dans la lecture des polygraphies ventilatoires pour adultes et enfants. La méthodologie est axée sur la pratique avec des démonstrations, un travail en sous-groupes sur des cas réels, et un encadrement par des experts pour un feedback individualisé.",
      objectives: [
        "Comprendre les spécificités techniques et cliniques de la polygraphie adulte et enfant.",
        "Reconnaître et scorer correctement les événements respiratoires selon les critères AASM.",
        "Savoir repérer les artefacts et interpréter les profils ventilatoires.",
        "Rédiger un rapport structuré et pertinent.",
        "Développer son autonomie de lecture à partir de cas réels."
      ]
    },
    {
      id: 'j1-4',
      title: 'Suivi pratique d\'un patient sous VNI : interprétation des rapports et des courbes',
      startTime: new Date(2025, 9, 9, 15, 0),
      endTime: new Date(2025, 9, 9, 17, 0),
      location: 'Salle C',
      speakers: [{ name: 'Claudia LLONTOP', specialty: 'Pneumologue', role: "Unité ambulatoire d'appareillage respiratoire de domicile - Groupe Hospitalier Pitié-Salpêtrière Paris" }],
      theme: 'VNI',
      type: 'atelier',
      description: 'Atelier pratique.',
      details: [],
      isParallel: true,
      introduction: "Cet atelier se concentre sur les aspects pratiques du suivi des patients traités par ventilation non invasive (VNI). Les participants apprendront à décrypter les données de télésuivi, à interpréter les courbes de ventilation et à ajuster les paramètres pour améliorer l'efficacité du traitement et l'adhérence du patient.",
      objectives: [
        "Comprendre les différents paramètres rapportés par les appareils de VNI.",
        "Identifier les fuites, les asynchronies et autres anomalies sur les courbes.",
        "Savoir adapter les réglages de la VNI en fonction des données de suivi."
      ]
    },

    // Vendredi 10 octobre 2025
    {
      id: 'j2-1',
      title: 'Accueil et inscription',
      startTime: new Date(2025, 9, 10, 8, 0),
      endTime: new Date(2025, 9, 10, 9, 0),
      location: 'Hall d\'accueil',
      speakers: [],
      theme: 'Accueil',
      type: 'accueil',
      description: '',
      details: [],
      introduction: "Ouverture officielle du congrès avec l'accueil et l'inscription de tous les participants. C'est le moment idéal pour récupérer votre badge et planifier votre journée.",
      objectives: [
        "Assurer un processus d'inscription fluide pour tous les congressistes.",
        "Fournir les informations nécessaires pour le déroulement du congrès.",
        "Faciliter les premières rencontres entre participants."
      ]
    },
    {
      id: 'j2-a1',
      title: 'A1 : Les effets secondaires de la PPC : vers une gestion personnalisée',
      startTime: new Date(2025, 9, 10, 9, 0),
      endTime: new Date(2025, 9, 10, 10, 30),
      location: 'Salle A',
      speakers: [
        { name: 'Houda ROUIS', specialty: 'Pneumologue', role: 'Service de Pneumolgie D - Hôpital Abderrahmen Mami Ariana' },
        { name: 'Ines MOUSSA', specialty: 'Pneumologue', role: 'Service de Pneumolgie D - Hôpital Abderrahmen Mami Ariana' }
      ],
      theme: 'PPC',
      type: 'atelier',
      description: 'Ateliers en parallèle',
      details: [],
      isParallel: true,
      introduction: "La pression positive continue (PPC) est le traitement de référence du SAHOS, mais ses effets secondaires peuvent compromettre l'observance. Cet atelier explore les défis courants (fuites, sécheresse, inconfort) et propose des stratégies pour une gestion personnalisée et proactive.",
      objectives: [
        "Identifier les effets secondaires les plus fréquents de la PPC.",
        "Proposer des solutions pratiques pour chaque type d'effet secondaire.",
        "Développer une approche centrée sur le patient pour améliorer l'observance du traitement."
      ]
    },
    {
      id: 'j2-a2',
      title: 'A2 : Masques VNI en 2025 : choix, mise en place et entretien',
      startTime: new Date(2025, 9, 10, 9, 0),
      endTime: new Date(2025, 9, 10, 10, 30),
      location: 'Salle B',
      speakers: [
        { name: 'Christophe JOIGNEAU', specialty: '' }
      ],
      theme: 'VNI',
      type: 'atelier',
      description: 'Sponsorisé par RESMED',
      details: [],
      isParallel: true,
      introduction: "Le masque est l'interface clé du succès de la VNI. Cet atelier, sponsorisé par RESMED, présente les dernières innovations en matière de masques, les critères de choix en fonction de la morphologie et des besoins du patient, ainsi que les bonnes pratiques pour l'ajustement et l'entretien.",
      objectives: [
        "Connaître les différents types de masques VNI et leurs indications.",
        "Maîtriser les techniques d'ajustement pour minimiser les fuites et maximiser le confort.",
        "Conseiller les patients sur l'entretien quotidien de leur masque."
      ]
    },
    {
      id: 'j2-a3',
      title: 'A3 : SAHS central et combiné : optimisation de la prise en charge',
      startTime: new Date(2025, 9, 10, 9, 0),
      endTime: new Date(2025, 9, 10, 10, 30),
      location: 'Salle C',
      speakers: [{ name: 'Nadia KESKES BOUDAOUARA', specialty: 'Pneumologie' }, {name: 'Houda SNENE', specialty:''}],
      theme: 'SAHOS',
      type: 'atelier',
      description: 'Ateliers en parallèle',
      details: [],
      isParallel: true,
      introduction: "Le diagnostic et le traitement du syndrome d'apnées-hypopnées du sommeil (SAHS) de type central ou combiné représentent un défi clinique. Cet atelier vise à clarifier les mécanismes physiopathologiques et à discuter des stratégies diagnostiques et thérapeutiques les plus récentes pour optimiser la prise en charge.",
      objectives: [
        "Distinguer les apnées centrales, obstructives et mixtes sur les enregistrements.",
        "Comprendre les étiologies des apnées centrales (cardiaques, neurologiques, etc.).",
        "Discuter des options thérapeutiques spécifiques (VNI asservie, oxygénothérapie)."
      ]
    },
    {
      id: 'j2-a4',
      title: 'A4 : Insomnie en médecine de première ligne : de la plainte au traitement',
      startTime: new Date(2025, 9, 10, 9, 0),
      endTime: new Date(2025, 9, 10, 10, 30),
      location: 'Salle D',
      speakers: [{ name: 'Rim RAFRAFI', specialty: 'Psychiatre', role: 'Chef du Service de Psychiatrie - Hôpital Mongi Slim Marsa' }],
      theme: 'Insomnie',
      type: 'atelier',
      description: 'Ateliers en parallèle',
      details: [],
      isParallel: true,
      introduction: "L'insomnie est une plainte fréquente en médecine générale. Cet atelier propose une approche structurée pour le médecin de première ligne, allant de l'évaluation initiale de la plainte à la mise en place de stratégies thérapeutiques non pharmacologiques et pharmacologiques, en passant par l'identification des comorbidités.",
      objectives: [
        "Mener un interrogatoire efficace pour caractériser l'insomnie.",
        "Identifier les drapeaux rouges nécessitant un avis spécialisé.",
        "Initier une prise en charge de première intention (hygiène du sommeil, TCC-I, prescription raisonnée)."
      ]
    },
    {
      id: 'j2-2',
      title: 'Mot d\'ouverture',
      startTime: new Date(2025, 9, 10, 10, 45),
      endTime: new Date(2025, 9, 10, 11, 0),
      location: 'Salle plénière',
      speakers: [{ name: 'Leila DOUIK EL GHARBI', specialty: 'Pneumologue', role: 'Chef du Service de Pneumologie Pavillon D - Hôpital Abderrahmen Mami Ariana' }],
      theme: 'Accueil',
      type: 'cérémonie',
      description: '',
      details: [],
      introduction: "Discours inaugural marquant l'ouverture officielle du 8ème Congrès de la Société Tunisienne de Médecine du Sommeil. Une introduction aux thèmes majeurs et aux moments forts de l'événement.",
      objectives: [
        "Souhaiter la bienvenue aux participants, orateurs et partenaires.",
        "Présenter les objectifs et les thèmes principaux du congrès.",
        "Déclarer officiellement l'ouverture des sessions scientifiques."
      ]
    },
    {
      id: 'j2-3',
      title: 'Hypoventilation et hypoxémie liées au sommeil chez l\'adulte (Séance en collaboration avec la STMRA)',
      startTime: new Date(2025, 9, 10, 11, 0),
      endTime: new Date(2025, 9, 10, 12, 30),
      location: 'Salle plénière',
      speakers: [
        { name: 'Maher ABOUDA', specialty: 'Pneumologue', role: 'Chef du Service de Médecine à orientation Pneumologique du Centre Hospitalier Châteaudun' },
        { name: 'Sonia MAALEJ', specialty: 'Pneumologue', role: 'Chef du Service de Pneumologie Pavillon I - Hôpital Abderrahmen Mami Ariana' },
        { name: 'Rahma GARGOURI', specialty: 'Pneumologue', role: 'Service de Pneumologie - Hôpital Hedi Chaker Sfax' }
      ],
      moderators: ['Mohamed TURKI', 'Lilia MASMOUDI', 'Hafaoua DAGHFOUS'],
      theme: 'Hypoventilation',
      type: 'séance',
      description: '',
      details: [
        'C1: Hypoxémie liée au sommeil : de la physiologie à la pratique clinique - Maher ABOUDA',
        'C2: Dépister les troubles respiratoires du sommeil chez les patients atteints de FPI : quand, comment et pourquoi ? - Sonia MAALEJ',
        'C3: Faut-il s\'occuper du sommeil de nos patients BPCO ? - Rahma GARGOURI'
      ],
      introduction: "Cette session plénière, en collaboration avec la STMRA, aborde la complexité de l'hypoventilation et de l'hypoxémie nocturnes. Des experts discuteront de la physiopathologie, des méthodes de dépistage dans des populations spécifiques comme les patients FPI, et de la pertinence de la prise en charge chez les patients BPCO.",
      objectives: [
        "Comprendre les mécanismes physiopathologiques de l'hypoxémie nocturne.",
        "Savoir quand et comment dépister les troubles respiratoires du sommeil chez les patients atteints de FPI.",
        "Évaluer l'impact et les stratégies de prise en charge du sommeil chez les patients BPCO."
      ]
    },
    {
      id: 'j2-4',
      title: 'Symposium AIR LIQUIDE',
      startTime: new Date(2025, 9, 10, 12, 30),
      endTime: new Date(2025, 9, 10, 13, 0),
      location: 'Salle plénière',
      speakers: [{ name: 'Claudia LLONTOP', specialty: 'Pneumologue', role: "Unité ambulatoire d'appareillage respiratoire de domicile - Groupe Hospitalier Pitié-Salpêtrière Paris" }],
      moderators: ['Leila DOUIK EL GHARBI'],
      theme: 'VNI',
      type: 'symposium',
      description: 'VNI chez les patients neuromusculaires : conseils pratiques et partage d’expériences.',
      details: [],
      introduction: "Ce symposium est dédié à l'utilisation de la ventilation non invasive (VNI) chez les patients atteints de maladies neuromusculaires. À travers des conseils pratiques et le partage d'expériences cliniques, cette session vise à optimiser l'initiation et le suivi de la VNI dans cette population fragile.",
      objectives: [
        "Identifier les critères d'initiation de la VNI chez le patient neuromusculaire.",
        "Discuter des modalités de ventilation et des réglages spécifiques.",
        "Partager des astuces pratiques pour améliorer l'adhérence et la qualité de vie."
      ]
    },
    {
      id: 'j2-5',
      title: 'Déjeuner',
      startTime: new Date(2025, 9, 10, 13, 0),
      endTime: new Date(2025, 9, 10, 15, 0),
      location: 'Restaurant',
      speakers: [],
      theme: 'Pause',
      type: 'pause',
      description: '',
      details: [],
      isParallel: true,
      introduction: "Pause déjeuner. L'occasion de se restaurer et de continuer les discussions de la matinée dans un cadre convivial.",
      objectives: []
    },
    {
      id: 'j2-6',
      title: 'Communications orales',
      startTime: new Date(2025, 9, 10, 13, 0),
      endTime: new Date(2025, 9, 10, 14, 30),
      location: 'Salle A',
      speakers: [],
      moderators: ['Nadia ROMDHANE', 'Ibtihel KHOUAJA', 'Sana AISSA'],
      theme: 'Recherche',
      type: 'communications',
      description: '',
      details: [
        '1. Activation autonomique et risque cardiovasculaire au cours du syndrome d’apnées hypopnées obstructives du sommeil',
        '2. Dépistage de l’apnée du sommeil : quand un smartphone sur le thorax suffit',
        '3. How does obesity impair sleep quality in Tunisian people',
        '4. Les troubles du sommeil chez la femme obèse enceinte',
        '5. Prevalence and risk factors of obstructive sleep apnea syndrome among Tunisian adults: a cross-sectional study of 2859 subjects',
        '6. Obstructive Sleep Apnea Risk and Early Vascular Alterations: Implication of Endothelial Function Testing',
        '7. Sleep Apnea Syndrome in Cardiology: Inaugural Experience of a Sleep Laboratory in Sub-Saharan Africa'
      ],
      isParallel: true,
      introduction: "Présentation des travaux de recherche les plus prometteurs soumis au congrès. Une vitrine de la recherche clinique et fondamentale en médecine du sommeil.",
      objectives: [
        "Partager les résultats de recherches originales.",
        "Stimuler la discussion scientifique.",
        "Identifier de nouvelles pistes de recherche."
      ]
    },
    {
      id: 'j2-7',
      title: 'Présentation de protocoles de recherche',
      startTime: new Date(2025, 9, 10, 13, 0),
      endTime: new Date(2025, 9, 10, 14, 30),
      location: 'Salle B',
      speakers: [],
      moderators: ['Sonia ROUATBI', 'Hafaoua DAGHFOUS', 'Leila BOUSSOUFFARA'],
      theme: 'Recherche',
      type: 'séance',
      description: '',
      details: [],
      isParallel: true,
      introduction: "Découvrez les projets de recherche en cours et à venir. Cette session offre un aperçu des futures avancées et des opportunités de collaboration.",
      objectives: [
        "Présenter la méthodologie de projets de recherche innovants.",
        "Obtenir des retours de la communauté scientifique.",
        "Encourager les collaborations multicentriques."
      ]
    },
    {
      id: 'j2-8',
      title: 'Nouvelles approches thérapeutiques du SAHOS',
      startTime: new Date(2025, 9, 10, 15, 0),
      endTime: new Date(2025, 9, 10, 16, 30),
      location: 'Salle plénière',
      speakers: [
        { name: 'Zinet MARRAKCHI', specialty: 'Endocrinologie -Diabétologie', role: 'Libre pratique' },
        { name: 'Samira MHAMDI', specialty: 'Pneumologue', role: 'Service de Pneumologie - Hôpital Militaire de Tunis' },
        { name: 'Mohamed TURKI', specialty: 'Pneumologue', role: 'Past-Président de la STMS' }
      ],
      moderators: ['Chiraz AICHAOUIA', 'Olfa BERRICH', 'Anis MAATALLAH'],
      theme: 'SAHOS',
      type: 'séance',
      description: '',
      details: [
        'C4 : Nouveautés thérapeutiques dans le couple obésité-sommeil - Zinet MARRAKCHI',
        'C5 : SAHOS : l\'espoir de nouveaux médicaments efficaces - Samira MHAMDI',
        'C6 : SAHOS sévère : place de la PPC - Mohamed TURKI'
      ],
      introduction: "Au-delà de la PPC, le paysage thérapeutique du SAHOS est en pleine évolution. Cette session explore les dernières avancées, des approches novatrices pour le couple obésité-sommeil aux nouvelles perspectives médicamenteuses, en passant par la place toujours centrale de la PPC dans les formes sévères.",
      objectives: [
        "Discuter des stratégies thérapeutiques intégrées pour les patients obèses atteints de SAHOS.",
        "Explorer le potentiel et les limites des nouveaux traitements pharmacologiques du SAHOS.",
        "Réaffirmer les indications et l'importance de la PPC dans le SAHOS sévère."
      ]
    },
    {
      id: 'j2-9',
      title: 'Pause vigilance',
      startTime: new Date(2025, 9, 10, 16, 30),
      endTime: new Date(2025, 9, 10, 17, 0),
      location: 'Espace exposition',
      speakers: [],
      theme: 'Pause',
      type: 'pause',
      description: '',
      details: [],
      introduction: "Une courte pause pour se rafraîchir, visiter les stands et rester vigilant pour les sessions de fin de journée.",
      objectives: []
    },
    {
      id: 'j2-10',
      title: 'De l\'insomnie à l\'hypersomnie : quoi de neuf ?',
      startTime: new Date(2025, 9, 10, 17, 0),
      endTime: new Date(2025, 9, 10, 18, 0),
      location: 'Salle plénière',
      speakers: [
        { name: 'Rim RAFRAFI', specialty: 'Psychiatre', role: 'Chef du Service de Psychiatrie - Hôpital Mongi Slim Marsa' },
        { name: 'Isabelle ARNULF', specialty: 'Neurologue', role: 'Chef du Service des Pathologies du Sommeil - Groupe Hospitalier Pitié-Salpêtrière Paris' }
      ],
      moderators: ['Maher ABOUDA', 'Mouna BEN DJEBARA', 'Sonia HAMMAMI'],
      theme: 'Insomnie',
      type: 'séance',
      description: '',
      details: [
        'C7: Nouveaux traitements médicamenteux de l\'insomnie - Rim RAFRAFI',
        'C8: Hypersomnie centrale - Isabelle ARNULF'
      ],
      introduction: "Cette session fait le point sur les avancées récentes dans le diagnostic et le traitement des troubles de la vigilance, couvrant le spectre de l'insomnie à l'hypersomnie. Les intervenants présenteront les nouvelles approches médicamenteuses pour l'insomnie et les dernières connaissances sur l'hypersomnie centrale.",
      objectives: [
        "Découvrir les nouvelles classes de médicaments pour le traitement de l'insomnie.",
        "Comprendre la physiopathologie et les outils diagnostiques de l'hypersomnie centrale.",
        "Actualiser ses connaissances sur la prise en charge des hypersomnies idiopathique et narcoleptique."
      ]
    },
    {
      id: 'j2-11',
      title: 'Symposium BMC médical',
      startTime: new Date(2025, 9, 10, 18, 0),
      endTime: new Date(2025, 9, 10, 18, 40),
      location: 'Salle plénière',
      speakers: [{ name: 'Dr Julien Favier', specialty: ''}],
      moderators: ['Sonia MAALEJ'],
      theme: 'Symposium',
      type: 'symposium',
      description: 'Apnée du sommeil : fardeau caché, enjeux diagnostiques et thérapeutiques',
      details: [],
      introduction: "Un symposium dédié à un sujet d'actualité en médecine du sommeil, présenté par nos partenaires industriels. L'occasion de découvrir les dernières innovations technologiques ou thérapeutiques.",
      objectives: [
        "Présenter une innovation ou une avancée clinique majeure.",
        "Discuter de l'impact de cette avancée sur la pratique quotidienne.",
        "Favoriser l'échange entre les experts et les participants."
      ]
    },
    {
      id: 'j2-12',
      title: 'Soirée et remise des prix des meilleurs projets de recherche',
      startTime: new Date(2025, 9, 10, 21, 0),
      endTime: new Date(2025, 9, 11, 0, 0),
      location: 'Salle de gala',
      speakers: [],
      theme: 'Cérémonie',
      type: 'cérémonie',
      description: '',
      details: [],
      introduction: "Soirée de gala pour célébrer l'excellence scientifique. Les meilleurs projets de recherche seront récompensés lors de cette cérémonie conviviale.",
      objectives: [
        "Récompenser les contributions scientifiques exceptionnelles.",
        "Célébrer les réussites de la communauté.",
        "Favoriser le réseautage dans un cadre festif."
      ]
    },

    // Samedi 11 octobre 2025
    {
      id: 'j3-a5',
      title: 'A5: Hypersomnolence, hypersomnie, somnolence diurne excessive et fatigue chronique : faisons le point',
      startTime: new Date(2025, 9, 11, 8, 30),
      endTime: new Date(2025, 9, 11, 10, 0),
      location: 'Salle A',
      speakers: [
        { name: 'Fida ALLAYA', specialty: 'Neuro-physiologiste', role: 'CHU de Clermont-Ferrand France' },
        { name: 'Istabrak ABDELKAFI', specialty: 'Pneumologie' }
      ],
      theme: 'Hypersomnie',
      type: 'atelier',
      description: 'Ateliers en parallèle',
      details: [],
      isParallel: true,
      introduction: "La terminologie autour de la somnolence peut être confuse. Cet atelier vise à clarifier les définitions (hypersomnolence, hypersomnie, SDE, fatigue), à proposer une démarche diagnostique structurée pour débrouiller ces plaintes, et à discuter des échelles d'évaluation et des examens complémentaires pertinents.",
      objectives: [
        "Différencier cliniquement l'hypersomnie, la somnolence diurne excessive et la fatigue.",
        "Établir un plan d'investigation face à une plainte de somnolence.",
        "Utiliser et interpréter correctement les outils d'évaluation (échelles, TILE, TME)."
      ]
    },
    {
      id: 'j3-a6',
      title: 'A6: Syndrome des jambes sans repos : quelles stratégies ?',
      startTime: new Date(2025, 9, 11, 8, 30),
      endTime: new Date(2025, 9, 11, 10, 0),
      location: 'Salle B',
      speakers: [{ name: 'Isabelle ARNULF', specialty: 'Neurologue', role: 'Chef du Service des Pathologies du Sommeil - Groupe Hospitalier Pitié-Salpêtrière Paris' }],
      theme: 'Neurologie',
      type: 'atelier',
      description: 'Ateliers en parallèle',
      details: [],
      isParallel: true,
      introduction: "Le syndrome des jambes sans repos (SJSR) est un trouble sensitivomoteur fréquent et souvent invalidant. Cet atelier abordera les stratégies de prise en charge, en commençant par les mesures non pharmacologiques, la gestion de la carence martiale, et en discutant des options médicamenteuses de première et seconde intention.",
      objectives: [
        "Confirmer le diagnostic du SJSR et rechercher les facteurs aggravants.",
        "Optimiser la prise en charge de la carence martiale, même sans anémie.",
        "Discuter de l'utilisation rationnelle des agonistes dopaminergiques et autres traitements."
      ]
    },
    {
      id: 'j3-a7',
      title: 'A7: Évaluation et rééducation des fonctions oro-myofaciales chez les patients SAHOS',
      startTime: new Date(2025, 9, 11, 8, 30),
      endTime: new Date(2025, 9, 11, 10, 0),
      location: 'Salle C',
      speakers: [
        { name: 'Syrine ABDENNADHER', specialty: 'Kinésithérapeute' },
        { name: 'Rim BEN JEMAA', specialty: 'Dentiste', role: 'Libre pratique' }
      ],
      theme: 'SAHOS',
      type: 'atelier',
      description: 'Simulation pratique et réalité virtuelle',
      details: [],
      isParallel: true,
      introduction: "La thérapie myofonctionnelle est une approche thérapeutique émergente pour le SAHOS. Cet atelier pratique proposera une simulation d'évaluation des fonctions oro-myofaciales et présentera des exercices de rééducation qui peuvent être proposés aux patients pour améliorer le tonus des voies aériennes supérieures.",
      objectives: [
        "Apprendre à réaliser une évaluation de base des fonctions oro-myofaciales.",
        "Démontrer des exercices de rééducation linguale et pharyngée.",
        "Comprendre la place de la thérapie myofonctionnelle dans l'arsenal thérapeutique du SAHOS."
      ]
    },
    {
      id: 'j3-a8',
      title: 'A8: Troubles respiratoires obstructifs du sommeil (TROS) chez l\'enfant',
      startTime: new Date(2025, 9, 11, 8, 30),
      endTime: new Date(2025, 9, 11, 10, 0),
      location: 'Salle D',
      speakers: [
        { name: 'Ines TRABELSI', specialty: 'Pédiatre', role: "Service de Pédiatrie Pavillon 4 - Hôpital d'enfants Bab Saadoun Tunis" },
        { name: 'Souha KALLEL', specialty: 'ORL', role: "Service d'ORL - Hôpital Hedi Chaker Sfax" }
      ],
      theme: 'Pédiatrie',
      type: 'atelier',
      description: 'Prise en charge multidisciplinaire',
      details: [],
      isParallel: true,
      introduction: "La prise en charge des TROS chez l'enfant nécessite une collaboration étroite entre différentes spécialités. Cet atelier mettra en lumière l'importance d'une approche multidisciplinaire (pédiatre, ORL, orthodontiste) pour le diagnostic, le traitement et le suivi de ces troubles aux conséquences potentiellement graves.",
      objectives: [
        "Reconnaître les signes cliniques des TROS chez l'enfant.",
        "Comprendre les rôles respectifs du pneumo-pédiatre et de l'ORL.",
        "Planifier une stratégie de prise en charge coordonnée."
      ]
    },
    {
      id: 'j3-1',
      title: 'Pause vigilance',
      startTime: new Date(2025, 9, 11, 10, 0),
      endTime: new Date(2025, 9, 11, 10, 30),
      location: 'Espace exposition',
      speakers: [],
      theme: 'Pause',
      type: 'pause',
      description: '',
      details: [],
      introduction: "Une pause matinale pour un café et pour visiter les stands avant d'entamer la suite du programme scientifique.",
      objectives: []
    },
    {
      id: 'j3-2',
      title: 'Sommeil et maladies neurologiques chez l\'enfant et l\'adulte',
      startTime: new Date(2025, 9, 11, 10, 30),
      endTime: new Date(2025, 9, 11, 11, 30),
      location: 'Salle plénière',
      speakers: [
        { name: 'Fatma KAMMOUN', specialty: 'Neuro-pédiatre', role: 'Service de Neuropédiatrie - Hôpital Hedi Chaker Sfax' },
        { name: 'Amina GARGOURI', specialty: 'Neurologue', role: 'Service de Neurologie - Hôpital Razi Mannouba' },
        { name: 'Istabrak ABDELKAFI', specialty: 'Pneumologie' }
      ],
      moderators: ['Chahnez TRIKI', 'Sameh MSAAD'],
      theme: 'Neurologie',
      type: 'séance',
      description: 'Une association dangereuse',
      details: [
        'C9 : Sommeil et épilepsie : des interactions réciproques - Fatma KAMMOUN',
        'C10 : Troubles du comportement du sommeil paradoxal (TCSP) : un symptôme avant-coureur des maladies neurodégénératives ? - Amina GARGOURI, Istabrak ABDELKAFI'
      ],
      introduction: "Cette session explore les liens bidirectionnels et souvent complexes entre le sommeil et les maladies neurologiques. Les discussions porteront sur les interactions entre sommeil et épilepsie, ainsi que sur le rôle du trouble du comportement en sommeil paradoxal (TCSP) comme marqueur précoce de maladies neurodégénératives.",
      objectives: [
        "Comprendre comment l'épilepsie et le sommeil s'influencent mutuellement.",
        "Identifier les caractéristiques cliniques et polysomnographiques du TCSP.",
        "Reconnaître le TCSP comme un symptôme avant-coureur de synucléinopathies."
      ]
    },
    {
      id: 'j3-4',
      title: 'Petit patient, grand impact : troubles du sommeil chez l\'enfant et l\'adolescent',
      startTime: new Date(2025, 9, 11, 11, 30),
      endTime: new Date(2025, 9, 11, 12, 30),
      location: 'Salle plénière',
      speakers: [
        { name: 'Fatma CHARFI', specialty: 'Pédo-psychiatre', role: 'Chef de Service de Pédopsychiatrie - Hôpital Mongi Slim Marsa' },
        { name: 'Randoline AYOUB', specialty: 'Pédo-psychiatre', role: 'Service de Pédo-psychiatrie - Hôpital Fatouma Bourguiba Monastir' },
        { name: 'Laures MADDOURI', specialty: 'Pédo-psychiatre', role: 'Service de Pédopsychiatrie - Hôpital Mongi Slim Marsa' }
      ],
      moderators: ['Chahnez TRIKI', 'Ines TRABELSI'],
      theme: 'Pédiatrie',
      type: 'séance',
      description: '',
      details: [
        'C11: Insomnie chez l\'enfant et l\'adolescent : causes et solutions - Fatma CHARFI, Laures MADDOURI',
        'C12 : Troubles du sommeil et TDAH : l\'œuf ou la poule ? - Randoline AYOUB'
      ],
      introduction: "Les troubles du sommeil pédiatriques ont des répercussions majeures sur le développement et le fonctionnement de l'enfant. Cette session se penchera sur les causes et solutions de l'insomnie pédiatrique et explorera la relation complexe et souvent débattue entre les troubles du sommeil et le TDAH.",
      objectives: [
        "Diagnostiquer et prendre en charge l'insomnie comportementale de l'enfant.",
        "Discuter des différentes causes d'insomnie chez l'adolescent.",
        "Analyser les liens entre TDAH et troubles du sommeil et leurs implications thérapeutiques."
      ]
    },
    {
      id: 'j3-5',
      title: 'Remise des prix des meilleurs communications et posters',
      startTime: new Date(2025, 9, 11, 12, 30),
      endTime: new Date(2025, 9, 11, 13, 30),
      location: 'Salle plénière',
      speakers: [],
      theme: 'Cérémonie',
      type: 'cérémonie',
      description: '',
      details: [],
      introduction: "Cérémonie de clôture avec la remise des prix pour les meilleures communications orales et affichées. Un moment pour reconnaître et célébrer la qualité des travaux présentés.",
      objectives: [
        "Honorer l'excellence dans la communication scientifique.",
        "Mettre en avant les travaux les plus impactants du congrès.",
        "Clôturer le congrès sur une note positive."
      ]
    },
];
  
export const POSTERS_DATA: Poster[] = [
  { id: 'p1', title: "Biomarqueurs de l'inflammation sanguine dans le syndrome d'apnées hypopnées obstructives du sommeil : Intérêt diagnostique ?", authors: "Lenda Ben Hmida, Chiraz Aichaouia, Mhamed Sami, Zied Moatemri", affiliation: "Service de pneumologie, CHU Hedi Chaker Sfax Tunisie", summary: `Introduction : Le syndrome d’apnées hypopnées obstructives du sommeil (SAHOS) est connu comme un trouble à importante composante inflammatoire systémique. 
Objectif : Évaluer la valeur diagnostique de certains biomarqueurs inflammatoires sanguins chez les patients atteints de SAHOS.
Méthodes : Il s’agit d’une étude rétrospective portant sur dossiers de patients explorés pour suspicion de SAHOS, permettant de les répartir en deux groupes : un groupe SAHOS (Index apnées hypopnées (IAH) ≥ 5 événements/heure) et un groupe non SAHOS (IAH < 5 événements/heure). Chez tous les patients, une numération formule sanguine (NFS) et un dosage de la protéine C-réactive (CRP) ont été réalisés le jour de la polygraphie ventilatoire, avec calcul du rapport Neutrophiles-lymphocytes (NLR) et plaquettes-lymphocytes (PLR). 
Résultats : Parmi les 100 patients inclus, 65 présentaient un SAHOS (répartis en 42% léger, 20% modéré, et 38% sévère) et 35 étaient classés dans le groupe non SAHOS. L’âge médian a été de 53 ± 12 ans. Le sexe ratio a été de 0,72. L’obésité a été notée chez 76% des patients avec un IMC moyen à 34 ± 5.9 kg/m2. Soixante pour cent des patients rapportaient une somnolence diurne excessive. Les patients du groupe SAHOS présentaient des taux plus élevés de CRP (7,4 ± 4 vs 6,5 ± 4 mg/L ; p=0.21), de globules blancs (médiane de 10192 vs 7045/mm3 ; p=0,285), de neutrophiles (médiane de 4178 vs 3705/mm3 ; p=0,126), de lymphocytes (médiane de 2291 vs 2357/mm3 ; p=0,769), et de plaquettes (médiane de 255000 vs 242000/mm3 ; p=0.527). Un taux significativement plus élevé d’hémoglobine a été trouvé chez les patients SAHOS (médiane de 13,9 g/dl) par rapport aux non SAHOS (médiane de 13,9 g/dl ; p=0.024). En termes de valeurs de NLR et PLR, aucune différence significative n’a été notée entre les deux groupes (respectivement p=0,321 et p=0,212).
Conclusion : Selon notre étude, les biomarqueurs inflammatoires sanguins n’ont pas de rôle diagnostique significatif dans le SAHOS. Leur implication reste incertaine. D’autres études à effectif plus large sont nécessaires pour résoudre ces controverses.` },
  { id: 'p2', title: "Caractéristiques cliniques et facteurs prédictifs du syndrome d'apnée du sommeil positionnel pur", authors: "Rahma Gargouri, Cyrine Masmoudi, Imen Ben Salah, Nesrine Kallel, Mhamed Sami, Samy Kammoun", affiliation: "Service de pneumologie CHU Hedi Chaker Sfax", summary: `Introduction 
Le syndrome d’apnée obstructive du sommeil (SAOS) positionnel correspond à une entité dont les événements respiratoires sont plus nombreux lorsque le patient se trouve en position dorsale pendant le sommeil. Ce travail visait à étudier les caractéristiques cliniques et polygraphiques des patients atteints de cette maladie, et de chercher les facteurs prédictifs de son caractère positionnel pur.

Patients et méthodes
Etude retrospective, descriptive et analytique, faite auprès des patients atteints de SAOS suivis à l’unité de ventilation du service de pneumologie du CHU Hedi Chaker de Sfax, sur la période de 1 année.

Résultats
Parmi 1913 cas de SAOS, nous avons identifié 845 cas (63.7%)  de SAS positionnel, dont 538 (63.7%) avec un caractère pur. L’âge moyen de la population était de 60.25±12.94 ans, avec une prédominance féminine et un sexe ratio(H/F) de 0.89. Le SAS était sévère chez n=241 (28.9%).
La pression positive continue était appliquée chez 173 patients.
Le caractère positionnel pur était plus fréquent chez les patients jeune (p=0,019)
La HTA, le diabète, la dyslipidémie , et l’hypothyroidie étaient fortement associés  au SAS positionnel  pur (p=0.005, p=0.002, p=0.013,p=0.028 respectivement) 

En étude multivariée, nous avons conclu que l’hypothyroidie  était un facteur déterminant de SAS positionnel pur qui multipliait  presque 2 fois le risque  de développement de la maladie (OR=2.002), ainsi que la sévérité de SAS (p<0.001) ; en effet,  plus le stade de la maladie est avancé plus le risque de caractère positionnel pur diminue (OR=0.328) .

Conclusion
Le caractère positionnel pur du SAOS est significativement plus fréquent en cas de SAOS léger et de sujets jeunes. Cette entité doit être dépistée à temps car elle peut bénéficier de traitements simples et efficaces.` },
  { id: 'p3', title: "Comportement tabagique chez les patients apnéiques et impact du tabagisme sur la sévérité du SAHOS", authors: "R.Ben Jazia 1, I. Kharrat 1, I. Bchir 1, A. Maatallah 1; A. Kacem 1, D. B.BRAIEK 2; S; Bel Haj Youssef 2; J. Ayachi 2.", affiliation: "Service de pneumologie, Hôpital Militaire de Tunis", summary: `Introduction :
Le tabagisme est un facteur de risque bien établi pour plusieurs pathologies respiratoires, mais son rôle dans le syndrome d’apnées-hypopnées obstructives du sommeil (SAHOS) demeure débattu.
Objectif :
Décrire le comportement tabagique chez les patients apnéiques et analyser l’impact du tabac sur la sévérité du SAHOS.
Méthodes :
Étude prospective préliminaire descriptive et analytique menée au service de pneumologie du CHU Ibn El Jazzar de Kairouan entre Janvier 2024 et Décembre 2024. Ont été inclus 60 patients avec un SAHOS confirmé par polygraphie ventilatoire, répartis en deux groupes : tabagiques (G1) et non-tabagiques (G2).
Résultats :
Soixante patients ont été inclus. L’âge moyen était de 52,5 ± 20,12ans, avec une prédominance masculine (65%). Trente-deux patients étaient tabagiques (G1) et 28 patients non tabagiques (G2). L’âge moyen de début du tabagisme était de 19 ans avec une consommation moyenne de 21 paquets-années. Les patients tabagiques étaient plus jeunes et majoritairement masculins (p<0,001). La fonction respiratoire était plus altérée dans le groupe G1 (p<0,001). Les patients tabagiques avaient plus de somnolence diurne excessive avec un score d’Epworth plus élevé par rapport aux non tabagiques (p=0,032), la nycturie était plus fréquente dans le groupe G1 (p=0.041) alors que la fatigue diurne et les céphalées matinales étaient moins fréquentes (p<0,05). Sur le plan polygraphique, les patients tabagiques avaient un IAH moyen plus élevé (35,6/h vs 21,2/h ; p=0,01), l’index de désaturation était plus élevé dans le groupe G1. La proportion des patients ayant un SAHOS sévère étaient plus élevés dans le groupe G1 (78% vs 40%; p=0,02). En analyse multivariée, le tabagisme était significativement associé à la sévérité du SAHOS attestée par l’IAH (p=0,006).
Conclusion :
Le tabagisme constitue un facteur indépendant de SAHOS sévère. Ce résultat souligne l’importance du dépistage systématique du tabagisme chez les patients apnéiques et impose d’intégrer le sevrage tabagique comme un axe prioritaire de la prise en charge multidisciplinaire du SAHOS` },
  { id: 'p4', title: "Connaissances des personnels de santé sur le syndrome d'apnée obstructive du sommeil", authors: "imen kharrat , imen bchir , ameni kacem , anis maatallah , rahma ben jezia", affiliation: "Service de pneumologie, Hôpital Militaire de Tunis", summary: `Introduction :
Le syndrome d’apnées obstructives du sommeil (SAOS) est une pathologie fréquente, sous-diagnostiquée et associée à un risque accru de complications cardiovasculaires et métaboliques. La connaissance de cette affection par la population générale constitue un enjeu majeur de santé publique.
Objectif : Evaluer le niveau de connaissances sur le SAOS et d’identifier les facteurs associés à une meilleure compréhension de la maladie.
Méthodes :
Il s’agit d’une étude transversale réalisée auprès de 82 participants sur une période de 5 mois depuis avril 2025 à Aout 2025. Un questionnaire structuré a été administré inspiré de la revue de littérature et approuvé par un expert en somnologie, comportant des questions sociodémographiques des items évaluant la connaissance des symptômes, des facteurs de risque, des complications et des modalités de prise en charge du SAOS. 
Résultats :
L’étude a inclus 82 participants avec un âge moyen de 31,67 ± 9 ans, avec 67 % de femmes et 33% d’homme. Cet échantillon se constitue de 71% de médecins de 1ère ligne  de grades différents majoritairement des résidents (expérience <5 ans) et 29% de staff para médical exerçant dans un service de pneumologie avec (expérience >5 ans). La source de connaissance est dans 49,3% est lors des études universitaire, dans 43,3% lors des pratiques de stages. 
Concernant la connaissance des facteurs de risque, l’item ayant obtenu le plus de réponse correct était l’obésité (98,5%) et le moins de réponse correct était  l’alcoolisme (37,3%). Presque tous les participants (98%) reconnaissaient le ronflement comme symptôme cardinal, 79,1% % citaient la somnolence diurne excessive, et 59% connaissaient le lien avec les complications cardiovasculaires.
Le niveau de connaissances était significativement plus élevé chez les médecins de première ligne ayant une expérience > 5ans  (p = 0.03) et chez ceux ayant fait un stage pratique en pneumologie      (p =0.01).
Conclusion :
Le niveau de connaissances sur le SAOS reste insuffisant dans la population étudiée. Des actions d’information et de sensibilisation ciblées sont nécessaires afin d’améliorer le dépistage précoce et la prévention des complications liées au SAOS.` },
  { id: 'p5', title: "Déterminants polygraphiques de la somnolence diurne chez les patients avec syndrome d'apnées du sommeil", authors: "Balsam BARKOUS, Sabrine MAJDOUL, Imen Ben Salah, Nesrine Kallel, Mhamdi Samira, Zied Moatemri", affiliation: "Service de pneumologie, CHU Hedi Chaker Sfax", summary: `Introduction
La somnolence diurne excessive (SDE) est un symptôme fréquent du syndrome d’apnées du sommeil (SAS), mais ses déterminants physiopathologiques restent débattus. L’objectif de cette étude était d’identifier les paramètres polygraphiques associés à la SDE.

Méthodes
Nous avons mené une étude rétrospective incluant 100 patients explorés par polygraphie ventilatoire. Les participants ont été répartis en deux groupes selon le score d’Epworth (ESS ≤10 vs ESS >10). Les paramètres analysés comprenaient l’index d’apnées-hypopnées (IAH), l’index de désaturation en oxygène (IDO), la saturation minimale, la durée des apnées et la fragmentation du sommeil.

Résultats
Cinquante-six patients présentaient une SDE. L’âge et l’IMC ne différaient pas entre les groupes. En revanche, les patients somnolents avaient un IAH plus élevé (34,7 vs 24,6/h ; p=0,019), un IDO plus important (35,5 vs 26,2/h ; p=0,048), une durée moyenne (17,2 vs 14,8 s ; p=0,007) et totale des apnées plus longue (45,2 vs 21,0 min ; p=0,046), ainsi qu’un nombre de réveils nocturnes nettement supérieur (3,3 vs 1,6 ; p<0,001). La SpO₂ minimale était plus basse chez les somnolents (75,6% vs 79,1%) avec une tendance à la significativité (p=0,071).

Conclusion
Chez les patients SAS, la somnolence diurne est principalement corrélée à la sévérité des événements respiratoires et à la fragmentation du sommeil, davantage qu’aux seules mesures de désaturation. L’intégration de ces paramètres pourrait améliorer le phénotypage et la prise en charge clinique du SAS.` },
  { id: 'p6', title: "Endoscopie de sommeil : Profil clinique et score VOTE", authors: "Romdhane N, Nefzaoui S, Trabelsi W, Zoghlami I, Rejeb E, Ayadi A, Chiboub D, Hriga I, Mbarek C", affiliation: "Service ORL et CCF de l'hopital Habib Thameur", summary: `Introduction
L’endoscopie de sommeil (EN) est un outil diagnostique clé dans l’évaluation des voies aériennes supérieures chez les patients atteints d’apnée obstructive du sommeil (SAOS). Elle permet d’identifier les sites et le degré d’obstruction, souvent non visibles à l’examen clinique standard. Le score VOTE constitue une approche standardisée pour décrire les sites obstructifs.
Objectifs
Décrire les caractéristiques cliniques, les résultats polysomnographiques et les scores VOTE d’une série de patients explorés par endoscopie de sommeil dans notre centre.
Matériels et méthodes
Étude rétrospective portant sur cinq patients suivis pour suspicion de SAOS entre 2017 et 2023. Les données démographiques, cliniques, ainsi que les indices d’apnées-hypopnées (IAH) ont été recueillis. Les enregistrements d’endoscopie de sommeil ont été analysés pour attribuer un score VOTE à chaque patient.
Résultats
La population était exclusivement masculine (âge moyen 37,2 ans, extrêmes 34–42), avec une prévalence élevée d’obésité (80 %). Aucun patient n’était fumeur. Les antécédents comprenaient une hypertension artérielle (1 cas) et des chirurgies ORL (septoplastie, rhinoplastie). L’IAH moyen était de 47,6, traduisant des apnées modérées à sévères. L’analyse VOTE a montré :
- Velum : obstruction complète chez 3 patients.
- Oropharynx : obstruction complète dans 1 cas.
- Base de langue : atteinte dans 2 cas (1 partielle, 1 complète).
- Épiglotte : aucun cas d’obstruction.
Les scores VOTE globaux variaient de 0 à 4. Deux patients présentaient une obstruction multi-sites (score 4), corrélée à un IAH sévère.
Conclusion
L’endoscopie de sommeil, couplée au score VOTE, permet de caractériser précisément les sites obstructifs lors du SAOS. Dans notre série, l’obstruction palatine et linguale étaient prédominantes, orientant la stratégie thérapeutique vers une prise en charge individualisée et ciblée.` },
  { id: 'p7', title: "épilepsie ou parasomnie? un Dilemme diagnostic aux enjeux majeurs", authors: "Fatma Kamoun, Wafa Bouchaala, Salma Zouari, Fatma Njeh, Chahnez Triki", affiliation: "Service de neuropédiatrie, CHU Hedi Chaker Sfax- LR19ES1R Université de Sfax", summary: `Introduction : Chez l’enfant, les épilepsies avec crises nocturnes (hyperkinétiques, postures toniques, cris) et parfois les crises d’origine temporale (comportements automatiques complexes) posent souvent un problème de les différencier des parasomnies, particulièrement les troubles de l’eveil en sommeil Non-REM. Les points communs de confusion sont fréquents.
 But : souligner la difficulté du diagnostic différentiel entre les 2 entités
 Observation :
 Fille de 14 ans, sans antécédents particuliers, présente depuis l’âge de 5 ans des épisodes nocturnes faits de réveil avec contact altéré, des mouvements d’agitation, de balancement du tronc et de la tête. Leur durée était variable (>1 minute). Son EEG de veille était normal. Un holter EEG a permis l’enregistrement d’un épisode mais ne montrant pas d’anomalies épileptiformes associées évidentes à cause des artefacts musculaires. En intercritique, il existe des pointes frontales droites. Le diagnostic d’épilepsie a été retenu et elle a été mise sous antiépileptiques (VPA, CBZ, LTG) sans amélioration.
 Les parents menés de leurs enregistrements vidéo des épisodes (homevideo) ont consulté plusieurs médecins pour des avis supplémentaires (diagnostiques et thérapeutiques).
 À notre département de neurologie pédiatrique de Sfax, les vidéos ont été revues montrant des manifestations cliniques motrices non stéréotypées d’un épisode à un autre, des mouvements d’agitation impliquant le tronc, la tête (balancement) parfois dirigés vers l’entourage, faisant suspecter des épisodes non épileptiques. Plusieurs EEG de sommeil de sieste ont été faits sans enregistrement d’épisode clinique.
 Au cours de l’hospitalisation, constatation pendant la journée d’épisodes brefs de rupture de contact suivis de quelques mouvements de balancement du tronc similaires à ceux sur les vidéos nocturnes. Ainsi, l’EEG vidéo de veille a permis de confirmer leur nature épileptique avec un point de départ frontal droit.
 Discussion et conclusion :
 Epilepsie et parasomnie sont un dilemme diagnostique. Une anamnèse détaillée, avec une vidéo- EEG sont les outils clés pour un diagnostic précis.` },
  { id: 'p8', title: "État des connaissances sur le syndrome d'apnées hypopnées obstructives du sommeil à Pointe-Noire, au Congo", authors: "Mrassi H1, Sarr A2, Zarrouk S1, Chaabouni S1, Kacem K1, Barkaoui G1, El Gharbi L1", affiliation: "Service de pneumologie « D », Hôpital Abderrahmane Mami Ariana 2 Service des maladies cardiovasculaires, Clinique Louise Michel Pointe Noire, Congo Brazaville", summary: `INTRODUCTION
Malgré sa lourde morbi-mortalité, le syndrome d’apnées hypopnées obstructives du sommeil (SAHOS) reste peu connu en Afrique. Notre objectif était d’étudier le niveau des connaissances sur le SAHOS à Pointe-Noire, deuxième grande ville et capitale économique du Congo.
METHODES 
Étude transversale moyennant un questionnaire anonyme diffusé sur les réseaux sociaux sous format Google Forms (juillet 2025). L’inclusion était basée sur le volontariat. Les réponses des participants âgés de moins de 18 ans étaient exclues. Les items du questionnaire englobaient les données démographiques du participant, sa situation professionnelle et ses connaissances sur les symptômes (14 items) et les complications du SAHOS (12 items). L’absence de réponse à une proposition était considérée équivalente au choix « Je ne sais pas ». 
Résultats : Au total 372 questionnaires étaient recueillis (âge moyen : 40,4 ans ±12 ans ; 57% de femmes ; 62% niveau études supérieures). Soixante-trois pour cent des participants avaient déjà entendu parler du SAHOS, principalement via internet. Les symptômes les mieux connus étaient les ronflements sonores (80%) et la somnolence diurne (48%). Les symptômes les moins connus étaient les sueurs nocturnes (17%), la nycturie (15%) et la sécheresse buccale au réveil (15%). Les complications les mieux connues étaient les troubles du rythme cardiaque (68%), l’infractus du myocarde (48%) et l’hypertension artérielle sévère (45%). Les complications les moins connues étaient dépression (34%), les accidents de la voie publique (28%) et les troubles sexuels (13%). Les facteurs associés à une meilleure connaissance du SAHOS étaient un âge supérieur à 45 ans, le sexe féminin ainsi qu’un niveau d’études élevé.
Conclusion : Le SAHOS reste mal connu au Congo bien qu’une grande partie des habitants en aient déjà entendu parler. La sensibilisation à cette pathologie devient cruciale.` },
  { id: 'p9', title: "Évaluation des troubles du sommeil par le score SDSC chez l'enfant asthmatique selon le niveau de contrôle de la maladie", authors: "Feriel Ben Soltana, Ella Nemsi, Azza Sefi, Mohamed Salah Krichen1, Sabrine Louhaichi, Manel Khedri, Basma Hamdi, Agnès Hamzaoui", affiliation: "Service de pédiatrie Hôpital Abderrahmen Mami Ariana", summary: `Introduction :
L’asthme est la maladie respiratoire chronique la plus fréquente chez l’enfant et son contrôle reste un défi clinique. Les troubles du sommeil sont fréquents chez ces patients et peuvent aggraver la morbidité, notamment en cas d’asthme mal contrôlé. Le Sleep Disturbance Scale for Children (SDSC) est un outil validé permettant d’évaluer la qualité du sommeil chez l’enfant.
Objectif :
Évaluer la relation entre le contrôle de l’asthme et les troubles du sommeil avec le score SDSC chez les enfants asthmatiques.
Méthodes :
Une étude transversale incluant des enfants asthmatiques âgés de 4 à 16 ans, suivis à notre consultation a été menée au service de pneumologie pédiatrique Pavillon B à Hôpital Abderrahmane Mami.
 Le contrôle de l’asthme a été évalué par test de ACT. Les troubles du sommeil ont été explorés à l’aide du questionnaire SDSC, avec un score global ≥ 45 indiquant une perturbation significative. 
Un questionnaire standardisé adapté, durant le mois de l’aout 2025 à la consultation externe a été remplis par les parents des enfants asthmatiques.
Les associations entre contrôle de l’asthme et score SDSC ont été analysées statistiquement
Résultats :
Cinquante enfants asthmatiques ont été inclus, l’âge moyen était à 9,1 ± 2,8 ans et le sexe ratio était à M/F = 1,1. L’asthme était contrôlé chez 24 enfants (48 %), partiellement contrôlé chez 11 (22 %) et non contrôlé chez 15 (30 %). 
La prévalence globale des troubles du sommeil (SDSC ≥ 45) était de 68 %. Les sous-échelles du SDSC (les types du troubles respiratoires) : Les troubles respiratoires liés au sommeil (40 %), Les parasomnies (24 %), insomnie (32%), somnolence diurne excessive dans 58%.
Cependant, aucune relation significative n’a été retrouvée entre le niveau de contrôle de l’asthme et : le score moyen du SDSC (p = 0,62), la présence d’un trouble du sommeil (p = 0,712), le type de trouble du sommeil : les troubles respiratoires liés au sommeil (p=0.59), les parasomnies (p=0.42), insomnie (p=0.98), somnolence diurne excessive (p=0.62).
Conclusion : 
Les troubles du sommeil sont fréquents chez l’enfant asthmatique. Cependant, l’évaluation de ces troubles par le score de SDSC n’a pas montré une relation significative associés au niveau de contrôle de l’asthme dans notre étude.` },
  { id: 'p10', title: "Facteurs associés à la qualité du sommeil chez les patients traités par VNI", authors: "Ilhem Ben Salah 1, Rahma Gargouri 1, Soumaya Guesmi 1, Asma Younes 2, Hela Ghali 3, Sameh Msaed 1, Nessrine Kallel 1, Samy kammoun 1", affiliation: "Service de Pneumologie, CHU Hedi Chaker, Sfax 2 Service de Pneumologie, CHU Fattouma Bourguiba, Monastir 3 Service de médecine du travail, Hôpital Hédi Chaker, Sfax, Tunisie", summary: `Introduction :
La ventilation non invasive (VNI) est une technique largement utilisée dans l’insuffisance respiratoire chronique. Si ses bénéfices ventilatoires sont bien établis, son impact sur la qualité du sommeil demeure moins documenté. Ce travail vise évaluer les facteurs influençant la qualité du sommeil chez des patients sous VNI.

Méthodes :
Il s’agit d’une étude rétrospective, longitudinale, descriptive, analytique et monocentrique incluant des patients suivis et traités à l’unité du sommeil du service de pneumologie du CHU Hedi Chaker de Sfax, durant la période allant de janvier 2004 à décembre 2023. La qualité du sommeil sous VNI était évaluée par le questionnaire S3 NIV (Non Invasive Ventilation).

Résultats :
L’étude a inclus 100 patients traités par VNI au long cours. Une prédominance masculine a été observée, avec un sex-ratio de 1,85. L’âge médian de notre population était de 68 ans avec IIQ : [60-72 ans].Les patients étaient tabagiques dans 59 % des cas (n=59), avec une médiane de 22,5 paquet-année. Les principales indications  à la VNI étaient: la bronchopneumopathie chronique obstructive (34 %), le syndrome d'obésité-hypoventilation (28 %), les dilatations des bronches (12 %), l’overlap syndrome (16 %) puis les maladies neuromusculaires (8 %) et les PID fibrosantes (4 %).
Les femmes présentaient une meilleure qualité de sommeil (S3 NIV = 8,08 ± 2,07 vs 7,12 ± 2,63 ; p = 0,001). Les patients âgés de moins de 65 ans avaient également des scores plus élevés (7,61 ± 2,12 vs 7,36 ± 2,68 ; p = 0,002). Une bonne tolérance à la VNI était significativement associée à une meilleure qualité de sommeil (7,97 ± 2,56 vs 7,28 ± 2,45 ; p = 0,001). En revanche, la bonne observance du traitement n’était pas corrélée à une amélioration significative (OR = 0,646 ; IC95 % [0,317–1,317] ; p = 0,229). La présence de DDB semblait associée à une meilleure qualité du sommeil (OR = 1,326 ; IC95 % [0,974–1,806] ; p = 0,073), sans atteindre le seuil de significativité. Les scores moyens « sommeil et effets secondaires » variaient selon la pathologie : DDB (9,16 ; IIQ [8,3–10]) présentaient les meilleurs résultats, suivis du SOH (7,44 ± 2,27), de la cyphoscoliose (8,3 ; IIQ [6,43–9,62]) et de la BPCO (7,32 ± 2,68), tandis que les patients atteints de MNM (6,24 ± 2,77) et de PID fibrosantes (6,65 ± 2,33) avaient les scores les plus faibles.

Conclusion :
La qualité du sommeil sous VNI est influencée par le sexe, l’âge et la tolérance au traitement, mais non par l’observance. Les patients atteints de DDB semblent bénéficier d’une amélioration plus marquée, tandis que ceux atteints de MNM et de PID fibrosantes conservent une qualité de sommeil réduite. Ces résultats soulignent l’hétérogénéité de l’impact de la VNI selon le profil des patients et l’importance d’une prise en charge individualisée.` },
  { id: 'p11', title: "Facteurs associés à la sévérité du syndrome d'apnées du sommeil", authors: "E.Chaouch1 ; W.Ghribi1 ; M.Ben Yahia1 ; I.Guedri1 ; S.Cheikhmhamed1 ; S.JOUBER1 ; S.BEN-BECHER2 ; N.Hammouda, M.Jabberi, B.Medini, M.Chaâbane, S.Maazaoui, A.Touil, H.Racil, N.Chaouch", affiliation: "1 Service de Pneumologie Hôpital Fattouma Bourguiba Monastir 2 Service de Physiologie et d'endoscopie interventionnelle, pavillon2, Hopital Abderahman Mami, université Tunis El manar, faculté de médecine de Tunis", summary: `Introduction :
Le syndrome d’apnées du sommeil (SAOS) est une pathologie fréquente, sous-estimée et souvent associée à des comorbidités cardiovasculaires et métaboliques. L’objectif de ce travail était d’étudier les facteurs influençant la sévérité du SAOS.

Matériels et Méthodes : 
Étude rétrospective descriptive et analytique incluant 276 patients suivis pour SAOS au service de Pneumologie de Monastir entre 2018 et 2025 et ayant bénéficié d’une polygraphie ventilatoire. Des caractéristiques sociodémographiques, cliniques et polygraphiques ont été recueillies. La sévérité du SAOS a été définie selon l’index d’apnées-hypopnées (IAH) : léger (5–14/h), modéré (15–29/h) et sévère (≥30/h). L’association entre la sévérité du SAOS et les différents facteurs de risque étudiés a été évaluée par analyse statistique.

Résultats :
Notre étude a inclus 276 patients dont 59,4% de sexe féminin avec un sexe ratio H/F de 0,68. L’âge moyen de la population était de 54,85 ans [8-89] et 16,7 % avaient un âge >=65 ans (n=46). La majorité des patients avaient des comorbidités cardiovasculaires et métaboliques associées. Une HTA était présente chez 63,8% des patients (n=176) ; une coronaropathie chez 12,7% (n=35), des troubles du rythme chez 12,7% (n=35), une dyslipidémie chez 38,8% (n=107) et un diabète chez 37% des patients (n=102). Certains patients avaient des comorbidités respiratoires : 8,7% des patients avaient un asthme associé (n=24) ; 4,7% avaient une BPCO (n=13) ; 1,1% avaient une PID (n=3) et 0,7% avaient une DDB (n=2). Le score d’Epworth a été calculé chez la majorité des patients avec un score moyen de 11,25. Le score d’Epworth était >10 chez 63% des patients (n=174). Une polygraphie ventilatoire a été réalisée chez tous les patients et avait montré un SAS léger chez 38,4% des patients (n=106) ; modéré chez 18,8% (n=52) et sévère chez 42,8% (n=118). L’analyse statistique avait montré une association significative entre SAOS sévère et certains facteurs étudiés : l’âge ≥65 ans (p=0,039) ; le sexe féminin (p=0,012) ; le tabagisme (p=0,004), la dyslipidémie (p=0,01) et le score d’Epworth >10 (p<0,001). En revanche, aucune association significative n’a été retrouvée entre SAS sévère et HTA (p=0,657) ni avec un IMC ≥30 (p=0,208).

Conclusion : 
Dans notre cohorte, la sévérité du SAOS était significativement associée à l’âge avancé, au sexe féminin, au tabagisme, à la dyslipidémie et à l’hyper somnolence diurne. L’HTA et l’obésité, pourtant classiquement décrites comme facteurs de risque, n’ont pas montré d’association statistiquement significative avec le SAOS sévère. Ces résultats soulignent l’importance d’une approche multidimensionnelle dans l’évaluation des patients.` },
  { id: 'p12', title: "Facteurs prédictifs d'échec de la pression positive continue chez les patients atteints de syndrome d'apnées du sommeil", authors: "S.Ben Taleb, T.Znegui, S.Habibech, I.Ben Hmida, M.Gargouri, N.Guermazi, N.Kammoun, Sadri N, Rim Khemakhem1, Sameh Msaed1, Nadia Moussa 1, Samy kammoun1", affiliation: "Service de Pneumologie, CHU Hédi Chaker, Sfax", summary: `Introduction : 
La PPC (pression positive continue) est le traitement de référence du syndrome d’apnées du sommeil (SAS) modéré à sévère. Malgré son efficacité, certains patients ne répondent pas de manière optimale. Identifier les facteurs prédictifs d’échec est crucial pour une prise en charge personnalisée.

Méthode:
Étude rétrospective analytique menée entre 2022 et 2024, incluant 104 patients suivis pour suspicion de SAS à la consultation externe du pavillon 2 de l’hôpital Abderrahman Mami. Parmi eux, 84 ont eu un SAS confirmé par polygraphie ventilatoire et 37 ont été mis sous PPC. L’échec de la PPC a été défini par l'adhérence après 3 mois de suivi. Les facteurs étudiés incluaient : le profil clinique, la sévérité du SAS (IAH ≥30), les fuites non intentionnelles importantes (fuites≥ seuil spécifique à chaque type de PPC), la qualité du masque et la sécheresse buccale.

Résultats :
Le sex ratio était de 1,31. La durée moyenne d’utilisation de la PPC était de 5,5 heures/jour (extrêmes : 2-8,5 heures). La sévérité du SAS n’a pas montré de corrélation avec l’échec du traitement (p = 0,11). En revanche, les fuites importantes étaient significativement associées à l’échec du traitement (OR = 3,12 ; IC95 : 1,1-9 ; p = 0,04). Le risque d’échec était également plus élevé en présence d’un masque non adapté (OR = 2,4 ; p = 0,06). La présence de comorbidités cardiovasculaires était associée à une meilleure adhérence à la PPC (p = 0,045), tout comme la satisfaction du patient après la première nuit de PPC  (p = 0,02). La sécheresse buccale n’était pas un facteur prédictif  d’échec au bout de 3 mois (p > 0,05).

Conclusion :
L’échec de la PPC est principalement lié à la présence d’un masque non adapté et aux fuites non intentionnelles importantes. L’identification précoce de ces facteurs de risque pourrait garantir l’adhésion à la PPC au bout de 3 mois.` },
  { id: 'p13', title: "Facteurs prédictifs de la somnolence diurne excessive dans une population de travailleurs tunisiens de nuit", authors: "Ilhem Ben Salah 1, Sirine Fehri 1, Neila Chaari 1, I.Guedri2, K.Kaddoussi R, Ayedi M, Ben Rjeb M, Zaara E, Cheikhmhamed S, Jouber S", affiliation: "1 Service de Pneumologie, CHU Hédi Chaker, Sfax 2 Service de médecine de travail, Institut de santé et de sécurité au travail, tunis", summary: `Introduction :
La somnolence diurne excessive (SDE) est un symptôme fréquent chez les travailleurs de nuit et peut avoir des conséquences importantes en termes de sécurité, de performance et de santé. L’objectif de ce travail était d’évaluer la prévalence de la SDE et d’identifier les facteurs sociodémographiques et cliniques qui lui sont associés.

Méthodes :
Étude transversale réalisée auprès de travailleurs de nuit tunisiens âgés de 25 à 64 ans. La SDE a été évaluée à l’aide de l’Epworth Sleepiness Scale (ESS), définie par un score ≥ 11. Les associations ont été explorées avec des variables sociodémographiques, la qualité du sommeil, le bien-être et les comorbidités.

Résultats : 
Il s’agissait de 503 personnes. La médiane du score de somnolence d’Epworth (ESS) était de 8 (IC95 % [5–12]). Une somnolence diurne excessive (ESS ≥11) a été observée chez 164 participants (32,6 %), tandis qu’une somnolence sévère (ESS ≥16) concernait 31 participants (6,16 %). La prévalence de la SDE était particulièrement élevée chez les sujets âgés de 25 à 34 ans (65,2 %), de sexe féminin (57,9 %), vivant en milieu urbain (91,5 %) et diplômés (89 %). La SDE était significativement associée à l’indice de masse corporelle (IMC) (p = 0,026) et à la taille de la famille (p = 0,019), mais pas au genre, à la situation matrimoniale ou au type d’emploi.
La SDE était fortement corrélée à un faible bien-être (WHO-5 <50 ; p = 0,003), à une mauvaise qualité du sommeil (PSQI >5 ; p = 0,003) et à la présence d’une insomnie modérée à sévère (ISI ≥15 ; p <0,001), alors qu’aucune association significative n’a été retrouvée avec l’humeur dépressive (PHQ-9 ≥20 ; p = 0,09).
Dans l’analyse multivariée, plusieurs facteurs apparaissaient indépendamment associés à la SDE : la présence d’un partenaire de lit régulier (OR = 2,005 ; IC95 % [0,828–4,856] ; p = 0,123), l’allaitement (OR = 2,974 ; IC95 % [0,811–10,909] ; p = 0,10), le travail dans le secteur de la santé (OR = 1,888 ; IC95 % [0,980–3,637] ; p = 0,057), l’utilisation d’Internet au coucher (OR = 2,213 ; IC95 % [0,899–5,448] ; p = 0,084), les antécédents d’infection à la COVID-19 (OR = 1,701 ; IC95 % [0,856–3,379] ; p = 0,129), la présence de troubles psychologiques (OR = 2,983 ; IC95 % [0,944–9,419] ; p = 0,063) ainsi qu’un score WHO-5 abaissé (OR = 1,590 ; IC95 % [1,011–2,499] ; p = 0,045).

Conclusion :
La somnolence diurne excessive est très fréquente chez les travailleurs de nuit et est associée à des facteurs métaboliques (IMC), familiaux et surtout à une altération du sommeil et du bien-être. Ces résultats mettent en évidence la nécessité de dépister systématiquement la SDE dans cette population afin de prévenir ses répercussions sur la santé et la sécurité.` },
  { id: 'p14', title: "Fonction rénale et syndrome d'apnées du sommeil : évaluation de leur interaction au sein du service de pneumologie de Monastir", authors: "Ben Méchlia M, Ghribi W, Chaouch E, Mselmani1, Lenda Ben Hamida2, Yasmine Amor1, Zied Moatemri2, Jamel Zaouali1", affiliation: "Service de Pneumologie, Hopital Fattouma Bourguiba,Monastir", summary: `Introduction
Le syndrome d’apnées du sommeil (SAS) et la fonction rénale présentent une relation bi-directionnelle : le SAS sévère peut altérer la fonction rénale via l’hypoxie intermittente et l’activation du système sympathique, tandis qu’une clairance rénale réduite peut aggraver le SAS par le collapsus des voies aériennes supérieures. Cette interaction reste peu étudiée, justifiant l’évaluation de la relation entre clairance de créatinine et sévérité du SAS.
Méthode
 Étude rétrospective menée dans le service de pneumologie du CHU Fattouma Bourguiba, Monastir (2018 2025), incluant uniquement les patients avec clairance de créatinine disponible. Les données recueillies comprenaient la créatininémie, la clairance de créatinine, les comorbidités associées ainsi que la sévérité du SAS(IAH ≥30) et le score d’Epworth (>10)
Résultats
L’étude a inclus 225 patients. L’âge médian était de 57 ans ±12,26, avec 72 % âgés de ≥50 ans. La population était majoritairement féminine (60,4 %, sexe ratio F/H = 1,53). Parmi les comorbidités, 63,1 % avaient une HTA et 36,4 % un diabète. Les fumeurs représentaient 28,4 % de la cohorte.La créatininémie médiane était de 66 mg/L ±31,9 et la clairance de créatinine médiane de 100,9 ml/min ±31,0. Une clairance ≤60 ml/min était observée chez 8 % des patients, plus fréquente chez les hypertendus (88,9 %, p=0,018) et diabétiques (61,1 %, p=0,023). Aucun lien significatif n’a été retrouvé avec le sexe (p=0,345), le tabac (p=0,082) ou le degré de dyspnée (p=0,082). La clairance de créatinine n’était pas corrélée à l’IAH (p=0,350) ni à l’index de désaturation (p=0,718). La sévérité du SAS (IAH ≥30) était observée chez 61,1 % des patients avec ClCr ≤60 contre 41,1 % dans le groupe ClCr >60 (p=0,099). Pour le score d’Epworth : 66,7 % des patients avec ClCr ≤60 présentaient un score élevé, contre 60,9 % dans le groupe ClCr >60 (p=0,628).
Conclusion
La clairance de créatinine n’était pas associée à la sévérité du SAS, aux désaturations nocturnes ni à la somnolence diurne. En revanche, une fonction rénale réduite était plus fréquente chez les patients hypertendus et diabétiques, soulignant l’importance d’une surveillance rénale ciblée dans ces populations à risque.` },
  { id: 'p15', title: "Impact de l'activité physique sur la qualité du sommeil : étude transversale", authors: "Mohamed Slim Majoul1, Meriam Messelmani2, Zied Moatemri1, Jamel Zaouali2", affiliation: "Faculté de médecine de Monastir", summary: `Introduction
Les effets bénéfiques de l’activité physique (AP) sur la santé cérébrale et en particulier sur la qualité du sommeil (QS) sont bien connus et offre des perspectives thérapeutiques pour les troubles du sommeil. L’intensité d’AP la plus bénéfique sur la QS reste controversée.
Notre objectif était d’explorer la relation entre intensité d’AP et QS.
Méthodes
Une étude observationnelle monocentrique et transversale a été menée auprès du personnel soignant de l’hôpital militaire principal d’instruction de Tunis. Nous avons inclus le personnel paramédical ayant plus de 6 mois d’expérience. L’index de Pittsburgh a été utilisé pour quantifier la qualité globale du sommeil (QGS) comme suit : QGS altérée si PSQI > 10 et bonne QGS si PSQI ≤10. L’échelle d’Epworth a été utilisée pour évaluer la somnolence diurne excessive (SDE) comme suit : SDE présente si ESE > 10 et SDE absente si ESE ≤10. Le questionnaire international de l’activité physique (IPAQ) a été utilisé pour estimer l’intensité de l’activité physique comme suit : participant hautement actif si >1500 équivalents de tache métabolique (MET) minute/semaine, participant modérément actif si >600 MET minute/semaine et participant inactif si ≤600 MET minute/semaine.
Résultats
Nous avons inclus 106 participants avec un sex-ratio de de 1,2 et un âge médian de 31 ans (IQR=15). Nous avons noté 34% de personnes hautement actives (n=36), 30.2% modérément actives (n=32) et 35.8% inactives (n=38). Une activité physique intense était corrélée à une latence d’endormissement plus courte (p=0.012). Les groupes de participants hautement actifs et modérément actifs étaient caractérisés par une fréquence plus faible des troubles du sommeil, en particulier la dyspnée nocturne par rapport au groupe inactif (respectivement p=0.008 et p=0.021).
Conclusions
Notre étude a montré que l’intensité élevée d’AP favorisait un endormissement plus facile. Ces résultats sont concordants avec les données de la littérature. L’AP intense, surtout plus de 8h avant le coucher régule la sécrétion de mélatonine et facilite la baisse de la température à l’endormissement.
La promotion de l’AP doit fait partie de l’arsenal therapeutique des troubles du sommeil. Ceci permet un moindre recours à la pharmacothérapie.` },
  { id: 'p16', title: "Impact de la durée d'exposition aux écrans au coucher sur la qualité du sommeil : Etude transversale", authors: "Mohamed Slim Majoul1, Lenda Ben Hamida1, Mohamed Slim Majoul2, Mariem Messelmani2, Zied Moatemri1, Jamel Zaouali2", affiliation: "1-Service de Neurologie, CHU Fattouma Bourguiba Monastir, Tunisie 2 Service de Pneumologie, CHU Hedi Chaker, Sfax", summary: `Introduction : 
L’exposition à la lumière des écrans avant le coucher est devenue une préoccupation croissante. Des études suggèrent que cette exposition, par inhibition de la sécrétion de mélatonine et de la stimulation cognitive, peut retarder l’endormissement et altérer la qualité globale du sommeil (QGS).
Objectif : 
L’objectif de l’étude était de déterminer l’impact de la durée d’exposition aux écrans (DEE) au coucher sur la QGS
Méthodes :
Une étude transversale descriptive a été menée en Juillet et Aout 2025 à l’hôpital militaire de Tunis, incluant 106 soignants paramédicaux. La QGS a été évaluée par l’Indice de Qualité du Sommeil de Pittsburgh (PSQI), incluant la latence d’endormissement (LE), et l’Échelle de Somnolence d’Epworth (ESS). Un PSQI > 5 indique une mauvaise QGS. Une LE ≥ 30 minutes (min) indique une difficulté d’endormissement, et ≥ 60 min une insomnie d’endormissement sévère. Un ESS ≥ 10 indique une somnolence diurne excessive (SDE), et ≥ 10 une SDE sévère.
Résultats : 
L’âge moyen des participants était de 33,5 ± 8,9 ans, avec un sexe ratio à 1,2. La DEE médiane avant le coucher était de 60 min. La DEE était positivement corrélée à la LE (r=0,127 ; p=0,217) et au PSQI (r=0,142 ; p=0,166). La DDE était plus élevée chez les patients présentant une difficulté d’endormissement (65 vs 64,7 min ; p=0.986), une insomnie d’endormissement sévère (78,2 vs 60,7 min ; p=0,206), une mauvaise QGS (68,6 vs 62,5 min ; p=0,619), une SDE (73,5 vs 62,6 min ; p=0,48), ainsi qu’une SDE sévère (66 vs 37 min ; p=0,241). Les soignants ayant une DEE supérieure à la médiane (60 min) ont présenté une LE plus longue (34,1 vs 29,4 min ; p = 0,441), un score PSQI plus altéré (10 vs 9,5 ; p = 568), et un score ESS plus important (7,33 vs 6 ; p = 0,264).
Conclusion : 
Une DEE excessive pourrait contribuer à l’altération de la QGS. Des études à plus large échelle sont nécessaires pour confirmer ces résultats.` },
  { id: 'p17', title: "Impact de la pression positive continue (PPC) sur les troubles cognitifs chez les patients atteints de SAOS sévère", authors: "Kefi Rihab, Ben Bdira Baraa, Bouafia Salsabil, Aissa Sana, Gargouri Imen, Knaz Asma, Ben Limem Iteb, Abdelghani Ahmed", affiliation: "Faculté de médecine du Travail de Sfax -Division de l'Inspection médicale Régionale de travail de Sfax", summary: `Introduction : 
Le syndrome d’apnées obstructives du sommeil (SAOS) est fréquemment associé à une somnolence diurne excessive et à des troubles cognitifs et. La pression positive continue (PPC) constitue le traitement de référence.
Méthodes : 
Étude observationnelle incluant 32 patients atteints de SAOS sévère, suivis en consultation externe au service de pneumologie de l’hôpital Farhat Hached sur une période de 12 mois. Une évaluation clinique et cognitive a été réalisée avant et après 3 mois de traitement par PPC. Les tests comprenaient le score d’Epworth et un score cognitif global (Mémoire, Attention, Langage, Orientation – MALO score).
Résultats : 
L’âge moyen des patients était de 58 ans [24–78] avec un sexe ratio de 1,13. Les principales comorbidités étaient l’hypertension artérielle (78%), le diabète (28,1%) et la dyslipidémie (25%), avec un tabagisme présent chez 28,1% des patients.
 L’IMC moyen était de 34,3 ± 4,4 kg/m² et l’IAH moyen de 40,6 ± 13,4. 
Les symptômes rapportés étaient principalement le ronflement nocturne (89%), la somnolence diurne (78%), les apnées de sommeil perçues par l’entourage (64%) et la nycturie (35%).
 Après 3 mois de PPC, le score d’Epworth a significativement diminué (13,7 ± 3,2 vs 9,0 ± 2,8 ; p = 0,001), parallèlement à une amélioration du score cognitif global MALO (8,9 ± 1,5 vs 9,6 ± 1,0 ; p = 0,01).
Conclusion : 
Chez les patients atteints de SAOS sévère, le traitement par PPC améliore significativement la somnolence diurne et les performances cognitives, confirmant l’intérêt de ce traitement dans la prise en charge globale du SAOS. Des études sur des échantillons plus larges sont nécessaires pour confirmer ces observations.` },
  { id: 'p18', title: "Impact des troubles du sommeil sur la qualité de vie des patients atteints de cancer broncho-pulmonaire (CBP)", authors: "imen kharrat , imen bchir , ameni kacem , anis maatallah , rahma ben jezia", affiliation: "Service de pneumologie, Hôpital militaire de Tunis", summary: `Introduction :
Les troubles du sommeil sont fréquents chez les patients cancéreux et peuvent aggraver la fatigue, la douleur et altérer la qualité de vie. Cependant, leur prévalence et leur impact exact restent sous-évalués dans le contexte clinique tunisien.
Objectif :
Évaluer la prévalence des troubles du sommeil chez les patients ayant un CBP et déterminer leur impact sur la qualité de vie .
Méthodes :
Il s’agit d’une étude transversale incluant 100 patients adultes suivis pour cancer broncho-pulmonaire . La qualité du sommeil a été évaluée à l’aide de l’Index de Qualité du Sommeil de Pittsburgh (PSQI), la qualité de vie par le questionnaire EORTC QLQ-C30. L’analyse statistique a porté sur les corrélations entre qualité du sommeil et scores de fatigue, douleur et qualité de vie.
Résultats :
L’étude a inclus 100 patients (95 hommes et 5 femmes) d’âge moyen de 64 ans. Quarante-huit pour cent étaient fumeurs actifs, avec une consommation moyenne de 64,3 paquets-années. Le CBP était classé stade III dans 50 % des cas et stade IV dans 48 %. Les  patients avec un PS ≥ 3 étaient  19%. La prévalence des troubles du sommeil (PSQI > 5) était de 68 %.
L’échantillon a été réparti en deux groupes : G1 avec troubles du sommeil et G2 sans troubles du sommeil .Les patients du groupe 1 présentaient une qualité de vie altérée, avec un score moyen de 32,66 contre 55,9 chez le G2. De même , Les patients du groupe 1(G1) présentaient des scores de fatigue significativement plus élevés  (score QLQ-C30 fatigue : G1=68,2  vs G2=42,5 ; p < 0,001) et une intensité de douleur plus importante (score douleur : G1=57,1 vs G2=34,6 ;  p = 0,002). Le domaine cognitif et social était aussi altéré chez les patients du groupe 1 respectivement  G1 :65 vs G2 :77 (p = 0,01) et  60 vs 74 (p = 0,003).
Après ajustement sur les covariables, les troubles du sommeil restaient significativement associés à une altération du fonctionnement émotionnel (β = -11, p = 0,004), cognitif (β = -8, p = 0,01), physique (β = -9, p = 0,006) et social (β = -7, p = 0,02).
Conclusion :
Les troubles du sommeil sont fréquents chez les patients ayant un cancer broncho-pulmonaire  quelque soit le stade de la tumeur initiale et associés une altération de la qualité de vie . Leur dépistage systématique et leur prise en charge adaptée pourraient améliorer le bien-être global des patients.` },
  { id: 'p19', title: "Impact du chronotype sur la qualité de vie au travail chez le personnel soignant : une étude transversale", authors: "Mohamed Slim Majoul1, Lenda Ben Hamida2, Yasmine Amor1, Zied Moatemri2, Jamel Zaouali1", affiliation: "1 Service de Neurologie, CHU Fattouma Bourguiba Monastir, Tunisie 2 Service de Pneumologie, CHU Hedi Chaker Sfax", summary: `Introduction
L’impact du chronotype sur l’éveil et la performance au travail chez le personnel soignant a été décrit. La relation entre chronotype et qualité de vide au travail (WRQOL) n’a pas été étudiée en Tunisie auparavant.
Objectif
Explorer l’impact du chronotype sur la WRQOL chez le personnel de la santé.
Methods
Une étude transversale, monocentrique et observationnelle a été menée à l'hôpital militaire principal d’instruction de Tunis en septembre 2025, auprès de professionnels de santé (infirmières, aides-soignants, kinésithérapeutes, anesthésistes, techniciens en radiologie et surveillants). Les critères d'inclusion étaient : professionnels de santé diplômés et ayant donné leur consentement à participer à l'étude. Les critères d'exclusion étaient : les retraités, les étudiants et les professionnels de santé ayant moins de 6 mois d'expérience professionnelle ; ou ayant eu un arrêt de travail plus d'un mois de travail pour cause de maladie, maternité ou autres raisons. Le chronotype des participants a été déterminé à l'aide du questionnaire Horne-Ostberg (HOQ). L'évaluation de la WRQOL a été obtenue à l'aide de l'échelle « Work-related quality of life-2 » (WRQOL-2).
Resultats
Nous avons inclus 106 participants issus de 22 services. Le sex-ratio était de 1,2 et l'âge médian était de 33,5 ans (IQR = 15). Les infirmières représentaient 84,5 % des participants. Le WRQOL-2 médian était de 3,25 (IQR = 0,92), avec une WRQOL faible à très faible représentant 30,2 % des cas (n = 32). Les participants ayant un chronotype de type « soir » avaient un score WRQOL-2 total significativement plus faible que ceux ayant un chronotype de type « matin » (médiane = 2,8 (IQR = 0,8) contre 3,7 (IQR = 1,2), p = 0,002). Une corrélation négative a été observée entre les participants de type matinale et les sous-scores WRQOL-2, notamment la satisfaction professionnelle (p = 0,044) et le stress au travail (p = 0,049).
Conclusions
Notre étude a montré l’impact du chronotype sur la WRQOL chez le personnel soignant. Ces résultats soulignent l'importance de tenir compte du chronotype dans la planification des horaires afin d'optimiser le bien-être et les performances des professionnels de santé.` },
  { id: 'p20', title: "Impact du syndrome d'apnées hypopnées obstructives du sommeil en milieu professionnel : problème d'aptitude médicale au travail", authors: "N. BEN JDIDIA-K. KHARRAT - H.SAHNOUN * -D. KARRAY-T. BOUASSIDA***", affiliation: "Faculté de Médecine de Sfax, Tunisie", summary: `Introduction :
Le syndrome d’apnées-hypopnées obstructives du sommeil (SAHOS) est un trouble respiratoire du sommeil fréquent, mal dépisté et aux conséquences multiples. Ses manifestations diurnes augmentent le risque d’accidents professionnels et compromettent la sécurité au travail. L’évaluation du retentissement du SAHOS est donc cruciale pour la décision d’aptitude au travail et la prévention des conséquences socio-professionnelles.
Objectifs :
Les objectifs de ce travail étaient d’évaluer l’aptitude au travail chez les patients atteints  du SAHOS et d’étudier leur devenir professionnel.
Matériel et méthodes :
Nous avons mené une étude descriptive rétrospective portant sur les cas de SAHOS, colligés dans la consultation du GMT de Sfax et présentés au staff médical pour décision d’aptitude, durant une période de 9 ans allant de janvier 2016 à août 2025. Le recueil des données a été fait à partir des dossiers médicaux.
Résultats :
Seize cas ont été recensés. La médiane d’âge était 49 ans. Tous étaient de sexe masculin. L’ancienneté professionnelle moyenne était de 19 ans. Les secteurs d’activité étaient le transport (5 cas), le service commercial (5 cas), l’industrie pétrolière (2 cas), le service sanitaire (2 cas) et la construction métallique (2 cas). La conduite de véhicule était retrouvée chez 10 salariés et le travail de nuit était relevé chez trois. Le SAHOS était sévère chez 13 patients et modéré pour deux. Des troubles de la concentration et de la mémoire étaient rapportés chez un agent administratif, un opérateur de production et une baisse de la vigilance chez un chauffeur de bus. Deux accidents de la route étaient survenus pour le chauffeur de poids lourds. Le traitement par la ventilation en pression positive continue (CPAP) en association à une cure d’amaigrissement était indiqué chez 14 patients et une orthèse d’avancement mandibulaire était prescrite pour un cas. 
L’aptitude au poste du travail était déclarée pour le poste administratif et le poste de  chef d’atelier avec évaluation annuelle. Les aménagements des postes à types d’éviction du travail de nuit (3 cas), de la conduite des longs trajets (2cas), la conduite d’engins (1cas) étaient indiqués.
Un reclassement professionnel temporaire était préconisé pour des ambulanciers au poste d’archiviste et pour deux chauffeurs aux postes de convoyeurs.
Un reclassement professionnel définitif était indiqué chez 3 chauffeurs : devant la survenu d’accidents graves de la route chez un chauffeur et devant l’importance des comorbidités et de la somnolence diurne chez les deux autres. 
Le devenir professionnel était un départ à la retraite pour deux salariés.
Conclusion :
Le SAHOS a un impact significatif sur la performance et la sécurité professionnelles. La prise en charge thérapeutique adaptée contribue à améliorer la qualité de vie socioprofessionnelle des patients et la sécurité du travail.  L’évaluation de l’aptitude tient compte à la fois de la sévérité de la maladie, de l’observance du traitement et de la nature du poste occupé. Une collaboration entre le médecin du travail, les médecins du sommeil, et les employeurs est donc essentielle.` },
  { id: 'p22', title: "Impact of Obstructive Sleep Apnea on Arterial Stiffness in Hypertensive Adults: Insights from Ambulatory Blood Pressure Monitoring", authors: "Khansa Derbel, Faten Chaieb, Sonia Rouatbi", affiliation: "1-Physiology and Functional Exploration Department, Farhat Hached Hospital, Sousse, Tunisia 2-Heart Failure (LR12SP09) Research Laboratory, Farhat HACHED Hospital, Sousse, Tunisia 3-Physiology and Functional Exploration Department, Habib Bourguiba University Hospital, Sfax, Tunisia.", summary: `Introduction:
Obstructive sleep apnea (OSA) is a common comorbidity in hypertensive patients and is increasingly recognized as a contributor to cardiovascular morbidity beyond blood pressure (BP) elevation. Despite the known overlap between hypertension and OSA, the additive impact of OSA on arterial stiffness in hypertensive adults remains insufficiently characterized. 
Objective:
To compare arterial stiffness markers between hypertensive adults, with and without OSA.
Methods:
This cross-sectional comparative study included 36 hypertensive adults. According to ventilatory polygraphy outcomes, patients were divided into two groups: 13 with severe OSA (G1) and 23 without OSA (G2). All patients underwent 24-hour ambulatory BP monitoring. Ambulatory arterial stiffness index (AASI) was calculated from the regression slope of diastolic on systolic BP readings, and pulse pressures (PP) during daytime, nighttime and 24-hour periods were derived as the difference between mean systolic and diastolic BPs. 
Results:
Mean age and body mass index (BMI) were higher in G1 (62±12 vs 52±11 years and 35.7±6.8 vs 28.8±3.6 kg/m², respectively; p<0.050). However, both groups were matched for sex. G1 included higher percentage of dyslipidemia and similar percentage of diabetes to G2. G1 exhibited higher AASI (0.326±0.092 vs 0.163±0.046) and higher 24-hour, daytime and nighttime PPs (55±10 vs 45±6; 55±11 vs 45±6 and 55±8 vs 43±5 mmHg, respectively) compared to G2. These differences persisted after adjustment for age, sex, and BMI (F=27.62, p<0.001) for AASI and only sex and BMI for PPs (F=8.56, p=0.006; F=6.12, p=0.019 and F=12.75, p=0.001).
Conclusion:
Hypertensive adults with OSA demonstrate significantly increased arterial stiffness, as reflected by higher AASI and PP, compared to those without OSA. These findings highlight the additive vascular burden of OSA in hypertensive patients and underline the importance of OSA screening and early interventions to prevent vascular complications.` },
  { id: 'p23', title: "Impact of septoplasty on patients' sleep quality", authors: "Chaabouni Hela 1, Lamine Yosser 1, Nahali Sinda 1, Zribi Atef 2, Marrakchi Jihene 1", affiliation: "1.ENT department, menzel bourguiba regional hospital 2.Maxillofacial surgery department, Menzel Bourguiba regional hospital", summary: `Objective:
Evaluation of the impact of septoplasty on patients’ sleep quality using the NOSE (Nasal Obstruction and Septoplasty Effectiveness Scale) score.

Materials and methods:
A retrospective study was conducted our ENT department. We included patients with deviated nasal septum responsible for chronic nose obstruction who underwent septoplasty or rhinoseptoplasty without concomitant sinus surgery over a period of 5 years (2019-2024). A phone questionnaire was given to the patients to quantify the symptoms before surgery and six months after. We used a Tunisian arabic translation of the NOSE score, which includes sleep quality among its items.
A statistical analysis was performed using SPSS22; the Wilcoxon Signed Rank test allowed evaluating the significance of variations in symptoms before and after surgery.
A p-value under 0.05 was considered statistically significant.

Results:
The study included 24 patients, with an average age of 36 years and a sex ratio of 2.75. The deviation was post-traumatic in 15 cases ( 62,5%). The most common type of deviation was type II (33.33%) and III (33.33%) of Mladina classification. A moderate to severe difficulty in sleeping before surgery was reported in 20 cases (83.4%).
A subjective improvement in sleep quality was found in 83.4% of the cases, with a statistically significant decrease in NOSE scores as well as in values assigned to the sleep quality item before and after surgery (p < 0.0001)
The limitations of our study were variability in surgical techniques and in the surgeons’ experience.

Conclusion:
Septoplasty significantly improves the quality of sleep for patients.` },
  { id: 'p24', title: "Insomnie et travail de nuit : prévalence et facteurs associés chez 503 travailleurs tunisiens", authors: "Ilhem Ben Salah1, Sirine Fehri1, Saeb Badr1, Rim Khemakhem1, Nesrine Kammoun2, Sameh Msaad 1, Rahma Gargouri1, Samy kammoun1", affiliation: "1 Service de Pneumologie, CHU Hédi Chaker, Sfax 2 Service de médecine de travail, Institut de santé et de sécurité au travail, tunis", summary: `Introduction :
L’insomnie est l’un des troubles du sommeil les plus fréquents chez les travailleurs de nuit, avec des répercussions majeures sur la santé physique, psychologique et la qualité de vie. L’objectif de ce travail était d’évaluer la prévalence de l’insomnie et d’analyser ses associations avec les caractéristiques socio-démographiques, la qualité du sommeil, la somnolence diurne et l’état psychologique.*

Méthodes :
Étude transversale menée auprès de travailleurs de nuit tunisiens  âgés de 25 à 64 ans. L’insomnie a été évaluée à l’aide de l’Insomnia Severity Index (ISI), où elle est modérée à sévère si le score est  ≥ 15. Les autres dimensions étudiées incluaient le bien-être (WHO-5), l’humeur dépressive (PHQ-9), la qualité du sommeil (PSQI) et la somnolence diurne (ESS).

Résultats :
Il s’agissait de 503 travailleurs. La prévalence globale de l’insomnie modérée à sévère était de 13,7 %. Elle était plus marquée chez les patients âgés de 25 à 34 ans (56,5 %), les femmes (56,5 %), les sujets résidant en milieu urbain (92,8 %), les individus diplômés (82,6 %), les employés de bureau (85,3 %) ainsi que les travailleurs du secteur de la santé (63,2 %). L’analyse statistique n’a pas mis en évidence d’association significative avec le sexe (p = 0,85), l’indice de masse corporelle (p = 0,087) ou le statut marital (p = 0,116). En revanche, l’insomnie était significativement associée à un faible niveau de bien-être (WHO-5 <50 ; p < 0,001), à une humeur dépressive sévère (PHQ-9 ≥20 ; p < 0,001), à une mauvaise qualité du sommeil (PSQI >5 : 95,7 % ; p < 0,001) et à une somnolence diurne excessive (ESS ≥11 : 55,1 % ; p < 0,001).
Plusieurs variables prédictives d’insomnie ont été identifiées : la présence d’enfants de moins de 6 ans (OR = 2,5 ; IC95 % [0,6–9,6] ; p = 0,154), l’usage chronique d’hypnotiques (OR = 4,1 ; IC95 % [1,2–13,7] ; p = 0,02), le diabète (OR = 65,78 ; IC95 % [7,35–588,77] ; p < 0,001), les troubles gastro-intestinaux (OR = 3,37 ; IC95 % [0,779–14,588] ; p = 0,104), les antécédents d’infection à la COVID-19 (OR = 9,58 ; IC95 % [1,51–60,81] ; p = 0,017) ainsi qu’un score WHO-5 abaissé (OR = 3,5 ; IC95 % [1,54–8,12] ; p = 0,003).

Conclusion :
L’insomnie touche une proportion importante de travailleurs de nuit, particulièrement les plus jeunes, les femmes, les diplômés et les professionnels de santé. Elle est significativement associée à une mauvaise qualité du sommeil, à une altération du bien-être et à la présence d’une humeur dépressive. Ces résultats soulignent l’importance d’un dépistage systématique et d’une prise en charge précoce de l’insomnie dans cette population à risque.` },
  { id: 'p25', title: "Insomnie pendant la grossesse : prévalence, facteurs associés et conséquences obstétricales", authors: "TADJ. K; ZAOUI. C; MOULAY. H", affiliation: "CHU Ibn Rochd Annaba-Service de gynécologie-obstétrique Pavillon 3, Hôpital Ibn Rochd, Annaba-Algérie. Clinique Oran1", summary: `Introduction :
L’insomnie est un trouble fréquent mais sous-estimé pendant la grossesse. Elle peut influencer le déroulement de la gestation et du post-partum. Cette étude avait pour but d’identifier sa fréquence et ses facteurs de risque.

Méthodes :
Étude transversale incluant 200 femmes enceintes. L’insomnie a été évaluée par l’Index de Sévérité de l’Insomnie (ISI). Les facteurs cliniques et psychosociaux associés ont été analysés.

Résultats :
La prévalence de l’insomnie modérée à sévère (ISI ≥ 15) était de 32 %. Les principaux facteurs associés étaient l’anxiété (OR=3,8), l’obésité (OR=2,2) et la multiparité (OR=1,9). L’insomnie était corrélée à un risque accru de dépression post-partum (p<0,05).

Conclusion :
L’insomnie pendant la grossesse est fréquente et multifactorielles. Sa reconnaissance et sa prise en charge précoce pourraient prévenir des complications psychologiques et obstétricales.
Mots-clés : Insomnie, Grossesse,  Complications obstétricales` },
  { id: 'p26', title: "Le syndrome d'apnées-hypopnées obstructives du sommeil du sujet âgé : particularités cliniques et thérapeutiques", authors: "Houda Rouis, Meriem Ammar, Syrine Abdellatif, Tasnim Djebali, Mayssa Chariag, Hanine Zid, Amel Khattab, Ibtihel Khouaja, Ines Zendah, Sonia Maâlej", affiliation: "Service de Pneumologie « Pavillon 1», Hôpital Abderrahmane Mami, Ariana", summary: `Introduction : Le syndrome d’apnées-hypopnées obstructives du sommeil (SAHOS) est fréquent chez les sujets âgés, mais demeure souvent sous-diagnostiqué en raison de présentations cliniques atypiques et d’une sous-estimation des bénéfices thérapeutiques. Cette étude visait à décrire les particularités cliniques et thérapeutiques du SAHOS chez les patients âgés. 
Méthodes : Il s’agissait d’une étude observationnelle, descriptive, monocentrique, rétrospective, menée au service de pneumologie 3 de l’hôpital Abderrahmane Mami de l’Ariana, entre juin 2021 et juin 2024. 
Résultats : Un total de 221 patients a été inclus, dont 75 sujets âgés (34 %). La population était majoritairement féminine (69 %), non fumeuse (75 %) avec une prévalence élevée d’hypertension artérielle (66 %) et de dyslipidémie (39 %). Les symptômes les plus fréquents étaient les ronflements (91,9 %), le sommeil non réparateur (69,7%) et les céphalées matinales (63,3%). 
Les sujets âgés présentaient significativement plus d’hypertension artérielle (p<0,001), de dyslipidémie (p=0,011), d’asthme (p=0,038), de nycturie (p=0,03) et de troubles anxieux (p=0,025). Sur le plan biologique, on retrouvait plus souvent une thrombopénie (p=0,009), une élévation de l’urée (p=0,005), une hyperglycémie à jeun (p=0,029) et une baisse de la pression artérielle en oxygène (p=0,012). 
A la polygraphie ventilatoire, un SAHOS sévère (p<0,001), un index d’apnées-hypopnées plus élevé (p<0,001) et un index de désaturation accru (p=0,001) étaient plus fréquents, avec une prescription de pression positive continue plus systématique (p<0,001). 
L’analyse multivariée a montré une association indépendante au SAHOS chez les sujets âgés avec l’origine urbaine (OR=12,5 ; IC95 % : [1,79–87,79] ), le statut de retraité (OR=1,63 ; IC95 % : [1,07–2,49]), l’hypertension artérielle (OR=5,94 ; IC95 % : [2,37–14,85]), la dyslipidémie (OR=2,28 ; IC95 % : [1,06–4,87]), la nycturie (OR=2,56 ; IC95 % : [1,17–5,60]), la thrombopénie (OR=3,72 ; IC95 % : [1,32–10,47]), ainsi qu’un index de désaturation ≥13 événements/h (OR=3,79 ; IC95 % : [1,32–10,47]). 
Conclusion : Le profil type du sujet âgé apnéique dans notre population était un patient retraité, vivant en milieu urbain, hypertendu, dyslipidémique, présentant une nycturie et une thrombopénie, et dont la polygraphie montrait un index de désaturation élevé, même en l’absence de symptômes classiques.` },
  { id: 'p27', title: "Le syndrome d'apnées-hypopnées obstructives du sommeil en milieu professionnel : Dépistage précoce par le questionnaire STOP-BANG chez le médecin du travail", authors: "I. MASMOUDI* - M. SELLAMI**- K. KHARRAT - H.SAHNOUN * -D. KARRAY*** T. BOUASSIDA***", affiliation: "Faculté de médecine de Sfax- service de medecine du travail- groupement medecine de travail de Sfax", summary: `role du m"decin de travail dans le dépistage précoce du syndrome d'apnée de sommeil` },
  { id: 'p28', title: "Les facteurs prédictifs du SAHOS sévère", authors: "El Ghoul Jamel1, Bellara Roumayssa1, Bssissa Kilani1, Bendayekh Afef2.", affiliation: "1. Service de pneumologie. CHU Habib Bourguiba Médenine, Tunisie. 2. Service de Médecine. CHU Habib Bourguiba Médenine, Tunisie.", summary: `Introduction : Le syndrome d’apnées-hypopnées obstructives du sommeil (SAHOS) constitue un véritable problème de santé publique en raison de sa prévalence croissante et de ses conséquences cardiovasculaires, métaboliques, neurocognitives et socio-économiques.
La sévérité du SAHOS est un facteur déterminant du pronostic et conditionne la stratégie thérapeutique, rendant son identification précoce particulièrement importante.
Objectif : L’objectif de notre étude est d’identifier les facteurs cliniques, anthropométriques et polygraphiques particulièrement prédictifs d’un SAHOS sévère.
Méthode et patients : Nous avons mené une étude comparative incluant les patients suivis à l’unité d’exploration fonctionnelle respiratoire du service de pneumologie du CHU de Médenine au cours de l’année 2025. Le diagnostic du SAHOS est retenu pour un index d’apnées-hypopnées (IAH) supérieur à 5 par heure et la forme sévère est définie par un IAH supérieur à 30 événements par heure. Deux groupes ont été identifiés :
                     G1 : patients avec un SAHOS sévère (n=25)     
                     G2 : patients avec un SAHOS léger à modéré (n=25) 
Résultat :
Cinquante patients ont été inclus. L’IAH moyen était de 51,8/h pour le groupe G1 et de 15,3/h pour le groupe G2. L’âge moyen était de 61.28 et 52.6 ans respectivement pour G1 et G2 (p= 0.05). On a noté plus de femmes dans le G1 que le G2 (p= ). L’intoxication tabagique était comparable pour les deux groupes (12%vs. 4%, p=0.2). Les comorbidités cardiovasculaires étaient significativement plus fréquentes dans le G1, notamment l’hypertension artérielle (68 % vs 36%, p = 0,02) et l’insuffisance cardiaque (32 % vs 8 %, p = 0,03). De même, le diabète (44 % vs 16 %, p = 0,03), la dyslipidémie (56 % vs 24 %, p = 0,02), le SOH (36.4% vs 12%), ainsi que les dysthyroïdies (16 % vs 1 %, p = 0,04) étaient significativement plus représentés dans G1. L’obésité androïde était plus fréquente chez les sujets de G1 (88% vs 64, p=0.04) avec un IMC moyen à 37.9 et 33.9 Kg/m2 respectivement pour G1 et G2 (p=0.04).
Cliniquement, les ronflements (96% pour G1 et G2) et la somnolence diurne excessive (92% vs 72%, p=0.06) étaient comparables dans les deux groupes. Le score moyen d’Epworth ne différait pas significativement entre les deux groupe (12.4 vs 11.4, p=0.4). 
Conclusion : L’analyse univariée dans notre étude a montré que l’âge avancé, le sexe féminin, l’obésité androïde ainsi que la présence de comorbidités cardiovasculaire et métaboliques étaient associés à un risque accru de SAHOS sévère. L’identification précoce de ces facteurs constitue un enjeu majeur afin de cibler le dépistage, d’optimiser la prise en charge et de réduire la morbi-mortalité liée aux formes sévères du syndrome.` },
  { id: 'p29', title: "Obésité maternelle et hypoventilation du sommeil", authors: "TADJ. K; ZAOUI. C; MOULAY. H", affiliation: "CHU Ibn Rochd Annaba-Service de gynécologie-obstétrique Pavillon 3, Hôpital Ibn Rochd, Annaba-Algérie. Clinique Oran1", summary: `Introduction :
L’obésité est un facteur de risque majeur de troubles respiratoires du sommeil, dont l’hypoventilation. Chez la femme enceinte, cette complication peut altérer l’oxygénation materno-fœtale. L’objectif était d’évaluer la fréquence de l’hypoventilation nocturne chez les femmes enceintes obèses.

Méthodes :
Étude transversale incluant 80 femmes enceintes obèses (IMC ≥ 30 kg/m²). Chaque participante a bénéficié d’une polygraphie ventilatoire nocturne au deuxième trimestre. Les gaz du sang artériel ont été analysés le matin suivant.

Résultats :
L’hypoventilation nocturne (PaCO₂ > 45 mm Hg) a été observée chez 28 % des patientes. Elle était significativement associée à un IMC > 35 (p<0,01) et à des scores d’Hepworth plus élevés. Les patientes hypo ventilées avaient une fréquence accrue de complications hypertensives (22 % vs 8 %, p=0,04).

Conclusion :
L’hypoventilation liée à l’obésité est fréquente pendant la grossesse et mérite un dépistage systématique pour améliorer la prise en charge maternelle et néonatale.



Mots-clés : Obésité, Grossesse,  Sommeil, Complications obstétricales` },
  { id: 'p30', title: "Obstructive Sleep Apnea as a Determinant of Poor Glycemic Control in Type 2 Diabetes", authors: "Mechraoui Erij, Mekni Emna, Hamden Amani, Khaterchi Nadine, Dabboussi Salsabil, Sakhri Abdelmajid", affiliation: "Service endocrinologie, Hôpital militaire, Tunis", summary: `Background: The relationship between obstructive sleep apnea syndrome (OSAS) and type 2 diabetes (T2D) remains underexplored in Tunisian populations. This study aimed to assess the impact of OSAS on glycemic control and its determinants.
Methods: We conducted a descriptive and analytical study including 106 patients with T2D. OSAS was assessed using ventilatory polygraphy and validated screening questionnaires (Berlin, Epworth, NoSAS). Clinical, anthropometric, and laboratory data, including HbA1c, were analyzed.
Results: OSAS was diagnosed in 64% of patients (n=68). The mean HbA1c level was significantly higher in patients with moderate-to-severe OSAS compared with those with mild OSAS (8.57 ± 1.35% vs. 7.34 ± 1.14%; p = 0.002). Independent factors associated with OSAS included sedentary lifestyle (56% vs. 28%; p = 0.01), excessive daytime sleepiness (42% vs. 19%; p = 0.02), nocturia (38% vs. 16%; p = 0.03), and reported apneas (61% vs. 25%; p < 0.001). Patients with OSAS had a significantly higher body mass index (32.4 ± 4.6 vs. 28.7 ± 3.9 kg/m²; p < 0.01) and neck circumference (40.8 ± 3.2 vs. 37.2 ± 2.9 cm; p < 0.01).
Conclusion: OSAS is highly prevalent among Tunisian patients with T2D and contributes to poorer glycemic control. It is strongly associated with anthropometric parameters and both daytime and nocturnal symptoms. Targeted screening in highrisk patients may improve diabetes management and outcomes.` },
  { id: 'p31', title: "Orthostatic Hypotension in Hypertensive Patients with Obstructive Sleep Apnea: Unmasking Autonomic Dysfunction", authors: "Khansa DERBEL1,2, Sana SELLAMI3, Faten CHAIEB1,2, Sonia ROUATBI1,2", affiliation: "1-Physiology and Functional Exploration Department, Farhat Hached Hospital, Sousse, Tunisia 2-Heart Failure (LR12SP09) Research Laboratory, Farhat Hached Hospital, Sousse, Tunisia 3-Physiology and Functional Exploration Department, Habib Bourguiba University Hospital, Sfax, Tunisia.", summary: `Introduction:
Orthostatic hypotension (OH) reflects the inability of the autonomic nervous system to maintain postural regulation of blood pressure. It is often underdiagnosed but may represent a marker of cardiovascular morbidity. Obstructive sleep apnea (OSA) is common in hypertensive patients and contributes to autonomic imbalance. 

Objective:
To investigate the potential association between OH and OSA in hypertensive patients.

Methods:
A total of 56 hypertensive patients were included and divided into two groups, according to ventilatory polygraphy outcomes: G1 (with severe OSA, n=13) and G2 (controls, n=43). Blood pressure was measured at rest (sitting during 15mn) and one to three minutes after standing. Twenty-four-hour ambulatory blood pressure monitoring was also performed. OH was defined as a decrease in systolic blood pressure (SBP) ≥20 mmHg and/or diastolic blood pressure (DBP) ≥10 mmHg upon standing.

Results:
The two groups were comparable regarding age and sex (62±12 years in G1 vs. 54±12 years in G2; p=0.091, and 9 (69.2%) women in G1 vs. 25 (58.1%) in G2; p=0.352). The prevalence of diabetes and dyslipidemia were similar in both groups (5 (38.5%) vs. 14 (32.6%); p=0.468 and 6 (46.2%) vs. 14 (32.6%); p=0.282, respectively). Mean SBP values during daytime, nighttime, and 24h periods were significantly higher in G1 compared with G2 (143±13 vs. 134±13 mmHg; p=0.028, 129±10 vs. 122±15 mmHg; p=0.026, and 139±12 vs. 131±13 mmHg; p=0.017). Mean DBP values were comparable between both groups (p<0.050). The prevalence of OH defined by an SBP decrease was 4 (30.8%) in G1 vs. 4 (9.3%) in G2 (p=0.074), and by a DBP decrease was 3 (23.1%) in G1 vs. 4 (9.3%) in G2 (p=0.196). The overall prevalence of OH was significantly higher in G1 (5 (38.5%) vs. 4 (9.3%); p=0.024).

Conclusion:
Hypertensive patients with OSA showed a higher prevalence of OH, suggesting a role of autonomic imbalance. Systematic screening for OH and careful adjustment of antihypertensive therapy are recommended in this population to prevent cardiovascular complications.` },
  { id: 'p32', title: "Particularités cliniques et polygraphiques du syndrome d'apnées obstructives du sommeil chez le sujet âgé", authors: "El Ghoul Jamel1, Bellara Roumayssa1, Bssissa Kilani1, Bendayekh Afef2.", affiliation: "1. Service de pneumologie. CHU Habib Bourguiba Médenine, Tunisie. 2. Service de Médecine. CHU Habib Bourguiba Médenine, Tunisie.", summary: `Introduction : Le syndrome d’apnées hypopnées obstructives du sommeil (SAHOS) chez les sujets âgés constitue un problème majeur de santé publique. La prévalence du SAHOS augmente avec l’âge, en raison du vieillissement physiologique du système respiratoire, de la diminution du tonus musculaire pharyngé et de l’association fréquente à des comorbidités. Néanmoins, il demeure souvent sous-diagnostiqué.

L’objectif de notre étude est de déterminer les particularités cliniques et polygraphiques du SAHOS chez les sujets âgés.
Méthode et patients : Étude comparative, incluant les patients, suivis à l’unité d’exploration fonctionnelle respiratoire de pneumologie au CHU de  Médenine.
Les patients ont été répartis en 2 groupes : G1 : âge > 65 ans(n=18) et G2 : âge<65 ans (n=29)
Résultat : Les sujets âgés représentent 38.3% de l’effectif. L’âge moyen était de 73,16ans  et 47,82ans respectivement pour G1et G2. La prédominance féminine est comparable pour les deux groupe (77,8% vs 65.5%) tout comme le tabagisme (11,1% vs 20,7%).
Les comorbidités cardio-vasculaires étaient significativement plus marquées pour G1, en particulier, HTA (72,2% vs 44,8%, p=0,05), l’insuffisance cardiaque (27.8% vs 3.4%, p=0.015), FA (27,8% vs 6,9%, p=0.05), et la dyslipidémie (50% vs 13.8%, p=0.007). Le Syndrome d’obésité hypoventilation était également plus représenté chez G1 (50%vs10,3%, p=0.002). Sur le plan clinique, les ronflements et la somnolence diurne étaient présents chez la majorité des patients de notre étude, les céphalées matinales (33.3% vs 72.4%, p=0.008), la fatigue diurne (27.8% vs 62.1%, p= 0.02), le sommeil agité (16.7%vs 48.3%, p=0.02) et l’apnée (11.1%vs 41.4%, p=0.02) étaient plus rapportés dans G2. Toutefois, la nycturie (61.1%vs31%, p=0.04), les troubles de la mémoire (61.1% vs 31%, p=0.04) et les troubles de de l’humeur (61.1%vs 31%, p=0.04), étaient plus marqués chez les sujets âgés.
Sur le plan polygraphique, le SAHOS sévère était plus fréquent chez les sujets âgés avec un IAH moyen à 42/h et 27.9/h respectivement pour G1et G2 (p=0.05).
Les sujets âgés avaient un retentissement sur l’hématose nocturne plus important que les sujets moins âgés avec, une saturation moyenne (87.6% vs 92.1%, p=0.03) et un pourcentage de temps passé avec une saturation inférieure à 90% (42.5% vs 11.4%, p= 0.0001) plus bas chez les sujets de G1. 
Sur le plan thérapeutique, le recours à une ventilation nocturne était plus élevé chez les sujets âgés (88.2%vs 54.2%, p= 0.017). La CPAP était utilisé chez 10 de nos sujet âgés et 5 recevaient une ventilation en mode BiPAP. 
Conclusion : Notre étude confirme que le SAOS est associé à une sévérité plus marquée et une symptomatologie atypique, ces particularités peut être expliquer par les changements physiologiques liés à l’âge et les comorbidités associés` },
  { id: 'p33', title: "Prédicteurs cliniques et polygraphiques du syndrome d'apnées du sommeil sévère dans une population du sud Tunisien", authors: "Balsam BARKOUS, Sabrine MAJDOUL, FEUB FEHRI, Oumayma AGGOUNI, Anis Ouerghemmi, Hamida KWAS", affiliation: "Service de pneumologie, Hôpital Universitaire de Gabès", summary: `Introduction
Le syndrome d’apnées du sommeil (SAS) est fréquent et se caractérise par des événements respiratoires nocturnes et des désaturations en oxygène. L’index d’apnées-hypopnées (IAH) définit la sévérité, mais les facteurs cliniques et polygraphiques prédictifs d’un SAS sévère sont peu connus. Cette étude visait à identifier les déterminants indépendants d’un SAS sévère (IAH ≥30).

Méthodes
Nous avons inclus des patients ayant un SAS et diagnostiqués par polygraphie ventilatoire. Les données recueillies comprenaient âge, sexe, IMC, score d’Epworth, index de désaturation en oxygène (IDO), SpO₂ moyenne, durée moyenne des apnées et hypopnées, et pourcentage du temps SpO₂ <90 %. Une régression logistique multivariée a été réalisée pour identifier les facteurs indépendants associés à un SAS sévère.

Résultats
Parmi les 100 patients inclus (âge moyen 57,13±10,60 ans, 33% hommes, IMC moyen 35,28±6,11 kg/m²), 48 % présentaient un SAS sévère. L’IDO (OR = 1,25 ; IC95 % [1,10–1,43] ; p = 0,001) et le score d’Epworth (OR = 1,19 ; IC95 % [1,02–1,40] ; p = 0,029) étaient des prédicteurs indépendants du SAS sévère. La durée moyenne des apnées montrait une tendance à l’association (OR = 1,46 ; IC95 % [0,97–2,19] ; p = 0,068). Les autres variables, y compris l’âge, le sexe, l’IMC, la SpO₂ moyenne, la durée moyenne des hypopnées et le temps SpO₂ <90 %, n’étaient pas significativement associées.

Conclusion
Chez les patients explorés pour SAS, l’IDO et la somnolence diurne excessive étaient des facteurs indépendants de sévérité. Ces résultats suggèrent que l’évaluation conjointe de la charge hypoxique et des symptômes cliniques est essentielle pour identifier les patients à haut risque et guider leur prise en charge.` },
  { id: 'p34', title: "Prévalence et facteurs déterminants des effets indésirables de la VNI en pratique clinique", authors: "Ilhem Ben Salah1, Rahma Gargouri1, Dorra Abdelmouleh1, Sameh Msaad1, Nedia Moussa1, Samy Kammoun1", affiliation: "1Service de Pneumologie, CHU Hedi Chaker Sfax *Service de Médecine de Travail de Tunis", summary: `Introduction : 
La ventilation non invasive (VNI) est devenue une stratégie incontournable dans la prise en charge de l’insuffisance respiratoire aiguë et chronique. Si son efficacité est largement démontrée, sa tolérance reste un enjeu majeur, souvent limitée par des effets indésirables. Ce travail vise à identifier les facteurs influençant cette tolérance afin d’optimiser l’adhésion et d’améliorer les résultats cliniques.
Méthodologie : 
Il s’agit d’une étude rétrospective, longitudinale, descriptive, analytique et monocentrique incluant des patients suivis et traités à l’unité du sommeil du service de pneumologie du CHU Hedi Chaker de Sfax, durant la période allant de janvier 2004 à décembre 2023. 
Résultats :
L’étude a inclus 100 patients traités par VNI au long cours. Une prédominance masculine a été observée, avec un sex-ratio de 1,85. L’âge médian de notre population était de 68 ans avec IIQ : [60-72 ans]. Dans notre population, l’indication principale à la VNI était représentée par la bronchopneumopathie chronique obstructive (34 %), suivie du syndrome d'obésité-hypoventilation (28 %).
Des effets indésirables ont été rapportés par 67 % des patients, dominés par la sécheresse buccale (57 %), les fuites de masque (38 %) et l’irritation nasale/oculaire (13 %).

La fuite médiane au masque était de 7,5 L/min (IIQ [0,00–22,5]).
Aucune association significative n’a été retrouvée entre la tolérance de la VNI et le sexe (p=1), l’âge (p=0,28), le nombre de comorbidités (p=0,073) ou la pathologie respiratoire sous-jacente.
Le masque facial a été mieux toléré que le nasal (66,3 % vs 100 % d’effets indésirables;p<0,001). Les patients sous oxygénothérapie au long cours présentaient davantage d’effets indésirables (82,1 % vs 64,7 % ; p=0,024).
L’utilisation d’un humidificateur était associée à une tendance non significative à l’augmentation des effets indésirables (p=0,07).
L’analyse multivariée n’a identifié aucun facteur prédictif significatif de la tolérance (âge <65 ans : OR=0,81 ; obésité : OR=0,63 ; monomorbidité : OR=0,39 ; utilisation d’humidificateur : OR=1,11).
Conclusion :
La VNI reste globalement bien tolérée, mais la majorité des patients présentent des effets indésirables, en particulier liés l’interface. Le masque facial semble être le choix le plus adaptée. Ces résultats soulignent l’importance d’une optimisation individualisée de l’interface et des paramètres de VNI afin d’améliorer la tolérance et l’adhésion.` },
  { id: 'p36', title: "Profil des comorbidités chez les patients atteints de SAHOS sévère versus non sévère", authors: "Mayssa chariag, Houda Rouis, Syrine Abdellatif, Hanine Zid, Tasnim Djebali, Amel Khattab, Ibtihel Khouaja, Ines Zendah, Sonia Maâlej", affiliation: "Service de Pneumologie, pavillon 1. Hopital Abderrahmane Mami, Ariana, Tunisie.", summary: `Introduction 
Le syndrome d’Apnées-Hypopnées Obstructives du Sommeil (SAHOS) constitue une pathologie fréquente dont l’impact cardio-métabolique est largement documenté. L’objectif de cette étude était de comparer la prévalence des principales comorbidités entre patients présentant un SAHOS sévère et ceux atteints de formes non sévères.
Méthodes
Étude rétrospective comparative portant sur 241 patients suivis pour SAHOS entre 2021 et Juillet 2025. Deux groupes ont été individualisés G1 : Patients avec SAHOS léger ou modéré (Index apnées hypopnées IAH< 30 évènements/h) ; G2 : Patients avec SAHOS sévère (IAH ≥30 évènements/h)
Résultats
L’âge moyen des patients était de 58 ± 13 ans avec un sex-ratio H/F = 2,2. Le tabagisme était noté chez 57 (23,8%) patients, l’alcoolisme chez 8 (3,3%) patients. Les principales comorbidités étaient : l’obésité n=203 (84,6%), l’HTA n=159 (66,2%), l’hypertriglycéridémie n=113 (47,1%), le diabète n=78 (32,5%), l’asthme n=34 (14,2%), l’hypothyroïdie n=27 (11,2%) et la BPCO n=7 (2,9%).
L’HTA était plus fréquente dans le G2 (76,2% vs 59,0% ; p<0,01). Il n’y avait pas d’associations significatives entre le SAHOS sévère et les autres comorbidités : Obésité (88,1% vs 82,0%, p=0,19), hypertriglycéridémie (49,5% vs 45,3%, p=0,47), diabète (35,6% vs 30,2%, p=0,38), asthme (16,8% vs 12,2%, p=0,31), BPCO (1,0% vs 4,3%, p=0,24).
En comparant les patients SAHOS sévères hypertendus à ceux non hypertendus via une étude univariée, nous avons observé que l’âge était significativement plus élevé dans le groupe des hypertendus (61,2 vs 53,0 ans ; p < 0,01). L’analyse multivariée a confirmé que l’âge avancé (OR = 1,09 ; IC95 % [1,03–1,14] ; p < 0,01) et l’hypertriglycéridémie (OR = 3,70 ; IC95 % [1,12–12,18] ; p = 0,03) étaient des facteurs prédictifs indépendants d’HTA, indiquant que la survenue de l’HTA chez les apnéiques sévères ne dépend pas uniquement de la sévérité du SAHOS, mais aussi du profil métabolique et démographique.
Conclusion 
Dans notre cohorte, l’HTA apparaît comme la comorbidité la plus étroitement liée au SAHOS sévère. L’identification de l’âge avancé et de l’hypertriglycéridémie comme facteurs indépendants d’HTA suggère que la prise en charge de ces patients doit dépasser le seul traitement du SAHOS et inclure un dépistage systématique et un contrôle strict des facteurs de risque cardio-métaboliques.` },
  { id: 'p37', title: "Qualité du sommeil chez le personnel soignant : état des lieux", authors: "Mohamed Slim Majoul1, Meriam Messelmani1, Lenda Ben Hamida2, Yasmine Amor1, Zied Moatemri2, Jamel Zaouali1", affiliation: "1-Service de Neurologie, CHU Fattouma Bourguiba Monastir 2-Service de Pneumologie, CHU Hedi Chaker, Sfax", summary: `Introduction
La qualité du sommeil du personnel soignant hospitalier influence directement leur bien-être et la qualité des soins. Peu d’études tunisiennes sont disponibles à ce sujet.
Notre objectif était d’évaluer la qualité du sommeil dans une cohorte de personnel soignant hospitalier.
Méthodes
Une étude observationnelle monocentrique et transversale a été menée auprès du personnel soignant de l’hôpital militaire principal d’instruction de Tunis. Nous avons inclus le personnel paramédical ayant plus de 6 mois d’expérience. Nous avons exclu, les stagiaires et le personnel soignant ayant eu au moins 1 mois d’arrêt de travail dans les 6 derniers mois. L’index de Pittsburgh a été utilisé pour quantifier la qualité globale du sommeil (QGS) comme suit : QGS altérée si PSQI > 10 et bonne QGS si PSQI ≤ 10. L’échelle d’Epworth a été utilisée pour évaluer la somnolence diurne excessive (SDE) comme suit : SDE présente si ESE > 10 et SDE absente si ESE ≤ 10.
Résultats
Nous avons inclus 106 participants avec un sex-ratio de 1,2 et un âge médian de 31 ans (IQR=15). Une mauvaise QGS a été observée chez 33% des cas (n=35). La médiane du score PSQI était de 9 (IQR=4.25). La latence d’endormissement était de plus de 30 minutes dans 36.8% des participants (n=39). Une insomnie quotidienne était de type endormissement chez 21.7% des cas (n=23) et de type matinal chez 33% des cas (n=35). L’efficacité du sommeil était de <65% dans 15.1% des participants (n=16). Les déterminants identifiés d’une mauvaise QGS étaient : une nycturie chez 21 cas (19.8%), un syndrome d’apnée du sommeil chez 12.3% (n=13), des troubles dysautonomiques chez 8 participants (7.5%), des parasomnies chez 13 participants (12.3%), une nycturie dans 21 cas (n=19.8%) et des douleurs dans 17% des cas (n=18). Une SDE a été retrouvée chez 18 personnes (17%).
Conclusions
Notre étude a montré la fréquence des troubles du sommeil chez le personnel soignant en identifiant les facteurs associés. Un dépistage et une prise en charge adéquate sont nécessaires pour améliorer la qualité de vie au travail et la qualité des soins fournis aux patients.` },
  { id: 'p38', title: "Qualité du sommeil et rythme circadien de la pression artérielle chez les patients hypertendus", authors: "Khansa Derbel, Faten Chaieb, Sonia Rouatbi", affiliation: "Physiologie et explorations fonctionnelles, Hôpital Farhat Hached de Sousse 2.Laboratoire de recherche « insuffisance cardiaque » (LR12SP09), Hôpital Farhat Hached de Sousse", summary: `Introduction :
La qualité du sommeil (QS) influence directement la qualité de vie des patients et peut contribuer au développement de maladies cardiovasculaires. Cependant, elle reste souvent sous-estimée lors de l’évaluation des comorbidités générales chez les patients hypertendus.
Objectif :
Évaluer l’impact d’une mauvaise QS sur le rythme circadien de la pression artérielle (PA) chez des patients hypertendus.
Méthodes :
Une étude transversale comparative a été réalisée sur 18 mois au service d’explorations fonctionnelles de l’Hôpital Farhat Hached de Sousse. Tous les participants étaient des adultes hypertendus. Ils ont complété deux questionnaires: un questionnaire médical standard et le « Pittsburgh Sleep Quality Index » (PSQI) pour évaluer la QS nocturne. Une mesure ambulatoire de la PA sur 24 heures a été pratiquée. Les patients ont été répartis en deux groupes selon leur PSQI (< ou ≥ 5): QS satisfaisante / mauvaise QS.
Résultats :
Soixante-six patients ont été inclus, dont 42 avec une mauvaise QS et 24 avec une QS satisfaisante. L’âge moyen était de 53,2±14,5 ans et le sex-ratio de 0,5. La durée moyenne de l’hypertension était de 4,5±4,9 ans. La moyenne du PSQI était de 7,2±3,8. Le groupe avec mauvaise QS présentait des valeurs de PA systolique diurne et de 24h significativement plus élevées (p < 0,05), ainsi que des valeurs de PA diastolique diurne, nocturne et de 24h plus élevées (p < 0,05). Les deux groupes étaient comparables pour la fréquence cardiaque et le profil du dipping nocturne.
Conclusion :
Une mauvaise QS perturbe le contrôle de l’hypertension artérielle en augmentant les valeurs de PA diurne et nocturne. Cette situation accroît le risque cardiovasculaire et aggrave le pronostic des patients hypertendus.` },
  { id: 'p39', title: "SAHOS à travers les âges : étude comparative des profils cliniques, biologiques et polygraphiques", authors: "Turki C, Moussa C, Sbei T, Bel haj mabrouk H, Channoufi A, Mhamdi S, Aichaouia C, Moetamri Z", affiliation: "service de pneumologie, hôpital militaire, Tunis.", summary: `Introduction :
La prévalence du syndrome d’apnées hypopnées obstructives du sommeil (SAHOS) augmente avec l’âge, mais son diagnostic demeure souvent méconnu chez les personnes âgées en raison de présentations cliniques atypiques. Ce travail vise à caractériser les spécificités du SAHOS chez les sujets âgés par rapport aux plus jeunes.
Méthodes :
Nous avons mené une étude rétrospective comparative incluant 119 patients ayant un SAHOS confirmé par polygraphie ventilatoire (IAH >5/h), suivis à l’unité de sommeil et de ventilation du service de pneumologie de l’Hôpital Militaire de Tunis. Les patients ont été répartis en deux groupes selon l’âge :
•	Groupe 1 (G1) : sujets âgés (≥65 ans)
•	Groupe 2 (G2) : sujets jeunes (<65 ans)
Résultats :
Les sujets âgés représentaient 31,1 % de la cohorte (n=37), avec un âge moyen de 69,6 ± 5,9 ans (G1) versus 47,1 ± 11,4 ans (G2). Les deux groupes présentaient une prédominance féminine (G1 : 54 % ; G2 : 52 %, p=0,87) et des taux de tabagisme similaires (40,5 % vs 34,1 %, p=0,50).
Les comorbidités étaient significativement plus observées dans le G1, dominées par l’hypertension artérielle (67,6 % vs 31,7 %, p < 10⁻³), les antécédents thromboemboliques (18,9 % vs 2,4 %, p = 0,002) et la fibrillation auriculaire (19,2 % vs 4,1 %, p = 0,048). À l’inverse, l’asthme était plus fréquent chez les sujets jeunes (26,8 % vs 5,4 %, p = 0,007).
Sur le plan clinique, les symptômes nocturnes étaient plus marqués chez les sujets âgés (fragmentation du sommeil : 59,5 % vs 23,2 %, p < 10⁻³ ; nycturie : 56,8 % vs 36,6 %, p = 0,04, avec une fréquence nocturne plus élevée : 2,6 vs 0,9 épisodes/nuit, p = 0,025). La fatigue diurne prédominait chez les sujets jeunes (59,8 % vs 35,1 %, p = 0,013).
La sévérité du SAOS était comparable entre les deux groupes, avec un IAH moyen similaire (G1 : 36 vs G2 : 31, p = 0,27), de même que l’index de désaturation, l’index de ronflement et le temps passé avec une SpO₂ inférieure à 90 %.
Sur le plan biologique, le groupe âgé présentait des taux plus élevés de cholestérol total (5,2 vs 4,1 mmol/L, p=0,003) et de LDL (3,1 vs 2,3 mmol/L, p=0,004), alors que les taux de triglycérides, glycémie à jeun et LDH restaient similaires.
Conclusion :
Le SAHOS chez le sujet âgé se distingue par une fréquence accrue de comorbidités cardiovasculaires et de symptômes nocturnes spécifiques, alors que la sévérité du syndrome reste comparable à celle des sujets plus jeunes. Ceci souligne la nécessité d’un dépistage systématique et d’une prise en charge individualisée chez les personnes âgées afin d’améliorer leur qualité de vie et de prévenir les complications.` },
  { id: 'p40', title: "Sévérité du SAHOS et somnolence diurne excessive : association clinique", authors: "Zid H.*1 Abdellatif S.1 Rouis H.1 Djbali T.1Khouaja I.1 Zendah I.1 Maalej S.1", affiliation: "Service de pneumologie, Pavillon III, Hopital Abdderrahmen Mami, Ariana, Tunisie.", summary: `Introduction   

La somnolence diurne excessive (SDE) constitue l’un des  symptômes les plus fréquents du syndrome apnées hypopnées obstructives  du sommeil (SAHOS). Elle est évaluée de manière objective à l’aide de l’échelle de somnolence d’Epworth (ESS). L’objectif de notre étude était d’évaluer l’association entre la sévérité du SAHOS et celle de l’ESS.

Méthodes 

Il s’agit d’une étude rétrospective, descriptive et comparative portant sur 221 patients suivis entre 2021 et 2024 au  service de pneumologie, pavillon 3, de l’hôpital Abderrahmane Mami de l’Ariana. Le diagnostic de SAHOS a été confirmé par une polygraphie ventilatoire et retenu pour un IAH > 5/h. La somnolence diurne excessive a été définie par un score à ESS≥11. Les patients ont été répartis en trois groupes selon la sévérité du SAHOS :
 G1 : patients ayant un SAHOS léger , défini par un IAH entre 5 et 15(n=88).
G2 : patients ayant un SAHOS modéré, défini par un IAH entre 15et 30(n=42).
 G3 : patients ayant un SAHOS  sévère défini par un IAH supérieur à 30(n= 91).

 Résultats 

L’âge moyen était de 57±13 ans avec une prédominance féminine à 69%. Le SAHOS était léger, modéré et sévère dans respectivement 39,8%, 19% et 41% des cas, avec un IAH moyen à 25/h±18/h. Le score moyen de l’ESS était de 9±5. L’indice de masse corporelle moyen était de 37 kg/m2±. La SDE étaient présente dans 50,4 % des cas. En comparant les groupes, notre étude a montré que l’hypertension artérielle systémique était significativement plus fréquente dans le G2 (G1 55,7% vs G2=64,2% vs G3 75,8% ,p=0,018). Sur le plan clinique, le cou court (p=0,048) et le micrognathisme (p=0,028) étaient significativement plus observé dans le G3. Les scores moyens d’ESS étaient significativement plus élevés chez les patients atteints de SAHOS sévère par rapport aux formes modérées et légères (p =0,032). Une analyse de variance (ANOVA) a montré une différence significative du score de SDE selon la sévérité du SAHOS (F(2, 49), p =0,045). Ceci explique que 1,5% de la variance du score d’Epworth (R² = 0,015), suggérant une association positive modérée entre la sévérité du SAHOS et celle de la SDE.

Conclusion 

Il existe une relation statiquement significative entre la sévérité du SAHOS et l’intensité de la SDE. L’évaluation combinée de la sévérité du SAHOS et des symptômes cliniques reste essentielle pour une prise en charge optimale.` },
  { id: 'p41', title: "Sévérité du syndrome d'apnées obstructives du sommeil liée au statut et à l'intensité tabagique", authors: "Ben Méchlia M, Ghribi W, Chaouech E, Kaddoussi R,Ayedi M,Guedri I, Ben Rjeb M, Ben Yahia M, , Zaara E, Cheikhmhamed S, Joober S", affiliation: "Service de Pneumologie,CHU Fattouma Bourghiba ,Monastir", summary: `Introduction
Le syndrome d’apnées obstructives du sommeil (SAOS)se caractérise par des obstructions répétées des voies respiratoires supérieures, entraînant hypoxie intermittente et fragmentation du sommeil. Le tabagisme, tant par le statut fumeur que par l’intensité cumulée, pourrait moduler la sévérité du syndrome. Cette étude vise à évaluer cet impact.
Méthode
Il s’agit d’une étude rétrospective et analytique menée sur 223 patients diagnostiqués pour syndrome d’apnées obstructives du sommeil au service de pneumologie du CHU Fattouma Bourguiba, Monastir, entre 2018 et 2025. Les patients ont été classés selon le statut tabagique (fumeurs vs non-fumeurs) et, chez les fumeurs, selon l’intensité tabagique (≤20 ou >20 paquet années).
Résultat
Sur 223 patients, la majorité étaient non-fumeurs (65 % vs 35 % ; p = 0,001), avec un âge moyen comparable entre fumeurs et non-fumeurs (54,97 ± 9,8 vs 55,26 ± 12,8 ans ; p = 0,198). Les fumeurs présentaient un index d’apnées-hypopnées (IAH) plus élevé (31,4 ± 19,7 vs 23,95 ± 18,3 ; p = 0,002), une proportion plus importante de SAOS sévère (56 % vs 39 %; p = 0,023), un index de désaturation plus élevé (35,4 ± 22,9 vs 29,2 ± 21,5 ; p = 0,041), une PaO₂ légèrement réduite (81,87 ± 20,04 vs 85,34 ± 16,55 mmHg ; p = 0,014), ainsi que des VEMS, CVF et VEMS/CVF plus faibles (p ≤ 0,003 pour tous) et une polyglobulie plus fréquente (20,4 % vs 0 %;p = 0,013). Parmi les fumeurs, ceux avec >20 paquet années avaient un IAH plus élevé (35,5 ± 18,4 vs 23,1 ± 20,2 ; p = 0,003), une proportion de SAOS sévère plus importante (70,4 % vs 27,3 %;p = 0,001) et une somnolence diurne plus fréquente (score d’Epworth >10 : 74,1 % vs 50 %; p = 0,043), sans différence significative pour l’index de désaturation (p = 0,123).
Conclusion
Le tabagisme, et plus particulièrement son intensité, augmente la sévérité du SAOS, ce qui souligne l’importance d’intégrer le sevrage tabagique dans la prise en charge globale des patients.` },
  { id: 'p42', title: "Sommeil et Somnolence : Peut-on se fier aux symptômes pour évaluer la sévérité des apnées ?", authors: "Melek Feki1,Selsabil Bouafia 1, Ahmed Abdelghani1", affiliation: "Service de Pneumologie,CHU Farhat Hached Sousse", summary: `Objectif : Cette étude vise à décrire les caractéristiques cliniques et polysomnographiques d'une cohorte de patients suspects de SAS et à évaluer la corrélation entre l'Index d'Apnées-Hypopnées (IAH) et le score de somnolence d'Epworth.

Méthodes : Une analyse rétrospective a été réalisée sur 54 patients adultes (30 femmes, 24 hommes) suivis au service de pneumologie hopital Farhat Hached pour suspicion de SAS. Les données recueillies incluent l'âge, le sexe, l'IMC, les comorbidités, le score de somnolence d'Epworth, et l'IAH mesuré par polygraphie. Une analyse descriptive et une comparaison entre l'IAH et le score d'Epworth ont été conduites.

Résultats : L'âge moyen des patients était de 58,6 ans. L'IMC moyen était de 31,2 kg/m², indiquant une population majoritairement en surpoids ou obèse. Parmi les comorbidités fréquentes : hypertension (59%), dyslipidémie (22%), et hypothyroïdie (11%). Le score d'Epworth moyen était de 10,7 (écart : 3-16), indiquant une somnolence diurne modérée. %). La distribution de l'ESS a révélé une somnolence pathologique (ESS≥10) chez 73% des patients, répartis ainsi : 31% légère (10-12), 31% modérée (13-15) et 11,5% sévère (16-24).  L'IAH moyen était de 32,6 (écart : 2,4-75,8), avec 70% des patients présentant un IAH ≥ 15 (SAS modéré à sévère). Le coefficient de détermination (R²) entre le score d'Epworth et l'IAH était de 0,036 (faible), indiquant une absence de corrélation linéaire significative.

Conclusion : Bien que la somnolence diurne soit un symptôme fréquent du SAS, sa mesure par le score d'Epworth ne reflète pas la sévérité objective des apnées. Seulement 3,6% de la variabilité de l'IAH s'explique par le score d'Epworth. Une évaluation polysomnographique reste indispensable pour un diagnostic précis et l'évaluation de la sévérité du SAS.
Mots-clés : Syndrome d'apnées du sommeil, IAH, score d'Epworth, somnolence diurne, polygraphie, comorbidités, corrélation.` },
  { id: 'p43', title: "STOP-BANG : Fiabilité et limites dans le dépistage du syndrome d'apnées obstructives du sommeil", authors: "Turki C, Moussa C, Ksouri C, Bel haj mabrouk H, Channoufi A, Mhamdi S, Aichaouia C, Moetamri Z", affiliation: "service de pneumologie, hôpital militaire, Tunis.", summary: `Introduction :
Le syndrome d’apnées obstructives du sommeil (SAOS) est une affection répandue, associée à une morbidité cardiovasculaire et métabolique élevée. Son dépistage en routine nécessite des outils simples et efficaces. Le questionnaire STOP-BANG est largement utilisé, mais sa performance diagnostique varie selon le seuil appliqué et la sévérité du SAOS.
Objectif :
Évaluer la performance du questionnaire STOP-BANG pour le dépistage du SAOS au sein d’une population tunisienne.
Méthodes :
Étude prospective menée auprès de patients adressés pour suspicion de SAOS au service de pneumologie de l’Hôpital Militaire de Tunis. Le score STOP-BANG a été calculé pour chaque participant : risque faible (0–2), modéré (3–4), élevé (≥5). Tous ont bénéficié d’une polygraphie ventilatoire, avec classification du SAOS selon l’index apnée hypopnée (IAH) : absence (<5), léger (5–15), modéré (16–30), sévère (>30). Les courbes ROC ont été utilisées pour analyser la performance diagnostique du STOP-BANG aux seuils ≥3 et ≥5, en fonction de la sévérité du SAOS.

Résultats :
Cent vingt-cinq patients (66 femmes, 59 hommes), d’âge moyen 54 ± 14 ans et d’IMC moyen 36,9 ± 6,7 kg/m² ont été inclus. La répartition des risques selon le STOP-BANG était : faible (16 %), modéré (36 %), élevé (48 %). La polygraphie a exclu le SAOS chez 6 patients (4,8 %), diagnostiqué une forme légère chez 25 (20 %), modérée chez 25 (20 %) et sévère chez 69 (55,2 %). L’appareillage a concerné 62 patients (49,6 %), tandis que 7 ont refusé. Le score STOP-BANG était significativement plus élevé chez les patients avec SAOS sévère (5,2 ± 1,2) comparé aux formes modérées (3,7 ± 1,1), légères (2,7 ± 0,9) ou sans SAOS (2,1 ± 0,4) (p < 0,0001).
L’analyse ROC a montré que pour le SAOS léger, un score STOP-BANG >3 offrait une sensibilité de 20 % et une spécificité de 24 %, alors que pour un seuil >5, la sensibilité chutait à 0 % avec une spécificité de 68 %. Pour le SAOS modéré, le seuil >3 donnait une sensibilité de 60 % et une spécificité de 34 % ; pour >5, la sensibilité était de 4 % et la spécificité de 69 %. Concernant le SAOS sévère, le seuil >3 atteignait une sensibilité de 88,4 % et une spécificité de 64,3 %, tandis que >5 donnait une sensibilité de 44,9 % et une spécificité de 98,2 %. 
Le score STOP-BANG ≥3 permettait de classifier correctement 84,3 % des patients.
Conclusion :
Le questionnaire STOP-BANG s’affirme comme un outil pertinent pour le dépistage du SAOS sévère, particulièrement avec un seuil ≥3, garantissant une excellente sensibilité. L’élévation du seuil à ≥5 accroît la spécificité, permettant d’identifier avec précision les patients à très haut risque, mais au détriment de la sensibilité. Une adaptation du seuil selon le contexte clinique et les objectifs du dépistage (dépistage large ou ciblé) s’avère donc indispensable pour optimiser l’efficacité du STOP-BANG en pratique courante.` },
  { id: 'p44', title: "Syndrome d'apnées du sommeil et obésité morbide : sévérité respiratoire et métabolique, vers une prise en charge multidisciplinaire", authors: "Ben Méchlia M, Ghribi W, Chaouch E, Kaddoussi R, Ayedi M, Ben Rjeb M, Ben Yahia M, , Zaara E, Cheikhmhamed S, Joober S", affiliation: "Service de Pneumologie,CHU Fattouma Bourghiba ,Monastir", summary: `Introduction
Le syndrome d’apnées du sommeil est fréquent chez les patients obèses morbides.L’objectif de cette étude était  de déterminer l’influence de l’obésité morbide sur le syndrome d’apnées du sommeil et ses complications métaboliques et respiratoires.
Méthode
Étude rétrospective analytique menée au service de pneumologie du CHU Fattouma Bourguiba de Monastir entre 2018 et 2025. Les patients adultes atteints de SAS ont été inclus et classés en deux groupes selon la présence d’obésité morbide (G1) ou non (G2).
Résultat
Parmi les 181 patients inclus, 108 étaient classés G1 (obèses morbides) et 73 G2 (non obèses morbides), avec un âge médian de 57 ±12,2 ans vs 55 ±11,4 ans (p=0,615). Les femmes étaient plus représentées dans le groupe G1 (66,7 % vs 47,9 %, p=0,001). L’hypertension artérielle était significativement plus fréquente chez G1 (72,2 % vs 46,6 %, p<0,001), alors que le diabète et la coronaropathie ne différaient pas entre groupes. La somnolence diurne (Epworth >10) était plus fréquente dans G1 (70,4 % vs 39,7 %, p<0,001). Le ronflement nocturne et la polyurie nocturne ne différaient pas significativement entre groupes (p=1,000 et p=0,485, respectivement).Le SAS était plus sévère chez G1, avec un IAH médian de 28,3 ±18,6 vs 18,6 ±20,4 (p=0,014) et un index de désaturation de 32,2 ±22,6 vs 19,4 ±21,2 (p=0,001). La fonction respiratoire révélait une restriction modérée, avec une CVF médiane réduite (2,42 ±0,74 L vs 2,94 ±0,90 L, p=0,001) et un VEMS diminué (2,12 ±0,65 L vs 2,48 ±0,73 L, p<0,001).La gazométrie montrait une PaO₂ légèrement inférieure (84 ±14,3 mmHg vs 88,2 ±19,5 mmHg, p=0,050), une PaCO₂ plus élevée (37,7 ±5,2 mmHg vs 36 ±5,2 mmHg, p=0,032) et une bicarbonatémie accrue (25,5 ±3,3 mmol/L vs 24,6 ±2,9 mmol/L, p=0,042) chez G1.Sur le plan métabolique, la glycémie médiane était plus élevée (6,0 ±2,2 mmol/L vs 4,65 ±0,07 mmol/L, p=0,041), tandis que les paramètres lipidiques ne différaient pas significativement.
Conclusion
Chez les patients obèses morbides, la sévérité du SAS et les altérations métaboliques mettent en évidence la nécessité d’une approche multidisciplinaire incluant conseils diététiques, suivi nutritionnel et options chirurgicales bariatriques` },
  { id: 'p45', title: "Syndrome d'apnées hypopnées du sommeil au cours de l'insuffisance cardiaque à l'état stable", authors: "Mrassi H1, Almi MA2, Barkaoui G1, Chaabouni S1, Kacem K1, Zarrouk S1, Ben Halima A2, El Gharbi L1", affiliation: "Service de pneumologie « D », Hôpital Abderrahmane Mami Ariana 2 Service de cardiologie, Hôpital Abderrahmane Mami Ariana", summary: `Introduction : L’insuffisance cardiaque (IC) demeure une cause majeure de morbidité et de mortalité. Le syndrome d’apnées-hypopnées du sommeil (SAHS) constitue une comorbidité fréquente, souvent sous-estimée, qui aggrave le pronostic des patients. Notre objectif a été d’évaluer la fréquence et les caractéristiques du SAHS selon les différents types d’IC.
Méthodes : Étude transversale monocentrique (Septembre 2024 – Septembre 2025) incluant des patients adultes consentants (18–85 ans) atteints d’IC à l’état stable, recrutés sans suspicion préalable de SAHS. Tous les participants ont bénéficié d’une polygraphie ventilatoire nocturne et d’une échocardiographie transthoracique. L’analyse statistique a été réalisée à l’aide du logiciel SPSS.
Résultats : Soixante-six patients ont été inclus (âge moyen 63 ans, 59 % d’hommes). La fréquence du SAHS a été de 76 % (72% de SAHS obstructif, 42 % de formes sévères). Le SAHS a été particulièrement fréquent au cours de l’IC à fraction d’éjection du VG (FeVG) préservée (HFpEF : 86 %). La FeVG a été négativement corrélée aux indices de sévérité du SAHS. Les patients présentant un SAHS modéré à sévère avaient plus de facteurs de risque cardiovasculaire et de somnolence diurne. Le SAHS obstructif a été associé à un indice de masse corporelle plus élevé et à un âge plus jeune, tandis que le SAHS central a été corrélé à une FeVG plus basse.
Conclusion : Le SAHS est fréquent au cours de l’IC à l’état stable, avec des profils distincts selon le type d’IC. Le SAHS obstructif prédomine dans l’HFpEF, tandis que le SAHS central est associé à une FEVG réduite. Un dépistage systématique pourrait améliorer la prise en charge et le pronostic de ces patients.` },
  { id: 'p46', title: "Syndrome d'apnées obstructives du sommeil et diabète : caractéristiques cliniques, polygraphiques et thérapeutiques", authors: "El Ghoul Jamel1, Bachta Tayssir1, Bellara Roumayssa1, Bssissa Kilani1, Bendayekh Afef2.", affiliation: "1. Service de pneumologie. CHU Habib Bourguiba Médenine, Tunisie. 2. Service de Médecine. CHU Habib Bourguiba Médenine, Tunisie.", summary: `Introduction : La prévalence du syndrome d’apnée de sommeil (SAOS) ne cesse de croître constituant ainsi un véritable problème de santé. Cette population se caractérise par une forte multi-morbidité incluant multiples affections parmi lesquelles le diabète qui occupe une place particulière en raison de sa forte prévalence et son retentissement multi-systémique.
L’objectif de la présente étude est d’étudier le profil clinique polygraphique et évolutif des patients atteints du SAOS diagnostiqués par le diabète. 
Méthodes : Nous avons conduit une étude rétrospective portant sur les patients suivis pour un SAOS confirmé par polygraphie au cours de l’année 2025 au sein du service de pneumologie du CHU Médenine. Les patients ont été répartis en deux groupes: G1 représentait les non-diabétiques et G2 les diabétiques.
Résultats : Un total de 52 patients a été inclu, dont trente-six étaient diabétiques. L’âge moyen en G1 était de 51.47 ±14.63 ans, vs. 69.18 ±10.54 ans. Soixante-deux pourcent des diabétiques étaient âgés de plus de 65 ans vs. 25% (p=0.01). Le taux du tabagisme était à 19.4% en G1 vs. 6.3%. Quatre-vingt-treize pourcent des diabétiques étaient obèses vs. Soixante-douze pourcent (p=0.07). Les patients diabétiques présentaient une charge comorbide plus importante: l’hypertension artérielle (75% vs. 41.7%, p=0.02), l’insuffisance cardiaque (37.5% vs. 2.8%, p=0.001) et le syndrome d’obésité hypoventilation (60% vs.8.8%, p< 10 -3) étant significativement plus prononcés que chez les diabétiques.
Les signes cliniques les plus rapportés étaient la somnolence diurne (100% chez les diabétiques vs. 75%, p=0.02), la fatigabilité diurne (50% en G2 vs. 55.6%, p=0.71) et les céphalées (43.8% en G2 vs. 63.9%, p=0.17). Sur le plan polygraphique, l’index d’apnées-hypopnées moyen était 34.12/h en G2 vs. 31.63/h (p=0.25). Le SAOS sévère était significativement plus marqué chez les diabétiques (73.3% vs.40%, p=0.03). L’index de désaturation moyen était comparable dans les deux groupes (30/h en G1 vs. 35.37/h, p=0.52). 
Conclusion : Dans notre cohorte, les patients diabétiques atteints de SAOS étaient plus âgés et présentaient une charge comorbide significativement plus importante. L’IAH était également plus élevé chez les diabétiques. Ces résultats soulignent l’importance d’un dépistage précoce et d’une prise en charge adaptée du SAOS chez le diabétique, afin de réduire le risque de complications cardiovasculaires et respiratoires.` },
  { id: 'p47', title: "Syndrome d’apnées obstructives du sommeil et troubles métaboliques distinction entre effets propres et liés à l’obésité", authors: "Khansa Derbel, Balsam Barkous, Fatma Guezguez, Amani Sayhi, Sonia Rouatbi", affiliation: "Physiologie et explorations fonctionnelles, Hôpital Farhat Hached de Sousse 2.Laboratoire de recherche « insuffisance cardiaque » (LR12SP09), Hôpital Farhat Hached de Sousse", summary: `Introduction :
Le syndrome d’apnées obstructives du sommeil (SAOS) est une pathologie intimement liée à l’obésité et reconnue comme facteur de risque cardiovasculaire majeur, avec comorbidités métaboliques, notamment l’insulinorésistance, le diabète de type 2 et la dyslipidémie. Toutefois, la distinction entre les altérations métaboliques directement attribuables au SAOS et celles résultant de l’obésité reste une question non résolue. 
Objectif :
Analyser la dysfonction métabolique spécifique au SAOS indépendamment de l’effet confondant de l’obésité.
Méthodes :
Une étude transversale comparative menée sur neuf mois, a inclu 48 adultes obèses répartis en deux groupes selon la polysomnographie : G1 (avec SAOS, n=23) et G2 (témoins, n=25). Le profil métabolique a été exploré par la mesure de l’hémoglobine, de la glycémie à jeun, de l’urée, de la créatinine, du cholestérol total et des triglycérides. L’inflammation bronchique a été évaluée par le monoxyde d’azote exhalé fractionné (FeNO). 
Résultats :
L’âge était significativement plus élevé en G1 (50±9 vs 44±10 ans ; p<0,05), alors que le sexe et l’indice de masse corporelle étaient similaires dans les deux groupes (p>0,05). Les paramètres métaboliques étaient comparables entre les deux groupes. Une tendance à une glycémie plus élevée (6,63 ± 2,29 vs 5,88 ± 1,67 mmol/l) et à une proportion plus importante de patients prédiabétiques (35% vs 16%) a été observée en G1, sans atteindre la significativité statistique (p>0,05). En revanche, le FeNO moyen était significativement plus élevé dans G1 (31,3 vs 18,4 ppb ; p<0,05), traduisant une inflammation bronchique accrue.
Conclusion :
Chez les adultes obèses, les anomalies métaboliques apparaissent principalement liées à l’excès pondéral, par l’insulinorésistance et les désordres lipidiques induits par le tissu adipeux. En revanche, l’augmentation du FeNO met en évidence une contribution propre du SAOS à l’inflammation bronchique, probablement médiée par le stress oxydatif secondaire à l’hypoxie intermittente. Ceci souligne l’importance de différencier les effets métaboliques de l’obésité de ceux du SAOS, afin d’adapter les stratégies de dépistage et d’intervention thérapeutique.` },
  { id: 'p48', title: "Syndromes d'apnées-hypopnées obstructives du sommeil (SAHOS) chez la femme enceinte : impact sur les issues obstétricales", authors: "TADJ. K; ZAOUI. C; MOULAY. H", affiliation: "CHU Ibn Rochd Annaba-Service de gynécologie-obstétrique Pavillon 3, Hôpital Ibn Rochd, Annaba-Algérie. Clinique Oran1", summary: `Introduction :
Le SAHOS est sous-diagnostiqué pendant la grossesse malgré son impact potentiel sur la santé maternelle et fœtale. Cette étude visait à analyser la relation entre SAHOS et complications obstétricales.

Méthodes :
Cohorte prospective de 150 femmes enceintes évaluées par questionnaire STOP-BANG et polygraphie nocturne. Les issues obstétricales (prééclampsie, diabète gestationnel, césarienne) ont été comparées selon la présence ou non de SAHOS.

Résultats :
Le SAHOS était présent chez 20 % des femmes. Sa présence était associée à une augmentation significative du risque de prééclampsie (OR=3,2), de diabète gestationnel (OR=2,5) et de césarienne (OR=2,1).

Conclusion :
Le SAHOS doit être activement recherché pendant la grossesse. Son dépistage précoce pourrait réduire les complications obstétricales.

Mots-clés : SAHOS Grossesse,  Sommeil, Complications obstétricales` },
  { id: 'p49', title: "Troubles du sommeil au cours de la sclérose en plaque", authors: "Hadj Kacem D1, Daoud S1, Kchaw H1, Msaad S2, Charfi N1, Moalla KS1, Bouattour N1, Farhat N1, Sakka S1, Ayadi H2, Damak M1", affiliation: "Service de neurologie, Hôpital Hedi Chaker, Sfax", summary: `Introduction : La sclérose en plaques (SEP) est une maladie inflammatoire et démyélinisante du système nerveux central. Les troubles du sommeil y sont fréquents mais souvent sous-diagnostiqués, contribuant à l’aggravation du handicap et à la détérioration de la qualité de vie.

But du travail :  Déterminer la prévalence des troubles du sommeil chez les patients atteints de SEP et analyser leurs corrélations avec les facteurs sociodémographiques, cliniques, radiologiques et thérapeutiques.

Méthodes : Nous avons mené une étude transversale, descriptive et analytique auprès de patients suivis pour SEP au CHU Habib Bourguiba de Sfax, entre janvier 2023 et septembre 2024.
Les troubles du sommeil ont été évalués à l’aide de l’Insomnia Severity Index (ISI), de l’Epworth Sleepiness Scale (ESS), du Pittsburgh Sleep Quality Index (PSQI) et du questionnaire STOP-BANG. La recherche d’un syndrome des jambes sans repos et de parasomnies a été réalisée par entretien clinique. Les données cliniques, radiologiques et thérapeutiques ont été recueillies à partir des dossiers médicaux.

Résultats :
Nous avons inclus dans notre étude 80 patients suivis pour SEP. La majorité de nos patients (63,8 %) présentaient au moins un trouble du sommeil. Une mauvaise qualité du sommeil (PSQI > 5) a été retrouvée chez 57,5 %, une insomnie modérée à sévère chez 27,5 %, des parasomnies chez 25 %, une somnolence diurne excessive chez 28 % et un syndrome des jambes sans repos chez 21,3 %. 
Les troubles du sommeil étaient significativement associés à l’absence d’activité professionnelle (p = 0,037), à un délai diagnostique prolongé (p = 0,045), à un score EDSS plus élevé (p = 0,048), ainsi qu’à certains symptômes tels que la spasticité, les douleurs neuropathiques et la baisse de libido (p = 0.026, p = 0.018, p = 0.043 respectivement). Sur le plan radiologique, la localisation des lésions au niveau de la corona radiata était liée à la présence de troubles du sommeil (p = 0,006). Sur le plan thérapeutique, le baclofène (p = 0,004) et les hypnotiques (p = 0,045) étaient associés à ces troubles, contrairement aux traitements de fond de la SEP.

Conclusion : 
Les troubles du sommeil sont couramment observés chez les patients atteints de SEP, influencés par des facteurs cliniques, psychologiques et radiologiques. Leur dépistage et leur prise en charge multidisciplinaire sont essentiels afin d’améliorer la qualité de vie des patients.` },
  { id: 'p50', title: "Troubles du sommeil chez la population carcérale en Tunisie", authors: "Oumaima Ghazel, Imen Mlouki, Wejdenne Said, Emna Hariz, Aya Ajmi Blout, Sana El Mhamdi", affiliation: "Faculté de médecine de Monastir, Tunisie", summary: `Introduction. La prison constitue un environnement hautement stressant, susceptible de perturber les rythmes biologiques et d’accroître la vulnérabilité aux troubles psychiatriques. Les troubles du sommeil y sont particulièrement fréquents et influencent fortement l’état de santé mentale des détenus. Cette étude vise à évaluer la qualité et les habitudes de sommeil en milieu carcéral et à examiner leurs répercussions sur le fonctionnement quotidien.

Méthodes. Deux études transversales ont été faites dans deux prisons civiles en Tunisie, la première était en 2023 et la deuxième était en 2024. On a utilisé un questionnaire anonyme et auto administré incluant la version Arabe valide du questionnaire Pittsburgh Sleep Quality Index (PSQI). La participation était volontaire.

Résultats. L’échantillon comprenait 403 hommes (71 %) et 165 femmes (29 %), d’âge moyen 31 ± 10 ans (18–91). La majorité était tunisienne (94 %) et célibataire (51,8 %). Le niveau d’éducation était majoritairement secondaire (47,9 %). La qualité du sommeil était altérée chez deux tiers des participants, qui la jugeaient « assez mauvaise » ou « très mauvaise ». Près de la moitié rapportaient une latence d’endormissement prolongée. La durée du sommeil était inférieure à 6 h/nuit chez 43 % des détenus, tandis que seulement 24 % atteignaient ≥7 h. L’efficacité du sommeil était préservée chez 45 %. Des perturbations nocturnes modérées à sévères concernaient 73 % des répondants. L’usage d’hypnotiques restait limité (23 %, dont 15 % réguliers). Enfin, près de la moitié présentaient une dysfonction diurne modérée à sévère, traduisant un impact marqué sur la vigilance et l’adaptation quotidienne.

Conclusion. Nos résultats appellent à la mise en place d’interventions ciblées pour améliorer l’hygiène du sommeil et réduire la charge psychologique liée à l’incarcération.

Mots-clés
Sommeil – Prison – PSQI – Qualité du sommeil – Santé mentale-Tunisie` },
  { id: 'p51', title: "Troubles du sommeil chez les travailleurs de nuit : une étude transversale", authors: "Ilhem Ben Salah1, Sirine Fehri1, Saeb Badr1, Heni Abdelhedi1, Nesrine Kammoun2, Hazem tallaa1, Sameh Msaad1, Nedia Moussa1, Samy Kammoun1", affiliation: "1 Service de Pneumologie, CHU Hédi Chaker Sfax *Service de Médecine de Travail de Tunis", summary: `Introduction:
Le sommeil est une période de repos essentielle au maintien d’un bon fonctionnement mental et physique. Plusieurs facteurs, comme le travail posté, peuvent perturber sa durée et son rythme en interférant avec l’horloge biologique. Le travail de nuit, de plus en plus répandu dans les sociétés modernes, entraîne fréquemment un désalignement entre le rythme circadien et le cycle veille-sommeil, générant d’importantes répercussions sur la santé et le bien-être.
Objectifs :
Évaluer l’impact du travail de nuit sur la qualité du sommeil chez les travailleurs tunisiens, estimer la prévalence des troubles du sommeil dans cet échantillon et identifier les facteurs associés à une mauvaise qualité de sommeil.
Méthodes :
Étude transversale réalisée à l’aide d’un questionnaire en ligne auprès de travailleurs de nuit âgés de 18 ans et plus. Les dimensions explorées comprenaient la qualité du sommeil, la vigilance diurne, l’humeur et le bien-être subjectif, évalués grâce aux versions arabes validées d’outils standardisés, qui sont respectivement : Pittsburgh Sleep Quality Index (PSQI), Insomnia Severity Index (ISI), Epworth Sleepiness Scale (ESS), Patient Health Questionnaire-9 (PHQ-9) et World Health Organization-Five Well-Being Index (WHO-5).
Résultats :
Parmi 503 travailleurs de nuit, tunisiens, âgés de 25 à 64 ans, une proportion importante présentait des troubles du sommeil. Une mauvaise qualité de sommeil (PSQI >5) a été rapportée par 59,4 %, tandis que 13,7 % souffraient d’insomnie (ISI >15). La prévalence de l’insomnie sévère, de la somnolence diurne excessive, de la dépression sévère et d’un faible bien-être était respectivement de 2 %, 32,6 %, 4 % et 58,3 %. une mauvaise qualité du sommeil était indépendamment associée à l’IMC (OR = 1,66 ; IC95 % [0,77–3,5] ; p = 0,193), au tabagisme actif (OR = 2,2 ; IC95 % [1,07–4,5] ; p = 0,031), à la consommation de repas riches en graisses (OR = 1,4 ; IC95 % [0,8–2,3] ; p = 0,13), à l’utilisation d’hypnotiques (OR = 4,3 ; IC95 % [1,5–12,3] ; p = 0,005), à la sinusite (OR = 4,2 ; IC95 % [1,5–11,3] ; p = 0,004), aux troubles gastro-intestinaux (OR = 2,5 ; IC95 % [0,8–7,8] ; p = 0,11) ainsi qu’à un faible score de bien-être (OR = 3,8 ; IC95 % [2,3–6,2] ; p < 0,001).
Conclusion:
La contrainte du travail de nuit, perturbe significativement le rythme circadien, entraînant une altération de la qualité du sommeil et des conséquences sur la santé mentale, physique, et reproductive, avec même des risques sécuritaires et accidentologiques. Des recherches futures sont nécessaires pour mieux comprendre le lien complexe entre travail posté, sommeil et santé mentale, et pour explorer des stratégies de prévention et d’atténuation de ces effets délétères.` },
  { id: 'p52', title: "Troubles du sommeil et anxiété : un double fardeau sur la qualité de vie des patients atteints de pneumopathies interstitielles diffuses (étude pilote)", authors: "Yesmine Abid* 1, Rim Kammoun 1, Asma Haddar 1, Nour El Houda Ben Mrad 1, Rihab Mel 1, Walid Feki 2, Sameh Msaad 2, Kaouthar Masmoudi 1", affiliation: "1 Service D'Explorations Fonctionnelles, CHU Habib Bourguiba, Sfax, Tunisie 2 Service de Pneumologie, CHU Hedi Chaker, Sfax, Tunisie", summary: `Introduction
Les pneumopathies interstitielles diffuses (PID) compromettent la qualité de vie des patients en raison de la dyspnée et des limitations fonctionnelles qu’elles induisent. Cependant, l’impact des troubles du sommeil et de la santé psychologique reste peu exploré, alors qu’ils pourraient représenter un fardeau supplémentaire majeur.
Méthodes
Nous avons mené une étude transversale incluant des patients atteints de PID ayant été adressés au service d’explorations fonctionnelles, CHU Habib Bourguiba, Sfax. Les données sociodémographiques, cliniques et fonctionnelles ont été collectées. La qualité de vie a été évaluée par le King’s Brief Interstitial Lung Disease (KBILD), un questionnaire de 15 items répartis en trois domaines (psychologique, essoufflement et activités, symptômes thoraciques), avec un score global de 0 à 100, les valeurs élevées indiquant une meilleure qualité de vie. La qualité du sommeil a été mesurée par le Pittsburgh Sleep Quality Index (PSQI), composé de 7 dimensions pour un score global de 0 à 21 ; un score > 5 indique un sommeil altéré. L’anxiété et la dépression ont été évaluées à l’aide de l’Hospital Anxiety and Depression Scale (HAD), comprenant deux sous-scores (0–21) avec un score ≤ 7 : absence de trouble, 8–10 : douteux et ≥ 11 : symptomatologie certaine. 
Résultats
20 patients atteints de PID ont été inclus dont 65% étaient des hommes. L’âge moyen était de 63,6 ± 9,1 ans. Le score global moyen du KBILD était de 52,2 ± 27,4, reflétant une qualité de vie modérément altérée, particulièrement pour le domaine « essoufflement et activités » (38 ± 28). Les sous-scores psychologique et symptômes thoraciques étaient respectivement de 60,2 ± 29,8 et 52,5 ± 31,8. Concernant le sommeil, 50 % des patients avaient un PSQI > 5. La latence d’endormissement dépassait 30 min chez 35 %, et 45 % dormaient < 7 h par nuit (score moyen PSQI = 4,8 ± 2,2). L’anxiété était modérée (HAD-A : 6,4 ± 4,8), avec 35% présentant des signes anxieux, tandis que la dépression était rare (HAD-D : 1,6 ± 2,4).                Une durée de sommeil plus longue était positivement corrélée au score psychologique (r = 0,569 ; p = 0,009) et au score global KBILD (r = 0,523 ; p = 0,018), indiquant qu’un sommeil de meilleure qualité s’accompagne d’une meilleure qualité de vie. Les troubles du sommeil étaient significativement corrélés à un score thoracique KBILD plus bas (r = –0,577 ; p = 0,008), suggérant que les symptômes thoraciques contribuent aux perturbations du sommeil. Le nombre d’exacerbations annuelles corrélait négativement avec le score d’essoufflement (r = –0,548 ; p = 0,012) et le score global KBILD (r = –0,567 ; p = 0,009), reflétant l’impact des exacerbations sur la qualité de vie. L’anxiété était positivement corrélée au PSQI (r = 0,609 ; p = 0,004), soulignant que les troubles anxieux contribuent à la dégradation du sommeil.
Conclusion
Chez les patients atteints de PID, la qualité de vie est modérément altérée. Les troubles du sommeil et l’anxiété agissent comme des facteurs aggravants, interagissant avec les symptômes respiratoires pour dégrader le bien-être global. Ces données soulignent l’importance d’un dépistage systématique et d’une prise en charge intégrée ciblant à la fois les symptômes respiratoires, le sommeil et la santé mentale afin d’améliorer la qualité de vie de cette population fragile.` },
  { id: 'p53', title: "Troubles du sommeil et qualité de vie au cours de la SEP", authors: "Hadj Kacem D1, Daoud S1, Kchaw H1, Farhat N1, Moalla KS1, Charfi N1, Bouattour N1, Sakka S1, Ayadi H2, Damak M1", affiliation: "1-Service de neurologie, CHU Habib Bourguiba, Sfax, 2-Service de Pneumologie, CHU Hedi Chaker, Sfax", summary: `Introduction :
Les troubles du sommeil sont fréquents chez les patients atteints de sclérose en plaques (SEP) et contribuent à l’aggravation du handicap fonctionnel ainsi qu’à une altération marquée de leur qualité de vie.

Objectif :
Évaluer l’impact des troubles du sommeil sur la qualité de vie des patients atteints de SEP.

Méthodes :
Nous avons mené une étude transversale, descriptive et analytique auprès de patients suivis pour SEP au CHU Habib Bourguiba de Sfax entre janvier 2023 et septembre 2024. Les troubles du sommeil ont été évalués à l’aide de l’Insomnia Severity Index (ISI), de l’Epworth Sleepiness Scale (ESS), du Pittsburgh Sleep Quality Index (PSQI) et du questionnaire STOP-BANG. La qualité de vie a été évaluée à l’aide du 36-Item Short Form Survey (SF-36). Les données cliniques ont été recueillies à partir des dossiers médicaux.

Résultats :
Nous avons inclus dans notre étude 80 patients suivis pour SEP. Les troubles du sommeil étaient présents chez 63,8 % des patients (Une mauvaise qualité du sommeil (57,5 %), une insomnie modérée à sévère (27,5 %), des parasomnies (25 %), une somnolence diurne excessive (28 %) et un syndrome des jambes sans repos (21,3 %). L’évaluation par le SF-36 a montré que les dimensions les plus altérées étaient la perception de la santé générale, le bien-être émotionnel, l’énergie/fatigue et le fonctionnement social, tandis que les limitations de rôle liées à un problème physique ou émotionnel n’étaient pas significativement affectées. La présence de troubles du sommeil était associée à des scores médians significativement plus bas pour la fonction physique (p = 0,037), l’énergie/fatigue (p < 0,001), le bien-être émotionnel (p = 0,001), le fonctionnement social (p < 0,001), la douleur corporelle (p < 0,001) et la perception de la santé générale (p = 0,008).

Conclusion :
Les troubles du sommeil ont un impact négatif significatif sur plusieurs dimensions de la qualité de vie des patients atteints de SEP. Leur dépistage systématique et leur prise en charge multidisciplinaire devraient faire partie intégrante de la stratégie thérapeutique globale afin d’améliorer le pronostic fonctionnel et psychosocial.` }
];

export const ORAL_COMMUNICATIONS_DATA: Poster[] = [
    { id: 'co1', title: "Activation autonomique et risque cardiovasculaire au cours du syndrome d’apnées hypopnées obstructives du sommeil", authors: "Hamdi A, Mrassi H, Medini B, Chaabi K, Zarrouk S, Barkaoui G, El Gharbi L", affiliation: "Service de pneumologie D, Hôpital Abderrrahmen Mami Ariana, Tunisie", summary: `Introduction 
Le syndrome d’apnées-hypopnées obstructives du sommeil (SAHOS) est associé à une activation autonomique (AA) nocturne, impliquée dans le risque cardiovasculaire (CV). Notre objectif était d’évaluer l’association entre les marqueurs polygraphiques de l’AA et les comorbidités CV au cours du SAHOS.
Méthodes 
Étude rétrospective descriptive monocentrique menée sur les dossiers de patients dont le diagnostic de SAHOS était confirmé par une polygraphie de ventilation (2022 – 2025) à notre service. 
Résultats 
Quatre-cent trente patients étaient inclus (âge moyen de 56 ans ; 73.3 % de femmes). Quarante-neuf pour cent des patients avaient au moins 2 comorbidités CV. L’indice de masse corporelle moyen était de 36.6 kg/m². Le SAHOS était sévère dans 44.2 % des cas.  Le score d’Epworth était supérieur à 15 dans 24.2 % des cas. L’index apnées-hypopnées moyen était de 30.4 / h. L’index d’AA moyen était de 85.7/h. Il était corrélé à la présence d’une hypertension artérielle (p=0.012), d’un diabète (p=0.01), d’une fibrillation atriale (p=0.02) et d’une insuffisance cardiaque (p=0.006), à l’indice de masse corporelle (p=0.02), au score d’Epworth (p= 0.007), à l’index d’apnées hypopnées (p= 0.03), à la saturation nocturne moyenne en O2 (p= 0.001) et au temps passé avec une saturation au-dessous de 90 % (p= 0.001).
Conclusion 
L’AA constituerait un nouveau marqueur de sévérité du SAHOS en termes de risque CV.` },
    { id: 'co2', title: "Dépistage de l’apnée du sommeil : quand un smartphone sur le thorax suffit", authors: "J. Favier, K. Guichard, L.-A. Essari, J. Soler, N. Saumier, J. Pinot, F. Bughin, F. Soyez, F. Chalumeau, N. Raymond, R. Lopez, B. Buttet, F. Charles, J. Millet, L. Migus, G. Cathelain, M. Sapène, S. Launois-Rollinat, R. Wanono", affiliation: "Centre du sommeil de la Mirandole, Villerest; Pôle Sommeil de Bordeaux, Nouvelle Clinique Bel-Air, Bordeaux; Centre de pneumologie et sommeil INSPIRÊVE, Aix-en-Provence", summary: `Objectif
Le syndrome d’apnée-hypopnée du sommeil (SAHOS) est fréquent et sous-diagnostiqué. Il existe un besoin important de solutions de diagnostic moins invasives, plus écologiques et peu coûteuses. Ce travail vise à valider les performances d’Apneal, un dispositif médical basé uniquement sur les capteurs du smartphone, en comparaison avec la polysomnographie (PSG) de référence, chez 86 patients.
Méthode
•	Enregistrement simultané d’Apneal (smartphone sur le thorax, mode avion) et de la PSG pendant une nuit.
•	Données collectées : microphone, accéléromètre, vitesse angulaire.
•	Étude multicentrique (6 centres, 8 modèles de smartphones).
•	Données analysées par pipeline d’intelligence artificielle.
•	Annotations Apneal comparées aux annotations manuelles de la PSG selon les standards AASM.
Résultats principaux
•	Excellente concordance entre Apneal et PSG pour l’indice d’apnées-hypopnées (ICC 0.89 ; corrélation Pearson 0.9).
•	Bonnes performances pour le diagnostic de SAHOS aux seuils AHI 5, 15, 30 (AUC ROC 0.91 à 0.97).
•	Sensitivité jusqu’à 99%, spécificité jusqu’à 94% selon le seuil, NPV et PPV élevés.
•	Classement des patients concordant avec la sévérité clinique : Normal, Léger, Modéré, Sévère.
•	Estimation correcte du temps total de sommeil (TST, erreur moyenne 1 min ; absolue : 38 min).
•	Les signaux sont interprétables/annotables manuellement.
Conclusion
L’étude valide l’efficacité du dispositif Apneal pour le dépistage à domicile du SAHOS via smartphone, avec des performances comparables à la PSG sur 86 patients. Ce dispositif offre une solution innovante, accessible et fiable pour le dépistage du SAHOS. Une étude multicentrique européenne de validation à plus large échelle est en cours.` },
    { id: 'co3', title: "How does obesity impair sleep quality in Tunisian people", authors: "Rahma Gargouri, Yassmine Abdelkefi, Nour Kallel, Nesrine Kallel, Najla Bahloul, Fatma Mnif, Kholoud Boujelben, Nabila Rekik, Sameh Msaad, Samy Kammoun", affiliation: "Service de pneumologie CHU Hedi Chaker Sfax & Service d’endocrinologie CHU Hedi Chaker Sfax", summary: `Background: Beyond its involvement in the development of many diseases, obesity is closely associated with sleep disorders. The relationship between obesity and sleep quality (SQ) is bidirectional,  yet it remains insufficiently explored.
Objective: This study aimed to  assess SQ among obese adults and to identify obesity-related factors that may influence it.
Methods: We conducted a cross-sectional descriptive and analytical study among obese adults followed at the Endocrinology Department of Hedi Chaker University Hospital, Sfax, between January and December 2024. Each participant responded to the International Physical Activity Questionnaire (IPAQ), the Patient Health Questionnaire-9 (PHQ-9) for depression screening, the Pittsburgh Sleep Quality Index (PSQI), the Epworth Sleepiness Scale (ESS), and the STOP-BANG questionnaire for obstructive sleep apnea syndrome (OSAS) risk assessment. Dietary intake was assessed, and a complete physical examination was performed. Respiratory polygraphy was carried out in patients with high OSAS risk.
Results: Our population was comosed of 200 patients, with a mean age 50 ± 19.75 years. A female predominance (M/F sex ratio = 0.2) was noted.  Sedentariness was reported in 73.5% of cases, 50% had moderate-to-severe depression, and 50% presented with at least two eating disorders. Class III obesity was observed in 45% of patients. The mean spontaneous caloric intake was 3364.3 ± 543.1 kcal/day in men and 2852.1 ± 658.9 kcal/day in women, with excessive intake observed in 94.7% and 87% of cases, respectively. Mallampati classes III and IV were found in 57.9% of the study population.
Obstructive OSAS was diagnosed in 67% of patients, of whom 52.3% had severe disease. One patient also presented with obesity hypoventilation syndrome (OHS). The most frequent obesity-associated comorbidities were dyslipidemia (66%), osteoarthritis (60.5%), hypertension (57%), metabolic syndrome (53.5%), and gastroesophageal reflux disease (GERD) (37%).
Overall, SQ was impaired in 64% of patients. Factors significantly associated with impaired SQ included female sex (p=0.013; OR=3.27), GERD (p=0.028; OR=2.01), OSAS severity (p=0.02; OR=3.57), and depression (p=0.004; OR=25.29).
Conclusion: Sleep impairment is common in obese patients. Our findings highlight the need for a systematic screening of sleep disorders and a  large-scale studies to further explore the bidirectional relationship between obesity and sleep a field that remains at an early stage but represents a promising area of research.` },
    { id: 'co4', title: "les troubles du sommeil chez la femme obèse enceinte", authors: "TADJ. K; ZAOUI. C; MOULAY. H", affiliation: "Faculté de médecine Oran1", summary: `Introduction :
L’obésité est un facteur de risque croissant chez la femme en âge de procréer. Elle est associée à des troubles respiratoires du sommeil, en particulier le syndrome d’apnées-hypopnées obstructives du sommeil (SAHOS). Chez la femme enceinte, ces perturbations peuvent majorer les complications materno-fœtales. L’objectif de cette étude était d’évaluer la prévalence et l’impact des troubles du sommeil chez les femmes enceintes obèses.

Méthodes :
Étude prospective réalisée de janvier à juin 2025 dans une unité de gynécologie-obstétrique. Ont été incluses 120 femmes enceintes, réparties en deux groupes : obèses (IMC ≥ 30 kg/m², n=60) et non-obèses (IMC < 25 kg/m², n=60). Les participantes ont bénéficié d’un questionnaire standardisé (échelle d’Hepworth, qualité du sommeil de Pittsburgh) et d’une polygraphie ventilatoire nocturne au deuxième trimestre. Les données obstétricales et néonatales ont été collectées.

Résultats :
La prévalence du SAHOS était significativement plus élevée chez les femmes obèses (42 %) comparée aux non-obèses (10 %, p<0,001). L’hyper somnolence diurne (score Hepworth ≥10) était retrouvée chez 55 % des patientes obèses contre 18 % chez les non-obèses.
 L’obésité maternelle associée à un SAHOS était corrélée à une augmentation du risque de pré éclampsie (25 % vs 8 %, p=0,02) et de césariennes (38 % vs 15 %, p=0,01).

Discussion – Conclusion :
Nos résultats confirment que l’obésité pendant la grossesse constitue un facteur majeur de troubles respiratoires du sommeil, particulièrement le SAHOS. Cette association aggrave le risque de complications obstétricales. Le dépistage systématique des troubles du sommeil chez la femme enceinte obèse pourrait améliorer la prise en charge et prévenir les issues défavorables.` },
    { id: 'co5', title: "Prevalence and risk factors of obstructive sleep apnea syndrome among Tunisian adults: a cross-sectional study of 2859 subjects", authors: "Yesmine Abid, Rahma GARGOURI, Rim Kammoun, Rim Khemekhem, Jamel ELGHOUL, Narjes Abid, Nadia Keskes Boudaoura, Imen TOUIL, Sameh MSAAD, Nadia MOUSSA, Samy KAMMOUN", affiliation: "Service d’Explorations fonctionnelles, CHU Habib Bourguiba, Sfax; Service de pneumologie, CHU Hedi Chaker, Sfax; Hôpital universitaire Habib Bourguiba, Médenine", summary: `Introduction
Obstructive sleep apnea syndrome (OSAS) is a common but underdiagnosed sleep-related breathing disorder (SRBD) associated with significant cardiometabolic and neurocognitive burden. Epidemiological data on OSAS in low- and middle-income countries (LMICs), such as Tunisia, remain scarce. This study aimed to assess the prevalence, associated risk factors, and cardiovascular risk of OSAS in the Tunisian adult population.
Methods
A population-based, cross-sectional survey was conducted between January and December 2024. Adults aged 18 years and older from all 24 Tunisian provinces were recruited through an online Arabic-language questionnaire that included the Berlin Questionnaire and the Epworth Sleepiness Scale (ESS). High OSAS risk was defined as ≥2 positive Berlin categories. Multivariate logistic regression analysis was performed to identify predictors of OSAS and cardiovascular morbidity.
Results
Among 2859 participants (mean age: 37.6 ± 14.1 years; 62% female), 31.9% were classified as having confirmed OSAS and/or a high risk of OSAS according to the Berlin questionnaire. Among those with a positive Berlin questionnaire, only 3.9% had a previous confirmed diagnosis of OSAS. Prevalence increased significantly with age (27% in 18–24 years vs. 40.3% in ≥65 years; p<0.0001), BMI (28.3% in normal weight vs. 46.7% in class III obesity; p<0.0001), and was higher in men (36.4% vs. 29.2%; p<0.0001) and rural residents (39.4% vs. 31.1%; p=0.004). Independent predictors of OSAS included male sex (OR 1.28; 95% CI: 1.08–1.51), unemployment (OR 1.61; 95% CI: 1.31–1.98), rural residence (OR 1.28; 95% CI: 1.03–1.59), arterial hypertension (HT) (OR 1.36; 95% CI: 1.02–1.81), asthma (OR 1.35; 95% CI: 1.01–1.81), and gastrointestinal disorders (OR 1.43; 95% CI: 1.04–1.96). Chronic renal failure and psychiatric disorders increased the risk of OSAS exclusively in men, whereas chronic respiratory failure was a significant predictor only in women. Excessive daytime sleepiness (EDS) was reported by 33.9% of participants, more frequently in women than in men (36.2% vs. 31.0%; p=0.004). Among men, high OSAS risk on the Berlin questionnaire independently predicted cardiovascular morbidity (OR 1.59; 95% CI: 1.05–2.43).
Conclusion
This first large, population-based Tunisian study revealed that one-third of adults had a confirmed and/or high-risk OSAS, with the vast majority remaining undiagnosed. OSAS screening should be prioritized, particularly in individuals with risk factors such as male sex, arterial HT, unemployment, rural residence, asthma, and gastrointestinal disorders. Men identified as high risk on the Berlin questionnaire should be prioritized for early screening and targeted interventions, given their significantly elevated risk of cardiovascular complications.` },
    { id: 'co6', title: "Obstructive Sleep Apnea Risk and Early Vascular Alterations: Implication of Endothelial Function Testing", authors: "Khansa Derbel, Faten Chaieb, Sonia Rouatbi", affiliation: "Physiology and Functional Exploration Department, Farhat Hached Hospital, Sousse, Tunisia; Heart Failure (LR12SP09) Research Laboratory, Farhat HACHED Hospital, Sousse, Tunisia", summary: `Introduction:
Obstructive sleep apnea (OSA) is a multifactorial and frequently underdiagnosed disorder associated with an elevated cardiovascular risk, particularly through complications such as hypertension and thromboembolic events. Endothelial dysfunction seems to be a key mechanism linking OSA to vascular disease.
Objective:
To investigate the association between OSA risk and endothelial function in apparently healthy men.
Methods:
In this cross-sectional comparative study, 41 men aged 30–65 years without known chronic disease completed the Berlin questionnaire to assess OSA risk. Participants were categorized into two groups: high OSA risk (G1, n=8) and low/no OSA risk (G2, n=33). Endothelial function was evaluated using post-occlusion reactive hyperemia with the E4 Diagnose device. The primary endpoint was the percentage change between peak and baseline blood flow (PK%BL).
Results:
Groups were comparable in age (48±5 vs. 45±8 years; p>0.050). BMI was significantly higher in G1 than G2 (32.7±3.1 vs. 27.7±3.1 kg/m²; p<0.001). Schooling level and smoking status were similar (p>0.05). Systolic blood pressure was higher in G1 (132±15 vs. 120±10 mmHg; p=0.010), with a tendency toward higher diastolic pressure (83±12 vs. 76±8 mmHg; p=0.058). Endothelial function was impaired in G1, with lower PK%BL compared to G2 (2.69±1.15% vs. 4.88±3.51%; p=0.005).
Conclusion:
Men at high risk for OSA demonstrated impaired endothelial function, suggesting an early vascular alteration that may predispose to cardiovascular disease. These findings highlight the importance of identifying and managing OSA risk to prevent endothelial dysfunction and its complications.` },
    { id: 'co7', title: "Sleep Apnea Syndrome in Cardiology: Inaugural Experience of a Sleep Laboratory in Sub-Saharan Africa", authors: "DIEYO I, DIEYE A MB, GAYE B, BA K I, DIOP I. B", affiliation: "Clinique Cardiologique CHU Fann Dakar Sénégal, Centre de médecine du sommeil SAKINA", summary: `Background:
Sleep laboratories are virtually non-existent in Sub-Saharan Africa, despite the growing prevalence of sleep apnea syndrome (SAS), an independent cardiovascular risk factor. We report the first experience from a dedicated sleep laboratory in Dakar, Senegal, focusing on clinical, paraclinical, and polysomnographic characteristics of patients evaluated for suspected obstructive sleep apnea syndrome (OSAS) in a cardiology setting.
Methods:
We retrospectively analyzed 186 patients (October 22, 2020 – January 15, 2025) who underwent overnight polysomnography: attended video-polysomnography (n=139) or ambulatory recording (n=47). Standardized questionnaires (Epworth Sleepiness Scale, Pichot Fatigue Scale) were administered. Demographics, cardiovascular risk factors, clinical symptoms, and polysomnographic indices were assessed. OSAS was defined as an apnea–hypopnea index (AHI) >5/h.
Results:
Mean age was 48±28 years; 54% male (sex ratio 1.18), mean BMI 27 kg/m². Cardiovascular risk factors were common: hypertension 52%, type 2 diabetes 21%, dyslipidemia 19%. Predominant symptoms were snoring (81%) and morning fatigue (71%). Frequent cardiology referral reasons included recurrent malaise (n=90) and nocturnal palpitations (n=96). Epworth score >10 occurred in 66% (n=123), mean Pichot score was 12. OSAS was diagnosed in 177 patients (95%): mild (n=43), moderate (n=60), severe (n=91, 49%). Obstructive predominance was noted in 66% (n=123), mixed with central predominance in 34% (n=63). Mean polysomnographic parameters: AHI 29/h, oxygen desaturation index 17/h, microarousal index 61/h, snoring events 222/h, periodic limb movements 47/h. Severe OSAS patients had reduced sleep efficiency (49% vs. 81% overall). Associated findings included periodic limb movements (n=130), Cheyne–Stokes respiration (n=2), obesity hypoventilation syndrome (n=1), and restless legs syndrome (n=3). Figure 1 presented the main results.
Conclusions:
In this inaugural Sub-Saharan African sleep laboratory, OSAS prevalence among cardiology referrals was extremely high (95%), predominantly in middle-aged, non-obese men with cardiometabolic comorbidities. Our data highlight the urgent need to integrate sleep diagnostics into cardiovascular care pathways in the region.` }
];


export const DAYS: Day[] = [
    { key: '9', label: 'Jeudi 9', date: '9 Octobre' },
    { key: '10', label: 'Vendredi 10', date: '10 Octobre' },
    { key: '11', label: 'Samedi 11', date: '11 Octobre' }
];
  
export const THEMES: string[] = ['Tous', 'VNI', 'PPC', 'SAHOS', 'Hypoventilation', 'Insomnie', 'Hypersomnie', 'Recherche', 'Sommeil'];

export const TYPES: string[] = ['Tous', 'séance', 'atelier', 'communications', 'symposium', 'cérémonie'];

export const TYPE_DISPLAY_NAMES: Record<string, string> = {
    'séance': 'Séance plénière',
    'atelier': 'Atelier',
    'cérémonie': 'Cérémonie',
    'symposium': 'Symposium',
    'communications': 'Communications orales',
};

export const THEME_COLORS: Record<string, string> = {
    'Sommeil': 'bg-indigo-600',
    'Formation': 'bg-sky-600',
    'VNI': 'bg-cyan-500',
    'PPC': 'bg-teal-500',
    'SAHOS': 'bg-blue-600',
    'Hypoventilation': 'bg-indigo-700',
    'Insomnie': 'bg-purple-600',
    'Hypersomnie': 'bg-violet-600',
    'Neurologie': 'bg-rose-600',
    'Pédiatrie': 'bg-pink-500',
    'Recherche': 'bg-amber-500',
    'Cérémonie': 'bg-yellow-500',
    'Accueil': 'bg-slate-600',
    'Pause': 'bg-slate-400',
    'Symposium': 'bg-[#033238]',
    // for types
    'accueil': 'bg-slate-600',
    'formation': 'bg-sky-600',
    'atelier': 'bg-purple-500',
    'communications': 'bg-amber-500',
    'séance': 'bg-blue-600',
    'symposium': 'bg-[#033238]',
    'pause': 'bg-slate-400',
    'cérémonie': 'bg-yellow-500',
};

export const getThemeColor = (themeOrType: string): string => {
    return THEME_COLORS[themeOrType] || 'bg-slate-500';
};

export const THEME_GRADIENTS: Record<string, string> = {
    'Sommeil': 'from-indigo-600 to-indigo-500',
    'Formation': 'from-sky-600 to-sky-500',
    'VNI': 'from-cyan-500 to-cyan-400',
    'PPC': 'from-teal-500 to-teal-400',
    'SAHOS': 'from-blue-600 to-blue-500',
    'Hypoventilation': 'from-indigo-700 to-indigo-600',
    'Insomnie': 'from-purple-600 to-purple-500',
    'Hypersomnie': 'from-violet-600 to-violet-500',
    'Neurologie': 'from-rose-600 to-rose-500',
    'Pédiatrie': 'from-pink-500 to-pink-400',
    'Recherche': 'from-amber-500 to-amber-400',
    'Cérémonie': 'from-yellow-500 to-yellow-400',
    'Accueil': 'from-slate-600 to-slate-500',
    'Pause': 'from-slate-400 to-slate-300',
    'Symposium': 'from-[#033238] to-[#054c55]',
    // for types
    'accueil': 'from-slate-600 to-slate-500',
    'formation': 'from-sky-600 to-sky-500',
    'atelier': 'from-purple-500 to-purple-400',
    'communications': 'from-amber-500 to-amber-400',
    'séance': 'from-blue-600 to-blue-500',
    'symposium': 'from-[#033238] to-[#054c55]',
    'pause': 'from-slate-400 to-slate-300',
    'cérémonie': 'from-yellow-500 to-yellow-400',
};

export const getThemeGradient = (themeOrType: string): string => {
    return THEME_GRADIENTS[themeOrType] || 'from-slate-500 to-slate-400';
};