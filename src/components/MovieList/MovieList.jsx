import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="list-disc list-inside">
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={location} className="underline">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )
};

export default MovieList;
