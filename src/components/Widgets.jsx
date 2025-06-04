import WeatherWidget from './WeatherWidget';
import CalendarWidget from './CalendarWidget';

export default function Widgets() {

  return (
    <main id='widgets'>
      <CalendarWidget />
      <WeatherWidget />
    </main>
  );
};