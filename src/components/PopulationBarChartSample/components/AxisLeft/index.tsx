
import { ScaleBand } from 'd3';

import styles from './styles.module.scss';

type AxisLeftProps = {
	yScale: string[] & ScaleBand<string>
}

const AxisLeft = ({ yScale }: AxisLeftProps): JSX.Element => {
	return (
		<>
			{yScale.domain().map((tickValue, index) => (
				<g key={index} className={styles.tick}>
					<text style={{ textAnchor: 'end' }} x={-3} dy=".32em" y={yScale(tickValue) + yScale.bandwidth() / 2}>{tickValue}</text>
				</g>
			))}
		</>
	)
}

export { AxisLeft };