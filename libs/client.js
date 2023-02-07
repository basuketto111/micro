import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'saigoroof',
    apiKey: process.env.API_KEY,
});