import { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import { green } from '@material-ui/core/colors';
import Header from '../shared/Header';
import Card from '../shared/Card';
import './style/SignPage.css';
import { loginUser } from '../utils/Firestore';
import { getCurrentUser } from '../utils/Authentication';
import AccountPage from './AccountPage';
// import { useState } from 'react';

// import { getImageLabel } from '../utils/TensorFlow';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     container: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column'
//     },
//     signButton: {
//       borderRadius: 10,
//       marginTop: 10,
//       marginBottom: 10
//     },
//     wrapper: {
//       marginTop: theme.spacing(1),
//       marginBottom: theme.spacing(1),
//       position: 'relative',
//       width: '100%'
//     },
//     buttonProgress: {
//       color: green[500],
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       marginTop: -12,
//       marginLeft: -12
//     }
//   })
// );

export default function SignInPage() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);
  // const classes = useStyles();
  // const [isCriminal, setIsCriminal] = useState(true);
  // const [loading, setLoading] = useState(false);
  // const [criminality, setCriminality] = useState<string>('');

  // const handleImageUpload = async (e: any) => {
  //   setLoading(true);
  //   const image = e.target.files[0];
  //   const url = URL.createObjectURL(image);
  //   let img = new Image();
  //   img.src = url;
  //   const predict = await getImageLabel(img);
  //   setCriminality((predict[0].prob * 100).toFixed(2).toString());
  //   if (predict[0].prob > 0.6) {
  //     setIsCriminal(true);
  //   } else {
  //     setIsCriminal(false);
  //   }
  //   setLoading(false);
  // };

  useEffect(() => {
    let curr = getCurrentUser();
    if(!curr) setIsLogged(false);
    else setIsLogged(true);
  }, []);

  const handleLogin = async () => {
    if(!user || !pass) {
      setError(true);
      return;
    }
    setError(false);
    const valid = await loginUser(user, pass)
    
    if(!valid) {
      alert('Invalid credentials')
      setError(true);
      return;
    }
    setIsLogged(true);
    localStorage.setItem('currentUser', user);
  }

  return (
    <>
      <Header>Supreme Exchange</Header>
      {isLogged ? <AccountPage logout={setIsLogged}></AccountPage> :
      <Card className="SignInPage">
        <form className="form">
          <label className="label" htmlFor="email-input">
            Email
          </label>
          <TextField
            id="email-input"
            required={true}
            type="email"
            fullWidth
            autoComplete="email"
            variant="outlined"
            size="small"
            onChange={(e:any) => setUser(e.target.value)}
          />

          <label className="label" htmlFor="password-input">
            Password
          </label>
          <TextField
            id="password-input"
            required={true}
            type="password"
            fullWidth
            autoComplete="current-password"
            variant="outlined"
            size="small"
            onChange={(e:any) => setPass(e.target.value)}
          />

          <Button variant="contained" color={error ? "secondary" : "primary"} disableElevation fullWidth onClick={handleLogin}>
            Sign In
          </Button>
        </form>
        <p className="text">
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </Card>
      }
    </>
  );
}
