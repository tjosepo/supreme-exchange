import { useState } from 'react';
import Header from '../shared/Header';
import Card from '../shared/Card';
import ImageUpload from './ImageUpload';
import Map from '../map/Map';
import PriceHistoryChart from '../listing/PriceHistoryChart';
import { NotificationsNone, AccountCircle, Create } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import { createNewPost } from '../utils/Firestore';
import { getCurrentUser } from '../utils/Authentication';

import './style/Posting.css';

const conditions = [
  {
    value: 'Like new',
    label: 'Like new'
  },
  {
    value: 'Brand new',
    label: 'Brand new'
  },
  {
    value: 'Missing pieces',
    label: 'Missing pieces'
  },
  {
    value: 'Worn',
    label: 'Worn'
  }
];

const nego = [
  {
    value: 'no',
    label: 'No'
  },
  {
    value: 'yes',
    label: 'Yes'
  }
];

const pick = [
  {
    value: 'Can deliver',
    label: 'Can deliver'
  },
  {
    value: 'First come, first serve',
    label: 'First Come, First Served'
  }
]

const defaultLocation = {
  address: '1455 De Maisonneuve Blvd. W.',
  city: 'Montreal',
  lat: 45.4974230654036,
  lng: -73.57907743891892
};

export default function PostingPage() {
  const [name, setName] = useState(undefined);
  const [img, setImg] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [condition, setCondition] = useState('Like New');
  const [negotiable, setNegotiable] = useState('no');
  const [pickup, setPickup] = useState('Can deliver');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleChangePickup = event => {
    setPickup(event.target.value);
  }

  const handleChangeCondition = event => {
    setCondition(event.target.value);
  };

  const handleChangeNego = event => {
    setNegotiable(event.target.value);
  };

  const handlePost = async () => {
    if(!name || !price || !location || !img) {
      setError(true);
      return;
    }

    setError(false);

    const user = getCurrentUser();
    if(!user) {
      setError(true);
      alert('Must be logged in to post')
      return;
    }

    const currDate = new Date();
    const dateStr = currDate.toISOString().substring(0, 10);
    const subtitle = `Submitted on ${dateStr} by ${user}`
    const post = {
      user: user,
      title: name,
      image: img,
      price: price,
      condition: condition,
      negotiable: negotiable,
      pickup: pickup,
      location: location,
      createdAt: currDate,
      subtitle: subtitle
    }
    await createNewPost(post);
    console.log('posted');
    history.push("/");
  }

  return (
    <>
      <Header leftButton={<NotificationsNone />} rightButton={<AccountCircle />}>
        Supreme Exchange
      </Header>
      <Card>
        <span className="label">Name</span>
        <div>
          <TextField className="TextField" variant="outlined" size="small" onChange={(e) => {setName(e.target.value)}}/>
        </div>
        <span className="label">Picture</span>
        <div>
          <ImageUpload setImage={setImg}/>
        </div>
      </Card>
      <PriceHistoryChart />
      <Card>
        <span className="label">Asking Price</span>
        <div>
          <TextField
            className="TextField"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
            onChange={(e) => {setPrice(parseFloat(e.target.value))}}
          />
        </div>
        <span className="label">Condition</span>
        <div>
          <TextField
            className="TextField"
            select
            value={condition}
            onChange={handleChangeCondition}
            SelectProps={{
              native: true
            }}
            variant="outlined"
            size="small">
            {conditions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <span className="label">Negotiable</span>
        <div>
          <TextField
            className="TextField"
            select
            value={negotiable}
            onChange={handleChangeNego}
            SelectProps={{
              native: true
            }}
            variant="outlined"
            size="small">
            {nego.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <span className="label">Pickup</span>
        <div>
          <TextField
            className="TextField"
            select
            value={pickup}
            onChange={handleChangePickup}
            SelectProps={{
              native: true
            }}
            variant="outlined"
            size="small">
            {pick.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <span className="label">Location</span>
        <div>
          <TextField
            className="TextField"
            variant="outlined"
            size="small"
            placeholder="Montreal, QC"
            onChange={(e) => {setLocation(e.target.value)}}
          />
        </div>
        <div className="MapContainer">
          <Map location={defaultLocation} />
        </div>
        <Divider />
        <Grid
          className="PostButtonContainer"
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center">
          <Grid item xs={12}>
            <IconButton color={error ? "secondary" : "default"} className="PostButton" size="medium" variant="outline" onClick={handlePost}>
              <Create fontSize="inherit" />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <span className="label">Post</span>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
