import React from "react";

export default function Signin() {
  return (
    <div>
      <main className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />

          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="password"
            required
          />

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
