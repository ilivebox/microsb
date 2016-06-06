import { createClient } from "redis";
import * as express from 'express';

const redis = createClient(process.env.REDIS_URL);

export const route = (path) => {
  const router = express();

  router.route(path)
    .get((req, res, next) => {
      redis.incr('counter', (err, counter) => {
        if (err) return next(err);
        res.send(`This page has been viewed ${counter} times!`);
      });
    });

  return router;
};
