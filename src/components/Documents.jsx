import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActionArea,
    IconButton,
    Chip
} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Documents = () => {
    const documents = [
        {
            id: 1,
            title: 'Статут ліцею',
            fileName: 'statute.pdf',
            description: 'Основний документ, що визначає цілі, завдання, структуру та порядок діяльності ліцею',
            size: '2.4 MB',
            path: '/statute.pdf'
        },
        {
            id: 2,
            title: 'Ліцензія',
            fileName: 'license.pdf',
            description: 'Офіційний дозвіл на провадження освітньої діяльності',
            size: '1.8 MB',
            path: '/license.pdf'
        }
    ];

    const handleView = (document) => {
        window.open(document.path, '_blank');
    };

    return (
        <Box
            id="documents"
            sx={{
                py: 8,
                backgroundColor: '#f8f9fa'
            }}
        >
            <Container maxWidth="lg">
                <Box textAlign="center" sx={{ mb: 6 }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            color: '#2c3e50',
                            mb: 2
                        }}
                    >
                        Нормативні документи
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#666',
                            maxWidth: 600,
                            mx: 'auto'
                        }}
                    >
                        Ознайомтеся з основними документами нашого навчального закладу
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {documents.map((document) => (
                        <Grid item xs={12} md={6} key={document.id}>
                            <Card
                                elevation={3}
                                sx={{
                                    height: '100%',
                                    borderRadius: 3,
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    {/* Header with PDF Icon and File Size */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <PictureAsPdfIcon 
                                                sx={{ 
                                                    fontSize: 40, 
                                                    color: '#e74c3c',
                                                    mr: 2
                                                }} 
                                            />
                                            <Chip 
                                                label={document.size}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    color: '#666',
                                                    borderColor: '#ddd'
                                                }}
                                            />
                                        </Box>
                                    </Box>

                                    {/* Document Title */}
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        gutterBottom
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#2c3e50',
                                            mb: 2
                                        }}
                                    >
                                        {document.title}
                                    </Typography>

                                    {/* Document Description */}
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: '#666',
                                            mb: 3,
                                            flexGrow: 1,
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {document.description}
                                    </Typography>

                                    {/* Action Buttons */}
                                    <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                                        <CardActionArea
                                            onClick={() => handleView(document)}
                                            sx={{
                                                flex: 1,
                                                borderRadius: 2,
                                                backgroundColor: 'primary.main',
                                                color: 'white',
                                                py: 1.5,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 1,
                                                '&:hover': {
                                                    backgroundColor: 'primary.dark'
                                                }
                                            }}
                                        >
                                            <OpenInNewIcon />
                                            <Typography variant="button" sx={{ fontWeight: 'bold' }}>
                                                Переглянути
                                            </Typography>
                                        </CardActionArea>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Additional Info Section */}
                <Box 
                    sx={{ 
                        mt: 6, 
                        p: 4, 
                        backgroundColor: 'rgba(172, 171, 125, 0.1)',
                        borderRadius: 3,
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#2c3e50',
                            mb: 2,
                            fontWeight: 'bold'
                        }}
                    >
                        Потрібна додаткова інформація?
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#666',
                            mb: 2
                        }}
                    >
                        Якщо у вас виникли питання щодо документів або потрібна додаткова інформація,
                        будь ласка, зв'яжіться з нами
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#acab7d',
                            fontWeight: 'bold'
                        }}
                    >
                        Телефон: +38 097 128 38 44 | Email: toddler@gmail.com
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Documents;
