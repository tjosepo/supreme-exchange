import { Close } from '@material-ui/icons';
import Header from '../shared/Header';
import PriceHistoryChart from './PriceHistoryChart';
import ProductListings from './ProductListings';
import { useParams } from "react-router-dom";

export default function ListingPage() {
  let { title } = useParams();


  return (
    <>
      <Header leftButton={<Close />}>{title}</Header>
      <PriceHistoryChart />
      <ProductListings title={title}/>
    </>
  );
}
