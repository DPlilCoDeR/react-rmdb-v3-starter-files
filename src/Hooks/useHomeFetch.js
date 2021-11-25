import { useState, useEffect } from "react";

//API
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export function useHomeFetch () {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false)


    async function fetchMovies(page, searchterm = '') {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchterm, page);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results]: [...movies.results]
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies(1, searchTerm);
        
    }, [searchTerm]);

    //Loading More
    useEffect(() => {
        if (loadingMore) {
            fetchMovies(state.page + 1, searchTerm)
            setLoadingMore(false);
        };
        return
    }, [searchTerm, loadingMore, state.page])
    return { state, loading, error, searchTerm, setSearchTerm, setLoadingMore };
}