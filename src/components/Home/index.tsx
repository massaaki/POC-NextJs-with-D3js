import { CSSNameColorsSample } from '../CSSNameColorsSample';

import styles from './styles.module.scss';

const HomePage = (): JSX.Element => {
	return (
		<div id={styles.home}>
			<h1>
				POC - D3 With Next
			</h1>
			<CSSNameColorsSample />
		</div>
	)
}

export { HomePage };