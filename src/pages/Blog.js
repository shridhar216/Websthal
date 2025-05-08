import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const blogPosts = [
  {
    title: "How AI is Transforming Digital Marketing",
    date: "April 15, 2025",
    excerpt:
      "Explore the impact of artificial intelligence on digital marketing strategies and how businesses can leverage AI for better customer engagement.",
    image: "/image/Web-Development.jpg",
  },
  {
    title: "The Future of Web Development: Trends to Watch",
    date: "March 22, 2025",
    excerpt:
      "Stay ahead of the curve with insights into emerging web development technologies and practices shaping the future of the internet.",
    image: "/image/Web-Development.jpg",
  },
  {
    title: "Understanding UX/UI Design Principles",
    date: "February 10, 2025",
    excerpt:
      "Delve into the fundamentals of UX/UI design and how they contribute to creating user-friendly and aesthetically pleasing digital products.",
    image: "/image/Web-Development.jpg",
  },
  {
    title: "E-Commerce Strategies for 2025",
    date: "January 5, 2025",
    excerpt:
      "Learn about the latest e-commerce strategies and tools that can help businesses enhance their online presence and drive sales.",
    image: "/image/Web-Development.jpg",
  },
];

const Blog = () => {
  return (
    <>
      {/* Top Banner Image */}
      <Box
        component="img"
        src="/image/Web-Development.jpg" // Place this image in public/images
        alt="Blog Banner"
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
            Our Insights & Articles
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Stay updated with the latest trends, tips, and insights from the world of technology, design, and digital marketing.
          </Typography>
        </Box>

        {/* Blog Posts Grid */}
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Published on {post.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Blog;
