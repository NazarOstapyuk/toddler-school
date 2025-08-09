import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ComputerIcon from '@mui/icons-material/Computer';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const Advantages = () => {
  const advantages = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Немає домашки',
      description: 'Домашні завдання повністю відсутні. Завдяки навчальній програмі повного дня усі завдання дитина виконує в школі. Вам залишаються лише радісні моменти спілкування з вашою дитиною.'
    },
    {
      icon: <HomeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Підручники тільки в школі',
      description: 'Всі посібники, канцелярія та навчальні матеріали знаходяться в школі. Більше ніяких важких рюкзаків та щоденного збору за щоденником.'
    },
    {
      icon: <RestaurantIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Повноцінне харчування',
      description: 'Протягом дня дитина отримує триразове харчування, яке включає в себе: сніданок, обід та полуденок. Різноманітне меню розробляється спеціально з урахуванням особливостей здоров\'я дитини.'
    },
    {
      icon: <ComputerIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Онлайн навчання',
      description: 'У разі хвороби або карантину ми проводимо уроки онлайн і надаємо доступ до матеріалів.'
    },
    {
      icon: <CheckroomIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Шкільна форма',
      description: 'Ми не обмежуємо учнів шкільною формою. Діти приходять у вільному одязі, щоб відчувати себе комфортно в атмосфері, максимально наближеній до домашньої.'
    },
  ];

  return (
    <Box id="advantages" sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
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
          Тож, чому навчатись у нас — класно?
        </Typography>

        <Grid container spacing={4}>
          {advantages.map((advantage, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
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
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 3 }}>
                    {advantage.icon}
                  </Box>
                  
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      color: 'text.primary',
                      mb: 2
                    }}
                  >
                    {advantage.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: '1rem'
                    }}
                  >
                    {advantage.description}
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

export default Advantages;
