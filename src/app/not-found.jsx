'use client'

import { useRouter } from 'next/navigation'
import './not-found.module.css'

export default function NotFound() {
    const router = useRouter()

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <button onClick={handleGoHome} className="primary">Go to Home</button>
    </div>
  );
};