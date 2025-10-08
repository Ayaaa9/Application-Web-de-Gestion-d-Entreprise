import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProjectTitle from './ProjectTitle';

const projects = [
  {
    id: 1,
    title: 'Audit de Cybersécurité',
    description: 'Réaliser un audit complet de la sécurité des systèmes d\'information d\'un client pour identifier les vulnérabilités.',
    objective: 'Renforcer la sécurité des données et des infrastructures.',
  },
  {
    id: 2,
    title: 'Migration vers le Cloud',
    description: 'Accompagner une entreprise dans la migration de ses systèmes vers le cloud.',
    objective: 'Réduire les coûts d\'infrastructure et améliorer l\'accessibilité des données.',
  },
  {
    id: 3,
    title: 'Développement d\'Applications Mobiles',
    description: 'Concevoir et développer des applications mobiles sur mesure pour répondre aux besoins spécifiques d\'un client.',
    objective: 'Améliorer l\'engagement des utilisateurs et la présence sur le marché mobile.',
  },
  {
    id: 4,
    title: 'Intégration de Solutions IoT',
    description: 'Développer des solutions IoT pour collecter et analyser des données en temps réel.',
    objective: 'Optimiser les opérations et améliorer la prise de décision grâce à des données en temps réel.',
  },
  {
    id: 5,
    title: 'Formation en Informatique',
    description: 'Proposer des sessions de formation sur les meilleures pratiques en matière de technologie et de cybersécurité.',
    objective: 'Sensibiliser les employés aux risques informatiques et améliorer leurs compétences techniques.',
  },
  {
    id: 6,
    title: 'Développement d\'un Système de Gestion de Contenu (CMS)',
    description: 'Créer un CMS personnalisé pour permettre la gestion facile de contenu par les utilisateurs.',
    objective: 'Faciliter la mise à jour et la gestion du contenu en ligne par des utilisateurs non techniques.',
  },
  {
    id: 7,
    title: 'Audit et Optimisation des Performances Informatiques',
    description: 'Analyser l\'infrastructure informatique d\'une entreprise pour identifier les points d\'amélioration.',
    objective: 'Augmenter l\'efficacité et réduire les coûts opérationnels.',
  },
  {
    id: 8,
    title: 'Création d\'un Site Web E-commerce',
    description: 'Développer une plateforme de e-commerce pour la vente de produits en ligne.',
    objective: 'Augmenter les ventes en ligne et améliorer l\'expérience utilisateur.',
  },
  {
    id: 9,
    title: 'Mise en Place d\'un Système de Gestion de Projet',
    description: 'Implémenter un logiciel de gestion de projet pour améliorer la collaboration et le suivi des tâches.',
    objective: 'Accroître l\'efficacité des équipes et garantir le respect des délais.',
  },
  {
    id: 10,
    title: 'Solutions de Virtualisation',
    description: 'Mettre en place des solutions de virtualisation pour optimiser les ressources serveur.',
    objective: 'Réduire les coûts matériels et améliorer la flexibilité des opérations.',
  },
];

const ProjectList: React.FC = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id: number) => {
    navigate(`/projects/${id}`);
  };

  return (
    <Container>
      <Box mt={5} mb={10}>
        <ProjectTitle />
        <Grid container spacing={4} mt={2}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card elevation={3} sx={{ display: 'flex', flexDirection: 'column', minHeight: '350px' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                  <Box mt={2}>
                    <Typography variant="subtitle1" fontWeight="bold">Objectif :</Typography>
                    <Typography variant="body2" color="textSecondary">{project.objective}</Typography>
                  </Box>
                </CardContent>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ marginTop: 'auto', marginBottom: '16px' }} // Pousse le bouton vers le bas tout en lui laissant de l'espace
                  onClick={() => handleViewDetails(project.id)}
                >
                  Voir Détails
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProjectList;