import { styled, Card } from "@mui/material";
const ProductCardStyled = styled(Card)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  ".MuiCardMedia-root": {
    height: 174,
    position: "relative",
    overflow: "hidden",
    img: {
      transition: "all 0.3s ease-in-out",
    },
    ".btn-actions": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      zIndex: 1,
      opacity: 0,
      visibility: "hidden",
      transition: "all 0.3s ease-in-out",
      border: `1px solid ${theme.palette.primary.main}`,
      button: {
        backgroundColor: theme.palette.common.white,
        svg: {
          path: {
            fill: theme.palette.text.primary,
          },
        },
        "&:hover": {
          backgroundColor: theme.palette.common.white,
        },
      },
    },
  },
  ".MuiCardContent-root": {
    padding: theme.spacing(2),
  },
  ".MuiCardActions-root": {
    padding: theme.spacing(2),
    paddingTop: 0,
    justifyContent: "space-between",
    alignItems: "center",
    button: {
      minWidth: 50,
    },
  },
  "&:hover": {
    borderColor: theme.palette.primary.main,
    ".btn-actions": {
      visibility: "visible",
      opacity: 1,
      transition: "all 0.3s ease-in-out",
    },
    img: {
      transform: "scale(1.1)",
    },
  },
}));
export default ProductCardStyled;
