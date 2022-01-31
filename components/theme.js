// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.50", "gray.900")(props),
    },
    a: {
      color: mode("green.500", "green.50"),
    },
  }),
};

const colors = {
  gray: {
    50: "#F3F3F2",
    100: "#DCDCDA",
    200: "#C6C6C3",
    300: "#AFAFAB",
    400: "#999994",
    500: "#83837C",
    600: "#686864",
    700: "#4E4E4B",
    800: "#343432",
    900: "#1A1A19",
  },
  red: {
    50: "#F7EDED",
    100: "#E9CECE",
    200: "#DAAEAE",
    300: "#CC8F8F",
    400: "#BD6F6F",
    500: "#AF5050",
    600: "#8C4040",
    700: "#693030",
    800: "#462020",
    900: "#231010",
  },
  orange: {
    50: "#F7F1ED",
    100: "#EAD8CD",
    200: "#DCC0AC",
    300: "#CFA78C",
    400: "#C18E6B",
    500: "#B4754B",
    600: "#905E3C",
    700: "#6C462D",
    800: "#482F1E",
    900: "#24170F",
  },
  yellow: {
    50: "#FEFAE7",
    100: "#FCF1BA",
    200: "#FAE78E",
    300: "#F9DE62",
    400: "#F7D536",
    500: "#F5CB0A",
    600: "#C4A308",
    700: "#937A06",
    800: "#625104",
    900: "#312902",
  },
  green: {
    50: "#EEF8ED",
    100: "#CFEACC",
    200: "#B0DDAC",
    300: "#91D08B",
    400: "#72C26B",
    500: "#53B54A",
    600: "#42913B",
    700: "#326D2C",
    800: "#21481E",
    900: "#11240F",
  },
  cyan: {
    50: "#EAFAFA",
    100: "#C5F0F2",
    200: "#9FE7EA",
    300: "#7ADEE1",
    400: "#54D4D9",
    500: "#2FCBD0",
    600: "#25A2A7",
    700: "#1C7A7D",
    800: "#135153",
    900: "#09292A",
  },
  teal: {
    50: "#EFF5F5",
    100: "#D3E4E3",
    200: "#B7D2D1",
    300: "#9BC0C0",
    400: "#7EAFAE",
    500: "#629D9C",
    600: "#4E7E7D",
    700: "#3B5E5E",
    800: "#273F3E",
    900: "#141F1F",
  },
  blue: {
    50: "#ECF2F9",
    100: "#CADCED",
    200: "#A7C5E1",
    300: "#85AFD6",
    400: "#6398CA",
    500: "#4082BF",
    600: "#336899",
    700: "#274E72",
    800: "#1A344C",
    900: "#0D1A26",
  },
  purple: {
    50: "#F1EFF5",
    100: "#D8D3E4",
    200: "#BFB7D2",
    300: "#A69AC1",
    400: "#8D7EAF",
    500: "#74629D",
    600: "#5D4E7E",
    700: "#463B5E",
    800: "#2E273F",
    900: "#17141F",
  },
  pink: {
    50: "#F7EEF2",
    100: "#E8CFDC",
    200: "#D9B0C5",
    300: "#C991AF",
    400: "#BA7298",
    500: "#AB5482",
    600: "#894368",
    700: "#67324E",
    800: "#452134",
    900: "#22111A",
  },
};

const components = {
  Button: {
    // setup light/dark mode component defaults
    baseStyle: (props) => ({
      fontFamily: "Fira Mono",
    }),
  },
  Text: {
    baseStyle: (props) => ({
      fontFamily: "Lato",
    }),
  },
};
// 3. extend the theme
const theme = extendTheme({ config, styles, colors, components });

export default theme;
