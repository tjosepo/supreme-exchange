import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export default function AccountPage(props) {
    const history = useHistory();

    const handleSignOut = () => {
        localStorage.clear();
        history.push('/account');
        props.logout(false);
    }

    return (
        <Button onClick={handleSignOut}>
            Sign out
        </Button>
    );
}
