import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./layout.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <Slot />
    </div>
  );
});
