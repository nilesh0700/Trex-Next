export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  // Custom CORS middleware to handle preflight requests
  {
    name: 'global::cors',
    config: {},
    async resolve() {
      return async (ctx, next) => {
        const allowedOrigins = [

          'http://localhost:3000',
          'http://localhost:1337',
          'https://trex-next.vercel.app',
          'https://trex-next-new.vercel.app',
          'https://graceful-chocolate-74cf3f5835.strapiapp.com',
          '*',
          process.env.FRONTEND_URL
        ].filter(Boolean);

        const origin = ctx.headers.origin;
        
        // Set CORS headers
        if (allowedOrigins.includes(origin) || !origin) {
          ctx.set('Access-Control-Allow-Origin', origin || '*');
        }
        
        ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
        ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
        ctx.set('Access-Control-Allow-Credentials', 'false');
        ctx.set('Access-Control-Max-Age', '86400');

        // Handle preflight requests
        if (ctx.method === 'OPTIONS') {
          ctx.status = 200;
          ctx.body = '';
          return;
        }

        await next();
      };
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
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
