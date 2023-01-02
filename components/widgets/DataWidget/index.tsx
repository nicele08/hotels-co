/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

interface IDataWidget {
  status: 'success' | 'loading' | 'error';
  children: React.ReactNode;
  error: unknown;
  skeleton?: React.ReactNode;
}

const DataWidget = ({
  status,
  error,
  skeleton,
  children,
}: IDataWidget) => {
  if (status === 'loading') {
    return <>{skeleton || <p>Loading...</p>}</>;
  }
  if (status === 'error') {
    return (
      <p>Error: {(error as any).message || 'Something went wrong'}</p>
    );
  }
  return <>{children}</>;
};

export default DataWidget;
