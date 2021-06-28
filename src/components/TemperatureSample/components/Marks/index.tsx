import { ScaleBand, ScaleLinear, format } from 'd3';
import { IDataType } from '../../hook/useData';

import styles from './styles.module.scss';

type MarksProps = {
	data: Array<IDataType>;
	xScale: ScaleLinear<number, number, never>;
	yScale: ScaleLinear<number, number, never>;
	xValue: (d: any) => any;
	yValue: (d: any) => any;
}

const Marks = ({ data, xScale, yScale, xValue, yValue }: MarksProps) => {
	return (
		<>
			{data.map((d, index) =>
				<circle
					className={styles.mark}
					key={index}
					cx={xScale(xValue(d))}
					cy={yScale(yValue(d))}
					r={10}
				>
					<title>{format('.2s')(xValue(d))}</title>
				</circle>
			)}
		</>
	)
}

export { Marks };