import React from 'react';
import { Route } from 'react-router';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import LocationManage from './location-manage';
import LocationConfirmation from './location-confirmation';
import LocationAccess from './access-history';
import LocationExpire from './location-expiredate';

const Location = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route index element={<LocationManage />} />
      <Route path="confirmation" element={<LocationConfirmation />} />
      <Route path="access" element={<LocationAccess />} />
      <Route path="location-expiredate" element={<LocationExpire />} />
    </ErrorBoundaryRoutes>
  );
};

export default Location;
