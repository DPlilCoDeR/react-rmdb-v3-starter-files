import { useParams } from "react-router-dom";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//Components
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actor from "./Actor/Actor";

//Hook
import { useMovieFetch } from "../Hooks/useMovieFetch";

//Not image
import NoImage from '../images/no_image.jpg'


const Movie = () => {
    const { movieId } = useParams()
    const {state: movie, loading, error} = useMovieFetch(movieId)
    console.log(movie);

    if (error) return <div>somenthing went wrong...</div>
    if (loading) return <Spinner />;
    
    return (
        <>
            <BreadCrumb movieTitle={movie.title}/>
            <MovieInfo movie={movie}></MovieInfo>
            <MovieInfoBar 
                time={movie.runtime} 
                budget={movie.budget} 
                revenue={movie.revenue}
            />
            <Grid header='actors'>
                {movie.actors.map(actor => (
                    <Actor 
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path 
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        } 
                    />
                ))}
            </Grid>
        </>
    );
}

export default Movie;