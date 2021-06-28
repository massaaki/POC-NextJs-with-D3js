import styles from './styles.module.scss';

type LeftLabelProps = {
	innerHeight: number
}

const LeftLabel = ({ innerHeight }: LeftLabelProps) => <text className={styles.axisLabel}
	textAnchor='middle'
	transform={`translate( ${-50}, ${innerHeight / 2}) rotate(-90) `} >Time</text>

export { LeftLabel };