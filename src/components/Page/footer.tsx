import React from 'react';

import styles from './page.module.css';

type FooterPropsType = { page: number };

const Footer = ({
  page,
}: FooterPropsType) => (
  <div
    className={`${styles.footer} ${page % 2 === 1 && styles.rotate} pageFooter`}
  >
    <span className={`${styles.pageNumber} pageFooterNumber`}>{ page }</span>
  </div>
);

export default Footer;
