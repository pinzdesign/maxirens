'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Login failed');
        return;
      }

      // Redirect to dashboard or another authenticated page
      router.push('/dashboard');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit} className="p-4 border shadow-sm mb-3">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Kodeord</label>
              <input type="password" id="password" className="form-control" placeholder="Kodeord" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button type="submit" className="btn btn-primary w-100 btnCancel">Login</button>
            {error && (
              <p className="text-danger text-center mt-3">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
