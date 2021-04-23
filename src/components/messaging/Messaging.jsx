import { useState, useEffect } from 'react';
import Header from '../shared/Header';
import { ArrowBack } from '@material-ui/icons';
import SpeechBubble from './SpeechBubble';
import TradeOffer from './TradeOffer';
import { useParams } from 'react-router-dom';
import { getConversation } from '../utils/Firestore';



export default function Messaging() {
  const {receiver, sender} = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let getMessages = async () => {
      const mess = await getConversation(receiver, sender);
      let temp = mess.map(x => {
        return {
          ...x,
          curr: x.receiver === receiver 
        }
      });
      temp = temp.sort((a, b) => {
        if (a.date.seconds < b.date.seconds) return -1;
        if (a.date.seconds > b.date.seconds) return 1;
        return 0;
      });
      setMessages(temp)
    }
    getMessages();
  }, []);

  const reload = () => {
    let getMessages = async () => {
      const mess = await getConversation(receiver, sender);
      let temp = mess.map(x => {
        return {
          ...x,
          curr: x.receiver === receiver 
        }
      });
      temp = temp.sort((a, b) => {
        if (a.date.seconds < b.date.seconds) return -1;
        if (a.date.seconds > b.date.seconds) return 1;
        return 0;
      });
      console.log(temp)
      setMessages(temp)
    }
    getMessages();
  }



  return (
    <>
      <Header leftButton={<ArrowBack />}>{receiver}</Header>
      {
        messages.map(x => {
          return (
            <SpeechBubble position={!x.curr ? 'left' : 'right'} key={x.message}>{x.message}</SpeechBubble>
          );
        })
      }
      <TradeOffer receiver={receiver} sender={sender} reload={reload}/>
    </>
  );
}
