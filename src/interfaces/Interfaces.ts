interface Location {
  address: string;
  city: string;
  lat: number;
  lng: number;
}

interface Listing {
  title: string;
  price: number;
  subtitle: string;
  condition: string;
  pickup: string;
  negotiable: string;
  image: string;
  location: Location;
}

export type { Location, Listing };
