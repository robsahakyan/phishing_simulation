import { Palette } from '@mui/material';
import { Settings } from 'src/@core/context/settingsContext';

const DefaultPalette = (mode: Palette['mode'], settings: Settings): Palette => {
  const whiteColor = '#FFFFFF';
  const lightColor = '#4C9AFF';
  const yellowColor = '#FBB836';
  const blackColor = '#333333';
  const surfaceColor = '#F7F9FC';
  const darkPaperBgColor = '#0F1014';
  const tertiary = 'rgba(76, 154, 255, 0.4)';
  const mainColor = mode === 'light' ? lightColor : darkPaperBgColor;

  const defaultBgColor = mode === 'light' ? surfaceColor : darkPaperBgColor;

  const collapseTogglerBgColor = () => {
    if (settings.skin === 'bordered') {
      if (settings.mode === 'dark') {
        return darkPaperBgColor;
      } else {
        return whiteColor;
      }
    } else {
      if (settings.mode === 'dark') {
        return '#232333';
      } else {
        return '#F5F5F9';
      }
    }
  };

  return {
    customColors: {
      dark: darkPaperBgColor,
      main: mainColor,
      yellow: yellowColor,
      light: lightColor,
      lightPaperBg: whiteColor,
      surfaceColorBg: surfaceColor,
      tertiaryColor: tertiary,
      darkPaperBg: darkPaperBgColor,
      collapseTogglerBg: collapseTogglerBgColor(),
      bodyBg: mode === 'light' ? '#F7F9FC' : '#232333',
      trackBg: mode === 'light' ? '#EBEEF0' : '#444463',
      avatarBg: mode === 'light' ? '#F0EFF0' : '#3F3B59',
      tableHeaderBg: mode === 'light' ? '#F3F4F6' : '#353649',
    },
    mode: mode,
    common: {
      black: blackColor,
      white: whiteColor,
    },
    primary: {
      light: '#82B4FF',
      main: lightColor,
      dark: '#357ABD',
      contrastText: whiteColor,
    },
    secondary: {
      light: '#C5CAE9',
      main: 'rgba(255, 255, 255, 0.7)',
      dark: '#798594',
      contrastText: whiteColor,
    },
    error: {
      light: '#FFCDD2',
      main: '#F28B82',
      dark: '#E8381A',
      contrastText: whiteColor,
    },
    warning: {
      light: '#FFE082',
      main: yellowColor,
      dark: '#E89C00',
      contrastText: blackColor,
    },
    info: {
      light: '#56CCF2',
      main: '#03C3EC',
      dark: '#03B1D7',
      contrastText: whiteColor,
    },
    success: {
      light: '#A6E74E',
      main: '#71DD37',
      dark: '#4CAF50',
      contrastText: whiteColor,
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161',
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.6)`,
      disabled: `rgba(${mainColor}, 0.38)`,
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? whiteColor : darkPaperBgColor,
      default: defaultBgColor,
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`,
    },
  } as Palette;
};

export default DefaultPalette;
