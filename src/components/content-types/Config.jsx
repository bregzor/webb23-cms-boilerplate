import React, { createContext, useContext, useEffect, useState } from 'react';
import { getStoryblokApi } from '@storyblok/react';

const ConfigContext = createContext();

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({ children }) => {
  const [configData, setConfigData] = useState(null);
  const storyblokApi = getStoryblokApi();

  useEffect(() => {
    if (storyblokApi) {
      storyblokApi.get('cdn/stories/config', {
        version: 'draft', // or 'published'
      })
        .then(response => {
          const configContent = response.data.story.content;
          const headerContent = configContent.header[0];
          const navLinks = headerContent.navLinks.map((link, index) => ({
            _uid: `${index}`,
            url: link,
            name: link.charAt(0).toUpperCase() + link.slice(1),
          }));
          setConfigData({
            ...headerContent,
            navLinks,
          });
        })
        .catch(error => {
          console.error('Error fetching config data:', error);
        });
    } else {
      console.error('storyblokApi is not initialized');
    }
  }, []);

  return (
    <ConfigContext.Provider value={configData}>
      {children}
    </ConfigContext.Provider>
  );
};