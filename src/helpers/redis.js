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
    client.get(config.keyRedis, (err, result) => {
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
  setExp: (result, err) => {
    if (err) {
      throw err;
    } else {
      client.setex(config.keyRedis, 3600, result);
    }
  },
  delRedis: () => {
    client.del(config.keyRedis);
  },
};
