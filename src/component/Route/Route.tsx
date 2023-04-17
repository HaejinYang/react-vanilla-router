import React from "react";

interface RouteProps {
  route: string;
  children: React.ReactNode[] | React.ReactNode;
}

const Route: React.FC<RouteProps> = ({ route, children }) => {
  return <div>{window.location.pathname === route ? children : null}</div>;
};

export default Route;
