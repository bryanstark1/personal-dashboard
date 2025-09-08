import { useEffect, useState } from 'react';

export default function useSonos() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:4000/api/sonos/status');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        };
        const status = await response.json();
        setStatus(status);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      };
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 5000); // poll every 5s
    return () => clearInterval(interval);
  }, []);

  return { status, loading, error };
};