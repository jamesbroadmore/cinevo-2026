import { _ as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as HardDrive, B as ArrowRight, M as FolderOpen, b as Monitor, d as Shield, h as Server, l as Smartphone, v as Play } from "../_libs/lucide-react.mjs";
import { n as Logo } from "./router-Bpuhefzb.mjs";
import { t as InstallerCards } from "./installers-CL90IN_J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DhlBiNz7.js
var import_jsx_runtime = require_jsx_runtime();
var PLATFORMS = [
	{
		icon: Monitor,
		label: "Web",
		detail: "Works in any modern browser — start here.",
		action: "Open CINEVO",
		to: "/app"
	},
	{
		icon: HardDrive,
		label: "CINEVO Node",
		detail: "Pair the computer that holds your files.",
		action: "Pair Node",
		to: "/node"
	},
	{
		icon: Smartphone,
		label: "Phone & TV",
		detail: "Same app, packaged for Android and Android TV.",
		action: "See Node first",
		to: "/node"
	}
];
function PlatformDownloads() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "platform-downloads",
		"aria-label": "CINEVO platforms",
		children: PLATFORMS.map(({ icon: Icon, label, detail, action, to }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "platform-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 20,
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: detail })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					children: [
						action,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })
					]
				})
			]
		}, label))
	});
}
var STEPS = [
	{
		n: "1",
		t: "Add a source",
		d: "Pick a folder on this computer, sign in with Plex, or pair CINEVO Node for Jellyfin."
	},
	{
		n: "2",
		t: "Choose what to show",
		d: "Select only the movie and series libraries you want indexed. Nothing else is scanned."
	},
	{
		n: "3",
		t: "Press play",
		d: "Watch here in the browser. Your files stay on your machines — CINEVO never hosts them."
	}
];
var FEATURES = [
	{
		t: "Your files stay yours",
		d: "Folders, Plex, or Jellyfin. Media never uploads to CINEVO. We index names so you can browse."
	},
	{
		t: "Share on purpose",
		d: "Invite a friend with a name, a library, and an expiry. Revoke it any time."
	},
	{
		t: "Ask only your library",
		d: "Optional AI suggestions use titles already in this house. Nothing leaves unless you opt in."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "public-home",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "public-nav",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "public-brand",
						"aria-label": "CINEVO home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "md" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Homepage",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#how",
								children: "How it works"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#features",
								children: "Features"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/node",
								children: "Node"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "public-nav__actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "public-nav__login",
							children: "Log in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app",
							className: "public-nav__enter",
							children: ["Open library ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "public-hero",
					"aria-labelledby": "public-hero-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/stills/hero-theater.jpg",
							alt: "",
							className: "public-hero__still"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "public-hero__veil" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "public-hero__content",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "public-kicker",
									children: "Private cinema"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									id: "public-hero-title",
									children: [
										"Your movies.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "On your terms." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "CINEVO plays the films you already own — from Plex, Jellyfin, or a folder on this computer. No ads, no catalogue, no subscription." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "public-hero__actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/app",
										className: "public-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
											size: 15,
											fill: "currentColor"
										}), " Open your library"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#how",
										className: "public-secondary",
										children: "See how it works"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "public-hero__points",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { size: 16 }), " Folder on this computer"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { size: 16 }), " Plex or Jellyfin"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { size: 16 }), " Nothing uploaded"] })
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "home-reel",
					id: "how",
					"aria-labelledby": "home-how-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "public-kicker",
						children: "Three steps"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "home-how-title",
						children: "From empty to playing in minutes."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your library stays empty until you add a source. CINEVO never fills it with samples." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "home-library-steps",
						children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.n }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.t }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.d })
						] }, step.n))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "home-highlights",
					id: "features",
					"aria-labelledby": "home-features-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "public-kicker",
						children: "Built for owners"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "home-features-title",
						children: "Clear controls. No dark patterns."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "home-highlights__grid",
						children: FEATURES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "home-highlight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.d })]
						}, item.t))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "home-platforms",
					id: "platforms",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "public-kicker",
							children: "Watch anywhere"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "One library. Browser, phone, or TV." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Start in the browser now. Pair Node when your files live on another computer." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatformDownloads, {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "home-downloads",
					id: "downloads",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "public-kicker",
							children: "CINEVO Node"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Files on another computer? Pair Node." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Install Node on the machine that holds the files. Pair once with a short code. Jellyfin and disk paths stay on that computer." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallerCards, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/node",
							className: "public-text-link",
							children: ["Open pairing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "home-closing",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "public-kicker",
						children: "Ready when you are"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Add a library.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Press play." })
					] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No catalogue to browse. No account required to start on this device." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app",
						className: "public-primary",
						children: ["Open your library ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
					})] })]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "public-footer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "public-brand",
						"aria-label": "CINEVO home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "sm" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your movies. On your terms." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "public-footer__links",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								children: "Log in"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/signup",
								children: "Create account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/node",
								children: "Node"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
