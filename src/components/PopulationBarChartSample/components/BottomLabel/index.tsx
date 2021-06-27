import styles from './styles.module.scss';

type BottomLabelProps = {
	innerWidth: number;
	innerHeight: number
}

const BottomLabel = ({ innerWidth, innerHeight }: BottomLabelProps) => <text className={styles.axisLabel} x={innerWidth / 2} y={innerHeight + 50} textAnchor='middle' >Population</text>

export { BottomLabel };