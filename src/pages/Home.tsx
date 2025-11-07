import React from "react";
import { Box, Container, Stack, Typography, Chip, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import PercentageCalculator from "../components/percentage/percentage_calculator.tsx";
import PercentageChangeCalculator from "../components/percentage/percentage_change.tsx";
import InvestmentCalculator from "../components/investment/investment_calculator.tsx";

const Home: React.FC = () => {
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
            background: "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(14,165,233,0.25))",
            borderRadius: 4,
            px: { xs: 4, md: 6 },
            py: { xs: 6, md: 8 },
            boxShadow: "0 40px 90px -30px rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(148, 163, 184, 0.12)",
          }}
        >
          <Chip
            label="Smart money decisions"
            color="primary"
            variant="outlined"
            sx={{ borderRadius: 999, px: 2, fontWeight: 600, backdropFilter: "blur(6px)" }}
          />
          <Typography variant="h3" sx={{ fontWeight: 700, maxWidth: { md: "720px" } }}>
            Plan, track, and forecast your finances with confidence.
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: { md: "620px" }, color: "text.secondary", fontSize: 18 }}>
            Finlet brings intuitive calculators, beautiful charts, and practical insights together so you can
            explore every financial scenario—from quick percentage changes to long-term investment growth.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
            <Button
              size="large"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              href="#tools"
            >
              Explore the tools
            </Button>
            <Button
              size="large"
              color="secondary"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              component={RouterLink}
              to="/about"
            >
              Why Finlet works
            </Button>
          </Stack>
        </Box>

        <Stack spacing={3} id="tools" sx={{ width: "100%" }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.6 }}>
            Essential calculators
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: { xs: 3, md: 4 },
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                lg: "repeat(2, minmax(0, 1fr))",
              },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <PercentageCalculator />
            </Box>
            <Box sx={{ width: "100%" }}>
              <PercentageChangeCalculator />
            </Box>
            <Box sx={{ gridColumn: { lg: "1 / -1" }, width: "100%" }}>
              <InvestmentCalculator />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
