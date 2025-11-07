import { useState } from "react";
import React from "react";
import {
  TextField,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Chip,
  Stack,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface InvestmentData {
  month: number;
  totalValue: number;
  principal: number;
  interest: number;
  periodDeposit: number;
  periodInterest: number;
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const InvestmentCalculator = () => {
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState<"monthly" | "annually">("monthly");
  const [chartData, setChartData] = useState<InvestmentData[]>([]);
  const [finalAmount, setFinalAmount] = useState<number | null>(null);
  const [totalPrincipal, setTotalPrincipal] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);

  const calculateInvestment = () => {
    const monthly = parseFloat(monthlyContribution);
    const annualRate = parseFloat(annualInterestRate);
    const years = parseFloat(tenure);

    if (
      Number.isNaN(monthly) ||
      Number.isNaN(annualRate) ||
      Number.isNaN(years) ||
      monthly <= 0 ||
      annualRate < 0 ||
      years <= 0
    ) {
      return;
    }

    const totalMonths = Math.floor(years * 12);
    const compoundPeriodMonths = compoundingFrequency === "monthly" ? 1 : 12;
    const periodsPerYear = 12 / compoundPeriodMonths;
    const periodicRate = annualRate / 100 / periodsPerYear;
    const data: InvestmentData[] = [];
    let currentValue = 0;
    let totalPrincipalPaid = 0;

    for (let month = 0; month <= totalMonths; month++) {
      let periodDeposit = 0;
      let periodInterest = 0;

      if (month > 0) {
        periodDeposit = monthly;
        currentValue += periodDeposit;
        totalPrincipalPaid += periodDeposit;

        if (month % compoundPeriodMonths === 0) {
          const beforeInterest = currentValue;
          currentValue = currentValue * (1 + periodicRate);
          periodInterest = currentValue - beforeInterest;
        }
      }

      const interestEarned = currentValue - totalPrincipalPaid;

      data.push({
        month,
        totalValue: Math.round(currentValue * 100) / 100,
        principal: Math.round(totalPrincipalPaid * 100) / 100,
        interest: Math.round(interestEarned * 100) / 100,
        periodDeposit: Math.round(periodDeposit * 100) / 100,
        periodInterest: Math.round(periodInterest * 100) / 100,
      });
    }

    setChartData(data);
    setFinalAmount(Math.round(currentValue * 100) / 100);
    setTotalPrincipal(Math.round(totalPrincipalPaid * 100) / 100);
    setTotalInterest(Math.round((currentValue - totalPrincipalPaid) * 100) / 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateInvestment();
  };

  return (
    <Card
      sx={{
        height: "100%",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(148, 163, 184, 0.12)",
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }}>
          <Stack spacing={1}>
            <Chip label="Growth planner" color="primary" variant="outlined" sx={{ alignSelf: "flex-start" }} />
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Investment projection
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 540 }}>
              Explore how monthly contributions, interest rates, and compounding frequency shape the value of your
              portfolio over time.
            </Typography>
          </Stack>
        </Stack>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                type="number"
                label="Monthly contribution"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                inputProps={{ min: 0, step: 0.01 }}
                helperText="Amount invested at the start of each month"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                type="number"
                label="Annual interest rate (%)"
                value={annualInterestRate}
                onChange={(e) => setAnnualInterestRate(e.target.value)}
                inputProps={{ min: 0, step: 0.01 }}
                helperText="Expected annual percentage yield"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                type="number"
                label="Tenure (years)"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                inputProps={{ min: 0, step: 0.1 }}
                helperText="How long you plan to contribute"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                fullWidth
                label="Compounding"
                value={compoundingFrequency}
                onChange={(e) =>
                  setCompoundingFrequency(e.target.value as "monthly" | "annually")
                }
                helperText="Interest is applied on this cadence"
                required
              >
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="annually">Annually</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" size="large">
                Calculate projection
              </Button>
            </Grid>
          </Grid>
        </Box>

        {finalAmount !== null && totalPrincipal !== null && totalInterest !== null && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(14,165,233,0.3))",
                  border: "1px solid rgba(124, 58, 237, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <SavingsOutlinedIcon fontSize="medium" />
                  <Typography variant="overline" sx={{ letterSpacing: 1.6 }}>
                    Final amount
                  </Typography>
                </Stack>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  ${currencyFormatter.format(finalAmount)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Projected balance after your specified tenure.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, rgba(56,189,248,0.35), rgba(99,102,241,0.3))",
                  border: "1px solid rgba(99, 102, 241, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <TimelineOutlinedIcon fontSize="medium" />
                  <Typography variant="overline" sx={{ letterSpacing: 1.6 }}>
                    Total principal
                  </Typography>
                </Stack>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  ${currencyFormatter.format(totalPrincipal)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sum of all contributions made during the period.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, rgba(45,212,191,0.35), rgba(20,184,166,0.3))",
                  border: "1px solid rgba(45, 212, 191, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <InsightsOutlinedIcon fontSize="medium" />
                  <Typography variant="overline" sx={{ letterSpacing: 1.6 }}>
                    Total interest
                  </Typography>
                </Stack>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  ${currencyFormatter.format(totalInterest)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Earnings generated from compounding over time.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        )}

        {chartData.length > 0 && (
          <Stack spacing={3}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                Growth projection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Track deposits versus interest earned and the resulting balance for every month of your plan.
              </Typography>
            </Box>
            <Box sx={{ width: "100%", height: 360 }}>
              <ResponsiveContainer>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
                  <XAxis
                    dataKey="month"
                    stroke="rgba(148, 163, 184, 0.7)"
                    tickLine={false}
                    axisLine={{ stroke: "rgba(148, 163, 184, 0.2)" }}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    stroke="rgba(148, 163, 184, 0.7)"
                    tickLine={false}
                    axisLine={{ stroke: "rgba(148, 163, 184, 0.2)" }}
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `$${currencyFormatter.format(value)}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0F172A",
                      borderRadius: 16,
                      border: "1px solid rgba(148, 163, 184, 0.18)",
                    }}
                    formatter={(value: number) =>
                      `$${currencyFormatter.format(value)}`
                    }
                  />
                  <Legend
                    wrapperStyle={{
                      paddingTop: 16,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="totalValue"
                    stroke="#7C3AED"
                    strokeWidth={3}
                    name="Total value"
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="principal"
                    stroke="#38BDF8"
                    strokeWidth={2}
                    name="Principal"
                    strokeDasharray="4 2"
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="interest"
                    stroke="#22C55E"
                    strokeWidth={2}
                    name="Interest earned"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Stack>
        )}

        {chartData.length > 0 && (
          <Stack spacing={2}>
            <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.1)" }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Accumulation schedule
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Detailed breakdown of each period, including contributions, interest gains, and cumulative balance.
            </Typography>
            <TableContainer sx={{ maxHeight: 320, borderRadius: 3, border: "1px solid rgba(148, 163, 184, 0.15)" }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow sx={{ '& th': { backgroundColor: "rgba(15, 23, 42, 0.85)", color: "#E2E8F0" } }}>
                    <TableCell>Month</TableCell>
                    <TableCell align="right">Deposit</TableCell>
                    <TableCell align="right">Interest</TableCell>
                    <TableCell align="right">Ending balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {chartData.map((row) => (
                    <TableRow
                      key={row.month}
                      sx={{ '&:nth-of-type(odd)': { backgroundColor: "rgba(30, 41, 59, 0.35)" } }}
                    >
                      <TableCell>{row.month}</TableCell>
                      <TableCell align="right">${currencyFormatter.format(row.periodDeposit)}</TableCell>
                      <TableCell align="right">${currencyFormatter.format(row.periodInterest)}</TableCell>
                      <TableCell align="right">${currencyFormatter.format(row.totalValue)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default InvestmentCalculator;
