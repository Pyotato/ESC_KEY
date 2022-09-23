// xTiny = Extra Tiny
// lg = large
// xl = Extra Large
// xxl = Extra Extra Large
// ul = Ultra Large
// uul = Ultra Ultra Large

const calcRem = (size) => `${size / 16}rem`;

export const colors = {
  color_bg_dark: "#000",
  color_bg_white: "#F0EDE9",
  color_ft_black: "#222",
  color_invisible: "#00000000",
  color_black: "#000000",
  color_white: "#FFFFFF",
  color_gray_1: "#111111",
  color_gray_2: "#151515",
  color_gray_3: "#525252",
  color_gray_4: "#c7c7c7",
  color_gray_red: "#796763",
  color_gray_red2: "#A07667",
  color_gray_red3: "#B79686",
  color_gray_red4: "#F5DDD4",
  color_green_1: "#badcb47f",
  color_green_2: "#779a71",
  color_pink_1: "#f0e0dac4",
};

export const fontSizes = {
  fontSize_xxTiny: calcRem(5),
  fontSize_xTiny: calcRem(8),
  fontSize_tiny: calcRem(11),
  fontSize_small: calcRem(14),
  fontSize_base: calcRem(16),
  fontSize_lg: calcRem(18),
  fontSize_xl: calcRem(20),
  fontSize_xxl: calcRem(22),
  fontSize_xxxl: calcRem(24),
  fontSize_ul: calcRem(30),
  fontSize_titleSize: calcRem(50),
  fontSize_xlTitleSize: calcRem(70),
  fontSize_xxlTitleSize: calcRem(120),
};

export const fontWeights = {
  fontWeight_bold: "700",
  fontWeight_bolder: "900",
};

export const paddings = {
  padding_small: calcRem(8),
  padding_base: calcRem(10),
  padding_lg: calcRem(12),
  padding_xl: calcRem(14),
  padding_xxl: calcRem(16),
  padding_xxxl: calcRem(18),
  padding_ul: calcRem(40),
  padding_uul: calcRem(55),
  padding_uuul: calcRem(70),
};

export const margins = {
  margin_base: calcRem(10),
  margin_small: calcRem(8),
  margin_lg: calcRem(12),
  margin_xl: calcRem(14),
  margin_xxl: calcRem(16),
  margin_xxxl: calcRem(18),
  margin_ul: calcRem(30),
  margin_uul: calcRem(45),
  margin_uuul: calcRem(55),
};

export const interval = {
  interval_base: calcRem(50),
  interval_lg: calcRem(100),
  interval_xl: calcRem(150),
  interval_xxl: calcRem(200),
};

export const verticalInterval = {
  verticalInterval_base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

export const deviceSizes = {
  deviceSize_mobileS: "320px",
  deviceSize_mobileM: "375px",
  deviceSize_mobileL: "450px",
  deviceSize_tablet: "768px",
  deviceSize_tabletL: "1024px",
};

export const device = {
  device_mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  device_mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  device_mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  device_tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  device_tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

export const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval,
  fontWeights,
};
