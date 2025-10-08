import React from 'react';
import { Box, Container, Grid, styled } from '@mui/material';
import BannerContent from './BannerContent';
import bannerVideo from 'src/assets/images/landingpage/vid3.mp4'; 

const VideoBackground = styled('video')(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 1,
}));

const BannerOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 2,
}));

const Banner = () => {
  return (
    <Box mb={0} sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <VideoBackground autoPlay loop muted>
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <BannerOverlay />
      <Container maxWidth="lg" sx={{ height: '100%', zIndex: 3 }}>
        <Grid container alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
          <Grid item xs={12}>
            <BannerContent />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
