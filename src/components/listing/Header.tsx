import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import './Header.css';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: Text;
}

export default function Header({ onClick, children }: Props) {
  return (
    <div className="Header">
      <IconButton onClick={e => onClick?.(e)}>
        <Close />
      </IconButton>
      <span>{children}</span>
    </div>
  );
}
