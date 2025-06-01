import useGeolocation from '../hooks/useGeolocation';
import useWeather from '../hooks/useWeather';

export default function WeatherWidget() {
  const coords = useGeolocation();
  const { weather, error } = useWeather(coords);

  const current = weather?.current_condition[0];

  return (
    <>
      <div id="weather-widget" className='widget'>
        {!weather && !error && <p>Loading weather...</p>}
        {error && <p>Error: {error}</p>}
        {weather &&
          <>
            <div className='weather-primary-info'>
              <h2 className='area-name'>{weather?.nearest_area[0]?.areaName[0]?.value}</h2>
              <div className='temperature'>
                <p className='actual-temp'>{current?.temp_F}°F</p>
                {current?.FeelsLikeF !== current?.temp_F && <p>Feels like {current?.FeelsLikeF}°F</p>}
              </div>
              <p className='description'>{current?.weatherDesc[0].value}</p>
            </div>
            <div className='weather-additional-info'>
              <p>Humidity: {current?.humidity}%</p>
              <p>Wind: {current?.windspeedMiles} mph</p>
              {/* Add UV Index, others? */}
            </div>
          </>
        }
      </div>
    </>
  );
};