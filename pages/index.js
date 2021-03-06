import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elon Task</title>
        <meta name="Elon Task" content="Elon Musk's space endeavors." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <a href='https://twitter.com/elonmusk' target="_blank" rel='noreferrer'>
          <img src="/favicon.png" className={styles.elonLogo} />
        </a>
        <h1 className={styles.title}>
          Welcome to <a href="https://en.wikipedia.org/wiki/Elon_Musk" target="_blank" rel='noreferrer'>Elon</a> Task
        </h1>
        <p className={styles.code}>{`A guide to Elon Musk's space exploration mission.`}</p>

        {/* Grid of 4 Cards */}
        <div className={styles.grid}>

          {/* SpaceX Card */}
          <Link href="/spacex">
            <div className={styles.spaceXCard}>
                <h2>SpaceX &rarr;</h2>
                <p>Find out about SpaceX</p>
              </div>
          </Link>

          {/* Starman Card */}
          <Link href="/starman">
            <div className={styles.card}>
              <h2>{`Where's Starman?`}</h2>
              <p>{`Locate Elon Musk's Roadster`}</p>
            </div>
          </Link>
          <img src='/wally.png' className={styles.wally}/>

          {/* History Card */}
          <Link href="/history">
            <div className={styles.historyCard}>
              <h2>History</h2>
              <p>
                No, not your browser history
              </p>
            </div>
          </Link>

          {/* Crew Card */}
          <Link href="/crew">
            <div className={styles.card}>
              <h2>{`SpaceX's Crew`} &rarr;</h2>
              <p className={styles.hoverText}>3..2..1..</p>
              <p className={styles.hiddenText}>Lift Off!</p>
            </div>
          </Link>

        </div>
      </main>
    </div>
  )
}
