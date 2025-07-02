/**
 * registration-config router
 */

import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/registration-config',
      handler: 'registration-config.find',
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
}; 