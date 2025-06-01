import WeatherWidget from './WeatherWidget';
import CalendarWidget from './CalendarWidget';

export default function Widgets() {

  return (
    <main id='widgets'>
      <WeatherWidget />
      <CalendarWidget />
    </main>
  );
};