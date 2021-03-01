import { useContext } from 'react';
import styles from '../styles/components/CountDown.module.css';
import { CountdownContext } from '../contexts/CountdownContext';

export function CountDown() {
    const { 
        minutes, 
        seconds,
        isActive,
        startCountDown,
        resetCountDown,
        hasFinished
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button disabled className={styles.CountdownButton}>Ciclo encerrado ✅</button>
            ) : (
                <>
                { isActive ? (
                    <button type="button" onClick={resetCountDown} className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}>Abandonar ciclo ❌</button>
                    ) : (
                        <button type="button" onClick={startCountDown} className={styles.CountdownButton}>Iniciar ciclo</button>
                    ) }
                </>
            )}
        </div>
    );
}