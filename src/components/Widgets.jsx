import WeatherWidget from './WeatherWidget';
import CalendarWidget from './CalendarWidget';
import SonosWidget from './SonosWidget';

export default function Widgets() {

  return (
    <main id='widgets'>
      <CalendarWidget />
      <WeatherWidget />
      <SonosWidget />
    </main>
  );
};