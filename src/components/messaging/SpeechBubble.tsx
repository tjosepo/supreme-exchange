import './SpeechBubble.css';

interface Props {
  position: 'left' | 'right';
  children: string;
}

export default function SpeechBubble({ position, children }: Props) {
  return (
    <div className={`SpeechBubbleParent SpeechBubbleParent-${position}`}>
      <div className={`SpeechBubble SpeechBubble-${position}`}>{children}</div>
    </div>
  );
}
