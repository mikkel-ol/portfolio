import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./under-construction.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <h1>Soon&trade;</h1>
      <p>I'm building a great site to showcase some of the work I've done</p>
    </div>
  );
});
