import React from 'react';
import { Grid, Typography, Link } from '@mui/material';


const ProjectTitle = () => {

    return (
        <Grid container spacing={7} justifyContent="center" >
            <Grid item xs={15} sm={15} lg={10}>
                <Typography variant='h2' fontWeight={700} textAlign="center" sx={{
                    fontSize: {
                        lg: '45px',
                        xs: '35px'
                    },
                    lineHeight: {
                        lg: '50px',
                        xs: '60px'
                    }
                }}>
                    Nos
                    <Link href="#" color="secondary" underline="none"> Projet</Link>
                    </Typography>
            </Grid>
        </Grid>
    );
};

export default ProjectTitle;
