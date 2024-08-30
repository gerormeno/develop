import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
  user: any;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, user }) => {
  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/admin#top" />;
  }
};