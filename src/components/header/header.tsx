import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./header.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <nav>
      <div>Logo</div>
      <div class="links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" class="resume-button">
          Resume
        </a>
      </div>
    </nav>
  );
});
