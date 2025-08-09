import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import CodeIcon from '@mui/icons-material/Code';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import ScienceIcon from '@mui/icons-material/Science';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Studios = () => {
  const studios = [
    {
      icon: <TranslateIcon sx={{ fontSize: 50, color: '#f77f43' }} />,
      title: 'Англійська',
      description: 'Англійська щодня з носієм мови занурює дітей в англомовне середовище. Завдяки цьому вони долають мовний бар\'єр, розвивають сприйняття на слух та вчаться розуміти та правильно говорити.'
    },
    {
      icon: <CodeIcon sx={{ fontSize: 50, color: '#f77f43' }} />,
      title: 'Програмування',
      description: 'IT-освіта для дітей допомагає освоїти базові принципи технологічної грамотності, трансформуватися з пасивних користувачів в творців за допомогою створення власних IT-продуктів: анімаційних роликів, ігор, написання коду, тощо.'
    },
    {
      icon: <SportsGymnasticsIcon sx={{ fontSize: 50, color: '#f77f43' }} />,
      title: 'Чирлідинг',
      description: 'Вид спорту, що поєднує в собі шоу з елементами танцю, гімнастики, акробатики, виховує внутрішню дисципліну, вміння працювати в команді на результат. Наші діти регулярно приймають участь у змаганнях!'
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 50, color: '#f77f43' }} />,
      title: 'Наука',
      description: 'Заохочуємо дітей до засвоєння точних наук через гру, досліди, експерименти, вивчення найцікавішого з фізики та хімії.'
    },
    {
      icon: <TheaterComedyIcon sx={{ fontSize: 50, color: '#f77f43' }} />,
      title: 'Акторська майстерність',
      description: 'Уроки акторської гри допомагають дитині успішно презентувати себе, бути лідером, працювати в команді, а також здобути сміливість та впевненість у висловлюванні своїх ідей та думок, розвивають креативне та творче мислення, покращують дикцію та постановку мови, навчають здолати страх перед публічними виступами.'
    },
    {
      icon: <MusicNoteIcon sx={{ fontSize: 50, color: '#f77f43' }} />,
      title: 'Хореографія',
      description: 'Танцювальне мистецтво розвиває в дітях координацію, пластику, відчуття ритму та здібність відчувати своє тіло, виражати себе через рух.'
    },
  ];

  return (
    <Box id="studios" sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 2
            }}
          >
            Студії
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Ми попіклувалися, щоб дитина знайшла саме ті, що їй до душі.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {studios.map((studio, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 8,
                  },
                  borderRadius: 3,
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #acab7d 20%, #f77f43 80%)',
                    color: 'white',
                    p: 3,
                    textAlign: 'center'
                  }}
                >
                  {studio.icon}
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      mt: 2
                    }}
                  >
                    {studio.title}
                  </Typography>
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                      fontSize: '1rem'
                    }}
                  >
                    {studio.description}
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

export default Studios;
