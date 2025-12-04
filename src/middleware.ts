import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);

  // If user goes to "/", internally serve "/en"
  if (url.pathname === '/') {
    return context.rewrite('/en');
  }

  if(url.pathname === '/about') {
    return context.rewrite('en/about')
  }

  return next();
};
