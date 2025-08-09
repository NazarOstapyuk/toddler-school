import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'Про школу', href: '#about' },
    { text: 'Переваги', href: '#advantages' },
    { text: 'Студії', href: '#studios' },
    { text: 'Відгуки', href: '#reviews' },
    { text: 'Команда', href: '#team' },
    { text: 'Документи', href: '#documents' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Toddler School
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemText 
              primary={item.text} 
              onClick={() => scrollToSection(item.href)}
              sx={{ textAlign: 'center', cursor: 'pointer', py: 1 }}
            />
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mx: 2, mt: 2 }}
            onClick={() => scrollToSection('#contact')}
          >
            Записатись на екскурсію
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                flexGrow: isMobile ? 1 : 0, 
                color: 'primary.main',
                fontWeight: 'bold',
                mr: 4
              }}
            >
              Toddler School
            </Typography>
            
            {isMobile ? (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: 3 }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.text}
                      onClick={() => scrollToSection(item.href)}
                      sx={{ 
                        color: 'text.primary',
                        textTransform: 'none',
                        fontSize: '16px',
                        '&:hover': {
                          color: 'primary.main',
                        }
                      }}
                    >
                      {item.text}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ ml: 'auto' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => scrollToSection('#contact')}
                    sx={{ 
                      textTransform: 'none',
                      borderRadius: 2,
                      px: 3
                    }}
                  >
                    Записатись на екскурсію
                  </Button>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
