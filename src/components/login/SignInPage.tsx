import { Button,
    createStyles,
    makeStyles,
    createMuiTheme,
    ThemeProvider,
    Theme,
} from '@material-ui/core';
import { green, red  } from '@material-ui/core/colors'
import Header from '../shared/Header';
import Card2 from '../shared/Card2';
import './style/SignPage.css';
import InputBox from './SignInInputs'
import {useState} from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';

import { getImageLabel } from '../utils/TensorFlow';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        title: {
            marginBottom: '20px'
        },
        signButton: {
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10
        },
        wrapper: {
            margin: theme.spacing(1),
            position: 'relative',
        },
        buttonProgress: {
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12,
        },
    }),
);

const theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: red,
      error: red,
    },
  });

export default function SignInPage(){
    const classes = useStyles();
    const [isCriminal, setIsCriminal] = useState(true);
    const [loading, setLoading] = useState(false);
    const [criminality, setCriminality] = useState<string>('');

    const handleImageUpload = async (e:any) => {
        setLoading(true);
        const image = e.target.files[0];
        const url = URL.createObjectURL(image)
        let img = new Image();
        img.src = url;
        const predict = await getImageLabel(img);
        setCriminality((predict[0].prob  * 100).toFixed(2).toString())
        if (predict[0].prob > 0.6) {
            setIsCriminal(true);
        }
        else {
            setIsCriminal(false);
        }
        setLoading(false);
    };

    return(
        <>
            <Header>
                Supreme Exchange
            </Header>
            <Card2>
                <ThemeProvider theme={theme}>
                    <div className={classes.container}>
                        <Typography variant='h4' className={classes.title}>
                            Sign in
                        </Typography>
                        <form className="form">
                            <InputBox required={true} type="text" autocomplete="username">
                                Username
                            </InputBox>
                            <InputBox required={true} type="password" autocomplete="current-password">
                                Password
                            </InputBox>
                            <input
                                accept="image/*"
                                id="upload-file-button"
                                style={{ display: 'none' }}
                                type="file"
                                multiple={false}
                                onChange={handleImageUpload}
                            />
                            <label htmlFor="upload-file-button">
                                <div className={classes.wrapper}>
                                    <Button
                                        component="span"
                                        variant="contained"
                                        color={criminality && isCriminal ? "secondary" : "primary"}
                                        disableElevation
                                        fullWidth
                                        className={classes.signButton}
                                        startIcon={<CloudUploadIcon />}
                                        disabled={loading}
                                    >
                                        Verify
                                    </Button>
                                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                                </div>
                            </label>
                            <p className="text" style={isCriminal ? {color: 'red'} : {color: 'green'}}>
                                {criminality ? `Likelyhood of being a criminal: ${criminality}%`
                                    :
                                    ''
                                }
                            </p>
                            <div>
                                <Button type="submit" variant="contained" color="primary" disableElevation fullWidth className={classes.signButton} disabled={isCriminal}>
                                    Sign In
                                </Button>
                            </div>
                        </form>
                        <p className="text">
                            Don't have an account? <a href="https://www.w3schools.com/tags/tag_br.asp">Sign Up</a>
                        </p>
                    </div>
                </ThemeProvider>
            </Card2>
        </>
    );
}