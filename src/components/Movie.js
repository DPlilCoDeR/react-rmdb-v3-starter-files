import { useParams } from "react-router-dom";


const Movie = () => {
    const { movieId } = useParams()
    console.log(movieId)
    return (
        <div>{movieId}</div>
    );
}

export default Movie;