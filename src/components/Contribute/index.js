import React from 'react';
import styles from './styles.module.css';
import AppsTabContributeContent from './AppsContribute';
import DatasetsTabContributeContent from './DatasetsContribute';
import PublicationsTabContributeContent from './PublicationsContribute';
import DocsContribute from './DocsContribute';
import LearningModulesContribute from './LearningModulesContribute';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { IoLayers, IoAppsSharp,IoBookmarks,IoSchool,IoFileTrayFull   } from "react-icons/io5";


export default function Contribute({ title, description }) {
  return (
    <div>
      <div className={styles.wrapper}>
        
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <h2 className={styles.title}>
              {title}
            </h2>
          </div>
          
          <Tabs className={styles.contributeTabs}>
            <TabItem 
              value="apps" 
              label={
                <span className={styles.tabLabel}>
                  <IoAppsSharp  className={styles.tabIcon} /> Apps
                </span>
              }
              default
            >

              <AppsTabContributeContent />
            </TabItem>
              <TabItem 
                value="datasets" 
                label={
                  <span className={styles.tabLabel}>
                    <IoLayers className={styles.tabIcon} /> Datasets
                  </span>
                }
              >
                <DatasetsTabContributeContent
                  description={
                    <div>
                      Create a new <a href="https://www.hydroshare.org/" target="_blank" rel="noopener">HydroShare</a> resource, add the required metadata, while adding the <code>ciroh_portal_data</code> keyword to make it discoverable
                    </div>
                  }
                />
            </TabItem>

            <TabItem 
                value="publications" 
                label={
                  <span className={styles.tabLabel}>
                    <IoBookmarks className={styles.tabIcon} /> Publications
                  </span>
                }
              >
              <PublicationsTabContributeContent/>
                  {/* // description={
                  //   <div>
                  //     Whether it’s a recent paper, thesis, conference presentation, or even a relevant article, your input will enrich this growing hub. Let’s learn from and support one another!
                  //   </div>
                  // } */}
            </TabItem>
            <TabItem 
                value="docs" 
                label={
                  <span className={styles.tabLabel}>
                    <IoFileTrayFull className={styles.tabIcon} /> Docs
                  </span>
                }
              >
              <DocsContribute/>
            </TabItem>

            <TabItem 
                value="learning_modules" 
                label={
                  <span className={styles.tabLabel}>
                    <IoSchool className={styles.tabIcon} /> Learning Modules
                  </span>
                }
              >
                <LearningModulesContribute/>
            </TabItem>
          </Tabs>
          </div>

        </div>
      </div>
    
  );
}
