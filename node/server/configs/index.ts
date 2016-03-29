import { normalize, join } from 'path';

// Environment
export const env = process.env.NODE_ENV;

// Root path of server
export const root = normalize(join(__dirname, '../..'));

// Server port
export const port = process.env.PORT || 3000;
