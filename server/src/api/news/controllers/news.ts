/**
 * news controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::news.news', ({ strapi }) => ({
  // Override find method to include proper population
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany('api::news.news', {
      ...query,
      populate: {
        featured_image: true,
        author: {
          populate: {
            avatar: true,
          },
        },
        category: true,
        content_blocks: {
          populate: {
            image: true,
          },
        },
        gallery_images: true,
        related_news: {
          populate: {
            featured_image: true,
          },
        },
      },
    });

    return this.transformResponse(entity);
  },

  // Override findOne method to include proper population
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.entityService.findOne('api::news.news', id, {
      ...query,
      populate: {
        featured_image: true,
        author: {
          populate: {
            avatar: true,
          },
        },
        category: true,
        content_blocks: {
          populate: {
            image: true,
          },
        },
        gallery_images: true,
        related_news: {
          populate: {
            featured_image: true,
            author: true,
            category: true,
          },
        },
      },
    });

    return this.transformResponse(entity);
  },
})); 