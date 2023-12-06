import { makeStyles } from '@mui/styles';
import defaultTheme from '../../../theme/defaultTheme';



export const useStyles = makeStyles(() => ({
  container: {
    minHeight: 'calc(100% - 68px)',
    maxWidth: '100%',
    margin: '0 auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    bakcground: 'white',
    fontFamily: 'Roboto',
    background: 'rgba(236, 246, 255, 0.3);',
  },
  coinsHeader: {
    fontSize: '36px',
    fontWeight: '500',
    lineHeight: '42px',
    letterSpacing: '-0.04em',
    textAlign: 'left',
  },
  pairCoins: {
    height: '189px',
    maxWidth: '369px',
    width: '100vw',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    position: 'relative'
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
    alignItems: 'center'
  },
  contentPair: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  realValue: {
    fontSize: '48px',
    fontWeight: 500,
    lineHeight: '56px',
    letterSpacing: '-0.04em',
    textAlign: 'left'
  },
  typeReal: {
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '21px',
    letterSpacing: '-0.04em',
    textAlign: 'left',
    color: 'rgba(130, 130, 130, 1)',
    marginRight: '10px'
  },
  nameOfCoin: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.04em',
    position: 'absolute',
    bottom: '24px',
    color: '#828282',

  }

}));
