import { ButtonProps, ChipProps, SwitchProps, TableProps } from '@mui/material';
import { createTheme, TypeBackground } from '@mui/material/styles';
import baseConfig from './baseConfig';
import defaultTheme from './defaultTheme';


const theme = createTheme(
  {
    typography: {
      allVariants: {
        fontFamily: 'Roboto'
      }
    }
  },
  baseConfig,
  defaultTheme
);

export default theme;
