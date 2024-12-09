import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LogoutButton from '../components/LogoutButton';

export default async function Dashboard() {
  const cookieStore = cookies();
  const authToken = (await cookieStore).get('auth');

  if (!authToken) {
    redirect('/login'); // Redirect if the auth token is missing
  }

  return (
  <>
    <div>Welcome to your Dashboard</div>
    <LogoutButton></LogoutButton>
  </>)
}