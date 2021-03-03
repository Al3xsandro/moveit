import styles from '../styles/components/SideBar.module.css';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useState } from 'react';

export function SideBar() {
    return (
        <div className={styles.SideBarContainer}>
            <div>
                <a href="/home"><HomeIcon style={{ width: '90px', height: '55px', margin: '10px'}}/></a>
                <a><EqualizerIcon style={{ width: '90px', height: '55px', margin: '10px'}}/></a>
                <a href="/"><ExitToAppIcon style={{ width: '90px', height: '55px', margin: '10px'}}/></a>
            </div>
        </div>
    )
}