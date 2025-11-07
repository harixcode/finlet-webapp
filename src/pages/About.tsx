import React from "react";
import { Container, Box, Stack, Typography, Chip, Grid, Card, CardContent } from "@mui/material";
import AboutSection from "../components/about/AboutSection.tsx";

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={{ xs: 5, md: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            textAlign: { xs: "center", md: "left" },
            alignItems: { xs: "center", md: "flex-start" },
            background: "linear-gradient(135deg, rgba(56,189,248,0.25), rgba(59,130,246,0.2))",
            borderRadius: 4,
            px: { xs: 4, md: 6 },
            py: { xs: 6, md: 8 },
            boxShadow: "0 40px 90px -30px rgba(15, 23, 42, 0.55)",
            border: "1px solid rgba(148, 163, 184, 0.12)",
          }}
        >
          <Chip
            label="Our promise"
            color="secondary"
            variant="outlined"
            sx={{ borderRadius: 999, px: 2, fontWeight: 600, backdropFilter: "blur(6px)" }}
          />
          <Typography variant="h3" sx={{ fontWeight: 700, maxWidth: { md: "720px" } }}>
            Designed for builders of wealth, learners, and everyday planners.
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: { md: "620px" }, color: "text.secondary", fontSize: 18 }}>
            We obsess over clarity and usability so you can focus on what matters—understanding where your
            money can take you next. Our tools stay transparent, accurate, and delightful to explore.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <AboutSection />
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Card>
                <CardContent>
                  <Typography variant="overline" color="secondary" sx={{ letterSpacing: 2 }}>
                    Vision
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Insight-first finance tools
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We cover the essentials with depth: live calculations, interactive charts, and guidance that
                    grows with your questions—no clutter, just clarity.
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography variant="overline" color="secondary" sx={{ letterSpacing: 2 }}>
                    Built for
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Makers, founders, and curious minds
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Whether you are planning a new savings strategy or evaluating investment options, Finlet keeps
                    everything sharp, visual, and ready to share.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default About;
