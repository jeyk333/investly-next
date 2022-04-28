import Image from 'next/image';

import styles from './style.module.css';
import Location from '../../assets/images/icons/location.svg';
import Bedroom from '../../assets/images/icons/bedroom.svg';
import Villa from '../../assets/images/icons/available-units.svg';

const FavouriteCard = ({
  image,
  title,
  description,
  place,
  villa,
  bedroom,
}) => {
  return (
    <div className={styles.favouriteCardContainer}>
      <Image src={image.src} height='157px' width='312px' alt={title} />
      <p className={styles.favouriteTitle}>{title}</p>
      <p className={styles.favouriteDesc}>{description}</p>
      <div className={styles.favouritePlaceDetails}>
        <div className={styles.favouritePlaceDetailsContainer}>
          <Image src={Location.src} height='14px' width='14px' alt='Location' />
          <p>{place}</p>
        </div>
        <div className={styles.favouritePlaceDetailsContainer}>
          <Image src={Bedroom.src} height='14px' width='14px' alt='Bedroom' />
          <p>{bedroom} bedroom</p>
        </div>
        {villa && (
          <div className={styles.favouritePlaceDetailsContainer}>
            <Image src={Villa.src} height='14px' width='14px' alt='villa' />
            <p>Villa</p>
          </div>
        )}
      </div>
      <button className={styles.viewButton}>View listing detail</button>
    </div>
  );
};

export default FavouriteCard;
