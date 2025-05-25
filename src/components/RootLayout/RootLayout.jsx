import React from 'react';
import Navigation from '../Navigation/index.js';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <div className="px-4">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
