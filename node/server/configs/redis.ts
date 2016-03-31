import { createClient } from "redis";

// console.log(process.env.HEROKUREDIS_PORT_6379_TCP_ADDR + ':' + process.env.HEROKUREDIS_PORT_6379_TCP_PORT);

// APPROACH 1: Using environment variables created by Docker
// var client = redis.createClient(
// 	process.env.HEROKUREDIS_PORT_6379_TCP_PORT,
//   	process.env.HEROKUREDIS_PORT_6379_TCP_ADDR
// );

// APPROACH 2: Using host entries created by Docker in /etc/hosts
// var client = redis.createClient('6379', 'herokuRedis');

// APPROACH 3: Using environment, for heroku
export default createClient(process.env.REDIS_URL);
