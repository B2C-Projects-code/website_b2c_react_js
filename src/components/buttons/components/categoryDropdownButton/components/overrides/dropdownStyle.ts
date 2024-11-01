import { styled } from "@mui/material";
const DropdownContainer = styled("div")(({ theme }) => ({
  position: "relative",
  button: {
    textTransform: "uppercase",
  },
  ".dropdown": {
    zIndex: 99999,
    background: theme.palette.background.paper,
    padding: 0,
    position: "absolute",
    border: `1px solid ${theme.palette.divider}`,
    ".MuiListItem-root": {
      ".MuiListItemText-root": {
        transition: "all .3s",
        span: {
          fontWeight: 500,
        },
        margin: 0,
        "&:hover": {
          color: theme.palette.primary.main,
        },
      },
      "&:not(:last-of-type)": {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      ".dropdown": {
        width: "100%",
        padding: 0,
        opacity: 0,
        visibility: "hidden",
      },
      "&:hover > .dropdown": {
        opacity: 1,
        visibility: "visible",
      },
    },
    "&.sub-cat": {
      left: "100%",
      top: 0,
    },
  },
}));
export default DropdownContainer;
