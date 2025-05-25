import React, { useEffect, useState } from 'react';
import getTrendingMovies from '../../utils/getTrendingMovies.js';
import PageTitle from '../../components/PageTitle';
import MovieList from '../../components/MovieList';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getTrendingMovies();

      setTrendingMovies(data.results);
    })();
  }, []);

  return (
    <div className="home">
      <PageTitle>Trending today</PageTitle>

      {trendingMovies.length > 0 ? (
        <MovieList movies={trendingMovies} />
      ) : (
        <p>No trending movies for now.</p>
      )}
    </div>
  );
};

export default HomePage;
