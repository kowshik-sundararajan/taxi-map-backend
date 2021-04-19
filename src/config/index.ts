export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  taxiApiHost: process.env.TAXI_API,
});
