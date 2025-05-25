import React from 'react';
import { useOutletContext } from 'react-router-dom';

const MovieReviews = () => {
  const reviews = useOutletContext();

  if (!reviews.length) {
    return <p>We don't have any reviews for this movie yet.</p>;
  }

  return (
    <ul className="flex flex-col gap-4">
      {reviews.map(({ id, author, content }) => (
        <li key={id} className="flex gap-4 flex-col border-b pb-4">
          <h3 className="text-lg font-semibold">{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
