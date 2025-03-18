import React from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Header from "@site/src/components/Header";
import Layout from '@theme/Layout';
import Publications from "@site/src/components/Publications";
import TechBox from "@site/src/components/TechBox";
import ZoteroLightLogo from '@site/static/img/zotero_logo_light.png';
import ZoteroDarkLogo from '@site/static/img/zotero_logo_dark.png';
import useBaseUrl from '@docusaurus/useBaseUrl';

const items = [
  {
    lightIcon: ZoteroLightLogo,
    darkIcon: ZoteroDarkLogo,
    alt: 'Zotero',
  },
];


export default function PublicationsPage() {
    const {
        siteConfig: {customFields},
      } = useDocusaurusContext();
  const contributeUrl = useBaseUrl('/contribute');

  return (
    <Layout title="Publications" description="Ciroh pubs">
    
      <div className="margin-top--lg">
        <Header 
            title="Publications" 
            tagline="Ex­plore a rich selection of pub­lic­a­tions and papers featuring CIROH and NOAA's collaborative research in hydrology. Discover insights on water management, forecasting, and climate impacts through this comprehensive resource for scholars and professionals." 
            buttons={[
                { label: "Add your Publication", href: contributeUrl, primary: true },
                { label: "Visit Our Library", href: "https://www.zotero.org/groups/5261687/ciroh/library" }
              ]}
        />
      </div>

      <main>
        
       <Publications 
          apiKey={customFields.zotero_api_key}
          groupId={customFields.zotero_group_id}
       />
       <TechBox items={items} type={"Publications"}  />
      </main>
    
    </Layout>
  );
}

