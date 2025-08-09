import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Paper,
} from '@mui/material';

const Team = () => {
  const teamMembers = [
    {
      name: 'Христина Клейнота',
      position: 'Засновниця та директорка Toddler School',
      description: 'В свої 14 років я мріяла стати вчителем, а в 15 - осягла, що можу відкрити свою власну школу. Наша мета полягала в тому, щоб створити турботливу освітню атмосферу, в якій кожна дитина зможе розвиватися та відкривати свої здібності.',
      isFounder: true
    },
    {
      name: 'Кузуб Світлана',
      position: 'вчителька української мови та початкових класів'
    },
    {
      name: 'Ляшенко Поліна',
      position: 'вчителька початкових класів, тьюторка'
    },
    {
      name: 'Nana Amoatin',
      position: 'native speaker'
    },
    {
      name: 'Дубовик Дана',
      position: 'вчителька початкових класів, тьюторка'
    },
    {
      name: 'Будак Богдан',
      position: 'викладач програмування та інформатики'
    },
    {
      name: 'Крамаренко Олександр',
      position: 'викладач англійської мови'
    },
    {
      name: 'Підфігурний Олег',
      position: 'вчитель математики та початкових класів'
    },
    {
      name: 'Коноплянко Вероніка',
      position: 'тренерка з чирлідингу'
    },
  ];

  return (
    <Box id="team" sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 6,
            color: 'text.primary'
          }}
        >
          Команда
        </Typography>

        {/* Founder Card */}
        <Box sx={{ mb: 6 }}>
          <Card
            elevation={4}
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #acab7d 20%, #f77f43 80%)',
              color: 'white'
            }}
          >
            <Grid container>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: { xs: 200, md: '100%' },
                    minHeight: 300,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3
                  }}
                >
                  <Avatar
                    sx={{
                      width: 150,
                      height: 150,
                      fontSize: '3rem',
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                      border: '3px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    ТС
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                  >
                    {teamMembers[0].name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ mb: 3, opacity: 0.9 }}
                  >
                    {teamMembers[0].position}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.7, fontSize: '1.1rem' }}
                  >
                    {teamMembers[0].description}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>

        {/* Team Members Grid */}
        <Grid container spacing={4}>
          {teamMembers.slice(1).map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5'
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      fontSize: '1.5rem',
                      bgcolor: 'primary.main'
                    }}
                  >
                    {member.name.split(' ').map(word => word.charAt(0)).join('')}
                  </Avatar>
                </Box>

                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      color: 'text.primary',
                      mb: 2
                    }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.5,
                      fontSize: '0.9rem'
                    }}
                  >
                    {member.position}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
