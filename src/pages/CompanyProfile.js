import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
// import ImageCarousel from "../components/ImageCarousel";

const CompanyProfile = () => {
  return (
    <>
      {/* Top Carousel */}
      <Box
        component="img"
        src="/image/profile.jpg" // Update this path to match your image
        alt="Company Profile"
        sx={{
          width: "100%",
          height: { xs: "40vh", md: "60vh" }, // Responsive height
          objectFit: "cover",
          imageRendering: "auto",
          boxShadow: 4,
        }}
      />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Company Overview */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Websthal: Empowering Digital Transformation
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Websthal is a leading provider of software development
            and digital marketing solutions, dedicated to helping businesses
            thrive in the digital era. With a focus on innovation, quality, and
            client satisfaction, we offer a full spectrum of IT services
            tailored to modern business needs.
          </Typography>
        </Box>

        {/* Mission, Vision, Approach */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body2">
                To empower businesses with cutting-edge digital solutions that
                drive growth, enhance user experiences, and foster long-term
                success.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body2">
                To be recognized as a global leader in technology and
                innovation, delivering impactful solutions that transform how
                businesses operate and engage with their customers.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Our Approach
              </Typography>
              <Typography variant="body2">
                We follow a client-first philosophy. Our agile methodologies,
                collaborative work style, and transparent communication ensure
                every solution is delivered on time and exceeds expectations.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Why Choose Us Section */}
        <Grid container spacing={4} sx={{ mt: 8, alignItems: "center" }}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/image/about-img.webp" // Replace with your actual image path
              alt="Why Choose Us"
              sx={{
                width: "100%",
                height: "65vh",
                borderRadius: 2,
                boxShadow: 3,
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Why Choose Websthal?
            </Typography>
            <Typography variant="body1" paragraph>
              At Websthal, we blend creativity with technology to deliver
              impactful digital solutions. From strategic planning to
              implementation, our team ensures every solution aligns with client
              goals.
            </Typography>
            <Typography variant="body1" paragraph>
              Our commitment to innovation, customer satisfaction, and long-term
              partnerships is what sets us apart in the competitive tech space.
            </Typography>
            <Typography variant="body1">
              <strong>What We Offer:</strong>
              <ul>
                <li>Custom Software Development</li>
                <li>Web & Mobile App Development</li>
                <li>Digital Marketing Services</li>
                <li>UI/UX Design</li>
                <li>E-commerce Solutions</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CompanyProfile;
