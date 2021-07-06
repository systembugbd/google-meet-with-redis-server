const redis = require('redis');

const client = redis.createClient();

client.on('error', (error) => {
  console.log(`Redis Encountered ${error}`);
});

client.on('connect', (error) => {
  if (!error) console.log('Redis connection established');
  else console.log(error);
});

module.exports = client;
