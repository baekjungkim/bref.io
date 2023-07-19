'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log('error is', error);
  }, [error]);

  const handleRetry = () => {
    reset();
  };

  return (
    <div>
      <h2>Something wne wrong!</h2>
      <button onClick={handleRetry}>Retry request</button>
    </div>
  );
}
