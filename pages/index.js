import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const checks = Array.from({ length: 50000 }, (_, i) => i + 1);
  return (
    <div className={styles.container}>
      <Head>
        <title>Million Dollar Checks</title>
        <meta name='description' content='Own a piece of internet history!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {checks.map((x, i) => (
          <Image key={i} src='check.svg' alt='Verified' width={4} height={4} />
        ))}
      </main>
    </div>
  );
}
