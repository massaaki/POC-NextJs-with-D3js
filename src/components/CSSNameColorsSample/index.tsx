import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { DSVRowArray } from 'd3';
import * as d3 from 'd3';



//http://localhost:3000/data-sample/css-name-colors.csv
//https://gist.githubusercontent.com/massaaki/370cb336f448ac480f84b92bf524cd5a/raw/cssNameColors.csv



const CSSNameColorsSample = (): JSX.Element => {

	const [loading, setLoading] = useState(true);
	const [csvData, setCsvData] = useState<DSVRowArray<string>>();

	// let d3;

	const fetchData = async () => {
		// await initializeD3();
		// d3 = await import('d3');

		const csvUrl = 'https://gist.githubusercontent.com/massaaki/370cb336f448ac480f84b92bf524cd5a/raw/cssNameColors.csv';
		const response = await axios.get(csvUrl);

		if (response.data) {
			console.log('d3..:', d3.csvParse(response.data));
		}
		setCsvData(response.data);
		setLoading(false);
	}

	useEffect(() => {
		fetchData();
	}, []);

	if (loading)
		return <p>Loading</p>;

	return (
		<>
			<h2>CSSNameColorsSample</h2>
			<p>
				{/* {csvData} */}
			</p>
		</>
	)
}

export default CSSNameColorsSample;