/* eslint-disable require-jsdoc */
const redis = require('redis');
const config = require('../configs/configs');
const client = redis.createClient(config.portRedis, config.hostRedis);

client.on('error', (err) => {
  console.log(err);
});

client.on('connect', () => {
  console.log('Redis connection successfull');
});

module.exports = {
  cache: (req, res, next) => {
    const redisKey = req.originalUrl;

    client.get(redisKey.toString(), (err, result) => {
      if (err) {
        throw err;
      }
      if (result != null) {
        console.log('Redis result : ');
        res.json({
          message: 'Redis Result',
          result: JSON.parse(result),
        });
      } else {
        next();
      }
    });
  },
  setExp: (key, result, err) => {
    if (err) {
      throw err;
    } else {
      client.setex(key, 20, result);
    }
  },
  delRedis: () => {
    client.flushall();
  },
};
