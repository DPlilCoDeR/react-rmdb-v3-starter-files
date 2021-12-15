//Link Router
import { Link } from 'react-router-dom';

//PropTypes
import PropTypes from "prop-types";


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

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default Thumb;