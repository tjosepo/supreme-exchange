import { InputBase, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import './SearchBar.css';

interface Props {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export default function SearchBar({ onChange }: Props) {
  return (
    <div className="SearchBar">
      <InputBase
        onChange={onChange}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        placeholder="Search for anything..."
      />
    </div>
  );
}
