import { useState } from 'react';
import './style/ImageUpload.css';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';

export default function ImageUpload(props) {
  const [image, setImage] = useState(undefined);

  const toDataURL = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
      let reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  const handleImageUpload = e => {
    const image = e.target.files[0];
    const url = URL.createObjectURL(image)
    setImage(url);
    toDataURL(url, (dataUrl) => {props.setImage(dataUrl)})
  };

  return (
    <>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="upload-file-button"
        multiple
        type="file"
        onChange={handleImageUpload}
      />
      <label htmlFor="upload-file-button">
        <Button
          variant="outlined"
          component="span"
          className="ImageUpload"
          style={
            image
              ? {
                  background: `url('${image}') center`
                }
              : {}
          }>
          {image ? null : <ImageIcon className="ButtonIcon" />}
        </Button>
      </label>
    </>
  );
}
