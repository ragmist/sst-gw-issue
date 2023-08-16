import { StackContext, ApiGatewayV1Api } from "sst/constructs";

export function Api({ stack }: StackContext) {
  const api = new ApiGatewayV1Api(stack, `v1-gateway`, {
    routes: {
      "POST /": "packages/functions/src/POST/handler.main",
    },
  });

  return api;
}
