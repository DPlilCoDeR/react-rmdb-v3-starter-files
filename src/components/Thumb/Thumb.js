//Link Router
import { Link } from 'react-router-dom';

//style
import { Image } from './Thumb.styles.js';


const Thumb = ({image , movieId, clickable}) => (
    <>
        {
            clickable ? (
                <Link to={`/${movieId}`}>
                    <Image src={image} alt='movie thumb'/>
                </Link>
            ) : 
            ( <Image src={image} alt='movie thumb'/> )
        }
    </>
);

export default Thumb;