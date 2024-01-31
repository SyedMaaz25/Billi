import { createTheme } from "@mui/material/styles";
import DmBold from "./assets/font/dm-sans/DMSans-Bold.ttf";
import DmMedium from "./assets/font/dm-sans/DMSans-Medium.ttf";
import DmRegular from "./assets/font/dm-sans/DMSans-Regular.ttf";
import ArimoMedium from "./assets/font/arimo/Arimo-Medium.ttf";

const Theme = createTheme({
  palette: {
    background: {
      default: "#181818",
    },
    color: {
      primary: "#ff7425",
      secondary: "#181818",
      text: "#ffffff",
      accent: "#000000",
      other:"#303030"
    },
  },
  typography: {
    fontFamily: "'DmRegular', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'DmMedium';
          src: local('Dm Medium'), url(${DmMedium}) format('woff2');
        }

        @font-face {
          font-family: 'DmBold';
          src: local('Dm Bold'), url(${DmBold}) format('woff2');
        }

        @font-face {
          font-family: 'DmRegular';
          src: local('Dm Regular'), url(${DmRegular}) format('woff2');
        }

        @font-face {
          font-family: 'ArimoMedium';
          src: local('Arimo Bold'), url(${ArimoMedium}) format('woff2');
        }
      `,
    },
  },
});

export default Theme;