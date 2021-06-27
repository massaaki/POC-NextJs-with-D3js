import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { DSVRowArray } from 'd3';
import * as d3 from 'd3';

//http://localhost:3000/data-sample/css-name-colors.csv
//https://gist.githubusercontent.com/massaaki/370cb336f448ac480f84b92bf524cd5a/raw/cssNameColors.csv


const CSSNameColorsSample = (): JSX.Element => {

	const [loading, setLoading] = useState(true);
	const [data, setdata] = useState<DSVRowArray<string>>();

	const fetchData = async () => {
		const csvUrl = 'https://gist.githubusercontent.com/massaaki/370cb336f448ac480f84b92bf524cd5a/raw/cssNameColors.csv';
		const response = await axios.get(csvUrl);

		const parsedData = d3.csvParse(response.data);

		setdata(parsedData);
		setLoading(false);
	}

	useEffect(() => {
		fetchData();
	}, []);

	if (loading)
		return <p>Loading</p>;

	const width = 960;
	const height = 500;
	const centerX = width / 2;
	const centerY = height / 2;

	const pieArc = d3.arc().innerRadius(0).outerRadius(width) as any;
	const colorPie = d3.pie<void, any>().value(1);

	return <svg width={960} height={500}>
		{/* <g transform={`translate(${centerX}, ${centerY})`}>
			{data && data?.map((d, index) => <path key={index} fill={d['RGB hex value']}
				d={pieArc({
					startAngle: index / data.length * 2 * Math.PI,
					endAngle: (index + 1) / data.length * 2 * Math.PI
				})} />)}
		</g> */}
		<g transform={`translate(${centerX}, ${centerY})`}>
			{data && colorPie(data).map((d, index) => <path key={index} fill={d.data['RGB hex value']}
				d={pieArc(d)} />)}
		</g>
	</svg>

}

export default CSSNameColorsSample;