import { useEffect, useState } from 'react';

export default function useGeolocation() {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        console.error(err);
        setError('Unable to retrieve location');
      }
    );
  }, []);

  return coords;
};