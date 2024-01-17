export const colorTokens = {
  primary: {
    0.1: "#e8e2c9",
    0.2: "#e1d9b7",
    0.5: "#d9cfa5",
    0: "#d2c593",
    10: "#cabc81",
    50: "#c3b26f",
    100: "#bba85d",
    200: "#b49f4b",
    300: "#a28f44",
    400: "#907f3c",
    500: "#7e6f35",
    600: "#6c5f2d",
    700: "#5a4f26",
    800: "#48401e",
    900: "#363017",
    1000: "#2b2612",
    1200: "#24200f",
    1500: "#121008",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colorTokens.primary[10],
              sub: colorTokens.primary[0.5],
            },
            background: {
              default: colorTokens.primary[1500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colorTokens.primary[800],
              sub: colorTokens.primary[700],
            },
            background: {
              default: colorTokens.primary[10],
            },
          }),
    },
  };
};
