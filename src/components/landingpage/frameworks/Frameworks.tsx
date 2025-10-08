import React from 'react';
import { Box, Container, styled, Stack, Typography } from '@mui/material';

import sliderImg from 'src/assets/images/landingpage/background/slider-group.jpg';
import FrameworksTitle from './FrameworksTitle';

const TextSection = styled(Box)(({ theme }) => ({
  maxWidth: '950px',
  textAlign: 'center',
}));


const Frameworks = () => {
  return (
    
    <Box
      sx={{
        py: {
          xs: '10px',
          lg: '50px',
        },
        justifyContent: 'center',
        alignItems: 'center', }}
    >
      
      <Container maxWidth="lg">
      <FrameworksTitle/>
        <Stack
          overflow="hidden"
          mt={6}
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <TextSection>
            <Typography variant="body1" mt={2}>
              DIGIUP vise à garantir la montée en puissance d’une économie compétitive, une administration numérique efficace, et enfin une société connectée et inclusive.
              Pour se faire, nous inventons avec nos partenaires de nouvelles expériences digitales, nous participons à la mise en place des projets stratégiques d’envergure, tant au niveau national qu’international, nous créons des solutions de services innovantes et des produits à forte valeur ajoutée dans le domaine IT, et accompagnons nos clients pour accélérer leur transformation digitale.
            </Typography>
          </TextSection>
          <Box>
            <img src={sliderImg} alt="slide" style={{ borderRadius: '10px', maxWidth: '80%' }} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Frameworks;
