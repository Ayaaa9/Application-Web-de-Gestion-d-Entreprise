import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  styled,
} from '@mui/material';

const detailedProjects = [
  {
    id: 1,
    title: 'Audit de Cybersécurité',
    description: 'Réaliser un audit complet de la sécurité des systèmes d\'information d\'un client pour identifier les vulnérabilités.',
    objective: 'Renforcer la sécurité des données et des infrastructures.',
    steps: [
      'Analyse des systèmes existants.',
      'Identification des vulnérabilités.',
      'Recommandations pour améliorer la sécurité.',
      'Rapport détaillé pour le client.',
    ],
    duration: '4 semaines',
    team: 'Équipe de sécurité informatique',
    technologies: ['Pentesting', 'Firewall', 'SIEM'],
    budget: '5000 €',
    client: 'Client A',
    startDate: '2023-01-10',
    endDate: '2023-02-10',
  },
  {
    id: 2,
    title: 'Migration vers le Cloud',
    description: 'Accompagner une entreprise dans la migration de ses systèmes vers le cloud.',
    objective: 'Réduire les coûts d\'infrastructure et améliorer l\'accessibilité des données.',
    steps: [
      'Évaluation des systèmes existants.',
      'Choix du fournisseur de services cloud.',
      'Planification de la migration.',
      'Exécution de la migration.',
    ],
    duration: '6 semaines',
    team: 'Équipe d\'infrastructure cloud',
    technologies: ['AWS', 'Azure'],
    budget: '8000 €',
    client: 'Client B',
    startDate: '2023-02-15',
    endDate: '2023-04-15',
  },
  {
    id: 3,
    title: 'Développement d\'Applications Mobiles',
    description: 'Concevoir et développer des applications mobiles sur mesure pour répondre aux besoins spécifiques d\'un client.',
    objective: 'Améliorer l\'engagement des utilisateurs et la présence sur le marché mobile.',
    steps: [
      'Analyse des besoins du client.',
      'Conception de l\'interface utilisateur.',
      'Développement de l\'application.',
      'Tests et déploiement.',
    ],
    duration: '8 semaines',
    team: 'Équipe de développement mobile',
    technologies: ['React Native', 'Flutter'],
    budget: '12000 €',
    client: 'Client C',
    startDate: '2023-03-01',
    endDate: '2023-05-01',
  },
  {
    id: 4,
    title: 'Intégration de Solutions IoT',
    description: 'Développer des solutions IoT pour collecter et analyser des données en temps réel.',
    objective: 'Optimiser les opérations et améliorer la prise de décision grâce à des données en temps réel.',
    steps: [
      'Évaluation des besoins IoT.',
      'Sélection des capteurs et dispositifs.',
      'Développement de la plateforme de collecte de données.',
      'Analyse des données et reporting.',
    ],
    duration: '10 semaines',
    team: 'Équipe IoT',
    technologies: ['Arduino', 'Raspberry Pi'],
    budget: '15000 €',
    client: 'Client D',
    startDate: '2023-04-10',
    endDate: '2023-06-20',
  },
  {
    id: 5,
    title: 'Formation en Informatique',
    description: 'Proposer des sessions de formation sur les meilleures pratiques en matière de technologie et de cybersécurité.',
    objective: 'Sensibiliser les employés aux risques informatiques et améliorer leurs compétences techniques.',
    steps: [
      'Évaluation des besoins de formation.',
      'Création du contenu de formation.',
      'Sessions de formation en présentiel ou en ligne.',
      'Évaluation des compétences acquises.',
    ],
    duration: '2 semaines',
    team: 'Formateurs expérimentés',
    technologies: ['Cybersecurity', 'Cloud Computing'],
    budget: '3000 €',
    client: 'Client E',
    startDate: '2023-06-01',
    endDate: '2023-06-15',
  },
  {
    id: 6,
    title: 'Développement d\'un Système de Gestion de Contenu (CMS)',
    description: 'Créer un CMS personnalisé pour permettre la gestion facile de contenu par les utilisateurs.',
    objective: 'Faciliter la mise à jour et la gestion du contenu en ligne par des utilisateurs non techniques.',
    steps: [
      'Analyse des besoins du client.',
      'Conception de l\'architecture du CMS.',
      'Développement et intégration.',
      'Formation des utilisateurs.',
    ],
    duration: '6 semaines',
    team: 'Équipe de développement web',
    technologies: ['WordPress', 'Drupal'],
    budget: '7000 €',
    client: 'Client F',
    startDate: '2023-06-20',
    endDate: '2023-08-01',
  },
  {
    id: 7,
    title: 'Audit et Optimisation des Performances Informatiques',
    description: 'Analyser l\'infrastructure informatique d\'une entreprise pour identifier les points d\'amélioration.',
    objective: 'Augmenter l\'efficacité et réduire les coûts opérationnels.',
    steps: [
      'Analyse de l\'infrastructure existante.',
      'Identification des goulets d\'étranglement.',
      'Recommandations d\'optimisation.',
      'Mise en œuvre des améliorations.',
    ],
    duration: '4 semaines',
    team: 'Équipe d\'infrastructure',
    technologies: ['Monitoring Tools', 'Performance Testing'],
    budget: '4000 €',
    client: 'Client G',
    startDate: '2023-07-10',
    endDate: '2023-08-10',
  },
  {
    id: 8,
    title: 'Création d\'un Site Web E-commerce',
    description: 'Développer une plateforme de e-commerce pour la vente de produits en ligne.',
    objective: 'Augmenter les ventes en ligne et améliorer l\'expérience utilisateur.',
    steps: [
      'Analyse des besoins du client.',
      'Conception de l\'interface utilisateur.',
      'Développement de la plateforme e-commerce.',
      'Tests et déploiement.',
    ],
    duration: '8 semaines',
    team: 'Équipe de développement web',
    technologies: ['Shopify', 'Magento'],
    budget: '10000 €',
    client: 'Client H',
    startDate: '2023-08-15',
    endDate: '2023-10-10',
  },
  {
    id: 9,
    title: 'Mise en Place d\'un Système de Gestion de Projet',
    description: 'Implémenter un logiciel de gestion de projet pour améliorer la collaboration et le suivi des tâches.',
    objective: 'Accroître l\'efficacité des équipes et garantir le respect des délais.',
    steps: [
      'Évaluation des besoins en gestion de projet.',
      'Sélection du logiciel approprié.',
      'Formation des utilisateurs.',
      'Suivi et ajustements.',
    ],
    duration: '4 semaines',
    team: 'Équipe de gestion de projet',
    technologies: ['Trello', 'Asana'],
    budget: '2500 €',
    client: 'Client I',
    startDate: '2023-09-01',
    endDate: '2023-09-30',
  },
  {
    id: 10,
    title: 'Solutions de Virtualisation',
    description: 'Mettre en place des solutions de virtualisation pour optimiser les ressources serveur.',
    objective: 'Réduire les coûts matériels et améliorer la flexibilité des opérations.',
    steps: [
      'Analyse de l\'infrastructure actuelle.',
      'Choix des technologies de virtualisation.',
      'Mise en œuvre de la solution.',
      'Tests et validation.',
    ],
    duration: '6 semaines',
    team: 'Équipe d\'infrastructure',
    technologies: ['VMware', 'Hyper-V'],
    budget: '6000 €',
    client: 'Client J',
    startDate: '2023-10-15',
    endDate: '2023-11-30',
  },
];

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '40px',
  marginTop: '40px',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight :'100px',
  color: theme.palette.secondary.main,
  marginBottom: '20px',
  textAlign : 'center'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.secondary.main,
  marginTop: '20px',
  marginBottom: '10px',
  textTransform: 'uppercase',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '30px',
  padding: '12px 30px',
  backgroundColor: theme.palette.secondary.main,
  color: '#ffffff',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id) : null;
  const project = detailedProjects.find((project) => project.id === projectId);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <Container maxWidth="md">
      <StyledPaper elevation={3}>
        <Title variant="h4" gutterBottom>
          {project.title}
        </Title>
        <Typography variant="body1" textAlign={'center'} paragraph>
          {project.description}
        </Typography>
        <SectionTitle variant="h6">Objectif</SectionTitle>
        <Typography variant="body1" paragraph>
          {project.objective}
        </Typography>
        <Divider />
        <Box mt={3}>
          <SectionTitle variant="h6">Étapes du Projet</SectionTitle>
          <List>
            {project.steps.map((step, index) => (
              <ListItem key={index}>
                <ListItemText primary={step} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        <Grid container spacing={2} mt={3}>
          <Grid item xs={12} sm={6}>
            <SectionTitle variant="h6">Durée estimée</SectionTitle>
            <Typography variant="body1">{project.duration}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SectionTitle variant="h6">Équipe</SectionTitle>
            <Typography variant="body1">{project.team}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SectionTitle variant="h6">Technologies Utilisées</SectionTitle>
            <Typography variant="body1">{project.technologies.join(', ')}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SectionTitle variant="h6">Budget Estimé</SectionTitle>
            <Typography variant="body1">{project.budget}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SectionTitle variant="h6">Client</SectionTitle>
            <Typography variant="body1">{project.client}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SectionTitle variant="h6">Date de Début</SectionTitle>
            <Typography variant="body1">{project.startDate}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SectionTitle variant="h6">Date de Fin</SectionTitle>
            <Typography variant="body1">{project.endDate}</Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={5}>
          <StyledButton variant="contained" color="primary" href="/">
            Retour à la page principale
          </StyledButton>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default ProjectDetails;
