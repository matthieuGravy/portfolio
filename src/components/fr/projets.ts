const projets = [
  {
    id: "1",
    src: "https://via.placeholder.com/150",
    name: "Bootstrap static site",
    role: "Front-end",
    description:
      "Site statique pour un restaurant fictif. Développé en autonomie en respectant les consignes.",
    tech: ["JavaScript", "bootstrap"],
    to: "kitchens-bootstrap",
  },
  {
    id: "2",
    src: "https://via.placeholder.com/150",
    name: "Clicker Game",
    role: "Front-end ",
    description:
      "Jeu de clic en vanilla JavaScript. Il a été développé en groupe de 3 personnes. Pour ce projet, nous avons utilisé pixi.js pour la partie graphique. Au clic, vous faites pousser un arbre.",
    tech: ["JavaScript", "CSS", "pixi.js"],
    to: "plant-clicker-js",
  },
  {
    id: "3",
    to: "sora-cine",
    src: "https://via.placeholder.com/150",
    name: "Stream APP",
    description:
      "Site de streaming pour la diffusion d'anime. Réalisé en groupe de 4 personnes, utilisant une API externe pour les données. Le site rencontre quelques problèmes tels que le chargement des vidéos, le design et la gestion des utilisateurs. Le projet est en cours de révision pour corriger ces problèmes.",
    role: "Front-end",
    tech: ["React", "tailwindcss", "Express", "mongoose"],
  },
  {
    id: "4",
    src: "https://via.placeholder.com/150",
    name: "Social Network",
    description:
      "C'est un réseau social fictif, développé en groupe de 3 personnes. L'idée de départ est de recevoir un mail qui nous invite à donner notre avis lorsqu'on reçoit une notification, par mail et contribuer à la création de contenu. Ici malheureusement une grande partie de l'architecture React est à revoir avant la publication.",
    role: "back-end ",
    tech: ["typescript", "tailwindcss", "Express", "mongoose"],
    to: "bookface",
  },
  {
    id: "5",
    src: "https://via.placeholder.com/150",
    name: "e-commerce site",
    role: "fullstack",
    description:
      "Site de vente de produits pour une entreprise fictive. Le projet est en fin de construction sur les fonctionnalités : filtre, panier. L'authentification est déjà mise en place de manière dynamique.",
    tech: ["typescript", "react", "redux", "tailwindcss", "Express"],
    to: "fresh-shop",
    source: "",
  },
];

export default projets;
