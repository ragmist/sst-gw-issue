import { ApiHandler } from "sst/node/api";

export const main = ApiHandler(async (_evt) => {
  console.log("Event: " + JSON.stringify(_evt.body));

  return {
    statusCode: 200,
    body: `Hello world. The time is ${new Date().toISOString()}`,
  };
});
