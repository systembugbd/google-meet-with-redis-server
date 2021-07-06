const redisClient = require('./config/redis');

exports.saveCallId = (key, value) => new Promise((resolve, reject) => {
  redisClient.SET(key, JSON.stringify(value), 'EX', 86400, (err, res) => {
    if (err) {
      reject(err);
    }
    resolve(res);
  });
});

exports.getCallId = (key) => new Promise((resolve, reject) => {
  redisClient.GET(key, (err, res) => {
    if (err) {
      reject(err);
    }
    resolve(JSON.parse(res));
  });
});
