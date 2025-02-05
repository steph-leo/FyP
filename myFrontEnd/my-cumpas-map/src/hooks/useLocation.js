import { useState, useEffect } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setLocation(position.coords),
      (error) => console.error(error)
    );
  }, []);

  return location;
};

export default useLocation;
