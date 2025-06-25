import React from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What services does Websthal offer?",
    answer:
      "We provide web development, mobile app development, digital marketing, UI/UX design, and e-commerce solutions tailored to your business needs.",
  },
  {
    question: "How experienced is your team?",
    answer:
      "Our team consists of experienced developers, designers, and marketers with a track record of delivering successful projects across various industries.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "Depending on the complexity, a website can take anywhere from 2 to 6 weeks from planning to launch.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes, we offer ongoing support and maintenance to ensure your solution remains up-to-date and performs optimally.",
  },
  {
    question: "Can you help with improving our online visibility?",
    answer:
      "Absolutely. Our digital marketing services include SEO, SEM, content marketing, and social media management to boost your brand’s presence online.",
  },
];

const FAQ = () => {
  return (
    <>
      {/* Top Banner Image */}
      <Box
        component="img"
        src="/image/campaign-creators.jpg" // Place this image in public/images
        alt="FAQ Banner"
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
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Here are answers to some of the most common questions about our services, process, and company values.
          </Typography>
        </Box>

        {/* Accordion List */}
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2, boxShadow: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" fontWeight={600}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="textSecondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
};

export default FAQ;
