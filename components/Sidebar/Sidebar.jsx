import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { SIDEBAR_MENUS_TOP, SIDEBAR_MENUS_BOTTOM } from '../../constants';
import styles from './style.module.css';
import User from '../../assets/images/user.png';

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.sidebarContainer}>
      <div>
        <h2 className={styles.title}>Investly.</h2>
      </div>
      <div className={styles.menuWrapper}>
        <div className={styles.menuContainer}>
          {SIDEBAR_MENUS_TOP.map((menu) => (
            <Link href={menu.link} key={menu.id} passHref>
              <div className={pathname === menu.link ? styles.active : ''}>
                <Image
                  src={menu.image.src}
                  width='20px'
                  height='20px'
                  alt={menu.label}
                />
                <span>{menu.label}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.menuContainer}>
          {SIDEBAR_MENUS_BOTTOM.map((menu) => (
            <Link href={menu.link} key={menu.id} passHref>
              <div>
                <Image
                  src={menu.image}
                  width='20px'
                  height='20px'
                  alt={menu.label}
                />
                <span>{menu.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.userDetailsContainer}>
          <Image src={User.src} width='32px' height='32px' alt='user' />
          <div>
            <p className={styles.userName}>Louise Thompson</p>
            <p className={styles.userRole}>Enterprise plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
