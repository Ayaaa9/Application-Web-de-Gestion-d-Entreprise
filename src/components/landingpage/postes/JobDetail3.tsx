import React from 'react';
import JobDetail from 'src/components/landingpage/banner/JobDetail';

const jobDetails = {
  title: 'Ingénieur DevOps - 4 Postes Disponibles!',
  description: 'Nous recherchons un ingénieur DevOps pour améliorer notre infrastructure et automatiser nos processus de développement. Rejoignez-nous pour transformer notre façon de travailler!',
  positions: [
    { title: 'Automatisation des déploiements:', description: 'Mise en place de pipelines CI/CD pour un déploiement rapide.' },
    { title: 'Gestion des systèmes:', description: 'Surveillance et optimisation des systèmes pour garantir la disponibilité.' },
  ],
  published: 'Il y a 3 mois',
  jobDetails: {
    career: 'DevOps, Informatique',
    educationLevel: 'Diplôme en informatique ou expérience équivalente',
    salary: 'À discuter',
    city: 'Casablanca',
    experience: '3 ans minimum',
    contractType: 'CDI',
    languages: 'Arabe, Anglais, Français',
    benefits: [
      'Environnement de travail innovant.',
      'Projets variés et stimulants.',
      'Possibilités de croissance professionnelle.',
    ],
  },
};

const JobDetail3 = () => {
  return <JobDetail {...jobDetails} />;
};

export default JobDetail3;