import Image from 'next/image';

import Bell from '../../assets/images/icons/bell.svg';
import Search from '../../assets/images/icons/search.svg';
import styles from './style.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h2>Your dashboard</h2>
      <div className={styles.notificationContainer}>
        <div>
          <Image src={Bell.src} height='12px' width='12px' alt='Notification' />
        </div>
        <div>
          <Image src={Search.src} height='12px' width='12px' alt='Search' />
        </div>
      </div>
    </div>
  );
};

export default Header;
