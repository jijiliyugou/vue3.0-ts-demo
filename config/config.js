const devEnv = {
  NODE_ENV: "development",
  hosturl: "http://139.9.71.135:8080"
};
const testEnv = {
  NODE_ENV: "test",
  hosturl: "http://139.9.71.135:8080"
};
const proEnv = {
  NODE_ENV: "production",
  hosturl: "http://139.9.71.135:8080"
};
module.exports = {
  devEnv,
  testEnv,
  proEnv
};
