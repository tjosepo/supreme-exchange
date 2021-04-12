import { useState } from 'react';
import './style/ImageUpload.css';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';

export default function ImageUpload() {
    const [image, setImage] = useState(undefined);

    const handleImageUpload = (e) => {
        const image = e.target.files[0];
        setImage(URL.createObjectURL(image));
    }

    return (
        <>
            <input
                accept='image/*'
                style={{ display: 'none' }}
                id='upload-file-button'
                multiple
                type='file'
                onChange={handleImageUpload}
            />
            <label htmlFor='upload-file-button'>
                <Button
                    variant='outlined'
                    component='span'
                    className='ImageUpload'
                    style={
                        image ?
                        {
                            background: `url('${image}') center`,
                        } : {}
                    }
                >
                    {image ? null : <ImageIcon className='ButtonIcon' />}
                </Button>
            </label>
        </>
    );
}
