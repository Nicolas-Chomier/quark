import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
	return (
		<main>
			<div className={styles.container}>
				<h1>Welcome to QUARK</h1>
				<h2>Composants disponibles :</h2>
				<div>
					<Link href='/pages/buttons' className={styles.link}>
						Buttons
					</Link>
					<Link href='/pages/iconButtons' className={styles.link}>
						Icon Buttons
					</Link>
					<Link href='/pages/spinners' className={styles.link}>
						Spinners
					</Link>
					<Link href='/pages/inputs' className={styles.link}>
						Inputs
					</Link>
				</div>
			</div>
		</main>
	);
}

