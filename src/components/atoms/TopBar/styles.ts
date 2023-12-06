import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  topBar: {
    height: '85px',
    maxWidth: '1440px',
    width: '100%',
    borderRadius: '0px',
    padding: '20px 135px 20px 135px',
    background: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width:700px)': {
      padding: '20px 50px 20px 50px',
    },
  },
  img: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
