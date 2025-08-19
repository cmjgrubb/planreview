import { App } from "sst/constructs";
import { SvelteKitSite } from "sst/constructs";

export default function main(app: App) {
  app.stack(function Site({ stack }) {
    const site = new SvelteKitSite(stack, "site");
    stack.addOutputs({
      url: site.url,
    });
  });
}
