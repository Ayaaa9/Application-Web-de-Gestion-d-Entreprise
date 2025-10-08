import React from 'react';
import { Grid, Typography, Link } from '@mui/material';


const FrameworksTitle = () => {

    return (
        <Grid container spacing={3} justifyContent="center" >
            <Grid item xs={12} sm={10} lg={8}>
                <Typography variant='h2' fontWeight={700} textAlign="center" sx={{
                    fontSize: {
                        lg: '45px',
                        xs: '35px'
                    },
                    lineHeight: {
                        lg: '50px',
                        xs: '40px'
                    }
                }}>
                    A Propos De 
                    <Link href="#" color="secondary" underline="none"> Nous</Link>
                    </Typography>
            </Grid>
        </Grid>
    );
};

export default FrameworksTitle;
