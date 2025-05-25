import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import getMovieById from '../../utils/getMovieById.js';
import getMoviePosterPath from '../../utils/getMoviePosterPath.js';
import clsx from 'clsx';
import BackIcon from '../../components/BackIcon';
import PageTitle from '../../components/PageTitle';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    (async () => {
      const data = await getMovieById(movieId);
      const [, , type] =  pathname.split('/').filter(Boolean);

      setMovie(data);
      type && setActiveTab(type);
    })();
  }, [movieId, pathname]);

  if (Object.keys(movie).length === 0) return;

  const navigateBack = (event) => {
    event.preventDefault();
    navigate(state ?? '/movies');
  }

  return (
    <div className="movie-details-page mt-5">
      <Link to="/movies" className="btn inline-flex gap-2 items-center" onClick={navigateBack}>
        <BackIcon />
        Back
      </Link>
      <section className="card flex gap-4 mt-4">
        <div className="poster">
          <img
            src={movie.poster_path ? getMoviePosterPath(movie.poster_path) : `https://ui-avatars.com/api/?name=${movie.title}`}
            alt={movie.title}
            className="max-w-52 rounded"
          />
        </div>
        <div className="info">
          <PageTitle classes="mt-0">{movie.title}</PageTitle>

          <div className="detail mb-3">
            <h2 className="text-lg font-semibold">Popularity</h2>
            <p>{movie.popularity}%</p>
          </div>

          <div className="detail mb-3">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p>{movie.overview}</p>
          </div>

          <div className="detail">
            <h2 className="text-lg font-semibold">Genres</h2>
            <p>{movie.genres.map((genre) => genre.name).join(' | ')}</p>
          </div>
        </div>
      </section>
      <section className="card mt-4">
        <h2 className="text-lg font-semibold">Additional Information</h2>
        <ul>
          <li>
            <NavLink
              to="cast"
              className={clsx(
                'hover:underline',
                activeTab === 'cast' && 'underline',
              )}
              state={state}
              onClick={() => setActiveTab('cast')}
            >
              Casts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={clsx(
                'hover:underline',
                activeTab === 'reviews' && 'underline',
              )}
              state={state}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </section>
      {activeTab ? (
        <section className="card mt-4">
          <Outlet
            context={
              activeTab === 'cast' ? movie.credits.cast : movie.reviews.results
            }
          />
        </section>
      ) : null}
    </div>
  );
};

export default MovieDetailsPage;
