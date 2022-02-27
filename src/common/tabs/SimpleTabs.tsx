import { FC, useState } from 'react';
import { styled, Box, Tabs, Tab } from '@mui/material';
const a11yProps = (index: number) => ({
  id: `tab-${index}`,
  'aria-controls': `tab-${index}`,
});

const TabPanel: FC<any> = ({ value, index, children, ...rest }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...rest}
      style={{ flexGrow: 1 }}
    >
      {children}
    </div>
  );
};

const TabsStlyed = styled(Tabs)({
  background: 'white',
  minHeight: '64px',
});

export const SimpleTabs: FC<any> = ({ tabs = [], ...rest }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChangeTab = (e: any, tabIndex: number) => {
    setTabIndex(tabIndex);
  };

  return (
    <Box display="flex" flexDirection="column" height="100%" {...rest}>
      <TabsStlyed
        id="tabs"
        value={tabIndex}
        onChange={handleChangeTab}
        indicatorColor="secondary"
        textColor="primary"
      >
        {tabs.map((tab: any, index: number) => (
          <Tab label={tab.label} {...a11yProps(index)} key={index} />
        ))}
      </TabsStlyed>
      {tabs.map((tab: any, index: number) => (
        <TabPanel value={tabIndex} index={index} key={index}>
          {tab.panel}
        </TabPanel>
      ))}
    </Box>
  );
};
