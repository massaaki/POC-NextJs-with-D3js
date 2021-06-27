import { scaleLinear, extent } from 'd3';
import { useData } from './hook/useData';

import { AxisBottom } from './components/AxisBottom';
import { AxisLeft } from './components/AxisLeft';
import { Marks } from './components/Marks';
import { BottomLabel } from './components/BottomLabel';
import { LeftLabel } from './components/LeftLabel';

const PopulationBarChartSample = () => {
	const data = useData();

	const xValue = d => d.sepal_length;
	const yValue = d => d.sepal_width;

	const width = 960;
	const height = 500;
	const margin = {
		top: 30,
		right: 30,
		bottom: 60,
		left: 100
	};

	if (!data)
		return <p>Loading...</p>

	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	const xScale = scaleLinear().domain(extent(data, xValue)).range([0, innerWidth]).nice();
	const yScale = scaleLinear().domain(extent(data, yValue)).range([0, innerHeight]);

	return (
		<>
			<h1>Iris Scatter Plot Sample</h1>
			{data && (
				<svg width={width} height={height}>
					<g transform={`translate(${margin.left},${margin.top})`}>
						<AxisBottom xScale={xScale} innerHeight={innerHeight} />
						<AxisLeft yScale={yScale} innerWidth={innerWidth} />
						<BottomLabel innerHeight={innerHeight} innerWidth={innerWidth} />
						<LeftLabel innerHeight={innerHeight} />

						<Marks data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue} />
					</g>
				</svg>
			)}
		</>
	)
}

export default PopulationBarChartSample;