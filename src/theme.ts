import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7C3AED",
      light: "#A78BFA",
      dark: "#5B21B6",
    },
    secondary: {
      main: "#38BDF8",
      light: "#7DD3FC",
      dark: "#0284C7",
    },
    background: {
      default: "#0F172A",
      paper: "#111C34",
    },
    text: {
      primary: "#E2E8F0",
      secondary: "#94A3B8",
    },
  },
  typography: {
    fontFamily: ['"InterVariable"', '"Inter"', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(", "),
    h4: {
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
    h5: {
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
    body1: {
      lineHeight: 1.7,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(12, 20, 35, 0.9))",
          border: "1px solid rgba(148, 163, 184, 0.08)",
          boxShadow: "0px 25px 50px -12px rgba(15, 23, 42, 0.45)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          backgroundColor: "rgba(15, 23, 42, 0.45)",
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
