import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Contact = () => {
  return (
    <>
      {/* Header Image / Section */}
 <Box
        component="img"
        src="/image/img4.jpg"
        alt="Our Services"
        sx={{
          width: "100%",
          height: { xs: "40vh", md: "60vh" },
          objectFit: "cover",
          imageRendering: "auto",
          boxShadow: 4,
        }}
      >
        <Typography variant="h3" color="white" sx={{ fontWeight: "bold" }}>
          Contact Us
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Contact Cards */}
          {[
            {
              icon: <SupportAgentIcon fontSize="large" />,
              title: "Support",
              subtitle: "24x7 Sales Support",
            },
            {
              icon: <CallIcon fontSize="large" />,
              title: "Call",
              subtitle: "+91-8010988837",
            },
            {
              icon: <EmailIcon fontSize="large" />,
              title: "Email",
              subtitle: "info@algorizon.com",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.subtitle}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form + Map */}
        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Hey! Get In touch
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              Welcome all. Please fill in the details below to enable us to get in touch with you at the earliest.
            </Typography>
            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField label="Your Name" fullWidth />
              <TextField label="Your Email" type="email" fullWidth />
              <TextField label="Subject" fullWidth />
              <TextField label="Message" multiline rows={4} fullWidth />
              <Button variant="contained" sx={{ alignSelf: "flex-start" }}>
                Submit
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ height: "100%", minHeight: "400px" }}>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.406828555833!2d92.72363317493366!3d25.577197177467994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374fcbce823cc9fb%3A0xb08d8bfb42c5d4c7!2sALGORIZON%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1689943099384!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
