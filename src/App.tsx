// App.tsx

import React from 'react';
import './App.css';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from './components/header/Appbar.tsx';
import Footer from './components/footer/footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import theme from './theme.ts';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default',
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.18), transparent 35%), radial-gradient(circle at 80% 0%, rgba(56, 189, 248, 0.25), transparent 40%), radial-gradient(circle at 50% 75%, rgba(236, 72, 153, 0.18), transparent 45%)',
          }}
        >
          <ResponsiveAppBar />
          <Box component="main" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Box>

          {/* Footer */}
          <Box
            sx={{
              py: 2,
              px: 3,
              mt: 'auto',
            }}
          >
            <Footer />
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
