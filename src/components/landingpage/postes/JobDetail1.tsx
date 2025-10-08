import React from 'react';
import JobDetail from 'src/components/landingpage/banner/JobDetail';

const jobDetails = {
  title: 'Développeur Full Stack Senior - 5 Postes Disponibles!',
  description: 'Rejoignez notre équipe dynamique et participez au développement de solutions innovantes. Nous recherchons des développeurs passionnés avec une solide expérience en JavaScript et en frameworks modernes.',
  positions: [
    { title: 'Développeur Frontend:', description: 'Conception et développement d\'interfaces utilisateur réactives.' },
    { title: 'Développeur Backend:', description: 'Création et gestion des services API et des bases de données.' },
  ],
  published: 'Il y a 1 mois',
  jobDetails: {
    career: 'Développement Web, Informatique',
    educationLevel: 'Diplôme requis en informatique',
    salary: 'À discuter',
    city: 'Casablanca',
    experience: '5 ans minimum',
    contractType: 'CDI',
    languages: 'Arabe, Anglais, Français',
    benefits: [
      'Salaire compétitif et primes.',
      'Environnement de travail flexible.',
      'Opportunités de formation continue.',
    ],
  },
};

const JobDetail1 = () => {
  return <JobDetail {...jobDetails} />;
};

export default JobDetail1;