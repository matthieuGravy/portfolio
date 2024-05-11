const aboutContent = {
  title: "About",
  description: "This is the about page",
};
const carousel = {
  2009: {
    year: "2009",
    title: "Job d'étudiant chez Fontaine-Beauvois",
    description: [
      `Mon premier job d'étudiant, un job absoluement pas passionant pour lequel je déplace des meubles, des tapis et je fais du nettoyage.`,
      `Mais malgré tout, je suis super content de travailler et de gagner mon propre argent. Je me sens indépendant et je peux enfin m'acheter ce que je veux.`,
      `Ce petit moment de liberté m'a fait pensé que je n'étais pas fait pour les études et que je devais trouver un boulot.`,
    ],
  },
  2010: {
    year: "2010",
    title: "J'arrete l'école",
    description: [
      "Je recommence pour la quatrième fois mon année, je décide d'arrêter l'école pour travailler. J'ai des reccords sportifs en athlétisme et natation mais j'ai pas de diplomes. Ah si, de maître nageur.",
      "Je décide de suivre une formation dans le gardiennage, un formation de base et puis une formation pour travailler en évennementiel.",
      "Je participe à une formation chez fact security, j'obtiens des bons résultats et je suis engagé pour travailler pour des évènements comme les rassemblement européen à Bruxelles, mais aussi des chantiers de construction et des parfumeries.",
      "Mon contrat prend fin, je ne suis pas sérieux : j'arrive en retard, j'écoute pas vraiment les consignes. et je commence à travailler dans le cadre de soirée privée.",
    ],
  },
  2011: {
    year: "2011",
    title: "European Protection Group",
    description: [
      "Puis en 2011 j'ai commencé à travailler pour European Protection Group : je suis vite apprécié parce que j'ai permis de garder un contrat.",
      "C'est toujours resté un travail en événement prinicipalement les week-ends à cette époque je suis content ça me permet de voir mes amis, faire du sport et jouer aux jeux vidéo.",
    ],
  },
  2012: {
    year: "2012",
    title: "Trigion S.A.",
    description: [
      "Je suis devenu plus sèrieux, je commence avec une petite mission et finalement j'obtiens un travail à quasi temps plein pour du gardiennage industriel pour un groupe international.",
      "C'est un travail en équipe, il faut se relayer et que chacun se donne pour accomplir les tâches de sûreté. J'aime bien ce challenge et ça me donne envie de progresser.",
      "Vu que je dois écrire des rapports, je commence à faire des fautes d'orthographe, je décide de m'améliorer en autonomie avec le français. Mais aussi de connaître les procédures sur le bout des doigts.",
    ],
  },
  2013: {
    year: "2013",
    title: "Red Market",
    description: [
      "Ma patience n'est pas récompensé alors je décide de changer de travail et de faire l'effort de découvrir de nouvelles choses. Je travaille pour Red Market, un supermarché appartenant au groupe Delhaize.",
      "C'est un contrat de remplacement, et ça me convient parfaitement je veux reprendre des études",
    ],
  },
  2014: {
    year: "2014",
    title: "",
    description: [
      "Je reviens à l'école dans la même année que j'ai quitté. Je suis content de reprendre les études, je suis motivé et je veux réussir.",
      "Je suis devenu un extra terrestre pour mes collègues. Je suis le seul à avoir un travail et à suivre des cours en même temps. Je suis content de moi, je suis fier de moi.",
    ],
  },
  2015: {
    year: "2015",
    title: "",
    description: "J'obiens un CESI en Sciences Sociales et Histoire",
  },
  2016: {
    year: "2016",
    title: "",
    description: "This is the year 2016",
  },
  2017: {
    year: "2017",
    title: "",
    description: [
      "J'obtiens enfin mon CESS en Sciences Sociales et Histoire. C'est une belle revenche pour moi.",
      "Je m'oriente vers des études en Sociologie et Anthropologie à l'ULB, mais ça né répond pas à mes attentes professionnelles.",
      "J'ai mis un terme au gardiennage, je me suis marié et j'ai commencé à travailler chez Pizza Hut.",
    ],
  },
  2018: {
    year: "2018",
    title: "e-business",
    description: [
      "Je demande de l'aide et je fais un test d'orientation et je me dirigie vers des études en e-business.",
      "Toutes la partie orientée digitale et informatique m'interesse mais pas du tout la partie commerciale. Les cours sont moinsq qualitatifs et je me sens infantilisé alors que je m'attendais à garder une autonomie",
    ],
  },
  2020: {
    year: "2020",
    title: "",
    description: [
      "Nous sommes en crise du Covid et je travaille intensivement en dehors de mes études. Je suis fatigué de me partager en deux. Je ne me sens pas en phase avec mes études et je décide de les arrêter.",
      "Je deviens shift leader chez Pizza Hut, je suis super content parce que je suis un travailleur engagé et je suis reconnu pour mon travail.",
    ],
  },
  2023: {
    year: "2023",
    title: "",
    description: [
      "C'est la fin pour moi chez Pizza Hut, j'ai eu des réussites et j'en suis fier",
      "Durant mon temps libre, j'ai continué à apprendre le développement web. Mais j'ai le sentiment de ne pas arriver à atteindre certains objectifs seul.",
      "Je décide de suivre une formation en développement web chez BeCode, une formation en développement web de 7 mois.",
      "Cette formation m'a permis d'accroître mes compétences en développement web, mais aussi de travailler en équipe et de m'adapter à des situations nouvelles.",
      "C'était aussi super agréable, parce que je codais pas seul et j'avais la sensation de progresser dans un cadre startup.",
    ],
  },
};
const carouselArray = Object.entries(carousel).map(([key, value], index) => ({
  id: index + 1,
  ...value,
  year: key,
}));
export { aboutContent, carousel, carouselArray };
