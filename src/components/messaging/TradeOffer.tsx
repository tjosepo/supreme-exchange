import './TradeOffer.css';
import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { Close, Check } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { writeMessage } from '../utils/Firestore';

export default function TradeOffer(props:any) {
  const [mes, setMes] = useState('');

  const handleSend = async () => {
    await writeMessage(props.sender, props.receiver, mes);
    setMes('');
    props.reload();
  }

  return (
    <div className="TradeOffer">
      <div className="top">
        <p>Trade Invitation</p>
        <div className="line">
          <span>123 Sesame Stree</span>
          <span className="price">$119.99</span>
        </div>

        <div className="line">
          <span>Today</span>
          <span>5:00 PM EST</span>
        </div>

        <span>Montréal, QC</span>
        <br />
        <span className="faded">Exact location will be revealed after accepting the offer.</span>
      </div>

      <div className="bottom">
        <div>
          <IconButton size="medium" className="button">
            <Close />
          </IconButton>
          <span>Refuse</span>
        </div>
        <div>
          <IconButton size="medium" className="button">
            <Check />
          </IconButton>
          <span>Accept</span>
        </div>
      </div>
      <Card>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={10} >
            <TextField variant="outlined" fullWidth size="small" onChange={(e) => setMes(e.target.value)} value={mes}/>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={handleSend}>Send</Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
