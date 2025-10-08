import React from 'react';
import JobDetail from 'src/components/landingpage/banner/JobDetail';

const jobDetails = {
  title: 'Chef de Projet IT - 3 Postes À Pourvoir!',
  description: 'Nous recherchons un chef de projet IT pour diriger des projets technologiques complexes. Vous serez responsable de la planification, de l\'exécution et de la clôture des projets.',
  positions: [
    { title: 'Responsable de la planification de projet:', description: 'Élaboration de plans de projet détaillés pour assurer la livraison réussie.' },
    { title: 'Gestion des ressources:', description: 'Coordination des équipes techniques et gestion des budgets.' },
  ],
  published: 'Il y a 2 mois',
  jobDetails: {
    career: 'Gestion de Projet, Informatique',
    educationLevel: 'Diplôme en gestion de projet ou informatique',
    salary: 'À discuter',
    city: 'Casablanca',
    experience: '3 ans minimum',
    contractType: 'CDI',
    languages: 'Arabe, Anglais, Français',
    benefits: [
      'Possibilité de télétravail.',
      'Formations et certifications.',
      'Équipe collaborative et dynamique.',
    ],
  },
};

const JobDetail2 = () => {
  return <JobDetail {...jobDetails} />;
};

export default JobDetail2;