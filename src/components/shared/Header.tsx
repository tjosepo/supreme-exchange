import { IconButton } from '@material-ui/core';

import './style/Header.css';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: string;
  leftButton?: any;
  rightButton?: any;
}

export default function Header({ onClick, children, leftButton, rightButton }: Props) {
  return (
    <div className="Header">
      {leftButton && (
        <IconButton className={'LeftButton'} onClick={e => onClick?.(e)}>
          {leftButton}
        </IconButton>
      )}
      <span>{children}</span>
      {rightButton && (
        <IconButton className={'RightButton'} onClick={e => onClick?.(e)}>
          {rightButton}
        </IconButton>
      )}
    </div>
  );
}
