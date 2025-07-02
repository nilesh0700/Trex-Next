/**
 * registration-config controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::registration-config.registration-config', ({ strapi }) => ({
  async find(ctx) {
    // Set CORS headers explicitly for this endpoint
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
    
    // Call the default find method
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    // Set CORS headers explicitly for this endpoint
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
    
    // Call the default findOne method
    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  }
})); 