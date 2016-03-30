// App Settings
export const REDIS_URL = process.env.REDIS_URL || 'localhost';
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/microsb';

export const TOKEN_SECRET = process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET';
export const SESSION_SECRET = process.env.SESSION_SECRET || 'YOUR_UNIQUE_SESSION_SECRET';

// OAuth 2.0
export const GITHUB_SECRET = process.env.GITHUB_SECRET || 'ea14fa60b3992d1c22d7b23f3b36892f0632d068';
