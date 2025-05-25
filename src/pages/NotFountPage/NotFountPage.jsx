import React from 'react';
import { Link } from 'react-router-dom';
import BackIcon from '../../components/BackIcon';
import PageTitle from '../../components/PageTitle';

const NotFountPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <PageTitle>404. Not Found</PageTitle>
      <Link to="/" className="btn flex gap-2 items-center">
        <BackIcon/>
        Back Home
      </Link>
    </div>
  );
};

export default NotFountPage;
