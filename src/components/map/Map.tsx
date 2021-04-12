import React, { useState } from 'react';
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

export default function Map({ location }: Props) {
  return (
    <div className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.API_KEY || '' }}
        defaultCenter={location}
        defaultZoom={11}
        options={{ disableDefaultUI: true, gestureHandling: 'none' }}>
        <Circle lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  );
}
