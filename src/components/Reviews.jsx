import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Reviews = () => {
  const reviews = [
    {
      name: 'Ольга',
      rating: 5,
      text: 'Ми 4 роки відвідували Toddler садок і дуже задоволені! Індивідуальний підхід до кожної дитини, англійська з носієм мови, творчі заняття та смачне харчування - все було на найвищому рівні. Коли дізналися, що відкривається школа, без вагань записалися. Впевнені, що школа буде ще кращою за садок!'
    },
    {
      name: 'Анна',
      rating: 5,
      text: 'Наш син ходив у Toddler садок 3 роки. Нам дуже сподобалося: програмування для малюків, чирлідинг та наукові експерименти. Син навчився читати англійською ще в садку! Тепер з нетерпінням чекаємо відкриття школи - знаємо, що буде чудово.'
    },
    {
      name: 'Марина',
      rating: 5,
      text: 'В Toddler садку дочка провела найкращі 5 років дитинства. Особливо вражає відсутність домашніх завдань - все робили в садку, а вдома тільки гралися. Акторська майстерність допомогла їй стати впевненішою. Впевнена, що Toddler School стане продовженням цієї дивовижної освітньої подорожі.'
    },
    {
      name: 'Ірина',
      rating: 5,
      text: 'Toddler садок - це справді друга сім\'я для нашої дитини. Теплі стосунки з вихователями, цікаві студії від хореографії до науки, і головне - дитина завжди йшла туди з радістю. Коли почули про школу, одразу зрозуміли - це наш вибір. Довіряємо команді Toddler повністю!'
    },
    {
      name: 'Тетяна',
      rating: 5,
      text: 'Син відвідував Toddler садок 6 років і отримав неймовірну базу: вільно говорить англійською, любить науку, займається спортом. Особливо цінуємо домашню атмосферу та повноцінне триразове харчування. Тепер з великою радістю переходимо в Toddler School!'
    },
    {
      name: 'Оксана',
      rating: 5,
      text: 'Найкраще рішення, яке ми приймали - віддати дочку в Toddler садок. 4 роки творчого розвитку, англійської мови та індивідуального підходу. Дочка навчилася презентувати себе, долати страхи та працювати в команді. Впевнені, що школа буде ще кращою. Дякуємо за дитинство нашої дитини!'
    },
  ];

  return (
    <Box id="reviews" sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
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
          Відгуки
        </Typography>

        <Grid container spacing={4}>
          {reviews.map((review, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  position: 'relative',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      opacity: 0.1
                    }}
                  >
                    <FormatQuoteIcon sx={{ fontSize: 60 }} />
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        mr: 2,
                        width: 48,
                        height: 48
                      }}
                    >
                      {review.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 'bold', color: 'text.primary' }}
                      >
                        {review.name}
                      </Typography>
                      <Rating
                        value={review.rating}
                        readOnly
                        size="small"
                        sx={{ mt: 0.5 }}
                      />
                    </Box>
                  </Box>
                  
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {review.text}
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

export default Reviews;
