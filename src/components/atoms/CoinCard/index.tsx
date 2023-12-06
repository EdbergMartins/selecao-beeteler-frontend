// CoinCard.tsx
import EuroIcon from '@mui/icons-material/Euro';
import { Box, Skeleton, Typography } from '@mui/material';
import { useStyles } from './styles';
import bitCoinSign from '../../../assets/bitCoinSign.svg';
import dollarSign from '../../../assets/dollarSign.svg';

interface CoinCardProps {
  typeCoin?: string;
  valueInReal?: string;
  nameOfCoin?: string;
  codeIn?: string;
  code?: string;
  simbolCoin?: { simbol: string; locale: string }[];
  isLoading?: boolean;
}

function CoinCard({
  typeCoin,
  valueInReal,
  nameOfCoin,
  codeIn,
  code,
  simbolCoin,
  isLoading,
}: CoinCardProps) {
  const styles = useStyles();

  const renderTypeCoins = () => {
    if (typeCoin === 'USD') {
      return <img style={{ height: '100%', float: 'right' }} src={dollarSign} alt="Dollar Sign" />;
    } else if (typeCoin === 'BTC') {
      return <img style={{ height: '100%', float: 'right' }} src={bitCoinSign} alt="Bitcoin Sign" />;
    } else {
      return <EuroIcon />;
    }
  };

  return (
    <Box className={styles.pairCoins}>
      {!isLoading ? (
        <>
          <Box className={styles.contentPair}>
            <Typography>{`${code}/${codeIn}`}</Typography>
            <span className={styles.yellowCircles}>{simbolCoin && renderTypeCoins()}</span>
          </Box>
          <Box style={{ display: 'flex', position: 'absolute', top: '62px', alignItems: 'center' }}>
            <span className={styles.typeReal}>{simbolCoin?.[0]?.simbol}</span>
            <span className={styles.realValue}>
              {parseFloat(valueInReal!).toLocaleString(`${simbolCoin?.[0]?.locale}`, { currency: `${code}` })}
            </span>
          </Box>
          <Box className={styles.nameOfCoin}>{nameOfCoin}</Box>
        </>
      ) : (
        <>
          <Box style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              <Skeleton width="20%" height="42px" animation="wave" />
            <Skeleton variant="circular" width={70} height={70} />
          </Box>
          <Box style={{ width: '100%', display: 'flex', position: 'absolute', top: '80px' }}>
              <Skeleton width="10%" height="42px" animation="wave" />
              <Skeleton
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '52px',
                }}
                width="30%"
                height="80px"
                animation="wave"
              />
          </Box>
            <Skeleton
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '30px',
              }}
              width="40%"
              height="30px"
              animation="wave"
            />
        </>
      )}
    </Box>
  );
}

export default CoinCard;
