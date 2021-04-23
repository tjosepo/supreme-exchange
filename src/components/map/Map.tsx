import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Location } from '../../interfaces/Interfaces';
import './Map.css';

interface Props {
  location: Location;
}

const Circle = (props: any) => {
  return (
    <div className="Map__border">
      <div className="Map__circle"> </div>
    </div>
  );
};

const defaultLocation = {
  address: '1455 De Maisonneuve Blvd. W.',
  city: 'Montreal',
  lat: 45.4974230654036,
  lng: -73.57907743891892
};

export default function Map({ location }: Props) {
  return (
    <div className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? '' }}
        defaultCenter={defaultLocation}
        defaultZoom={11}
        options={{ disableDefaultUI: true, gestureHandling: 'none' }}>
        <Circle lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  );
}
