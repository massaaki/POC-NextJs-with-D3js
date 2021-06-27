import { useEffect, useState } from 'react';
import axios from 'axios';

//http://localhost:3000/data-sample/css-name-colors.csv
//https://gist.githubusercontent.com/massaaki/370cb336f448ac480f84b92bf524cd5a/raw/cssNameColors.csv


const CSSNameColorsSample = (): JSX.Element => {
	const [loading, setLoading] = useState(true);
	const [csvData, setCsvData] = useState('');

	const fetchData = async () => {
		const csvUrl = 'https://gist.githubusercontent.com/massaaki/370cb336f448ac480f84b92bf524cd5a/raw/cssNameColors.csv';
		const response = await axios.get(csvUrl);
		console.log(response.data);
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
				{csvData}
			</p>
		</>
	)
}

export { CSSNameColorsSample };