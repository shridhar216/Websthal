import React from 'react';
import Slider from 'react-slick';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Dummy images for the carousel
const images = [
  {
    title: 'Graphics Designing Services',
    subtitle: 'We have successfully rejuvenated the brand identity of many businesses by handling a number of designing projects for clients.',
    img: '/image/graphic-design.jpg',
  },
  {
    title: 'Digital Marketing Services',
    subtitle: 'Effective marketing strategies to boost your brand’s visibility and audience engagement.',
    img: '/image/digital-marketing.jpg',
  },
  {
    title: 'MOBILE APPS DEVELOPMENT',
    subtitle: 'We have the best and brightest minds to present our clients the most cutting edge technology.',
    img: '/image/Mobile-App-Development.jpg',
  },
  {
    title: 'SOCIAL MEDIA MARKETING',
    subtitle: 'We have an experienced team who gives their best in delivering effective response from various social media channels of clients.',
    img: '/image/Social-Media-Marketing.jpg',
  },
  {
    title: 'Web Development Services',
    subtitle: 'We are dedicated and has successfully build websites over these years with maximum client satisfaction.',
    img: '/image/Web-Development.jpg',
  },
  {
    title: 'Website Design Services',
    subtitle: 'We design websites that can enable you to expose your brand to organic audiences via search engines.',
    img: '/image/Web-design.jpg',
  },
  // Add more images as needed
];

// Custom arrow components for navigation
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Button onClick={onClick} style={{ position: 'absolute', right: '10px', top: '50%', zIndex: 2 }}>
      <ArrowForwardIosIcon style={{ color: '#fff' }} />
    </Button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Button onClick={onClick} style={{ position: 'absolute', left: '10px', top: '50%', zIndex: 2 }}>
      <ArrowBackIosIcon style={{ color: '#fff' }} />
    </Button>
  );
};

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `url(${image.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              padding: '40px',
            }}
          >
            {/* <Box sx={{ textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '8px', maxWidth:'40%' }}> */}
            <Box sx={{ textAlign: 'left', padding: '30px', borderRadius: '8px', maxWidth:'40%' }}>
              <Typography variant="h3" gutterBottom>{image.title}</Typography>
              <Typography variant="subtitle1" gutterBottom>{image.subtitle}</Typography>
              <Button variant="contained" color="secondary">
                Contact
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
