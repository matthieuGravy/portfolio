const projects = [
  {
    id: "1",
    src: "https://via.placeholder.com/150",
    name: "ITG Kitchens",
    role: "Front-end",
    description: "Projet de site statique réalisé avec bootrsap.",
    tech: ["JavaScript", "bootstrap"],
    to: "itg-kitchens",
  },
  {
    id: "2",
    src: "https://via.placeholder.com/150",
    name: "Plant Clicker",
    role: "Front-end ",
    description: "Projet de jeu de clicker réalisé avec pixi.js.",
    tech: ["JavaScript", "CSS", "pixi.js"],
    to: "plant-clicker",
  },
  {
    id: "3",
    to: "sora-cine",
    src: "https://via.placeholder.com/150",
    name: "Sora Cine",
    description:
      "Site de streaming pour la diffusion d'anime. Réalisé en groupe de 4 personnes, utilisant une API externe pour les données. Le site rencontre quelques problèmes tels que le chargement des vidéos, le design et la gestion des utilisateurs. Le projet est en cours de révision pour corriger ces problèmes.",
    role: "Front-end",
    tech: ["React", "tailwindcss", "Express", "mongoose"],
  },
  {
    id: "4",
    src: "https://via.placeholder.com/150",
    name: "BookFace",
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

export default projects;
