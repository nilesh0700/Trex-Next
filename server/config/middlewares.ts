export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With'],
      origin: [
        'http://localhost:3000',
        'http://localhost:1337',
        'https://trex-next.vercel.app',
        'https://trex-next-new.vercel.app',
        'https://graceful-chocolate-74cf3f5835.strapiapp.com',
        process.env.FRONTEND_URL
      ].filter(Boolean),
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      credentials: false,
      keepHeaderOnError: true,
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
