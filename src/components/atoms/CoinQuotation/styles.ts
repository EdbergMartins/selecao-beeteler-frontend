import { makeStyles } from '@mui/styles';
import defaultTheme from '../../../theme/defaultTheme';



export const useStyles = makeStyles(() => ({
  pairCoins: {
    height: '100px',
    maxWidth: '1170px',
    width: '100vw',
    borderRadius: '8px',
    padding: '16px 32px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',

  },
  contentPair: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yellowCircles: {
    height: '64px',
    width: '64px',
    left: '257px',
    top: '0px',
    borderRadius: '99px',
    padding: '20px',
    background: defaultTheme.background.primary,
    display: 'flex',
    placeContent: 'center',
    alignItems: 'center',
    marginRight: '16px'
  },
  cellBody: {
    display: 'flex !important',
    border: 'none !important',
    alignSelf: 'center',
    width: '100vw',
    color: 'rgba(130, 130, 130, 1) !important',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '16px',
    letterSpacing: '-0.04em',
    textAlign: 'left',
    marginLeft: '32px'
  },
  cellHeader: {
    display: 'flex !important',
    border: 'none !important',
    alignSelf: 'center',
    width: '100vw',
    color: 'rgba(130, 130, 130, 1) !important',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '16px',
    letterSpacing: '-0.04em',
    textAlign: 'right',
  },
  arrowFilter: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  variantQuote: {
    height: '37px',
    width: '60px',
    borderRadius: '8px',
    padding: '8px 12px 8px 12px',
    fontSize: '17px',
    fontWeight: 'bold',
    lineHeight: '21px',
    letterSpacing: '-0.04em',
    textAlign: 'left',
    color: 'black'
  },
  valueQuote: {
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '21px',
    letterSpacing: '-0.04em',
    textAlign: 'left',
    color: 'black'
  },
  '@media (max-width:700px)': {
    cellHeader: {
      padding: '16px 0px !important',
      justifyContent: 'right',
      maxWidth: '150px'
    }

  },
  '@media (max-width:565px)': {
    cellBody: {
      marginLeft: '0',
      padding: '16px 5px !important'
    }

  }



}));