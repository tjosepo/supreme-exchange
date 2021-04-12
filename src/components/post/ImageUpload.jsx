
import './style/ImageUpload.css';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';

export default function ImageUpload() {
    return (
        <>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
            />
            <label htmlFor="raised-button-file">
                <Button variant='outlined' component='span' className='ImageUpload'>
                    <ImageIcon fontSize='large' />
                </Button>
            </label>
        </>
    );
}
