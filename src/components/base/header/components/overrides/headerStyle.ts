import { styled, AppBar } from "@mui/material";
const HeaderStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: "none",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create("all", {
    duration: theme.transitions.duration.complex,
  }),
  ".MuiToolbar-root": {
    justifyContent: "space-between",
    padding: 0,
    ".menu": {
      display: "flex",
      flexDirection: "row",
      gap: theme.spacing(1),
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      li: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        "&:not(:first-of-type)::before": {
          content: '"|"',
          display: "inline-block",
          position: "absolute",
          left: -5,
          marginTop: -8,
          color: theme.palette.text.disabled,
        },
        a: {
          minWidth: "fit-content",
          textWrap: "nowrap",
          color: theme.palette.text.primary,
          fontWeight: 500,
          "&::after": {
            content: '""',
            backgroundColor: theme.palette.primary.main,
            width: 0,
            height: 3,
            display: "block",
            transition: "0.5s",
            marginTop: 3,
            borderRadius: 2,
          },
          "&:hover::after": {
            width: "100%",
          },
        },
      },
    },
    "&.search-container": {
      minHeight: 0,
    },
  },
}));
export default HeaderStyled;
