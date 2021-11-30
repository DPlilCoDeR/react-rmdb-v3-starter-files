import { useParams } from "react-router-dom";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//Components
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner";

//Hook
import { useMovieFetch } from "../Hooks/useMovieFetch";

//Not image
import NoImage from '../images/no_image.jpg'


const Movie = () => {
    const { movieId } = useParams()
    const {state, loading, error} = useMovieFetch(movieId)
    console.log(state);
    
    return (
        <>
            <div>{`movie ID is: ${movieId}`}</div>
        </>
    );
}

export default Movie;