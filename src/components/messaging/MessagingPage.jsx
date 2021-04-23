import Header from '../shared/Header';
import { useEffect, useState } from 'react';
import Card from '../shared/Card';
import { NotificationsNone, AccountCircle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from '../utils/Authentication';
import { viewAllUserMessages } from '../utils/Firestore';

export default function MessagingPage() {
    const [messages, setMessages] = useState([]);
    const [isLogged, setIsLogged] = useState(false);
    const history = useHistory();

    useEffect(() => {
        let curr = getCurrentUser();
        if(!curr) return;

        let getMessage = async () => {

            const allMessages = await viewAllUserMessages(curr);
            console.log(allMessages);
            let temp = allMessages.map(x => {
                return {
                    ...x,
                    display: x.sender === curr ? x.receiver : x.sender
                }
            });
            setMessages(temp);
            setIsLogged(true);
        }
        getMessage();
    }, [])

    return (
        <>
        <Header leftButton={<NotificationsNone />} rightButton={<AccountCircle />}>
            Supreme Exchange
        </Header>
        {isLogged ?
        <>
            {
                messages.map(m => {
                    return (
                        <Card onClick={() => history.push(`/messaging/${m.receiver}/${m.sender}`)}>
                            <span className="label">{m.display}</span>
                        </Card>
                    );
                })
            }
        </>
        :
        <Card>
            Please log in to view messages
        </Card>
        }
        </>
    );
}
