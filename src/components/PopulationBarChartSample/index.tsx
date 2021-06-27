import { scaleBand, scaleLinear, max } from 'd3';
import { useData } from './hook/useData';

import { AxisBottom } from './components/AxisBottom';
import { AxisLeft } from './components/AxisLeft';
import { Marks } from './components/Marks';
import { BottomLabel } from './components/BottomLabel';

const PopulationBarChartSample = () => {
	const data = useData();

	const width = 960;
	const height = 500;
	const margin = {
		top: 30,
		right: 30,
		bottom: 60,
		left: 220
	};

	if (!data)
		return <p>Loading...</p>

	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	const yScale = scaleBand().domain(data.map(d => d.Country)).range([0, innerHeight]).paddingInner(0.15);
	const xScale = scaleLinear().domain([0, max(data, d => d.Population)]).range([0, innerWidth]);

	return (
		<>
			<h1>Population bar chart</h1>
			{data && (
				<svg width={width} height={height}>
					<g transform={`translate(${margin.left},${margin.top})`}>
						<AxisBottom xScale={xScale} innerHeight={innerHeight} />
						<AxisLeft yScale={yScale} />
						<BottomLabel innerHeight={innerHeight} innerWidth={innerWidth} />
						<Marks data={data} xScale={xScale} yScale={yScale} />
					</g>
				</svg>
			)}
		</>
	)
}

export default PopulationBarChartSample;