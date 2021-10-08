import { registerApplication, start } from "single-spa";

// registerApplication({
// 	name: "@single-spa/welcome",
// 	app: () =>
// 		System.import(
// 			"https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
// 		),
// 	activeWhen: ["/"],
// });
registerApplication({
	name: "@single/header",
	app: () => System.import("@single/header"),
	activeWhen: ["/"],
});
registerApplication({
	name: "@single/home",
	app: () => System.import("@single/home"),
	activeWhen: ["/page1"],
});
registerApplication({
	name: "@single/test-page",
	app: () => System.import("@single/test-page"),
	activeWhen: ["/page2"],
});
registerApplication({
	name: "@single/hero",
	app: () => System.import("@single/hero"),
	activeWhen: ["/hero"],
});
// registerApplication({
// 	name: "@trimac-ux/da-nav-app",
// 	app: () => System.import("@trimac-ux/da-nav-app"),
// 	activeWhen: ["/"],
// });

// registerApplication({
//   name: "@single/navbar",
//   app: () => System.import("@single/navbar"),
//   activeWhen: ["/"]
// });

start({
	urlRerouteOnly: true,
});
