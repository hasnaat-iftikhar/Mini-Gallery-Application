import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Components
import AppButton from "../../basics/button";

// Styles
import styles from './header.module.scss';

const AppHeader = () => {
  const location = useLocation();
  console.log(location)
  return (
    <header className={styles.appHeader}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.logoCol}>
            <div className={styles.logoBox}>
              <Link to="/">
                <img src="/images/logo.png" alt="Show case" className={styles.logo} />
              </Link>
            </div>
          </div>
          <div className={styles.menuCol}>
            <div className={styles.buttonBox}>
              <Link to="/image/upload">
                <AppButton title="Upload" className={location.pathname === '/image/upload' && styles.blackBtn} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default AppHeader;
