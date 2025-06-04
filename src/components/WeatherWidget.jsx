import useGeolocation from '../hooks/useGeolocation';
import useWeather from '../hooks/useWeather';

export default function WeatherWidget() {
  const coords = useGeolocation();

  const { weather, error } = useWeather(coords);

  const current = weather || {};

  return (
    <div id="weather-widget" className="widget">
      {!coords && <p>Getting location...</p>}
      {coords && !weather && !error && <p>Loading weather...</p>}
      {error && <p>Error: {error}</p>}
      {weather && (
        <>
          <div className="weather-primary-info">
            <h2 className="area-name">Local weather</h2>
            <div className="temperature">
              {weather.icon && <img src={weather.icon} alt={weather.description} />}
              <p className="actual-temp">{current.temperature}°F</p>
              <p>Wind: {current.windspeed} mph</p>
            </div>
            <p>{weather.description}</p>
          </div>
          <div className="weather-additional-info">
            <p>Wind Direction: {current.winddirection}°</p>
          </div>
        </>
      )}
    </div>
  );
};