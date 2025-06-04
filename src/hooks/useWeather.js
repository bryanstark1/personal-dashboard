import { useEffect, useState } from 'react';
import weatherCodes from '../data/weatherCodes.json'; // Adjust path as needed

export default function useWeather(coords) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!coords) return;

    const fetchWeather = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/weather?lat=${coords.latitude}&lon=${coords.longitude}`);
        if (!response.ok) throw new Error('Failed to fetch weather');
        const data = await response.json();

        // Get weather code from API response
        const code = data.weathercode || data.current_weather?.weathercode;

        // Determine day or night info — optional
        // Here we assume day info; for better accuracy, you can check timestamp if available
        const timeOfDay = 'day'; // or 'night' depending on time

        // Lookup weather code info from JSON
        const codeInfo = weatherCodes[code]?.[timeOfDay] || {
          description: 'Unknown weather',
          image: null,
        };

        // Attach code info to weather object
        const weatherWithInfo = {
          ...data,
          description: codeInfo.description,
          icon: codeInfo.image,
        };

        setWeather(weatherWithInfo);
      } catch (err) {
        setError(err.message || 'Unexpected error');
      };
    };

    fetchWeather();
  }, [coords]);

  return { weather, error };
};