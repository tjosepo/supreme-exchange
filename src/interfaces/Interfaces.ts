export interface Location {
  address: string;
  city: string;
  lat: number;
  lng: number;
}

export interface Listing {
  id?: string;
  title: string;
  price: number;
  subtitle: string;
  condition: string;
  pickup: string;
  negotiable: string;
  image: string;
  location?: Location;
  createdBy?: string;
  user?: string;
}
