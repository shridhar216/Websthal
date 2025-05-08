import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive, secure, and SEO-friendly websites tailored to business needs using modern frameworks.",
    image: "/image/Web-Development.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating seamless mobile experiences on iOS and Android platforms, customized to business goals.",
    image: "/image/Mobile-App-Development.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Driving growth through SEO, social media, paid campaigns, and content strategies that connect brands with their audience.",
    image: "/image/digital-marketing.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging interfaces that deliver a smooth user journey across devices.",
    image: "/image/web-design.jpg",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Custom e-commerce platforms that streamline shopping experiences and drive conversions.",
    image: "/image/img4.jpg",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud deployment, CI/CD, and DevOps solutions that enhance scalability, speed, and collaboration.",
    image: "/image/devops.jpg",
  },
];

const Services = () => {
  return (
    <>
      {/* Header Image */}
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
      />

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            What We Offer
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Websthal offers a full spectrum of technology and marketing services tailored to your business goals. Our expert teams deliver scalable, secure, and user-friendly solutions that ensure long-term success.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ boxShadow: 3, borderRadius: 2, overflow: "hidden" }}>
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Services;
