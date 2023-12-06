import EuroIcon from '@mui/icons-material/Euro';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Skeleton, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import bitCoinSign from '../../../assets/bitCoinSign.svg';
import dollarSign from '../../../assets/dollarSign.svg';
import { useStyles } from './styles';

interface CoinData {
  name?: string;
  create_date?: string;
  low?: number;
  high?: number;
  pctChange?: number;
  varBid?: string;
  dateQuote?: string;
}

interface CoinCardProps {
  typeCoin?: string;
  listCoin?: CoinData[];
  isLoading?: boolean;
}

function CoinCard({ typeCoin, listCoin, isLoading }: CoinCardProps) {
  const styles = useStyles();
  const [listCoins, setListCoins] = useState<CoinData[]>(listCoin || []);
  const [sortOrder, setSortOrder] = useState("asc");
  const name = listCoin && listCoin.length > 0 ? listCoin[0]?.name?.split('/')[0] : '';
  const initialDate = listCoin && listCoin.length > 0 ? listCoin[0]?.create_date?.split(' ')[0].split('-').join('/') : '';

  useEffect(() => {
    if (listCoins.length === 0 && listCoin) {
      setListCoins(listCoin);
      dateQuote(listCoin);
    }
  }, [listCoin]);

  const dateQuote = (date: CoinData[]) => {
    const newList = date;
    const milisegonds = Date.parse(initialDate || '');
    newList?.forEach((element, index) => {
      if (index === 0) {
        const data = new Date(milisegonds);
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();
        element.dateQuote = `${day}/${month}/${year}`;
      } else {
        const constOldDate = milisegonds - (1000 * 60 * 60 * 24 * index);
        const data = new Date(constOldDate);
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();
        element.dateQuote = `${day}/${month}/${year}`;
      }
    });
  };

  const enumTypeCoins = () => {
    if (typeCoin === 'USD-BRL') {
      return (<img style={{ height: '100%', float: 'right' }} src={dollarSign} alt="Dollar Sign" />);
    } else if (typeCoin === 'BTC-BRL') {
      return (<img style={{ height: '100%', float: 'right' }} src={bitCoinSign} alt="Bitcoin Sign" />);
    } else {
      return (<EuroIcon sx={{ fill: 'black' }} />);
    }
  };

  const handleSortLow = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const sortedlistCoins = [...listCoins].sort((a, b) => (newOrder === "asc" ? a.low! - b.low! : b.low! - a.low!));
    setListCoins(sortedlistCoins);
  };

  const handleSortHigh = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const sortedlistCoins = [...listCoins].sort((a, b) => (newOrder === "asc" ? a.high! - b.high! : b.high! - a.high!));
    setListCoins(sortedlistCoins);
  };

  const handleSortPct = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const sortedlistCoins = [...listCoins].sort((a, b) => (newOrder === "asc" ? a.pctChange! - b.pctChange! : b.pctChange! - a.pctChange!));
    setListCoins(sortedlistCoins);
  };

  return (
    <>
      <TableHead>
        <TableRow style={{ marginTop: '47px', display: 'flex', width: '100vw', maxWidth: '1170px' }}>
          <TableCell className={styles.cellHeader} style={{}}>
            Moeda
          </TableCell>
          <TableCell className={styles.cellHeader} style={{}} align="left">
            <span>
              Mínima
            </span>
            <KeyboardArrowDownIcon onClick={() => handleSortLow()} className={styles.arrowFilter} />
          </TableCell>
          <TableCell className={styles.cellHeader} style={{}} align="left">
            Máxima
            <KeyboardArrowDownIcon onClick={() => handleSortHigh()} className={styles.arrowFilter} />
          </TableCell>
          <TableCell className={styles.cellHeader} style={{}} align="right">
            <KeyboardArrowDownIcon onClick={() => handleSortPct()} className={styles.arrowFilter} />
            Variação
          </TableCell>
        </TableRow>
      </TableHead>
      {!isLoading ? (
        <TableBody className={styles.pairCoins}>
          {listCoins.map((data, index) => (
            <TableRow key={index} style={{ display: 'flex', flexDirection: 'row', width: '100vw', maxWidth: '1170px' }}>
              <TableCell className={styles.cellBody}>
                <span className={styles.yellowCircles}>
                  {enumTypeCoins()}
                </span>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontWeight: 'bold', color: 'black' }}>
                    {name}
                  </span>
                  <span>
                    {data.dateQuote}
                  </span>
                </Box>
              </TableCell>
              <TableCell className={styles.cellBody} style={{}}>
                <span className={styles.valueQuote}>
                  {data.low}
                </span>
              </TableCell>
              <TableCell className={styles.cellBody} style={{}}>
                <span className={styles.valueQuote}>
                  {data.high}
                </span>
              </TableCell>
              <TableCell className={styles.cellBody} style={{}} align="right">
                <span style={data.varBid?.includes('-') ? { background: 'rgba(224, 224, 224, 1)' } : { background: 'rgba(244, 194, 59, 1)' }} className={styles.variantQuote}>
                  {`${(data.pctChange)}%`}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      ) : (
        new Array(15).fill(0).map((_, index) => (
          <Box key={index} style={{ display: 'flex' }} className={styles.pairCoins}>
            <Skeleton variant="circular" width={70} height={70} />
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Skeleton width="100px" height='40px' />
              <Skeleton width="100px" height='30px' />
            </Box>
            <Box style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
              <Skeleton width="100px" height='40px' style={{ marginLeft: '22%' }} />
              <Skeleton width="100px" height='40px' style={{ marginLeft: '22%' }} />
              <Skeleton width="100px" height='40px' style={{ marginLeft: '22%' }} />
            </Box>
          </Box>
        ))
      )}
    </>
  );
}

export default CoinCard;
