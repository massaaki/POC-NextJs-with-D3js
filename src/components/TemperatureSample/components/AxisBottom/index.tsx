import { ScaleLinear, timeFormat } from 'd3';

import styles from './styles.module.scss';

type AxisBottomProps = {
	xScale: ScaleLinear<number, number, never>;
	innerHeight: number;
}

const AxisBottom = ({ xScale, innerHeight }: AxisBottomProps): JSX.Element => {
	return (
		<>
			{
				xScale.ticks().map((tickValue, index) => (
					<g className={styles.tick} key={index} transform={`translate(${xScale(tickValue)}, 0)`} >
						<line x1={0} y1={0} x2={0} y2={innerHeight} />
						<text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + 3}>{timeFormat("%a")(tickValue)}</text>
					</g>
				))
			}
		</>
	)
}

export { AxisBottom };