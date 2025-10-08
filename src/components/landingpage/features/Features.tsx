import React from 'react';
import { Typography, Grid, Container, Box, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  IconMessages,
  IconArrowsShuffle,
  IconChartPie,
  IconShieldLock,
  IconLayersIntersect,
} from '@tabler/icons';

import FeaturesTitle from './FeaturesTitle';
import AnimationFadeIn from '../animation/Animation';

interface FeaturesType {
  icon: React.ReactElement;
  title: string;
  link: string;
}

const featuresData: FeaturesType[] = [
  {
    icon: <IconMessages width={40} height={40} strokeWidth={1.5} />,
    title: 'Etude et conseils',
    link: '/services/etude-et-conseils',
  },
  {
    icon: <IconArrowsShuffle width={40} height={40} strokeWidth={1.5} />,
    title: 'Transformation Digital',
    link: '/services/transformation-digital',
  },
  {
    icon: <IconChartPie width={40} height={40} strokeWidth={1.5} />,
    title: 'Digital factory',
    link: '/services/digital-factory',
  },
  {
    icon: <IconShieldLock width={40} height={40} strokeWidth={1.5} />,
    title: 'Cybersécurité',
    link: '/services/cybersecurite',
  },
  {
    icon: <IconLayersIntersect width={40} height={40} strokeWidth={1.5} />,
    title: 'Développement informatique',
    link: '/services/developpement-informatique',
  },
];

const Features = () => {
  const navigate = useNavigate();

  return (
    <Box py={6}>
      <Container maxWidth="lg">
        <FeaturesTitle />
        <AnimationFadeIn>
          <Box mt={6} textAlign="center">
            <Grid container spacing={4} justifyContent="center">
              {featuresData.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ borderRadius: 2, textAlign: 'center', boxShadow: 'none', '&:hover': { boxShadow: 7 } }}>
                    <CardContent>
                      <Box sx={{ color: "#4fb9fc", mb: 2 }}>{feature.icon}</Box>
                      <Typography variant="h4" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" mb={2}>
                        Pour en savoir plus, veuillez cliquer sur le bouton ci-dessous.
                      </Typography>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => navigate(feature.link)}
                        endIcon={<span>→</span>}
                      >
                        En savoir plus
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </AnimationFadeIn>
      </Container>
    </Box>
  );
};

export default Features;