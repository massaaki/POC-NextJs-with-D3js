import { ScaleBand, ScaleLinear } from 'd3';
import { IDataType } from '../../hook/useData';

import styles from './styles.module.scss';

type MarksProps = {
	data: Array<IDataType>;
	xScale: ScaleLinear<number, number, never>;
	yScale: IDataType[] & ScaleBand<string>;
}

const Marks = ({ data, xScale, yScale }: MarksProps) => {
	return (
		<>
			{data.map((d, index) => <rect className={styles.mark} key={index} x={0} y={yScale(d['Country'])} width={xScale(d.Population)} height={yScale.bandwidth()} />)}
		</>
	)
}

export { Marks };