import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PriceHistoryChart from './PriceHistoryChart';
import ProductListings from './ProductListings';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    marginBottom: '5px',
    borderRadius: '0px'
  },
  content: {
    padding: '50px'
  },
  header: {
    textAlign: 'center',
    opacity: 0.7
  },
  iconButton: {
    float: 'left'
  },
  titleContainer: {
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7
  }
}));

export default function ListingPage() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.container}>
        <IconButton className={classes.iconButton}>
          <CloseIcon />
        </IconButton>
        <div className={classes.titleContainer}>
          <Typography>123 Sesame Street 21324</Typography>
        </div>
      </Card>
      <PriceHistoryChart />
      <ProductListings />
    </>
  );
}
