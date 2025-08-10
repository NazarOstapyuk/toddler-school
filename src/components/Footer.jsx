import React, {useState, useEffect} from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    IconButton,
    Divider,
    Alert,
    CircularProgress,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Map from './Map';
import {
  sendToGoogleSheets,
  validatePhoneNumber,
  formatPhoneNumber,
  canSubmitForm,
  getSubmissionCount,
  addSubmission,
  formatTimeUntilReset
} from '../utils/googleSheets';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '+38 '
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
    const [errors, setErrors] = useState({});
    const [submissionCount, setSubmissionCount] = useState(0);
    const [canSubmit, setCanSubmit] = useState(true);

    // Перевіряємо ліміт при завантаженні компонента
    useEffect(() => {
        const updateSubmissionStatus = () => {
            const count = getSubmissionCount();
            const canSubmitNow = canSubmitForm();

            setSubmissionCount(count);
            setCanSubmit(canSubmitNow);
        };

        updateSubmissionStatus();

        // Оновлюємо кожну хвилину
        const interval = setInterval(updateSubmissionStatus, 60000);

        return () => clearInterval(interval);
    }, []);

    // Функція форматування номера телефону
    const formatPhoneInput = (value) => {
        // Видаляємо всі нецифрові символи
        const numbers = value.replace(/\D/g, '');
        
        // Якщо пусто, повертаємо початковий формат
        if (numbers.length === 0) {
            return '+38 ';
        }
        
        // Якщо починається з 38, залишаємо як є
        // Якщо починається з 0, замінюємо на 380
        // Інакше додаємо 38
        let formattedNumbers = numbers;
        if (numbers.startsWith('0') && numbers.length > 1) {
            formattedNumbers = '38' + numbers;
        } else if (!numbers.startsWith('38') && numbers.length > 0) {
            formattedNumbers = '38' + numbers;
        }
        
        // Обмежуємо до 12 цифр (38 + 10 цифр номера)
        formattedNumbers = formattedNumbers.slice(0, 12);
        
        // Форматуємо у вигляді +38 (XXX) XXX-XX-XX
        let formatted = '+' + formattedNumbers.slice(0, 2);
        
        if (formattedNumbers.length > 2) {
            formatted += ' (' + formattedNumbers.slice(2, 5);
            if (formattedNumbers.length > 5) {
                formatted += ') ' + formattedNumbers.slice(5, 8);
                if (formattedNumbers.length > 8) {
                    formatted += '-' + formattedNumbers.slice(8, 10);
                    if (formattedNumbers.length > 10) {
                        formatted += '-' + formattedNumbers.slice(10, 12);
                    }
                }
            } else if (formattedNumbers.length === 5) {
                formatted += ')';
            }
        } else {
            formatted += ' ';
        }
        
        return formatted;
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        
        let processedValue = value;
        
        // Спеціальна обробка для поля телефону
        if (name === 'phone') {
            processedValue = formatPhoneInput(value);
        }
        
        setFormData(prev => ({
            ...prev,
            [name]: processedValue
        }));

        // Очищаємо помилки при введенні
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        // Очищаємо статус відправки
        if (submitStatus) {
            setSubmitStatus(null);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Перевірка лімітів
        if (!canSubmit) {
            setSubmitStatus('limit_exceeded');
            return;
        }

        // Валідація форми
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Будь ласка, введіть ваше ім\'я';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Будь ласка, введіть номер телефону';
        } else if (!validatePhoneNumber(formData.phone)) {
            newErrors.phone = 'Будь ласка, введіть коректний номер телефону (наприклад: +380501234567)';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Відправка даних
        setIsSubmitting(true);
        setErrors({});

        try {
            const dataToSend = {
                name: formData.name.trim(),
                phone: formatPhoneNumber(formData.phone.trim())
            };

            const result = await sendToGoogleSheets(dataToSend);

            if (result.success) {
                // Додаємо заявку в localStorage
                addSubmission(dataToSend);

                // Оновлюємо лічильники
                setSubmissionCount(getSubmissionCount());
                setCanSubmit(canSubmitForm());

                setSubmitStatus('success');
                setFormData({name: '', phone: '+38 '});
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Помилка відправки форми:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#2c3e50',
                color: 'white',
                pt: 8,
                pb: 4
            }}
        >
            <Container maxWidth="lg">
                {/* Contact Form Section */}
                <Box id="contact" sx={{mb: 8}}>
                    <Card
                        elevation={8}
                        sx={{
                            borderRadius: 3,
                            overflow: 'hidden',
                            background: 'linear-gradient(135deg, #acab7d 20%, #f77f43 80%)',
                        }}
                    >
                        <CardContent sx={{p: 6, textAlign: 'center'}}>
                            <Typography
                                variant="h4"
                                component="h2"
                                gutterBottom
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'white',
                                    mb: 2
                                }}
                            >
                                Раді бачити Вас в нашій школі
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    mb: 4
                                }}
                            >
                                Вкажіть Свій номер телефону, щоб записатися на зустріч
                            </Typography>

                                                         {/* Status Messages */}
                             {submitStatus === 'success' && (
                                 <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                                     Дякуємо за заявку! Ми зв'яжемося з вами найближчим часом.
                                 </Alert>
                             )}

                             {submitStatus === 'error' && (
                                 <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                                     Виникла помилка при відправці форми. Спробуйте ще раз або зателефонуйте нам.
                                 </Alert>
                             )}

                             {submitStatus === 'limit_exceeded' && (
                                 <Alert severity="warning" sx={{ mb: 3, borderRadius: 2 }}>
                                     Ви досягли ліміту заявок (3 на добу). Спробуйте ще раз через {formatTimeUntilReset()} або зателефонуйте нам.
                                 </Alert>
                             )}

                             {!canSubmit && submitStatus !== 'limit_exceeded' && (
                                 <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>
                                     Заявок подано: {submissionCount}/3. До скидання лічильника: {formatTimeUntilReset()}
                                 </Alert>
                             )}

                             <Box
                                 component="form"
                                 onSubmit={handleSubmit}
                                 sx={{
                                     maxWidth: 500,
                                     mx: 'auto'
                                 }}
                             >
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Ім'я"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            variant="filled"
                                            disabled={isSubmitting}
                                            error={!!errors.name}
                                            helperText={errors.name}
                                            sx={{
                                                '& .MuiFilledInput-root': {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                    borderRadius: '4px 4px 0 0',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                    },
                                                    '&.Mui-focused': {
                                                        backgroundColor: 'rgba(255, 255, 255, 1)',
                                                    }
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: '#ff9800',
                                                },
                                                '& .MuiFilledInput-root.Mui-focused:after': {
                                                    borderBottomColor: '#ff9800',
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Номер телефону"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            variant="filled"
                                            disabled={isSubmitting}
                                            error={!!errors.phone}
                                            helperText={errors.phone || "Приклад: +38 (050) 123-45-67"}
                                            placeholder="+38 (0XX) XXX-XX-XX"
                                            sx={{
                                                '& .MuiFilledInput-root': {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                    borderRadius: '4px 4px 0 0',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                    },
                                                    '&.Mui-focused': {
                                                        backgroundColor: 'rgba(255, 255, 255, 1)',
                                                    }
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: '#ff9800',
                                                },
                                                '& .MuiFilledInput-root.Mui-focused:after': {
                                                    borderBottomColor: '#ff9800',
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            fullWidth
                                            disabled={isSubmitting || !canSubmit}
                                            startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
                                            sx={{
                                                backgroundColor: 'secondary.main',
                                                color: 'white',
                                                py: 2,
                                                fontSize: '1.1rem',
                                                textTransform: 'none',
                                                borderRadius: 2,
                                                '&:hover': {
                                                    backgroundColor: 'secondary.dark',
                                                },
                                                '&:disabled': {
                                                    backgroundColor: 'rgba(255, 152, 0, 0.6)',
                                                }
                                            }}
                                        >
                                            {isSubmitting
                                                ? 'Відправляємо...'
                                                : !canSubmit
                                                    ? `Ліміт досягнуто (${submissionCount}/3)`
                                                    : 'Хочу в гості до школи!'
                                            }
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

                 {/* Map and Contact Info Section */}
                 <Grid container spacing={6} sx={{mb: 6}} alignItems="center">

                    {/* Contact Info */}
                    <Grid item xs={12} lg={4}>
                        <Card
                            elevation={2}
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                color: 'white',
                                borderRadius: 3,
                                height: 'fit-content'
                            }}
                        >
                            <CardContent sx={{p: 4}}>
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 3,
                                        color: 'secondary.main'
                                    }}
                                >
                                    Контакти
                                </Typography>

                                <Box sx={{display: 'flex', alignItems: 'center', mb: 3}}>
                                    <PhoneIcon sx={{mr: 2, color: 'secondary.main'}}/>
                                    <Box>
                                        <Typography variant="body1">
                                            +38 097 128 38 44
                                        </Typography>
                                        <Typography variant="body1">
                                            +38 096 571 90 57
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{display: 'flex', alignItems: 'center', mb: 3}}>
                                    <EmailIcon sx={{mr: 2, color: 'secondary.main'}}/>
                                    <Typography variant="body1">
                                        toddler@gmail.com
                                    </Typography>
                                </Box>

                                <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
                                    <LocationOnIcon sx={{mr: 2, mt: 0.5, color: 'secondary.main'}}/>
                                    <Box>
                                        <Typography variant="body1">
                                            вул. В. Стефаника Набережна, 46б
                                        </Typography>
                                        <Typography variant="body1">
                                            Івано-Франківськ
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Map */}
                    <Grid item xs={12} lg={8}>
                        <Box sx={{mb: 3}}>
                            <Typography
                                variant="h5"
                                component="h3"
                                gutterBottom
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'secondary.main',
                                    mb: 3
                                }}
                            >
                                Наше розташування
                            </Typography>
                            <Map/>
                        </Box>
                    </Grid>

                </Grid>

                {/* Social Media and Contact Methods */}
                <Box textAlign="center" sx={{mb: 4}}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{color: 'secondary.main', mb: 3}}
                    >
                        Давайте поспілкуємося
                    </Typography>

                    <Box sx={{display: 'flex', justifyContent: 'center', gap: 2, mb: 3}}>
                        <IconButton
                            component="a"
                            href="https://www.instagram.com/toddler_school_if?igsh=MWhpaHRnb3Q2MGY4Mg=="
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                fontSize: '2rem',
                                padding: 2,
                                '&:hover': {
                                    backgroundColor: 'rgba(225, 48, 108, 0.8)',
                                    transform: 'scale(1.1)',
                                    transition: 'all 0.3s ease'
                                }
                            }}
                        >
                            <InstagramIcon fontSize="large"/>
                        </IconButton>
                    </Box>

                    <Typography variant="body2" sx={{opacity: 0.8}}>
                        або зателефонуйте +38 (097) 128 38 44
                    </Typography>
                </Box>

                <Divider sx={{backgroundColor: 'rgba(255, 255, 255, 0.2)', mb: 3}}/>

                                 <Typography
                     variant="body2"
                     textAlign="center"
                     sx={{opacity: 0.7}}
                 >
                     © 2024 Toddler School. Всі права захищені.
                 </Typography>
            </Container>
        </Box>
    );
};

export default Footer;