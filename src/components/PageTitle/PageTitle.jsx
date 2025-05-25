import React from 'react';
import clsx from 'clsx';

const PageTitle = ({ children, classes = '' }) => {
  const titleClasses = clsx('text-2xl my-5 font-semibold', classes);

  return <h1 className={titleClasses}>{children}</h1>;
};

export default PageTitle;
