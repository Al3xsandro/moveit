import CompletedChallenges from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import ExperienceBar from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import styles from '../styles/components/Home.module.css';

import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountDownProvider } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengeContext';

export default function Home(props) {
  return (
    <ChallengesProvider 
    level={props.level} 
    currentExperience={props.currentExperience} 
    challengesCompleted={props.challengesCompleted} 
    >
      <div className={styles.container}>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/x-png"/>
          <title>Inicio | moveit</title>
        </Head>

        <ExperienceBar />
        
        <CountDownProvider>
          <section>
              <div>
                <Profile/>
                <CompletedChallenges />
                <CountDown />
              </div>
              <div>
                <ChallengeBox />
              </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}