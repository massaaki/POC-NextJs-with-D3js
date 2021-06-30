import dynamic from 'next/dynamic';


const CSSNameColorsSample = dynamic(() => import('../CSSNameColorsSample'), { ssr: false });
const PopulationBarChartSample = dynamic(() => import('../PopulationBarChartSample'), { ssr: false });
const IrisScatterPlotSample = dynamic(() => import('../IrisScatterPlotSample'), { ssr: false });
const TemperatureSample = dynamic(() => import('../TemperatureSample'), { ssr: false });
const BasicLineChart = dynamic(() => import('../BasicLineChart'), { ssr: false });

import styles from './styles.module.scss';

const HomePage = (): JSX.Element => {
	return (
		<div id={styles.home}>
			<h1>
				POC - D3 With Next
			</h1>
			{/* <CSSNameColorsSample />
			<PopulationBarChartSample />
			<IrisScatterPlotSample />
			<TemperatureSample /> */}
			<BasicLineChart top={10} right={50} bottom={50} left={50} width={800} height={400} fill="blue" />
		</div>
	)
}

export { HomePage };