import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Lets-Do-Wiki/__docusaurus/debug',
    component: ComponentCreator('/Lets-Do-Wiki/__docusaurus/debug', 'b39'),
    exact: true
  },
  {
    path: '/Lets-Do-Wiki/__docusaurus/debug/config',
    component: ComponentCreator('/Lets-Do-Wiki/__docusaurus/debug/config', '291'),
    exact: true
  },
  {
    path: '/Lets-Do-Wiki/__docusaurus/debug/content',
    component: ComponentCreator('/Lets-Do-Wiki/__docusaurus/debug/content', 'a7f'),
    exact: true
  },
  {
    path: '/Lets-Do-Wiki/__docusaurus/debug/globalData',
    component: ComponentCreator('/Lets-Do-Wiki/__docusaurus/debug/globalData', 'e95'),
    exact: true
  },
  {
    path: '/Lets-Do-Wiki/__docusaurus/debug/metadata',
    component: ComponentCreator('/Lets-Do-Wiki/__docusaurus/debug/metadata', '9d6'),
    exact: true
  },
  {
    path: '/Lets-Do-Wiki/__docusaurus/debug/registry',
    component: ComponentCreator('/Lets-Do-Wiki/__docusaurus/debug/registry', '7cd'),
    exact: true
  },
  {
    path: '/Lets-Do-Wiki/__docusaurus/debug/routes',
    component: ComponentCreator('/Lets-Do-Wiki/__docusaurus/debug/routes', '897'),
    exact: true
  },
  {
    path: '/Lets-Do-Wiki/markdown-page',
    component: ComponentCreator('/Lets-Do-Wiki/markdown-page', '1e1'),
    exact: true
  },
  {
    path: '/Lets-Do-Wiki/docs',
    component: ComponentCreator('/Lets-Do-Wiki/docs', '6e8'),
    routes: [
      {
        path: '/Lets-Do-Wiki/docs',
        component: ComponentCreator('/Lets-Do-Wiki/docs', '020'),
        routes: [
          {
            path: '/Lets-Do-Wiki/docs',
            component: ComponentCreator('/Lets-Do-Wiki/docs', 'e1e'),
            routes: [
              {
                path: '/Lets-Do-Wiki/docs/category/dragonflame',
                component: ComponentCreator('/Lets-Do-Wiki/docs/category/dragonflame', '1ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Lets-Do-Wiki/docs/category/tutorial---extras',
                component: ComponentCreator('/Lets-Do-Wiki/docs/category/tutorial---extras', 'f3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Lets-Do-Wiki/docs/dragonflame/congratulations',
                component: ComponentCreator('/Lets-Do-Wiki/docs/dragonflame/congratulations', 'ab6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Lets-Do-Wiki/docs/dragonflame/create-a-blog-post',
                component: ComponentCreator('/Lets-Do-Wiki/docs/dragonflame/create-a-blog-post', '09a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Lets-Do-Wiki/docs/dragonflame/create-a-document',
                component: ComponentCreator('/Lets-Do-Wiki/docs/dragonflame/create-a-document', 'cab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Lets-Do-Wiki/docs/dragonflame/deploy-your-site',
                component: ComponentCreator('/Lets-Do-Wiki/docs/dragonflame/deploy-your-site', '8ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Lets-Do-Wiki/docs/dragonflame/items',
                component: ComponentCreator('/Lets-Do-Wiki/docs/dragonflame/items', '7eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Lets-Do-Wiki/docs/intro',
                component: ComponentCreator('/Lets-Do-Wiki/docs/intro', '80d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Lets-Do-Wiki/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Lets-Do-Wiki/docs/tutorial-extras/manage-docs-versions', 'e4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Lets-Do-Wiki/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Lets-Do-Wiki/docs/tutorial-extras/translate-your-site', '0b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Lets-Do-Wiki/',
    component: ComponentCreator('/Lets-Do-Wiki/', '8b2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
