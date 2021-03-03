import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() { 
    const { level } = useContext(ChallengesContext);
    const [name, setName] = useState('')

    useEffect(() => {
        setName(localStorage.getItem('name'))
    }, [])

    const userImage = `https://github.com/${name}.png`

    return (
        <div className={styles.profileContainer}>
            <img src={userImage} alt="profile"/>
            <div>
                <strong>{name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}