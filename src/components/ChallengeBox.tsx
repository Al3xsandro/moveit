import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountDown } = useContext(CountdownContext);
    
    function handleChallengeSuceeded() {
        completeChallenge();
        resetCountDown();
    }
    
    function handleChallengeFalid() {
        resetCountDown();
    }

    return (
        <div className={styles.ChallengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" onClick={handleChallengeFalid} className={styles.challengeFailedButton}>Falhei</button>
                        <button type="button" onClick={handleChallengeSuceeded} className={styles.challengeSucceededButton}>Completei</button>
                    </footer>
                </div>
            ):(
                    <div className={styles.ChallengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level completando desafios.
                        </p>
                    </div>
                )
            }
        </div>
    )
}