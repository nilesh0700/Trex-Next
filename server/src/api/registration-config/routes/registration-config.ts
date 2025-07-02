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
    {
      method: 'OPTIONS',
      path: '/registration-config',
      handler: (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
        ctx.status = 200;
        ctx.body = '';
      },
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
}; 