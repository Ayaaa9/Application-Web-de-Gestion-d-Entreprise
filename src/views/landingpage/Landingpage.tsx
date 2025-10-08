import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import Banner from 'src/components/landingpage/banner/Banner';
import C2a2 from 'src/components/landingpage/c2a/C2a2';
import Features from 'src/components/landingpage/features/Features';
import Footer from 'src/components/landingpage/footer/Footer';
import Frameworks from 'src/components/landingpage/frameworks/Frameworks';
import LpHeader from 'src/components/landingpage/header/Header';
import { GlobalStyles } from '@mui/material';
import Projects from 'src/components/landingpage/projects/ProjectList';
import Clients from 'src/components/landingpage/clients/Clients';
import ContactIcon from 'src/components/landingpage/ContactIcon';

const Landingpage: React.FC = () => {
  return (
    <PageContainer title="Landingpage" description="this is Landingpage">
        <>
            <GlobalStyles
                styles={{
                    html: {
                        scrollBehavior: 'smooth',
                    },
                }}
            />
            <LpHeader />
            <div id="banner">
            <Banner />
            </div>
            <div id="frameworks">
              <Frameworks />
            </div>
            <div id="features">
              <Features />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="clients">
              <Clients />
            </div>
            <div id="c2a2">
              <C2a2 />
            </div>
            <Footer />
            <ContactIcon />
        </>
        
    </PageContainer>
);
};

export default Landingpage;
