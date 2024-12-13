'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'GET' });
    router.push('/login'); // Redirect to login page
  };

  return <button className='btn-primary btnCancel float-end' onClick={handleLogout}>Logout</button>;
}