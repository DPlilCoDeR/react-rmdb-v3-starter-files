import React from 'react';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components
import HeroImage from './HeroImage/HeroImage';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb';
import Spinner from './Spinner/Spinner';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';

// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setLoadingMore } = useHomeFetch();

  if (error) { return <div>somenthing went wrong...</div> };
  
  return (
    <>

    {!searchTerm && state.results[0] ? (
      <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview} />
    ) : null }

      <SearchBar setSearchTerm={setSearchTerm}/>

    <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
      {state.results.map(movie => (
        <Thumb 
          key={movie.id} 
          clickable //True
          image={
            movie.poster_path 
            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
            : NoImage
            }
          movieId={movie.id}
        />
      ))
      }
    </Grid>
    {loading && <Spinner/>}
    {state.page < state.total_pages && !loading && (
      <Button text='Load More' callback={()=> setLoadingMore(true)}/>
    )}
    </>
  );
};

export default Home;