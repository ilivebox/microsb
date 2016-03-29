import { join } from "path";
import redis from "./configs/redis";
import errors from "./components/errors";

export default (app) => {
  // All undefined asset routes should return a 404
  app.route('/:url(components|app)/*')
    .get(errors[404]);

  app.get('/api/counter', (req, res, next) => {
    redis.incr('counter', (err, counter) => {
      if (err) return next(err);
      res.send(`This page has been viewed ${counter} times!`);
    });
  });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => res.sendFile(join(app.get('client'), 'index.html')));
}
