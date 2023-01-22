import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./lang-select.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return <div class="container"></div>;
});
