import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { authClient } from "@/lib/auth/client";
import { Logo } from "./logo";

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (event.nativeEvent instanceof KeyboardEvent && (event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229))
      return;
    setError("");
    setIsSubmitting(true);
    const result =
      mode === "signup"
        ? await authClient.signUp.email({ name: username.trim(), email: email.trim(), password })
        : await authClient.signIn.email({ email: email.trim(), password });
    setIsSubmitting(false);
    if (result.error) {
      setError("Check your details and try again.");
      return;
    }
    await navigate({ to: "/app" });
  }

  return (
    <main className="auth-page">
      <div className="auth-backdrop" />
      <section className="auth-card" aria-labelledby="auth-title">
        <Link to="/" className="auth-card__brand" aria-label="CINEVO home">
          <Logo size="md" />
        </Link>
        <h1 id="auth-title">{mode === "signup" ? "Create your account" : "Log in"}</h1>
        <p>
          {mode === "signup"
            ? "Save connected servers, watch history, and sharing across devices."
            : "Pick up your libraries and watch history on this device."}
        </p>
        <form className="auth-form" onSubmit={submit}>
          {mode === "signup" ? (
            <label>
              <span>Name</span>
              <span className="auth-field">
                <input
                  required
                  autoComplete="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </span>
            </label>
          ) : null}
          <label>
            <span>Email</span>
            <span className="auth-field">
              <input
                required
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </span>
          </label>
          <label>
            <span>Password</span>
            <span className="auth-field">
              <input
                required
                minLength={8}
                type="password"
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </span>
          </label>
          {error ? (
            <p className="auth-error" role="alert">
              {error}
            </p>
          ) : null}
          <button className="cinevo-action cinevo-action--primary auth-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Please wait…" : mode === "signup" ? "Create account" : "Log in"}
          </button>
        </form>
        <p className="auth-switch">
          {mode === "signup" ? "Already have an account? " : "New here? "}
          <Link to={mode === "signup" ? "/login" : "/signup"}>{mode === "signup" ? "Log in" : "Create an account"}</Link>
        </p>
        <p className="auth-switch">
          <Link to="/app">Skip — open library on this device</Link>
        </p>
      </section>
    </main>
  );
}
