import { Box, Card, CardContent, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        px: { xs: 2, md: 0 },
      }}
    >
      <Card sx={{ maxWidth: 900, width: "100%", boxShadow: 3, borderRadius: 2 }}>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
            About Finlet
          </Typography>
          <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Your partner for confident money moves
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Finlet brings together practical calculators, clear explanations, and actionable guidance so you can make smarter decisions about your savings, investments, and everyday finances. Whether you are planning your next investment or comparing percentage changes, we provide the tools to keep your plans on track.
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                What you can do
              </Typography>
              <List dense disablePadding>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Track how your investments grow over time." />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Compare percentage gains or shortfalls instantly." />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Forecast monthly contributions with flexible compounding." />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Why it matters
              </Typography>
              <List dense disablePadding>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Clear visuals and tables make complex numbers easier to understand." />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Personalized inputs help you explore scenarios that match your goals." />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Trusted formulas keep every calculation accurate and transparent." />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutSection;
