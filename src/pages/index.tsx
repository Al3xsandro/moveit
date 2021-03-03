import { useState } from 'react';
import styles from '../styles/pages/auth.module.css';

export default function login() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    function handleClick() {
        localStorage.setItem('name', value)
    }

    return (
        <div className={styles.container}>
            <header>
                <img src="/logo-full.svg" alt=""/>
                <p>Seja bem vindo!, digite seu usuario do github para começar.</p>
                <form>
                    <input placeholder="Digite seu usuario do github" onChange={handleChange} />
                    <a href="/home" onClick={handleClick}>Entrar</a>
                </form>
            </header>
            <div>
                <h1>Moveit 2.0</h1>
                <br/>
                <p style={{fontSize: '13px'}}>Seja bem vindo a moveit, <br/>Não acha que está na hora de cuidar dessa saúde ai meu consagrado?</p>
                <br/>
                <h2>Conheça nossa plataforma!</h2>
                <br/>
                <img src="https://cdn.discordapp.com/attachments/808477215125274624/816065115564539904/Screenshot_from_2021-03-01_18-48-16.png" alt="" />
            </div>
        </div>
    )
}