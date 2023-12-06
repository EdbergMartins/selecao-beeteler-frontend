import CachedIcon from '@mui/icons-material/Cached';
import { Box, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoinCard from '../../components/atoms/CoinCard';
import CoinQuotation from '../../components/atoms/CoinQuotation';
import TopBar from '../../components/atoms/TopBar';
import { useStyles } from './styles';


function DashBoard() {
  const styles = useStyles();
  const navigate = useNavigate()
  const [selectedFilterCoin, setSelectedFilterCoin] = useState('USD-BRL')
  const [isLoadingDate, setIsLoadingDate] = useState(true)
  const [isLoadingList, setIsLoadingList] = useState(true)
  const [data, setData] = useState([])
  const [listPerDay, setListPerday] = useState([])
  const currencyQuoteList = [
    {
      value: 'USD-BRL',
      name: 'Dolar Americano'
    },
    {
      value: 'EUR-BRL',
      name: 'Euro'
    },
    {
      value: 'BTC-BRL',
      name: 'Bitcoin'
    }
  ]

  useEffect(() => {
    handleGetList()
  }, [selectedFilterCoin])

  useEffect(() => {
    handleGetDate()
  }, [])



  const handleGetDate = async (values: any, actions: any) => {
    setIsLoadingDate(true)
      try {
        const response = await axios.get(' https://economia.awesomeapi.com.br/last/USD-BRL,BTC-EUR,BTC-USD')
        const arr = Object.keys(response.data).map(key => {
          return { id: key, ...response.data[key] };
        });
        setData(arr)
        setIsLoadingDate(false)
      }
      catch (err) {
        console.error(err)
        setIsLoadingDate(false)
      }
    }


  const handleGetList = async () => {
    setIsLoadingList(true)
    try {
      const response = await axios.get(`https://economia.awesomeapi.com.br/json/daily/${selectedFilterCoin}/15`)
      const arr = Object.keys(response.data).map(key => {
        return { id: key, ...response.data[key] };
      });
      setListPerday(arr)
      setIsLoadingList(false)
    }
    catch (err) {
      console.error(err)
      setIsLoadingList(false)
    }
  }




  useEffect(() => {
    localStorage.getItem('token') === null && navigate('/')
  }, [])

  const handleRefresh = () => {
    handleGetDate()
  }

  const enumSimbolCoin = [
    {
      typeCoin: 'USD',
      simbol: '$',
      locale: 'en-IN'
    },
    {
      typeCoin: 'BRL',
      simbol: 'R$',
      locale: 'pt-BR'
    },
    {
      typeCoin: 'EUR',
      simbol: '€',
      locale: 'de-DE'
    },
    {
      typeCoin: 'BTC',
      simbol: '₿'
    }
  ]

  const enumSimbolCoins = (typeCoin) => {
    const simbolCoin = enumSimbolCoin.filter(coin => (coin?.typeCoin === typeCoin))
    return simbolCoin

  }
  return (
    <Box className={styles.container}>
      <TopBar />
      <Box className={styles.coinCardBox}>
        <Box className={styles.coinCardHeader}>
          <span className={styles.coinsHeader}>Moedas</span>
          <CachedIcon onClick={() => handleRefresh()} sx={{ color: 'rgba(130, 130, 130, 1)', width: '33px', height: '33px', '&:hover': { cursor: 'pointer' } }} />
        </Box>
        <Box className={styles.coinCardContent}>
          {data.map((data, index) => {
            return (
              <Box className={styles.cardsCoin} key={index}>
                <CoinCard
                  typeCoin={data.code}
                  valueInReal={data.bid}
                  nameOfCoin={data.name}
                  codeIn={data.codein}
                  code={data.code}
                  simbolCoin={enumSimbolCoins(data.codein)}
                  isLoading={isLoadingDate}
                />
              </Box>
            )
          })}
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: ' space-between' }}>
          <span className={styles.coinsHeader}>
            Cotações
          </span>
          <Select style={{ width: '190px', height: '40px' }} labelId="label" id="select" value={selectedFilterCoin}>
            {currencyQuoteList.map(({ value, name }, index) => (
              <MenuItem
                key={index}
                value={value}
                onClick={(event) => setSelectedFilterCoin(event.target.dataset.value)}
                className={styles.selectName}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Box style={{ maxWidth: '1170px', width: '100vw' }}>
        <CoinQuotation
          typeCoin={selectedFilterCoin}
          listCoin={listPerDay}
          isLoading={isLoadingList}
        />
      </Box>
    </Box>
  );
}

export default DashBoard;
