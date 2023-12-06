import { makeStyles } from '@mui/styles';
import defaultTheme from '../../theme/defaultTheme';


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
    background: 'rgba(236, 246, 255, 0.3)'
  },
  navBar: {
    height: '80px',
    width: '100%'

  },
  contentBox: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  pictureBox: {
    width: '50%',
  },
  loginBox: {
    margin: 'auto',
    width: '50%',
  },
  fristText: {
    fontFamily: 'Roboto',
    fontSize: '36px',
    lineHeight: '42px',
    letterSpacing: '0em',
    color: 'rgba(51, 51, 51, 1)',
    textAlign: 'center',
    marginBottom: '16px'
  },
  secondText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '28px',
    textAlign: 'center',
    color: '#828282',
    maxWidth: '403px',
    margin: 'auto',
    marginBottom: '80px'
  },
  titles: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '16px',
    marginBottom: '8px'
  },
  formik: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    maxWidth: '420px',
    width: '100%',
    margin: '0 auto',
  },
  input: {
    boxSizing: 'border-box',
    padding: '20px 16px',
    gap: ' 10px',
    maxHeight: '56px',
    background: '#FFFFFF',
    border: '1px solid #E0E0E0',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: '8px',
    marginBottom: '24px'
  },

  loginButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 8px',
    gap: '10px',
    width: '417px',
    height: '56px',
    background: defaultTheme.background.primary,
  },
  link: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '16px',
    letterSpacing: '-0.04em',
    textAlign: 'left',
    color: 'rgba(244, 194, 59, 1)',
    '&:hover': { cursor: 'pointer' },
  }
}));
