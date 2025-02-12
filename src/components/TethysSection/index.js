import React from 'react';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';



function Step({ number, title, children }) {
  return (
    <div className={styles.step}>
      <div className={styles.stepHeader}>
        <div className={styles.stepNumber}>{number}</div>
        <div className={styles.stepTitle}>{title}</div>
      </div>
      <div className={styles.stepContent}>{children}</div>
    </div>
  );
}


/** Main Tethys installation section component */
export default function TethysSection({ title, description }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.description}>{description}</h3>
        </div>
        <div>

          <Step number="0" title="Install Miniconda">
            <CodeBlock language="language-bash" >
                {`$ mkdir -p ~/miniconda3
$ wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
$ bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
$ rm ~/miniconda3/miniconda.sh`}
            </CodeBlock>
          </Step>

          <div className={`${styles.spacer} ${styles.spacer30}`} />

          <Step number=".5" title="Refresh and Init your Terminal">
            <CodeBlock language="language-bash" >
                {`$ source ~/miniconda3/bin/activate
$ conda init --all`}
            </CodeBlock>
          </Step>

          

          <div className={`${styles.spacer} ${styles.spacer30}`} />

          <Step number="1" title="Create an Environment">
            <CodeBlock language="language-bash" >
                {"$ conda create -n tethys -c conda-forge tethys-platform"}
            </CodeBlock>
          </Step>

          <div className={`${styles.spacer} ${styles.spacer30}`} />

          <Step number="2" title="Activate Environment">
            <CodeBlock language="language-bash" >
                {"$ conda activate tethys"}
            </CodeBlock>
          </Step>

          <div className={`${styles.spacer} ${styles.spacer30}`} />

          <Step number="3" title="Start Developing">
            <CodeBlock language="language-bash" >
                {"$ tethys quickstart"}
            </CodeBlock>
          </Step>

          <div className={`${styles.spacer} ${styles.spacer30}`} />

          <Step number="4" title="Write your code">
          <CodeBlock language="python" showLineNumbers>
                {`from tethys_sdk.layouts import MapLayout
from tethys_sdk.routing import controller
from .app import App


@controller(name="home")
class HomeMap(MapLayout):
    app = App
    base_template = f'{App.package}/base.html'
    map_title = 'Dam Inventory'
    map_subtitle = 'Tutorial'
    basemaps = ['OpenStreetMap', 'ESRI']`}
            </CodeBlock>
          </Step>

          <div className={styles.spacer30} />
          <div className={styles.actionButtons}>
            <a href="https://docs.tethysplatform.org/en/stable/installation/production.html">
              <button className={styles.install}>Install Tethys</button>
            </a>
            <a href="https://docs.tethysplatform.org/en/stable/index.html">
              <button className={styles.quick}>
                Quick start
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.quickIcon}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
