const { TCPClient } = require('../..');

const resolve = TCPClient();

(async () => {
  const response = await resolve('google.com')
  console.log(response.answers);
})();