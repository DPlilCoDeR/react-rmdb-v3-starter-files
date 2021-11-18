//style
import { Image } from './Thumb.styles.js';


const Thumb = ({image , movieId, clickable}) => (
    <>
        <Image src={image} alt='movie thumb'/>
    </>
);

export default Thumb;