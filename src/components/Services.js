import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const services = [
  { title: 'Creative Solutions', description: 'Welcome to our Software and Digital Marketing Company...' },
  { title: 'Boosting Business', description: 'Our expertise helps businesses reach new heights...' },
  { title: 'Customer Support', description: 'Our team excels in providing efficient support...' },
];

const Services = () => {
  return (
    <Grid container spacing={3} style={{ padding: '2rem' }}>
      {services.map((service, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6">{service.title}</Typography>
            <Typography variant="body2">{service.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Services;
