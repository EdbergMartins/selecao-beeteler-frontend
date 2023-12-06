import { CustomTheme } from 'types/theme';

const defaultTheme: CustomTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#590A9D',
      light: '#7A3BB0',
      dark: '#3E076D'
    },
    secondary: {
      main: '#9D0A6B',
      light: '#B03B88',
      dark: '#6D074A',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#000000DE',
      secondary: '#00000099',
      black: '#000000'
    },
    icon: {
      main: '#546E7A',
      default: '#0000008A'
    }
  },
  background: {
    default: '#FFFFFF',
    dark: '#F6F4F6',
    paper: '#FFFFFF',
    topbar: '#9D0A6B',
    layout: '#FAFAFA',
    roseSecondary: '#FDFAFC',
    primary: 'rgba(244, 194, 59, 1)',
  }
};

export default defaultTheme;