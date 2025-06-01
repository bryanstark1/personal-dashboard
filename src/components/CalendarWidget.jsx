import useDateTime from '../hooks/useDateTime';

export default function CalendarWidget() {
  const dateTime = useDateTime().now;
  const weekday = dateTime.toLocaleDateString('en-US', { weekday: 'long' });
  const day = dateTime.toLocaleDateString('en-US', { day: 'numeric' });

  return (
    <div id='calendar-widget' className='widget'>
      <div className="weekday">
        <h2>{weekday}</h2>
      </div>
      <p className='day'>{day}</p>
    </div>
  );
};