import { o as __toESM } from "../_runtime.mjs";
import { V as require_react, _ as Link, v as useNavigate, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Logo } from "./router-Bpuhefzb.mjs";
import { t as authClient } from "./client-Ci94oKKs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-form-D2gy3MNf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage({ mode }) {
	const navigate = useNavigate();
	const [username, setUsername] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	async function submit(event) {
		event.preventDefault();
		if (event.nativeEvent instanceof KeyboardEvent && (event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229)) return;
		setError("");
		setIsSubmitting(true);
		const result = mode === "signup" ? await authClient.signUp.email({
			name: username.trim(),
			email: email.trim(),
			password
		}) : await authClient.signIn.email({
			email: email.trim(),
			password
		});
		setIsSubmitting(false);
		if (result.error) {
			setError("Check your details and try again.");
			return;
		}
		await navigate({ to: "/app" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "auth-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "auth-backdrop" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "auth-card",
			"aria-labelledby": "auth-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "auth-card__brand",
					"aria-label": "CINEVO home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "md" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					id: "auth-title",
					children: mode === "signup" ? "Create your account" : "Log in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: mode === "signup" ? "Save connected servers, watch history, and sharing across devices." : "Pick up your libraries and watch history on this device." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "auth-form",
					onSubmit: submit,
					children: [
						mode === "signup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "auth-field",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								autoComplete: "username",
								value: username,
								onChange: (event) => setUsername(event.target.value)
							})
						})] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "auth-field",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								autoComplete: "email",
								value: email,
								onChange: (event) => setEmail(event.target.value)
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "auth-field",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								minLength: 8,
								type: "password",
								autoComplete: mode === "signup" ? "new-password" : "current-password",
								value: password,
								onChange: (event) => setPassword(event.target.value)
							})
						})] }),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "auth-error",
							role: "alert",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "cinevo-action cinevo-action--primary auth-submit",
							type: "submit",
							disabled: isSubmitting,
							children: isSubmitting ? "Please wait…" : mode === "signup" ? "Create account" : "Log in"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "auth-switch",
					children: [mode === "signup" ? "Already have an account? " : "New here? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: mode === "signup" ? "/login" : "/signup",
						children: mode === "signup" ? "Log in" : "Create an account"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "auth-switch",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app",
						children: "Skip — open library on this device"
					})
				})
			]
		})]
	});
}
//#endregion
export { AuthPage as t };
