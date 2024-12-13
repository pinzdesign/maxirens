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
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h2>Dashboard</h2>
          </div>
          <div className='col-lg-6'>
            <LogoutButton />
          </div>
        </div>
      </div>
      <PriceEditor />
    </>
  );
}
