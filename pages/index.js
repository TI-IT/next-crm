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
        <h2>Room</h2>
      </Link>
      <Link href="https://www.youtube.com/watch?v=sqAkJf40Afo&list=PL0FGkDGJQjJEwzHLU7-sFyS46VVwlqK-0">
        <h2>Lesson YouTube</h2>
      </Link>
      <WelcomeStep />
      <style jsx>{`
        h2 {
          background: #d99554;
        }
      `}</style>
    </div>
  );
}
