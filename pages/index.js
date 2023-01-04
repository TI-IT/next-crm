import Link from 'next/link';
import Head from 'next/head';
import { WelcomeStep } from '../components/steps/WelcomeStep';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Это главная страница</title>
      </Head>
      <Link href="/room">
        <h1>Открыть Room</h1>
      </Link>
      <WelcomeStep />
    </div>
  );
}
