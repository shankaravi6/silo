export const colorTokens = {
  drops: {
    100: "#fff4e6",
    150:"#ffe9cc",
    200: "#ffdeb3",
    300: "#ffd7a3",
    400: "#b36500",
    500: "#995700",
    600: "#804800",
    700: "#663a00",
    800: "#331d00",
    900: "#1a0e00",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            text: {
              main: colorTokens.drops[300],
              mid: colorTokens.drops[200],
              low: colorTokens.drops[100],
              high: colorTokens.drops[900],
            },
            background: {
              high: colorTokens.drops[900],
              mid: colorTokens.drops[300],
              low: colorTokens.drops[150],
            },
            shadow: {
              main: "rgba(255, 255, 255, 0.35)",
              sub: "rgba(255, 255, 255, 0.25)",
            },
            error: {
              main: "#FF5733",
            },
            placeholder: {
              main: "#999999",
            },
          }
        : {
            // palette values for light mode
            text: {
              main: colorTokens.drops[700],
              mid: colorTokens.drops[500],
              low: colorTokens.drops[400],
              high: colorTokens.drops[300],
            },
            background: {
              high: colorTokens.drops[100],
              mid: colorTokens.drops[900],
              low: colorTokens.drops[700],
            },
            shadow: {
              main: "rgba(0, 0, 0, 0.35)",
              sub: "rgba(0, 0, 0, 0.25)",
            },
            error: {
              main: "#FF5733",
            },
            placeholder: {
              main: "#666666",
            },
          }),
    },
  };
};
