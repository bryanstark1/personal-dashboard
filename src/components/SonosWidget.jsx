import useSonos from '../hooks/useSonos';

export default function SonosWidget() {
  const {status, loading, error} = useSonos();

  return (
    <div id='sonos-widget' className='widget'>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {status &&
        <>
          <h3>Now Playing:</h3>
          <p><strong>{status.title}</strong> by {status.artist}</p>
          <p>Album: {status.album}</p>
          <p>Status: {status.playing ? 'Playing' : 'Paused'}</p>
        </>
      }
    </div>
  );
};