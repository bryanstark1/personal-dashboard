import { useEffect, useState } from 'react';

export default function useWeather(coords) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // To avoid state updates if component unmounts
    let intervalId;

    const fetchWeather = () => {
      let url;

      // if (coords) {
      //   url = `http://localhost:4000/api/weather?location=${coords.latitude},${coords.longitude}`;
      // } else {
        // Default to New York if no coords
        url = 'http://localhost:4000/api/weather?location=40.7128,-74.0060';
      // }

      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch weather data');
          return res.json();
        })
        .then(data => {
          if (isMounted) {
            setWeather(data);
            setError(null); // clear previous errors on success
          }
        })
        .catch(err => {
          if (isMounted) {
            setError(err.message);
          }
        });
    };

    fetchWeather(); // initial fetch

    // Set interval to fetch every 5 minutes
    intervalId = setInterval(fetchWeather, 300000); // 300,000 ms = 5 minutes

    return () => {
      isMounted = false; // clean up flag
      clearInterval(intervalId); // clear interval on unmount or coords change
    };
  }, [coords]);

  return { weather, error };
};