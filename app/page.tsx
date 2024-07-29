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
					<Link href='/pages/flex' className={styles.link}>
						Flex
					</Link>
					<Link href='/pages/dialog' className={styles.link}>
						Dialog
					</Link>
					<Link href='/pages/typography' className={styles.link}>
						Typography
					</Link>
					<Link href='/pages/checkbox' className={styles.link}>
						Checkbox
					</Link>
					<Link href='/pages/textArea' className={styles.link}>
						TextArea
					</Link>
					<Link href='/pages/tooltips' className={styles.link}>
						Tooltip
					</Link>
					<Link href='/pages/table' className={styles.link}>
						Table
					</Link>
				</div>
			</div>
		</main>
	);
}

