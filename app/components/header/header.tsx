import React from 'react';

import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      
        <img 
          src="/val_fit_logo.png" 
          alt="Val Fit" 
          className={styles.logo}/>
      
        <img 
         src="/val_fit_brand_name.png" 
         alt="Val Fit"
         className={styles.brandName}
        />
    </header>
  );
}

export default Header;
