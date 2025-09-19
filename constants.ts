

import type { Session, Day } from './types';

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
      details: [],
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