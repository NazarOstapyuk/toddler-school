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
      name: 'Лілія Мацьків',
      position: 'Директорка Toddler School',
      description: 'Ціню справедливість, відкритість і повагу у всьому, що роблю. Вірю, що справжня сила школи — у людях і спільних цінностях, які об\'єднують нас. Моє завдання — створити середовище, де панує довіра, підтримка і прагнення до розвитку.',
      values: 'Для мене важливо, щоб кожен почувався почутим і цінним, а робота будувалася на чесності, відповідальності та взаємоповазі. Разом ми формуємо майбутнє, базоване на принципах справедливості і партнерства.',
      personal: 'Поза роботою ціную час із родиною, саморозвиток і натхнення, яке дають подорожі та книги.',
      photo: '/directorPhoto.JPG',
      isDirector: true
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

        {/* Director Card */}
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
                    height: { xs: 250, md: '100%' },
                    minHeight: 400,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3
                  }}
                >
                  <Box
                    component="img"
                    src={teamMembers[0].photo}
                    alt={teamMembers[0].name}
                    sx={{
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 'bold', mb: 2 }}
                  >
                    {teamMembers[0].name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ mb: 3, opacity: 0.9, fontWeight: 'medium' }}
                  >
                    {teamMembers[0].position}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.7, fontSize: '1rem', mb: 2 }}
                  >
                    {teamMembers[0].description}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.7, fontSize: '1rem', mb: 2 }}
                  >
                    {teamMembers[0].values}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{ lineHeight: 1.6, fontSize: '0.95rem', opacity: 0.9, fontStyle: 'italic' }}
                  >
                    {teamMembers[0].personal}
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
