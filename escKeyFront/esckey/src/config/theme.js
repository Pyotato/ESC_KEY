// xTiny = Extra Tiny
// lg = large
// xl = Extra Large 
// xxl = Extra Extra Large 
// ul = Ultra Large 
// uul = Ultra Ultra Large 

const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  xxTiny: calcRem(5),
  xTiny: calcRem(8),
  tiny: calcRem(11),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  ul: calcRem(30),
  titleSize: calcRem(50),
  xlTitleSize: calcRem(70),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  ul: calcRem(40),
  uul: calcRem(55),
  uuul: calcRem(70)
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  ul: calcRem(30),
  uul: calcRem(45),
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};

const colors = {
  invisible: '#00000000',
  black: "#000000",
  white: "#FFFFFF",
  gray_1: "#111111",
  gray_2: "#151515",
  gray_3: "#c7c7c7",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval,
};

export default theme;