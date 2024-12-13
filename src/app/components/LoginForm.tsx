'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const { message } = await res.json();
        setError(message || 'Fejl med login.');
        return;
      }

      router.push('/dashboard');
    } catch (err) {
      setError('Fejl med login.');
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='loginbox'>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button className='btn-primary btnCancel' type="submit">Login</button>
              {error && <p>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
