import CachedIcon from '@mui/icons-material/Cached';
import { Box, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoinCard from '../../components/atoms/CoinCard';
import CoinQuotation from '../../components/atoms/CoinQuotation';
import TopBar from '../../components/atoms/TopBar';
import { useStyles } from './styles';

interface CurrencyQuote {
  value: string;
  name: string;
}

interface CoinData {
  id: string;
  code: string;
  bid: string;
  name: string;
  codein: string;
}

function DashBoard() {
  const styles = useStyles();
  const navigate = useNavigate();
  const [selectedFilterCoin, setSelectedFilterCoin] = useState<string>('USD-BRL');
  const [isLoadingDate, setIsLoadingDate] = useState<boolean>(true);
  const [isLoadingList, setIsLoadingList] = useState<boolean>(true);
  const [data, setData] = useState<CoinData[]>([]);
  const [listPerDay, setListPerday] = useState<CoinData[]>([]);
  const currencyQuoteList: CurrencyQuote[] = [
    { value: 'USD-BRL', name: 'Dolar Americano' },
    { value: 'EUR-BRL', name: 'Euro' },
    { value: 'BTC-BRL', name: 'Bitcoin' },
  ];

  useEffect(() => {
    handleGetList();
  }, [selectedFilterCoin]);

  useEffect(() => {
    handleGetDate();
  }, []);

  const handleGetDate = async () => {
    setIsLoadingDate(true);
    try {
      const response = await axios.get<{ [key: string]: CoinData }>('https://economia.awesomeapi.com.br/last/USD-BRL,BTC-EUR,BTC-USD');
      const arr = Object.keys(response.data).map((key) => ({ key, ...response.data[key] }));
      setData(arr);
      setIsLoadingDate(false);
    } catch (err) {
      console.error(err);
      setIsLoadingDate(false);
    }
  };

  const handleGetList = async () => {
    setIsLoadingList(true);
    try {
      const response = await axios.get<{ [key: string]: CoinData }>(`https://economia.awesomeapi.com.br/json/daily/${selectedFilterCoin}/15`);
      const arr = Object.keys(response.data).map((key) => ({ key, ...response.data[key] }));
      setListPerday(arr);
      setIsLoadingList(false);
    } catch (err) {
      console.error(err);
      setIsLoadingList(false);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

  const handleRefresh = () => {
    handleGetDate();
  };

  const enumSimbolCoin = [
    { typeCoin: 'USD', simbol: '$', locale: 'en-IN' },
    { typeCoin: 'BRL', simbol: 'R$', locale: 'pt-BR' },
    { typeCoin: 'EUR', simbol: '€', locale: 'de-DE' },
    { typeCoin: 'BTC', simbol: '₿' },
  ];

  const enumSimbolCoins = (typeCoin: string) => {
    const simbolCoin = enumSimbolCoin.filter((coin) => coin.typeCoin === typeCoin);
    return simbolCoin.map(({ simbol, locale = '' }) => ({ simbol, locale: locale || '' }));
  };

  return (
    <Box className={styles.container}>
      <TopBar />
      <Box className={styles.coinCardBox}>
        <Box className={styles.coinCardHeader}>
          <span className={styles.coinsHeader}>Moedas</span>
          <CachedIcon
            onClick={handleRefresh}
            sx={{ color: 'rgba(130, 130, 130, 1)', width: '33px', height: '33px', '&:hover': { cursor: 'pointer' } }}
          />
        </Box>
        <Box className={styles.coinCardContent}>
          {data.map((coin, index) => (
            <Box className={styles.cardsCoin} key={index}>
              <CoinCard
                typeCoin={coin.code}
                valueInReal={coin.bid}
                nameOfCoin={coin.name}
                codeIn={coin.codein}
                code={coin.code}
                simbolCoin={enumSimbolCoins(coin.codein)}
                isLoading={isLoadingDate}
              />
            </Box>
          ))}
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: ' space-between' }}>
          <span className={styles.coinsHeader}>Cotações</span>
          <Select style={{ width: '190px', height: '40px' }} labelId="label" id="select" value={selectedFilterCoin}>
            {currencyQuoteList.map(({ value, name }, index) => (
              <MenuItem
                key={index}
                value={value}
                onClick={(event) => setSelectedFilterCoin(event.currentTarget.dataset.value || '')}
                className={styles.selectName}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Box style={{ maxWidth: '1170px', width: '100vw' }}>
        <CoinQuotation typeCoin={selectedFilterCoin} listCoin={listPerDay} isLoading={isLoadingList} />
      </Box>
    </Box>
  );
}

export default DashBoard;
