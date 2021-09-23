import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@zuri/zuri-plugin-company-holiday-calendar",
  app: () => System.import("@zuri/zuri-plugin-company-holiday-calendar"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
