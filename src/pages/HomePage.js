import React from 'react';
import { Container, Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Avatar, Link } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ImageCarousel from '../components/ImageCarousel';
import SchoolIcon from '@mui/icons-material/School';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HomeIcon from '@mui/icons-material/Home';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MovieIcon from '@mui/icons-material/Movie';
import StarIcon from '@mui/icons-material/Star';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';


const HomePage = () => {


// Testimonials data
const testimonialsData = [
  {
    name: 'Shakti Shekhawat',
    time: '4 years ago',
    rating: 5,
    review: 'Websthal met with our expectations in designing an easy to use and eye-catching website for our...',
    avatarUrl: '/path-to-avatar1.jpg', // replace with actual image paths
  },
  {
    name: 'Miss RanzitaDaz',
    time: '4 years ago',
    rating: 5,
    review: 'We joined hands with Websthal as we required a website and logo design for our aviation institute...',
    avatarUrl: '/path-to-avatar2.jpg',
  },
  {
    name: 'BOLKOL Official',
    time: '4 years ago',
    rating: 5,
    review: 'We at Bolkol are extending our authentic and traditional products to customers through our easy to navigate e...',
    avatarUrl: '/path-to-avatar3.jpg',
  },
];

// Carousel settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};







  return (
    <>
      <ImageCarousel />

      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        {/* Existing Features Section */}
        <Grid container spacing={4} style={{ marginTop: '32px' }}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                height: '15vh',
                padding: '16px',
                boxShadow: 3,
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6">Creative Solutions</Typography>
              <Typography variant="body2">
              Welcome to our Software and Digital Marketing Company, where we provide cutting-edge and omnipresent IT solutions utilizing current technology.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                height: '15vh',
                padding: '16px',
                boxShadow: 3,
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6">Boosting Business</Typography>
              <Typography variant="body2">
              Our expertise as a top software firm in Guwahati helps businesses reach new heights through innovative IT solutions and advanced technology.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                height: '15vh',
                padding: '16px',
                boxShadow: 3,
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6">Customer Support</Typography>
              <Typography variant="body2">
              Our team excels in promptly addressing client queries and requests, providing timely and efficient support for all their needs.
              </Typography>
            </Box>
          </Grid>
        </Grid>

      




        {/* New Section: Why Choose Websthal */}
        <Grid container spacing={4} style={{ marginTop: '64px' }}>
          {/* Left Side Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/image/about-img.webp" // Replace with your actual image path
              alt="Office Scene"
              sx={{ width: '100%',height: '65vh', borderRadius: '8px', boxShadow: 3 }}
            />
          </Grid>

          {/* Right Side Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ paddingLeft: { xs: 0, md: '32px' } }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Why Choose Websthal
              </Typography>
              <Typography variant="body1" paragraph>
                The business philosophy of the company is to lay emphasis on Human Values and Personal Relations. ‘At Websthal – Technology meets emotions and limits are higher than the sky.’ Great stress is laid on proper communication, transparency, and human relations, which forms an integral part of the corporate culture. At Websthal, a Software and Digital Marketing Company, we not only develop products but we develop relationships. We at Websthal believe in teamwork.
              </Typography>

              {/* Bullet Points */}
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="We are completely legal entity." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="We have in house developers and designers." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Unique Marketing strategies & Digital marketing team." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Latest Technology for your business." />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>








        {/* New Section: Design from Screenshot */}
        <Grid container spacing={4} style={{ marginTop: '64px' }}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ textAlign: 'center', marginBottom: '32px' }}
            >
              We Provide Expert Tech Services and Online Marketing
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: 'center', marginBottom: '32px', color: 'gray' }}
            >
              Elevating businesses to new heights with Advanced Digital Marketing and Software Services
            </Typography>
          </Grid>

          {/* Service Cards */}
          <Grid container spacing={4}>
            {/* Web Development */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src="/image/img3.jpg" // Replace with actual path
                alt="Web development"
                sx={{ width: '100%', borderRadius: '8px', boxShadow: 3 }}
              />
              <Typography
                variant="h6"
                sx={{ textAlign: 'center', marginTop: '16px' }}
              >
                Web Development
              </Typography>
            </Grid>

            {/* Design Services */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src="/image/grid/images (1).jpg" // Replace with actual path
                alt="Design services"
                sx={{ width: '100%', borderRadius: '8px', boxShadow: 3 }}
              />
              <Typography
                variant="h6"
                sx={{ textAlign: 'center', marginTop: '16px' }}
              >
                Design Services
              </Typography>
            </Grid>

            {/* Digital Marketing */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src="/image/img1.jpg" // Replace with actual path
                alt="Digital marketing"
                sx={{ width: '100%', borderRadius: '8px', boxShadow: 3 }}
              />
              <Typography
                variant="h6"
                sx={{ textAlign: 'center', marginTop: '16px' }}
              >
                Digital Marketing
              </Typography>
            </Grid>

            {/* Custom Designs */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src="/image/grid/images (2).jpg" // Replace with actual path
                alt="Custom Design"
                sx={{ width: '100%', borderRadius: '8px', boxShadow: 3 }}
              />
              <Typography
                variant="h6"
                sx={{ textAlign: 'center', marginTop: '16px' }}
              >
                Custom Designs
              </Typography>
            </Grid>

            {/* E-Commerce */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src="/image/grid/web-dev.jpeg" // Replace with actual path
                alt="E-Commerce"
                sx={{ width: '100%', borderRadius: '8px', boxShadow: 3 }}
              />
              <Typography
                variant="h6"
                sx={{ textAlign: 'center', marginTop: '16px' }}
              >
                E-Commerce
              </Typography>
            </Grid>

            {/* Marketing Strategy */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src="/image/img2.jpg" // Replace with actual path
                alt="Marketing Strategy"
                sx={{ width: '100%', borderRadius: '8px', boxShadow: 3 }}
              />
              <Typography
                variant="h6"
                sx={{ textAlign: 'center', marginTop: '16px' }}
              >
                Marketing Strategy
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        
        </Container>










        {/* New Section: Stages of Our Working Process */}
        <Box sx={{ backgroundColor: '#0A0A23', padding: '64px 0' }}>
          <Container>
            {/* Section Heading */}
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: '#FFFFFF',
                textAlign: 'center',
                marginBottom: '32px',
                fontWeight: 'bold',
              }}
            >
              Stages of Our Working Process
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'gray',
                textAlign: 'center',
                marginBottom: '48px',
              }}
            >
              How we bring your ideas to life with effective processes
            </Typography>

            {/* Cards */}
            <Grid container spacing={4}>
              {/* Card 1: Research Project */}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '24px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    boxShadow: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: '40px',
                      display: 'inline-block',
                      marginBottom: '16px',
                    }}
                  >
                    🔬 {/* Replace with an appropriate icon */}
                  </Box>
                  <Typography variant="h6" sx={{ marginBottom: '16px' }}>
                    Research Project
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '16px' }}>
                    Before starting your project, our expert staff will research
                    your requirements and work on it.
                  </Typography>
                  <Button variant="contained" sx={{ backgroundColor: '#FFD700' }}>
                    Know More
                  </Button>
                </Box>
              </Grid>

              {/* Card 2: Finding Solutions */}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '24px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    boxShadow: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: '40px',
                      display: 'inline-block',
                      marginBottom: '16px',
                    }}
                  >
                    💡 {/* Replace with an appropriate icon */}
                  </Box>
                  <Typography variant="h6" sx={{ marginBottom: '16px' }}>
                    Finding Solutions
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '16px' }}>
                    Once the project research is done, we find solutions to
                    tackle the problems identified.
                  </Typography>
                  <Button variant="contained" sx={{ backgroundColor: '#FFD700' }}>
                    Know More
                  </Button>
                </Box>
              </Grid>

              {/* Card 3: Building & Delivering */}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '24px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    boxShadow: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: '40px',
                      display: 'inline-block',
                      marginBottom: '16px',
                    }}
                  >
                    🛠️ {/* Replace with an appropriate icon */}
                  </Box>
                  <Typography variant="h6" sx={{ marginBottom: '16px' }}>
                    Building & Delivering
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '16px' }}>
                    Finally, we build your project and deliver what you
                    envisioned.
                  </Typography>
                  <Button variant="contained" sx={{ backgroundColor: '#FFD700' }}>
                    Know More
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>






        {/* About Websthal Section */}
      <Box sx={{ padding: '64px 0', backgroundColor: '#F9F9F9' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Section: Image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  margin: '0 auto',
                  textAlign: 'center',
                }}
              >
                <Box
                  component="img"
                  src="/image/grid/about11.png" // Replace with the actual image path
                  alt="Websthal Visualization"
                  sx={{
                    maxWidth: '100%',
                   
                  }}
                />
              </Box>
            </Grid>

            {/* Right Section: Text */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  color: '#333333',
                  marginBottom: '16px',
                }}
              >
                Expressing our narrative through the term{' '}
                <span style={{ color: '#FF0000' }}>"Websthal"</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#555555',
                  marginBottom: '16px',
                  lineHeight: '1.8',
                }}
              >
                Behind the story of Websthal is our vision that
                has been expressed through the meaning of our name. The name
                "Websthal" is the amalgamation of two terms "Algorithm" and
                "Horizon". Algorithm refers to a set of instructions that is
                used to perform a specific task whereas Horizon refers to the
                line where apparently earth seems to meet the sky.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#555555',
                  marginBottom: '16px',
                  lineHeight: '1.8',
                }}
              >
                At Websthal, we believe every complex problem has a solution
                with the right use of algorithms. Websthal is
                onboard a journey in which it is discovering and adopting from
                the range of algorithms to build a technical world beyond our
                horizon of imaginations.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>




      {/* Figures Depicting Success Section */}
      <Box sx={{ padding: '64px 0', backgroundColor: '#F9F9F9' }}>
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: '#888',
              marginBottom: '16px',
            }}
          >
            Figures Depicting Success
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#000',
            }}
          >
            Check out the figures of our endeavors
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  textAlign: 'center',
                  padding: '24px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 3,
                }}
              >
                <Typography
                  variant="h3"
                  component="p"
                  sx={{ fontWeight: 'bold', color: '#FF0000', marginBottom: '8px' }}
                >
                  8+
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  Years of Experience
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  textAlign: 'center',
                  padding: '24px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 3,
                }}
              >
                <Typography
                  variant="h3"
                  component="p"
                  sx={{ fontWeight: 'bold', color: '#FF0000', marginBottom: '8px' }}
                >
                  300+
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  Total Projects Completed
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  textAlign: 'center',
                  padding: '24px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 3,
                }}
              >
                <Typography
                  variant="h3"
                  component="p"
                  sx={{ fontWeight: 'bold', color: '#FF0000', marginBottom: '8px' }}
                >
                  15+
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  Skilled Team Members
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  textAlign: 'center',
                  padding: '24px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 3,
                }}
              >
                <Typography
                  variant="h3"
                  component="p"
                  sx={{ fontWeight: 'bold', color: '#FF0000', marginBottom: '8px' }}
                >
                  200+
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  Esteemed Clients
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>






      {/* New Section for Quality Products */}
      <Box sx={{ backgroundColor: '#0a0c27', color: '#fff', padding: '64px 0' }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            OUR PRODUCTS
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            Check out our quality products
          </Typography>

          <Grid container spacing={4} justifyContent="center" style={{ marginTop: '32px' }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: '#131a40',
                  padding: '32px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  boxShadow: 3,
                  color: '#fff',
                }}
              >
                <SchoolIcon sx={{ fontSize: 40, marginBottom: '16px' }} />
                <Typography variant="h6">School Management System</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: '#131a40',
                  padding: '32px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  boxShadow: 3,
                  color: '#fff',
                }}
              >
                <HomeIcon sx={{ fontSize: 40, marginBottom: '16px' }} />
                <Typography variant="h6">Resort Booking System</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: '#131a40',
                  padding: '32px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  boxShadow: 3,
                  color: '#fff',
                }}
              >
                <DirectionsBusIcon sx={{ fontSize: 40, marginBottom: '16px' }} />
                <Typography variant="h6">Bus Booking System</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: '#131a40',
                  padding: '32px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  boxShadow: 3,
                  color: '#fff',
                }}
              >
                <HotelIcon sx={{ fontSize: 40, marginBottom: '16px' }} />
                <Typography variant="h6">Hotel Booking System</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: '#131a40',
                  padding: '32px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  boxShadow: 3,
                  color: '#fff',
                }}
              >
                <FlightTakeoffIcon sx={{ fontSize: 40, marginBottom: '16px' }} />
                <Typography variant="h6">Travel Management System</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: '#131a40',
                  padding: '32px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  boxShadow: 3,
                  color: '#fff',
                }}
              >
                <MovieIcon sx={{ fontSize: 40, marginBottom: '16px' }} />
                <Typography variant="h6">Movie Ticket Booking System</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>






      <div>
      {/* Other sections of your HomePage can go here */}

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', padding: '64px 0' }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
            CUSTOMER TESTIMONIALS
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            What customers think about us?
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
            Check out what our clients have to say about their experience associating/working with Websthal
          </Typography>

          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <Box key={index} sx={{ padding: '16px' }}>
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                  }}
                >
                  <Avatar
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    sx={{ width: 60, height: 60, margin: '0 auto 16px' }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {testimonial.time}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} sx={{ color: '#ff9800' }} />
                    ))}
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {testimonial.review}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>

          <Box sx={{ textAlign: 'center', marginTop: '32px' }}>
            <Button variant="contained" color="secondary">
              Leave A Review
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Additional sections of your HomePage can go here */}
    </div>






    {/* Footer Section */}
    <Box sx={{ backgroundColor: '#000', color: '#fff', padding: '32px 0' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* About Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
                Websthal
              </Typography>
              <Typography variant="body2">
                We are a prominent and innovative organization committed to delivering omnipresent,
                reliable, and secure technical solutions to our clients with maximum client
                satisfaction. For any queries related to our products or services, feel free to get
                in touch with us anytime.
              </Typography>
            </Grid>

            {/* Social Links */}
            <Grid item xs={12} md={2}>
              <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
                Social
              </Typography>
              <List>
                {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map((social) => (
                  <ListItem key={social} disablePadding>
                    <ListItemText>
                      <Link href="#" underline="hover" color="inherit">
                        {social}
                      </Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Information Links */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
                Information
              </Typography>
              <List>
                {['Privacy Policy', 'Terms of Service', 'Disclaimer', 'Refund Policy'].map(
                  (info) => (
                    <ListItem key={info} disablePadding>
                      <ListItemText>
                        <Link href="#" underline="hover" color="inherit">
                          {info}
                        </Link>
                      </ListItemText>
                    </ListItem>
                  )
                )}
              </List>
            </Grid>

            {/* Contact Details */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
                Address
              </Typography>
              <List>
                <ListItem disablePadding>
                  <LocationOnIcon sx={{ marginRight: '8px' }} />
                  <Typography variant="body2">Kahilipara, Guwahati, Assam 781019</Typography>
                </ListItem>
                <ListItem disablePadding>
                  <EmailIcon sx={{ marginRight: '8px' }} />
                  <Typography variant="body2">info@Websthal.com, Websthal@gmail.com</Typography>
                </ListItem>
                <ListItem disablePadding>
                  <PhoneIcon sx={{ marginRight: '8px' }} />
                  <Typography variant="body2">+91-9101998837</Typography>
                </ListItem>
                <ListItem disablePadding>
                  <LanguageIcon sx={{ marginRight: '8px' }} />
                  <Typography variant="body2">www.Websthal.com</Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            align="center"
            sx={{ marginTop: '16px', color: '#aaa' }}
          >
            © Websthal. All Rights Reserved
          </Typography>
        </Container>
      </Box>
      
    </>
  );
};

export default HomePage;




















// import React from 'react';
// import { Container, Grid, Box, Typography, Button } from '@mui/material';
// import ImageCarousel from '../components/ImageCarousel';

// const HomePage = () => {
//   return (
//     <>
    
//     <ImageCarousel />
    
//     <Container maxWidth="lg" style={{ marginTop: '32px' }}>
//       {/* Hero Section */}
     
//       {/* <Box
//         sx={{
//           backgroundColor: '#5b2c82',
//           color: '#fff',
//           padding: '64px 16px',
//           textAlign: 'center',
//           borderRadius: '8px',
//         }}
//       >
//         <Typography variant="h5" gutterBottom>
//           Welcome to Websthal
//         </Typography>
//         <Typography variant="h3" gutterBottom>
//           DIGITAL MARKETING SERVICES
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           We act as a partner with whom you can collaborate to take effective advantage of new marketing opportunities.
//         </Typography>
//         <Button variant="contained" color="secondary" style={{ marginTop: '16px' }}>
//           Contact
//         </Button>
//       </Box> */}

//       {/* Features Section */}
//       <Grid container spacing={4} style={{ marginTop: '32px' }}>
//         <Grid item xs={12} sm={4}>
//           <Box
//             sx={{
//               padding: '16px',
//               boxShadow: 3,
//               borderRadius: '8px',
//               textAlign: 'center',
//             }}
//           >
//             <Typography variant="h6">Creative Solutions</Typography>
//             <Typography variant="body2">
//               Welcome to our Software and Digital Marketing Company...
//             </Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Box
//             sx={{
//               padding: '16px',
//               boxShadow: 3,
//               borderRadius: '8px',
//               textAlign: 'center',
//             }}
//           >
//             <Typography variant="h6">Boosting Business</Typography>
//             <Typography variant="body2">
//               Our expertise as a top software firm...
//             </Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Box
//             sx={{
//               padding: '16px',
//               boxShadow: 3,
//               borderRadius: '8px',
//               textAlign: 'center',
//             }}
//           >
//             <Typography variant="h6">Customer Support</Typography>
//             <Typography variant="body2">
//               Our team excels in providing timely support...
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//     </>
//   );
// };

// export default HomePage;
