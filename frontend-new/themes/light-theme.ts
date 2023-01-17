import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000",
    },
    background: {
      default: "#f0f2f0",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          color: "rgba(0,0,0,0.8)",
          backgroundColor: "#fff",
        },
      },
    },
  },
});
