import { SSTConfig } from "sst";
import Stacks from "./stacks";

export default {
  config(_input) {
    return {
      name: "gw-issue",
      region: "ap-south-1",
    };
  },
  stacks: Stacks,
} satisfies SSTConfig;
