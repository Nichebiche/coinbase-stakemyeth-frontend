
import { Outlet } from 'react-router-dom';
import styles from "../styles/Layout.module.scss";
import NavBar from '../components/NavBar';
import { coinbaseBadge } from '../assets';
import Modes from '../components/Modes';
import { useGlobal } from '../contexts/global.context';
import Sanctioned from '../components/Sanctioned';

export default function RootLayout() {
    const { isSanctioned } = useGlobal();

    return (
        <div className={styles.main}>
            {/* NAVBAR */}
            <NavBar />
            {/* PAGE */}
            <main className={styles.outlet}>
                {isSanctioned &&
                    <Sanctioned />}
                <Modes />
                <Outlet />
            </main>
            {/* FOOTER */}
            <div className={styles.footer}>
                <a href="https://docs.cdp.coinbase.com/staking/docs/welcome" target="_blank" rel="noopener noreferrer">
                    <img src={coinbaseBadge} alt="Coinbase" />
                </a>
            </div>
        </div>
    )
}