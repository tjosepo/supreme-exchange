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

import './style/Posting.css';

const conditions = [
    {
        value: 'Like new',
        label: 'Like new',
    },
    {
        value: 'Brand new',
        label: 'Brand new',
    },
    {
        value: 'Missing pieces',
        label: 'Missing pieces',
    },
    {
        value: 'Worn',
        label: 'Worn',
    },
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
]

const defaultLocation = {
    address: '1455 De Maisonneuve Blvd. W.',
    city: 'Montreal',
    lat: 45.4974230654036,
    lng: -73.57907743891892
}

export default function PostingPage() {
    const [condition, setCondition] = useState('Like New');
    const [negotiable, setNegotiable] = useState('no');

    const handleChangeCondition = (event) => {
        setCondition(event.target.value);
    };

    const handleChangeNego = (event) => {
        setNegotiable(event.target.value);
    };

    return (
        <>
            <Header leftButton={<NotificationsNone/>} rightButton={<AccountCircle/>}>Supreme Exchange</Header>
            <Card>
                <span className="label">
                    Name
                </span>
                <div>
                    <TextField
                        className='TextField'
                        variant='outlined'
                        size='small'
                    />
                </div>
                <span className="label">
                    Picture
                </span>
                <div>
                    <ImageUpload/>
                </div>
            </Card>
            <PriceHistoryChart/>
            <Card>
                <span className="label">
                    Asking Price
                </span>
                <div>
                    <TextField
                        className='TextField'
                        variant='outlined'
                        size='small'
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}                  
                    />
                </div>
                <span className="label">
                    Condition
                </span>
                <div>
                    <TextField
                        className='TextField'
                        select
                        value={condition}
                        onChange={handleChangeCondition}
                        SelectProps={{
                            native: true,
                        }}
                        variant='outlined'
                        size='small'
                    >
                        {conditions.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>
                <span className="label">
                    Negotiable
                </span>
                <div>
                    <TextField
                        className='TextField'
                        select
                        value={negotiable}
                        onChange={handleChangeNego}
                        SelectProps={{
                            native: true,
                        }}
                        variant='outlined'
                        size='small'
                    >
                        {nego.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>
                <span className="label">
                    Location
                </span>
                <div>
                    <TextField
                        className='TextField'
                        variant='outlined'
                        size='small'
                        placeholder='Montreal, QC'                
                    />
                </div>
                <div className='MapContainer'>
                    <Map location={defaultLocation}/>
                </div>
                <Divider />
                <Grid
                    className='PostButtonContainer'
                    container
                    spacing={1}
                    direction='column'
                    justify='center'
                    alignItems='center'
                >
                    <Grid item xs={12}>
                        <IconButton className='PostButton' size='medium' variant='outline'>
                            <Create fontSize='inherit' />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                        <span className="label">
                        Post
                        </span>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
}
