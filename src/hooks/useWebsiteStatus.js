import { useState, useEffect } from 'react';

export function useWebsiteStatus(url) {
  const [status, setStatus] = useState('Checking');
  const [ping, setPing] = useState(null);

  useEffect(() => {
    const checkStatus = () => {
      setStatus('Checking');
      setPing(null);

      const delay = Math.random() * 1500 + 500;
      const startTime = Date.now();

      setTimeout(() => {
        const isOperational = Math.random() > 0.1;
        const endTime = Date.now();
        
        if (isOperational) {
          setStatus('Operational');
          setPing(endTime - startTime);
        } else {
          setStatus('Down');
          setPing(null);
        }
      }, delay);
    };

    checkStatus();
    const intervalId = setInterval(checkStatus, 30000);

    return () => clearInterval(intervalId);
  }, [url]);

  return { status, ping };
}