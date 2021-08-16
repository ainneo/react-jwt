import React from "react";

export default function Nav() {
  return (
    <>
      {/* NAV BAR */}

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div>
          <a className="navbar-brand" href="#">
            Fixed navbar
          </a>
        </div>

        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* END NAV BAR */}
    </>
  );
}
