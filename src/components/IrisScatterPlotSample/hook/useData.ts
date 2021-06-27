import { useEffect, useState } from "react";
import { DSVRowArray, csv } from 'd3';


export interface IDataType {
	sepal_length: string;
	sepal_width: string;
	petal_length: string;
	petal_width: string;
	species: string
}

const useData = () => {
	const [data, setdata] = useState<Array<IDataType>>();
	const csvUrl = 'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/iris.csv';
	useEffect(() => {
		const row = (d) => {
			d.sepal_length = +d.sepal_length;
			d.sepal_width = +d.sepal_width;
			d.petal_length = +d.petal_length;
			d.petal_width = +d.petal_width;
			return d;
		}
		csv(csvUrl, row).then(data => {
			setdata(data);
		});
	}, []);
	return data;
}

export { useData };