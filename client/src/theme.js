export const colorTokens = {
  drops: {
    0:"#f2f2f2",
    1:"#fff4e6",
    2.5:"#ffe9cc",
    5:"#ffdeb3",
    10:"#ffd7a3",
    20: "#e8e2c9",
    30: "#e1d9b7",
    40: "#d9cfa5",
    50: "#d2c593",
    60: "#cabc81",
    70: "#c3b26f",
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
    1250:"#463f20",
    1300:"#352f18",
    1400:"#231f10",
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
              main: colorTokens.drops[10],
              sub: colorTokens.drops[40],
              third: colorTokens.drops[5],
              fourth: colorTokens.drops[1],
              option: colorTokens.drops[1500]
            },
            background: {
              default: colorTokens.drops[1500],
              secondary: colorTokens.drops[5],
              third: colorTokens.drops[10],
            },
            shadow: {
              main: "rgba(255, 255, 255, 0.35)",
              sub: "rgba(255, 255, 255, 0.25)"
            },
            error:{
              main:"#FF5733"
            },
            placeholder:{
              main: "#999999"
            }
          }
        : {
            // palette values for light mode
            primary: {
              main: colorTokens.drops[800],
              sub: colorTokens.drops[700],
              third: colorTokens.drops[600],
              fourth: colorTokens.drops[400],
              option: colorTokens.drops[10]

            },
            background: {
              default: colorTokens.drops[10],
              secondary: colorTokens.drops[1000],
              third: colorTokens.drops[1500],
            },
            shadow: {
              main: "rgba(0, 0, 0, 0.35)",
              sub: "rgba(0, 0, 0, 0.25)"
            },
            error:{
              main:"#FF5733"
            },
            placeholder:{
              main: "#666666"
            }
          }),
    },
  };
};
