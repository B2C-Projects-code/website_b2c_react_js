import { darkMode } from "@lib/redux/base";
import { useSelector } from "react-redux";

export default function Card(theme: any) {
  const isDarkMode = useSelector(darkMode);

  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: "relative",
          zIndex: 0, // Fix Safari overflow: hidden with border radius
          border: `none`,
          transition: "all ease-in-out 0.3s",
          background: theme.palette.background.paper,
          borderRadius: theme.spacing(2),
          boxShadow: isDarkMode
            ? "2px 4px 26.8px 0px #1B1B1B33"
            : "2px 4px 26.8px 0px #3F80FF14",
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6" },
        subheaderTypographyProps: {
          variant: "body2",
          marginTop: theme.spacing(0.5),
        },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
          [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2, 2, 0), // Reduced padding for medium screens
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
          [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2), // Reduced padding for medium screens
          },
        },
      },
    },
  };
}
