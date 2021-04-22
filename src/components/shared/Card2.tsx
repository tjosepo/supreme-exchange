import './style/Card2.css';

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  media?: {
    src: string;
    title?: string;
  };
}

const Card2 = ({ media, className, ...props }: Props) => {
  return (
    <div {...props} className={`Card2 ${className ?? ''}`}>
      {media && (
        <div
          className="Card2__media"
          style={{ backgroundImage: `url(${media.src})` }}
          title={media.title ?? ''}
        />
      )}
      {props.children}
    </div>
  );
};

export default Card2;
