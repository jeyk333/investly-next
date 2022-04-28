import { VictoryPie } from 'victory';
import Image from 'next/image';

import styles from './style.module.css';
import { STATUS_COLOR, STATUS_ARROW } from '../../constants';

const StatisticsCard = ({ label, value, percent, status }) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.cardContentContainer}>
        <p className={styles.cardLabel}>{label}</p>
        <p className={styles.cardValue}>{value}</p>
      </div>
      <div className={styles.cardChartContainer}>
        <div className={styles.chartArrow}>
          <Image
            src={STATUS_ARROW[status]}
            height='20px'
            width='20px'
            alt='level'
          />
        </div>
        <svg viewBox='0 0 400 400' width='50%' height='100%'>
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400}
            height={400}
            data={[
              { x: 1, y: percent },
              { x: 2, y: 100 - percent },
            ]}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: {
                fill: ({ datum }) => {
                  const color = STATUS_COLOR[status]?.color;
                  return datum.x === 1 ? color : STATUS_COLOR[status]?.bgColor;
                },
              },
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default StatisticsCard;
