import React from 'react';
import { useOutletContext } from 'react-router-dom';
import getMoviePosterPath from '../../utils/getMoviePosterPath.js';

const MovieCast = () => {
  const casts = useOutletContext();

  if (!casts.length) {
    return <p>We don't have any info about casts for this movie yet.</p>;
  }

  return (
    <ul className="flex flex-col gap-4">
      {casts.map(({ id, name, character, profile_path }) => (
        <li key={id} className="flex gap-4 items-center border-b pb-4">
          {profile_path ? (
            <div className="profile-avatar">
              <img
                src={getMoviePosterPath(profile_path)}
                alt={name}
                className="rounded max-w-16"
              />
            </div>
          ) : (
            <div className="profile-avatar">
              <img
                src={`https://ui-avatars.com/api/?name=${name}&background=random`}
                alt={name}
                className="rounded max-w-16"
              />
            </div>
          )}
          <div className="info">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p>Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
