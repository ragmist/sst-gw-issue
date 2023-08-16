import { App } from "sst/constructs";

// Client Stacks
import { Api } from "./Api";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs18.x",
    nodejs: { format: "esm" },
    timeout: 30,
  });

  app.stack(Api);
}
