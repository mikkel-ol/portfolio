import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./header.scss?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <nav>
      <div>Logo</div>
      <div class="links">
        <a href="/resume" class="resume-button">
          Resume
        </a>
      </div>
    </nav>
  );
});
