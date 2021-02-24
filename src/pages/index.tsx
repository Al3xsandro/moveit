import CompletedChallenges from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import ExperienceBar from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import styles from '../styles/components/Home.module.css';

import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-png"/>
        <title>Inicio | moveit</title>
      </Head>

      <ExperienceBar />
      <section>
        <div>
          <Profile/>
          <CompletedChallenges />
          <CountDown />
        </div>
        <div></div>
      </section>
    </div>
  )
}