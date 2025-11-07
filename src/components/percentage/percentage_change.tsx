import { useMemo, useState } from "react";
import {
  TextField,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  Tooltip,
  LinearProgress,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import React from "react";

const PercentageChangeCalculator = () => {
  const [initialValue, setInitialValue] = useState("");
  const [finalValue, setFinalValue] = useState("");

  const change = useMemo(() => {
    const initial = parseFloat(initialValue);
    const final = parseFloat(finalValue);
    if (Number.isNaN(initial) || Number.isNaN(final) || initial === 0) {
      return null;
    }

    const delta = ((final - initial) / Math.abs(initial)) * 100;
    return delta;
  }, [initialValue, finalValue]);

  const isIncrease = typeof change === "number" && change > 0;
  const isDecrease = typeof change === "number" && change < 0;
  const changeMagnitude = change !== null ? Math.min(Math.abs(change), 200) : 0;

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
        <Stack spacing={1.5}>
          <Chip
            label="Momentum check"
            color="secondary"
            variant="outlined"
            sx={{ alignSelf: "flex-start" }}
          />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Percentage change
          </Typography>
          <Typography variant="body2" color="text.secondary">
            See how values move between two points and highlight growth or contraction instantly.
          </Typography>
        </Stack>

        <Stack spacing={2.5}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              type="number"
              label="Initial value"
              value={initialValue}
              onChange={(e) => setInitialValue(e.target.value)}
              fullWidth
              inputProps={{ step: 0.01 }}
            />
            <TextField
              type="number"
              label="Final value"
              value={finalValue}
              onChange={(e) => setFinalValue(e.target.value)}
              fullWidth
              inputProps={{ step: 0.01 }}
            />
          </Stack>

          <Tooltip title="Percentage change" placement="top" arrow>
            <Chip
              icon={change !== null ? (isIncrease ? <TrendingUpIcon /> : isDecrease ? <TrendingDownIcon /> : undefined) : undefined}
              color={isIncrease ? "success" : isDecrease ? "error" : "default"}
              sx={{
                alignSelf: { xs: "stretch", sm: "flex-start" },
                fontSize: 16,
                py: 2,
                '& .MuiChip-icon': { fontSize: 20 },
              }}
              label={
                change !== null
                  ? `${isIncrease ? "Increase" : isDecrease ? "Decrease" : "No change"}: ${Math.abs(change).toFixed(2)}%`
                  : "Enter both values"
              }
            />
          </Tooltip>

          <LinearProgress
            variant={change !== null ? "determinate" : "indeterminate"}
            value={change !== null ? changeMagnitude : undefined}
            sx={{
              height: 8,
              borderRadius: 999,
              backgroundColor: "rgba(148, 163, 184, 0.15)",
              '& .MuiLinearProgress-bar': {
                borderRadius: 999,
                backgroundColor: isIncrease ? "#22c55e" : isDecrease ? "#f97316" : "#64748b",
              },
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PercentageChangeCalculator;
