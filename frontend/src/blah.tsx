import React from 'react';
import styles from './Blah.module.css';
import Navbar from './components/Navbar/Navbar';

function TopBanner(props: any) {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2" />
        <img src="./JoelHiltonHeadshot.jpg" alt="Jhilt" />
      </div>

      <div className="col align-self-center text-start">
        <h1 className={styles.h1}>{props.saying}</h1>
        <p className={styles.p}>{props.des}</p>
      </div>
    </>
  );
}

export default TopBanner;
