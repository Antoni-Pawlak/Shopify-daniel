import Shopify from "@shopify/shopify-api";

/**
 * returns shopify REST Admin API
 * @param shop current user shop URL
 * @param accessToken current user shopify access token
 */
export const createShopifyRESTClient = (shop, accessToken) => {
  return new Shopify.Clients.Rest(shop, accessToken);
};

/**
 * returns shopify GraphQL Admin API
 * @param shop current user shop URL
 * @param accessToken current user shopify access token
 */
export const createShopifyGraphQlClient = (shop, accessToken) => {
  return new Shopify.Clients.Graphql(shop, accessToken);
};

/**
 * returns user's current session token and SHOP URL
 * @param ctx Koa Context which include the request and response objects into a single object
 */
export const currentSession = async (ctx) => {
  return await Shopify.Utils.loadCurrentSession(ctx.req, ctx.res, false);
};
