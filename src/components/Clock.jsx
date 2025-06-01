import useDateTime from '../hooks/useDateTime';

export default function Clock() {
  const dateTime = useDateTime().now;
  const time = dateTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const [timePart, meridiem] = time.split(" ");   // Meridiem is AM/PM
  const [hours, minutes] = timePart.split(":");

  return (
    <div id='clock'>
      <h1>{hours}:{minutes} <span className='meridiem'>{meridiem}</span></h1>
    </div>
  );
};