import React from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components

// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state)

  return <div>Home Page</div>;
};

export default Home;