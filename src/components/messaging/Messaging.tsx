import Header from '../shared/Header';
import { ArrowBack } from '@material-ui/icons';
import SpeechBubble from './SpeechBubble';
import TradeOffer from './TradeOffer';

export default function Messaging() {
  return (
    <>
      <Header leftButton={<ArrowBack />}>JOHN123</Header>
      <SpeechBubble position="right">When can I come and meet you?</SpeechBubble>
      <SpeechBubble position="left">Does 5pm sound good to you? I live downtown.</SpeechBubble>
      <SpeechBubble position="right">Yes! Of course!</SpeechBubble>
      <SpeechBubble position="left">Great! I'll send you an invitation.</SpeechBubble>
      <TradeOffer />
    </>
  );
}
