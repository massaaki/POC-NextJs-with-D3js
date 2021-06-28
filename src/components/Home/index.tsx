import dynamic from 'next/dynamic';


const CSSNameColorsSample = dynamic(() => import('../CSSNameColorsSample'), { ssr: false });
const PopulationBarChartSample = dynamic(() => import('../PopulationBarChartSample'), { ssr: false });
const IrisScatterPlotSample = dynamic(() => import('../IrisScatterPlotSample'), { ssr: false });
const TemperatureSample = dynamic(() => import('../TemperatureSample'), { ssr: false });

import styles from './styles.module.scss';

const HomePage = (): JSX.Element => {
	return (
		<div id={styles.home}>
			<h1>
				POC - D3 With Next
			</h1>
			<CSSNameColorsSample />
			<PopulationBarChartSample />
			<IrisScatterPlotSample />
			<TemperatureSample />
		</div>
	)
}

export { HomePage };