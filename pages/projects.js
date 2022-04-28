import StatisticsCard from '../components/StatisticsCard';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { STATISTICS } from '../constants';
import Search from '../assets/images/icons/search.svg';
import FavouriteCard from '../components/FavouriteCard';
import { FAVOURITES } from '../constants';
import styles from '../styles/Home.module.css';

import Image from 'next/image';

export default function Projects() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />

      <div className={styles.contentContainer}>
        <Header />
        <div className={styles.statContainer}>
          {STATISTICS.map((stat) => (
            <StatisticsCard
              key={stat.id}
              label={stat.label}
              value={stat.value}
              status={stat.status}
              percent={stat.percent}
            />
          ))}
        </div>
        <div>
          <div className={styles.favouritesHeader}>
            <p className={styles.subTitle}>You favourites</p>
            <div className={styles.searchBoxContainer}>
              <input placeholder='Try ‘Miami beachhouse’' />
              <Image src={Search} height='12px' width='12px' alt='search' />
            </div>
          </div>
          <div className={styles.favouriteCardWrapper}>
            {FAVOURITES.map((favourite) => (
              <FavouriteCard
                key={favourite.id}
                image={favourite.image}
                title={favourite.title}
                description={favourite.description}
                bedroom={favourite.bedroom}
                place={favourite.place}
                villa={favourite.villa}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
