import React from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components
import HeroImage from './HeroImage/HeroImage';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb';
import Spinner from './Spinner/Spinner';


// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();


  return (
    <>
    {state.results[0] ? (
      <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview} />
    ) : null }

    <Grid header={'Popular Movies'}>
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
    <Spinner/>
    </>
  );
};

export default Home;