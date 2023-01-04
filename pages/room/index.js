import Link from 'next/link';
import Head from 'next/head';

function Room() {
  return (
    <>
      <Head>
        <title>Room</title>
      </Head>
      <h1>Room</h1>
      <Link href="/">
        <h1>Открыть Home</h1>
      </Link>

      <style jsx>{`
        h1 {
          color: blue;
        }
      `}</style>
    </>
  );
}

export default Room;
