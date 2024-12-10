import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LogoutButton from '../components/LogoutButton';
import PriceEditor from '../components/PriceEditor';

export default async function Dashboard() {
  const cookieStore = cookies();
  const authToken = (await cookieStore).get('auth');

  if (!authToken) {
    redirect('/login');
  }

  return (
    <>
      <div>Welcome to your Dashboard</div>
      <LogoutButton />
      <PriceEditor />
    </>
  );
}
