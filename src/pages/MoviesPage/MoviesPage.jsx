import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import getMoviesBySearchQuery from '../../utils/getMoviesBySearchQuery.js';
import PageTitle from '../../components/PageTitle';
import MovieList from '../../components/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = ({ searchQuery }) => {
    if (!searchQuery) {
      setSearchParams({});
      setSearchResults([]);
      return;
    }

    setSearchQuery(searchQuery);
    searchParams.set('search', searchQuery);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const searchQueryParam = searchParams.get('search');

    if (!searchQueryParam) {
      return;
    }

    (async () => {
      const data = await getMoviesBySearchQuery(searchQueryParam);

      setSearchResults(data.results);
    })();
  }, [searchParams]);

  return (
    <div className="movies-page ">
      <PageTitle>Search Movies</PageTitle>

      <Formik
        initialValues={{
          searchQuery: '',
        }}
        onSubmit={onSubmit}
      >
        <Form className="flex gap-4">
          <Field
            placeholder="Search"
            name="searchQuery"
            className="border h-9 rounded-md px-4"
          />
          <button type="submit" className="btn">
            Search
          </button>
        </Form>
      </Formik>

      {searchResults.length > 0 ? (
        <section className="mt-5">
          <h2 className="text-lg">Search Results</h2>
          <MovieList movies={searchResults} />
        </section>
      ) : (
        <section className="mt-5">
          <h2 className="text-lg">Search Results</h2>
          <p>Nothing has been found.</p>
        </section>
      )}
    </div>
  );
};

export default MoviesPage;
