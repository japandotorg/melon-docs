import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { BiLinkAlt } from "@react-icons/all-files/bi/BiLinkAlt";
import { Col } from "react-bootstrap";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            DOCS
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation site for Melon">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <Col md={12} className="home-about-social">
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://discord.gg/AyMrA7KMSp"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaDiscord />
            </a>
          </li>
          <li className="social-icons">
            <a 
              href="https://github.com/japandotorg"
              target="blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaGithub />
            </a>
          </li>
          <li className="social-icons">
            <a 
              href="https://japandotorg.me"
              target="blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <BiLinkAlt />
            </a>
          </li>
        </ul>
      </Col>
    </Layout>
  );
}