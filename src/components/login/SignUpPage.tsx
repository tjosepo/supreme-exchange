import { Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Header from '../shared/Header';
import Card from '../shared/Card';
import './style/SignPage.css';
import { FormEvent } from 'react';

export default function SignUpPage() {
  const history = useHistory();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    history.push('/sign-up-additional');
  };

  return (
    <>
      <Header>Supreme Exchange</Header>
      <Card className="SignUpPage">
        <form className="form" onSubmit={submit}>
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
          />

          <div>
            <Button type="submit" variant="contained" color="primary" disableElevation fullWidth>
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
