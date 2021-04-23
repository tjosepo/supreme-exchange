import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Header from '../shared/Header';
import Card from '../shared/Card';
import './style/SignPage.css';

import { createNewUser } from '../utils/Firestore';

export default function SignUpPage() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleCreateAccount = async () => {
    if(!user || !pass) {
      setError(true);
      return;
    }
    setError(false);
    const valid = await createNewUser(user, pass)
    
    if(!valid) {
      alert(`User: ${user} already exists`)
      setError(true);
      return;
    }
    history.push('/account');
  }

  return (
    <>
      <Header>Supreme Exchange</Header>
      <Card className="SignUpPage">
        <form className="form">
          <label className="label" htmlFor="password-input">
            Email
          </label>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            required={true}
            type="email"
            autoComplete="email"
            onChange={(e) => setUser(e.target.value)}
          />

          <label className="label" htmlFor="password-input">
            Password
          </label>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            required={true}
            type="password"
            autoComplete="new-password"
            onChange={(e) => setPass(e.target.value)}
          />

          <div>
            <Button variant="contained" color={error ? "secondary" : "primary"} disableElevation fullWidth onClick={handleCreateAccount}>
              Create Account
            </Button>
          </div>
        </form>
        <p className="text">
          Already have an account? <Link to="/account">Sign In</Link>
        </p>
      </Card>
    </>
  );
}
