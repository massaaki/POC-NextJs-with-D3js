import { useEffect, useState } from "react";
import { DSVRowArray, csv } from 'd3';


export interface IDataType {
	timestamp: Date;
	temperature: number;
}

const useData = () => {
	const [data, setdata] = useState<Array<IDataType>>();
	const csvUrl = 'https://gist.githubusercontent.com/performautodev/83b3b7ac71b8b983f4cea38a27a6f0c3/raw/week_temperature_sf.csv';
	useEffect(() => {
		const row = (d) => {
			d.temperature = +d.temperature;
			d.timestamp = new Date(d.timestamp);
			return d;
		}
		csv(csvUrl, row).then(data => {
			setdata(data);
		});
	}, []);
	return data;
}

export { useData };