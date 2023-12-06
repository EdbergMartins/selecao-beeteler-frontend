import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import navLogo from '../../../assets/navLogo.svg';
import { useStyles } from './styles';


function TopBar() {
  const styles = useStyles();
  const navigate = useNavigate();
  const isLoged = localStorage.getItem('token')

  const handleLogou = () => {
    localStorage.removeItem('token');
    navigate('/')
  }

  return (
    <Box className={styles.topBar}>
      <img className={styles.img} src={navLogo} alt="Logotipo beeteller" />
      {isLoged &&
        <span onClick={() => handleLogou()} style={{ fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}>
          Logout
        </span>
      }

    </Box>)
}

export default TopBar;
