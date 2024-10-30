import { alpha } from "@mui/material/styles";

export interface CustomShadowType {
  [key: string]: string;
}

const createCustomShadow = (): CustomShadowType => {
  return {
    z1: `0 4px 8px rgba(0, 0, 0, 0.2)`,
  };
};

export const customShadows = {
  ...createCustomShadow(),
};
