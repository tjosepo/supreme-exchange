import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListingBox from './ListingBox';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    marginTop: '5px',
    marginBottom: '5px',
    backgroundColor: '#EDEDED',
    borderRadius: '0px'
  },
  content: {
    padding: '0px'
  },
  header: {
    textAlign: 'left',
    opacity: 0.7
  }
}));

export default function ProductListings() {
  const classes = useStyles();
  const [asc, setAsc] = useState(true);
  const [listings, setListings] = useState([]);

  const handleSorting = () => {
    let sorted = mockListings.sort(!asc ? compareAsc : compareDesc);
    setListings(sorted);
    setAsc(!asc);
  };

  const compareAsc = (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  };

  const compareDesc = (a, b) => {
    if (a.price < b.price) return 1;
    if (a.price > b.price) return -1;
    return 0;
  };

  useEffect(() => {
    let sorted = mockListings.sort(compareAsc);
    setListings(sorted);
  }, []);

  return (
    <Card className={classes.container}>
      <CardHeader
        className={classes.header}
        title="Listings"
        action={
          <Button
            size="large"
            endIcon={asc ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            onClick={handleSorting}>
            Price
          </Button>
        }
      />
      <CardContent className={classes.content}>
        {listings.map(ele => (
          <ListingBox
            title={ele.title}
            price={ele.price}
            subtitle={ele.subtitle}
            condition={ele.condition}
            pickup={ele.pickup}
            negotiable={ele.negotiable}
            image={ele.image}
          />
        ))}
      </CardContent>
    </Card>
  );
}

const mockListings = [
  {
    title: '123 Sesame Street 21324',
    price: 199.99,
    subtitle: 'Submitted an hour ago by JOHN123',
    condition: 'Like new',
    pickup: 'Can deliver',
    negotiable: true,
    image:
      'https://www.lego.com/cdn/cs/set/assets/blt6631c3930abc6526/21324.jpg?fit=bounds&format=jpg&quality=80&width=528&height=528&dpr=1'
  },
  {
    title: '123 Sesame Street 21324',
    price: 500.99,
    subtitle: 'Submitted a week ago by LegoDude97',
    condition: 'Like new',
    pickup: 'Can deliver',
    negotiable: true,
    image:
      'https://www.lego.com/cdn/cs/set/assets/blt663079722b9ad39e/21319_alt1.jpg?fit=bounds&format=jpg&quality=80&width=528&height=528&dpr=1'
  },
  {
    title: '123 Sesame Street 21324',
    price: 150.99,
    subtitle: 'Submitted an hour ago by HALIBABA',
    condition: 'Like new',
    pickup: 'First Come, First Served',
    negotiable: false,
    image:
      'https://www.lego.com/cdn/cs/set/assets/blt4077c030eb5d127d/75318.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1'
  },
  {
    title: '123 Sesame Street 21324',
    price: 175.99,
    subtitle: 'Submitted an hour ago by PokemonGoLover69',
    condition: 'Like new',
    pickup: 'Can deliver',
    negotiable: true,
    image:
      'https://www.lego.com/cdn/cs/set/assets/blteb1a7b4f36578ecd/2000430.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1'
  }
];
