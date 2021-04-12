import Header from '../shared/Header';
import Card from '../shared/Card';
import ImageUpload from './ImageUpload';
import { NotificationsNone, AccountCircle } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';

import './style/Posting.css';

export default function ListingPage() {
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
                id='name-field'
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
    </>
  );
}
