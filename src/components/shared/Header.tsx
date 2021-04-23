import { IconButton } from '@material-ui/core';
import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import './style/Header.css';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: string | ReactElement;
  leftButton?: any;
  rightButton?: any;
}

export default function Header({ onClick, children, leftButton, rightButton }: Props) {
  let history = useHistory();

  const handleBack = () => {
    history.goBack();
  }

  return (
    <div className="Header">
      {leftButton && (
        <IconButton className={'LeftButton'} onClick={handleBack}>
          {leftButton}
        </IconButton>
      )}
      {typeof children === 'string' ? <span>{children}</span> : children}
      {rightButton && (
        <IconButton className={'RightButton'} onClick={e => onClick?.(e)}>
          {rightButton}
        </IconButton>
      )}
    </div>
  );
}
