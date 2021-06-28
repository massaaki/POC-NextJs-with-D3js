
import { ScaleBand } from 'd3';

import styles from './styles.module.scss';

type AxisLeftProps = {
	yScale: string[] & ScaleBand<string>;
	innerWidth: number;
}

const AxisLeft = ({ yScale, innerWidth }: AxisLeftProps): JSX.Element => {
	return (
		<>
			{yScale.domain().map((tickValue, index) => (
				<g key={index} className={styles.tick} transform={`translate(0,${yScale(tickValue)})`}>
					<line x2={innerWidth} />
					<text style={{ textAnchor: 'end' }} x={-3} dy=".32em" y={yScale(tickValue)}>{tickValue}</text>
				</g>
			))}
		</>
	)
}

export { AxisLeft };