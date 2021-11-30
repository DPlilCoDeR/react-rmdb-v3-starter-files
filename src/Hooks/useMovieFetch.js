import { useState, useEffect } from "react";

//API
import api from "../API";

export const useMovieFetch = movieId => {
    const [ state, setState] = useState({});
    const [ loading, setLoading] = useState(true);
    const [ error, setError] = useState(false);

    useEffect( () => {
        const fetchMovieData = async () => {
            try {
                const movie = await api.fetchMovie(movieId);
                const credits = await api.fetchCredits(movieId);
                const directors = credits.crew.filter(member => 
                    member.job === 'Director');

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })

                setLoading(false);
            } catch (error) {
                setError(true);
            }
        }

        fetchMovieData()
    },[movieId]);
    
    return {state, loading, error};
};