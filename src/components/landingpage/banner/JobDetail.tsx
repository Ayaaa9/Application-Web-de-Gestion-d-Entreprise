import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  styled,
} from '@mui/material';
import PostulerForm from 'src/components/landingpage/postes/PostulerForm';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

interface JobDetailProps {
  title: string;
  description: string;
  positions: Array<{ title: string; description: string }>;
  published: string;
  jobDetails: {
    career: string;
    educationLevel: string;
    salary: string;
    city: string;
    experience: string;
    contractType: string;
    languages: string;
    benefits: string[];
  };
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '20px',
  marginTop: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.secondary.main,
  marginBottom: '20px',
  fontSize: '2rem',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.secondary.dark,
  marginTop: '20px',
  marginBottom: '10px',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: '#ffffff',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  padding: '10px 20px',
  borderRadius: '30px',
}));

const JobDetail: React.FC<JobDetailProps> = ({
  title,
  description,
  positions,
  published,
  jobDetails,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Container maxWidth="md">
      <StyledPaper elevation={3}>
        <Box pt={5} pb={3} textAlign="center">
          <Title variant="h4" gutterBottom>
            {title}
          </Title>
          <Typography variant="body1" color="text.secondary" mt={2}>
            {description}
          </Typography>
        </Box>

        <Divider />

        <Box mt={4}>
          <SectionTitle variant="h6">Postes Disponibles :</SectionTitle>
          <List>
            {positions.map((position, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={
                    <Typography variant="body1" fontWeight="bold">
                      {position.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {position.description}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider />

        <Box mt={4}>
          <SectionTitle variant="h6">Avantages :</SectionTitle>
          <List>
            {jobDetails.benefits.map((benefit, index) => (
              <ListItem key={index}>
                <ListItemText primary={benefit} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider />

        <Box mt={5}>
          <SectionTitle variant="h6">Résumé de l'offre :</SectionTitle>
          <Grid container spacing={3} mt={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">
                <WorkIcon fontSize="small" /> <strong>PUBLIÉE :</strong> {published}
              </Typography>
              <Typography variant="body2">
                <WorkIcon fontSize="small" /> <strong>MÉTIER :</strong> {jobDetails.career}
              </Typography>
              <Typography variant="body2">
                <SchoolIcon fontSize="small" /> <strong>NIVEAU D’ÉTUDES :</strong> {jobDetails.educationLevel}
              </Typography>
              <Typography variant="body2">
                <MonetizationOnIcon fontSize="small" /> <strong>SALAIRE :</strong> {jobDetails.salary}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">
                <LocationOnIcon fontSize="small" /> <strong>VILLE :</strong> {jobDetails.city}
              </Typography>
              <Typography variant="body2">
                <WorkIcon fontSize="small" /> <strong>EXPÉRIENCE :</strong> {jobDetails.experience}
              </Typography>
              <Typography variant="body2">
                <WorkIcon fontSize="small" /> <strong>TYPE DE CONTRAT :</strong> {jobDetails.contractType}
              </Typography>
              <Typography variant="body2">
                <WorkIcon fontSize="small" /> <strong>LANGUES MAÎTRISÉES :</strong> {jobDetails.languages}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box mt={6} textAlign="center">
          <CustomButton variant="contained" onClick={handleOpenModal}>
            Postuler
          </CustomButton>
        </Box>
      </StyledPaper>

      <PostulerForm open={isModalOpen} handleClose={handleCloseModal} />
    </Container>
  );
};

export default JobDetail;
