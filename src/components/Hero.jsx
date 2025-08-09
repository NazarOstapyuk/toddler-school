import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #acab7d 20%, #f77f43 80%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  paddingTop: theme.spacing(8),
}));

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Початкова школа
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 4,
                lineHeight: 1.6,
                opacity: 0.9,
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              Наша школа нагадує сім'ю. Ні-ні, не поспішайте скролити сторінку!
              У нашому випадку слово «сім'я» дійсно виправдане.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.7,
                opacity: 0.8
              }}
            >
              Маємо невелике за площею приміщення, не більше 25 учнів, особисто знаємо
              усіх батьків наших дітей, ходимо один до одного в гості і навіть влаштовуємо
              спільні пікніки. Чим не сімейні традиції, правда ж?
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={scrollToContact}
              sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                textTransform: 'none',
                borderRadius: 3,
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                }
              }}
            >
              ХОЧУ В ГОСТІ ДО ШКОЛИ!
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <Paper
                elevation={10}
                sx={{
                  width: '100%',
                  height: 400,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  overflow: 'hidden'
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                >
                  <source src="/toodler-banner.mp4" type="video/mp4" />
                  Ваш браузер не підтримує відео елементи.
                </video>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero;
