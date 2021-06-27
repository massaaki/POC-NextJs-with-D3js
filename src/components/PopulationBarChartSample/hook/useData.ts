import { useEffect, useState } from "react";
import { DSVRowArray, csv } from 'd3';


export interface IDataType {
	'2020': string;
	Population: number;
	Country: string;
}

const useData = () => {
	const [data, setdata] = useState<Array<IDataType>>();
	const csvUrl = 'https://gist.githubusercontent.com/massaaki/58d324931d1e7b3e72512a4ffe69b50f/raw/population.csv';
	useEffect(() => {
		const row = (d) => {
			d.Population = +d['2020'];
			return d;
		}
		csv(csvUrl, row).then(data => {
			setdata(data.slice(0, 10));
		});
	}, []);
	return data;
}

export { useData };