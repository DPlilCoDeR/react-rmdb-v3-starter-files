import { useParams } from "react-router-dom";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//Components
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner";

//Hook

//Not image
import NoImage from '../images/no_image.jpg'


const Movie = () => {
    const { movieId } = useParams()
    
    return (
        <>
            <div>{`movie ID is: ${movieId}`}</div>
        </>
    );
}

export default Movie;