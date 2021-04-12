import './style/Card.css';

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  media?: {
    src: string;
    title?: string;
  };
}

const Card = ({ media, className, ...props }: Props) => {
  return (
    <div {...props} className={`Card ${className ?? ''}`}>
      {media && (
        <div
          className="Card__media"
          style={{ backgroundImage: `url(${media.src})` }}
          title={media.title ?? ''}
        />
      )}
      {props.children}
    </div>
  );
};

export default Card;
