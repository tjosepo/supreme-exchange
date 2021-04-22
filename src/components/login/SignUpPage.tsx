import { Button,
    createStyles,
    makeStyles,
    createMuiTheme,
    ThemeProvider,
    Theme,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors'
import Header from '../shared/Header';
import Card2 from '../shared/Card2';
import './style/SignPage.css';
import InputBox from './SignInInputs'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        signButton: {
            borderRadius: 10,
        }
    }),
);

const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

export default function SignUpPage(){
    const classes = useStyles();

    return(
        <>
            <Header>
                Supreme Exchange
            </Header>
            <Card2>
                <ThemeProvider theme={theme}>
                    <form className="form">
                        <InputBox required={true} type="email" autocomplete="email">
                            Email Address
                        </InputBox>
                        
                        <InputBox required={true} type="text" autocomplete="username">
                            Username
                        </InputBox>

                        <InputBox required={true} type="password" autocomplete="new-password">
                            Password
                        </InputBox>
                        <div>
                            <Button type="submit" variant="contained" color="primary" disableElevation fullWidth className={classes.signButton}>
                                Create Account
                            </Button>
                        </div>
                    </form>
                    <p className="text">
                        Already have an account? <a href="https://www.w3schools.com/tags/tag_br.asp">Sign In</a>
                    </p>
                    
                </ThemeProvider>
            </Card2>
        </>
    );
}