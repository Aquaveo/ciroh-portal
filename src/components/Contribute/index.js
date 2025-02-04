import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css';
import { contributeAppCards } from './utils';

export default function Contribute({ title, description }) {
  const { colorMode } = useColorMode();
  const [card1, card2, card3] = contributeAppCards;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.description}>{description}</h3>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img
              src={colorMode === 'dark' ? card1.imgSrcDark : card1.imgSrcLight}
              alt={card1.imgAlt}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>{card1.cardTitle}</h4>
              <p className={styles.cardDescription}>{card1.cardDescription}</p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src={colorMode === 'dark' ? card2.imgSrcDark : card2.imgSrcLight}
              alt={card2.imgAlt}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>{card2.cardTitle}</h4>
              <p className={styles.cardDescription}>{card2.cardDescription}</p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src={colorMode === 'dark' ? card3.imgSrcDark : card3.imgSrcLight}
              alt={card3.imgAlt}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>{card3.cardTitle}</h4>
              <p className={styles.cardDescription}>{card3.cardDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
