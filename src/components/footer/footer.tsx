import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid rgba(148, 163, 184, 0.12)',
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(16px)',
        py: { xs: 4, md: 5 },
        px: { xs: 2, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems={{ xs: 'flex-start', md: 'center' }} textAlign={{ xs: 'left', md: 'center' }}>
          <Box>
            <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.light' }}>
              Finlet.io
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Making finance tools beautiful, clear, and actionable.
            </Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} color="text.secondary">
            <Link component={RouterLink} to="/about" underline="hover" color="inherit" sx={{ fontWeight: 500 }}>
              About
            </Link>
            <Link href="https://github.com/harixcode" underline="hover" color="inherit" sx={{ fontWeight: 500 }}>
              GitHub
            </Link>
            <Link href="mailto:hello@finlet.io" underline="hover" color="inherit" sx={{ fontWeight: 500 }}>
              Contact
            </Link>
          </Stack>
          <Typography variant="caption" color="text.secondary">
            © {year} Finlet. Crafted with care to support every smart money move.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
export default Footer;
