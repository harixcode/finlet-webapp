import { useMemo, useState } from "react";
import {
  TextField,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  Divider,
  Tooltip,
} from "@mui/material";
import React from "react";

const formatCurrency = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const PercentageCalculator = () => {
  const [percentage, setPercentage] = useState("");
  const [value1, setValue1] = useState("");
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");

  const percentageValue = useMemo(() => {
    const pct = parseFloat(percentage);
    const base = parseFloat(number);
    if (Number.isNaN(pct) || Number.isNaN(base)) return null;
    return (pct / 100) * base;
  }, [percentage, number]);

  const valuePercentage = useMemo(() => {
    const val = parseFloat(value1);
    const total = parseFloat(number2);
    if (Number.isNaN(val) || Number.isNaN(total) || total === 0) return null;
    return (val * 100) / total;
  }, [value1, number2]);

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Stack spacing={1.5}>
          <Chip label="Quick compare" color="primary" variant="outlined" sx={{ alignSelf: "flex-start" }} />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Percentage insights
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Flip between "percentage of" and "value is what percent" to speed up everyday calculations.
          </Typography>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={2}>
            <Typography variant="subtitle2" color="text.secondary">
              What is this percentage of a number?
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }}>
              <TextField
                type="number"
                label="Percentage %"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                fullWidth
                inputProps={{ min: 0, step: 0.01 }}
              />
              <Typography variant="subtitle1" sx={{ display: { xs: "none", sm: "block" } }}>
                of
              </Typography>
              <TextField
                type="number"
                label="Base value"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                fullWidth
                inputProps={{ min: 0, step: 0.01 }}
              />
            </Stack>
            <Tooltip title="Calculated result" placement="top" arrow>
              <Chip
                color="primary"
                sx={{ alignSelf: { xs: "stretch", sm: "flex-start" }, fontSize: 16, py: 2 }}
                label={percentageValue !== null ? `$${formatCurrency.format(percentageValue)}` : "Enter values"}
              />
            </Tooltip>
          </Stack>

          <Divider flexItem sx={{ opacity: 0.08 }} />

          <Stack spacing={2}>
            <Typography variant="subtitle2" color="text.secondary">
              A value represents what percentage of another?
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }}>
              <TextField
                type="number"
                label="Value"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                fullWidth
                inputProps={{ min: 0, step: 0.01 }}
              />
              <Typography variant="subtitle1" sx={{ display: { xs: "none", sm: "block" } }}>
                of
              </Typography>
              <TextField
                type="number"
                label="Compared to"
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
                fullWidth
                inputProps={{ min: 0, step: 0.01 }}
              />
            </Stack>
            <Tooltip title="Percentage result" placement="top" arrow>
              <Chip
                color="secondary"
                sx={{ alignSelf: { xs: "stretch", sm: "flex-start" }, fontSize: 16, py: 2 }}
                label={valuePercentage !== null ? `${valuePercentage.toFixed(2)}%` : "Enter values"}
              />
            </Tooltip>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PercentageCalculator;
