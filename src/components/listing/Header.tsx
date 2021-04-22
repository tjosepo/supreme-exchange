import { IconButton } from '@material-ui/core';
import { Close, ArrowBack } from '@material-ui/icons';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: string;
  icon: boolean;
}

export default function Header({ onClick, children, icon }: Props) {
  return (
    <div className="Header">
      <IconButton onClick={e => onClick?.(e)}>{icon ? <Close /> : <ArrowBack />}</IconButton>
      <span>{children}</span>
    </div>
  );
}
