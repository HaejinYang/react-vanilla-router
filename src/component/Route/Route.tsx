import React, { useEffect, useState } from "react";

interface RouteProps {
  route: string;
  children: React.ReactNode[] | React.ReactNode;
}

const Route: React.FC<RouteProps> = ({ route, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return <div>{currentPath === route ? children : null}</div>;
};

export default Route;
